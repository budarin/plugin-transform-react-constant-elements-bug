const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');

const moderntInclude = require('../utils/moderntInclude');

const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;

const reactModules = {
    'react-dom': true,
    react: true,
    scheduler: true,
};
const isReactModules = (moduleName) => Boolean(reactModules[moduleName]);

const reacRouterModules = {
    'react-router': true,
    'react-router-dom': true,
    'hoist-non-react-statics': true,
    history: true,
    'resolve-pathname': true,
    'tiny-invariant': true,
    'path-to-regexp': true,
    'prop-types': true,
    'react-is': true,
    'mini-create-react-context': true,
};
const isReacRouterModules = (moduleName) => !!reacRouterModules[moduleName];

const cacheDir = path.resolve('node_modules/.cache/client');
const includePaths = [path.resolve('./src/common'), path.resolve('./src/client')];

module.exports = {
    name: 'client',
    mode,
    target: 'web',
    profile: false,
    cache: { type: 'filesystem' },
    devtool: false, //'inline-source-map',
    experiments: {
        topLevelAwait: true,
    },
    entry: {
        client: [path.resolve('./src/client/index.tsx')],
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(`./dist`),
        compareBeforeEmit: true,
        environment: {
            arrowFunction: true,
            bigIntLiteral: true,
            const: true,
            destructuring: true,
            dynamicImport: false,
            forOf: true,
            module: false,
        },
    },
    optimization: {
        minimize: true,
        mergeDuplicateChunks: true,
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                default: false,
                defaultVendors: false,
                // lodash: {
                //     test: (module) => module.context.indexOf('node_modules\\lodash') !== -1,
                //     name: 'lodash',
                //     chunks: 'all',
                //     enforce: true,
                // },
                // sentry: {
                //     test: (module) => module.context.indexOf('node_modules\\@sentry') !== -1,
                //     name: 'sentry',
                //     chunks: 'all',
                //     enforce: true,
                // },
                // highcharts: {
                //     test: (module) => module.context.indexOf('node_modules\\highcharts') !== -1,
                //     name: 'highcharts',
                //     chunks: 'all',
                //     enforce: true,
                // },
                // vendor: {
                //     test: (module) => module.context.indexOf('node_modules') !== -1,
                //     priority: -1,
                //     name: 'vendor',
                //     chunks: 'all',
                //     enforce: true,
                // },
                npms: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // получает имя, то есть node_modules/packageName/not/this/part.js
                        // или node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // console.log('---packageName---:', packageName);

                        if (isReactModules(packageName)) {
                            return 'react';
                        }

                        if (isReacRouterModules(packageName)) {
                            return 'react-router';
                        }

                        if (packageName === 'core-js') {
                            return 'core-js';
                        }

                        return 'npms';

                        // имена npm-пакетов можно, не опасаясь проблем, использовать
                        // в URL, но некоторые серверы не любят символы наподобие @
                        // return `npm.${packageName.replace('@', '')}`;
                    },
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: true,
                    mangle: true,
                    keep_classnames: false,
                    keep_fnames: false,
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules', 'src'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx|json)$/,
                include: moderntInclude(includePaths),
                exclude: [/node_modules/, /kved\.json$/],
                use: 'happypack/loader?id=jsx',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: includePaths,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: '@teamsupercell/typings-for-css-modules-loader',
                        options: {
                            disableLocalsExport: true,
                            verifyOnly: process.env.NODE_ENV === 'production',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:8]',
                            },
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './src/common/assets/',
                },
            ],
        }),
        new HappyPack({
            id: 'jsx',
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        configFile: false,
                        babelrc: false,
                        extends: path.resolve('./config/babel/client.babel.config'),
                        cacheDirectory: path.resolve(cacheDir, 'babel_client_prod'),
                    },
                },
            ],
        }),
        new webpack.WatchIgnorePlugin({ paths: [/css\.d\.ts$/] }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            __PROD__: true,
            __CLIENT__: true,
            __SERVER__: false,
        }),
    ],
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: false,
        },
        static: {
            directory: path.resolve(`./dist`),
            publicPath: '/',
            // watch: true,
        },
        devMiddleware: {
            writeToDisk: true,
        },
        hot: true,
        open: false,
        port: 3000,
        compress: true,
        allowedHosts: 'all',
        historyApiFallback: true,
    },
};
