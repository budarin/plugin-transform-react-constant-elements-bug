const coreJsVer = require('./coreJsVer');
const lazyComponentPlugin = require('./lazyComponentBabelPlugin.js').LAZY_COMPONENT_PLUGIN;

const isTesting = process.env.NODE_ENV === 'test';
const isDev = process.env.NODE_ENV !== 'production';

module.exports = function (api) {
    api.cache.using(() => process.env.NODE_ENV);

    const config = {
        comments: true,
        presets: [
            [
                '@babel/preset-env',
                {
                    loose: true,
                    debug: false,
                    modules: isTesting ? 'commonjs' : false,
                    corejs: {
                        version: coreJsVer,
                        proposals: true,
                    },
                    useBuiltIns: 'usage',
                    bugfixes: true,
                },
            ],
            [
                '@babel/preset-react',
                {
                    useBuiltIns: true,
                    runtime: 'automatic',
                    development: isDev,
                },
            ],
            '@babel/typescript',
        ],
        plugins: [lazyComponentPlugin, 'preval'],
        env: {
            production: {
                plugins: [
                    'babel-plugin-transform-imports',
                    'babel-plugin-react-local',
                    'transform-remove-console',
                    [
                        'strip-function-call',
                        {
                            strip: [
                                // 'useWhyDidYouRender'
                            ],
                        },
                    ],
                ],
                ignore: ['**/*.test.tsx', '**/*.test.ts', '__snapshots__', '__tests__'],
            },
            development: {
                plugins: [],
                ignore: ['**/*.test.tsx', '**/*.test.ts', '__snapshots__', '__tests__'],
            },
            test: {
                ignore: ['__snapshots__'],
            },
        },
    };

    if (process.env.PLUGIN === 'true') {
        config.env.production.plugins.push('@babel/plugin-transform-react-constant-elements');
    }

    return config;
};
