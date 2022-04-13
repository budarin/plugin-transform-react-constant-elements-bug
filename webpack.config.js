const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV;

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
        client: [path.resolve('./src/index.js')],
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
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules', 'src'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx|json)$/,
                include: [path.resolve('./src')],
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: false,
                            babelrc: false,
                            extends: path.resolve('./babel.config'),
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
                    from: './src/assets/',
                },
            ],
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
