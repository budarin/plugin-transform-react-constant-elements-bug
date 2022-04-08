const isDev = process.env.NODE_ENV !== 'production';
const lazyComponentPlugin = require('./lazyComponentBabelPlugin.js').LAZY_COMPONENT_PLUGIN;

module.exports = function (api) {
    api.cache.using(() => process.env.NODE_ENV);

    return {
        comments: true,
        presets: [
            [
                '@babel/preset-env',
                {
                    loose: true,
                    debug: false,
                    modules: false,
                    corejs: {
                        version: '3.21.1',
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
        ],
        plugins: [
            lazyComponentPlugin,
            'babel-plugin-transform-imports',
            'babel-plugin-react-local',
            '@babel/plugin-transform-react-constant-elements',
        ],
        env: {
            production: {
                plugins: [],
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
};
