module.exports = {
    env: {
        'jest/globals': true,
        browser: true,
        node: true,
        es6: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-perf/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:node/recommended',
        'plugin:security/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:testing-library/dom',
        'plugin:testing-library/react',
        'plugin:regexp/recommended',
    ],
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'jest',
        'fp',
        'deprecate',
        'promise',
        'security',
        'jsx-a11y',
        'react',
        'react-hooks',
        'react-perf',
        'only-ascii',
        'testing-library',
    ],
    overrides: [
        {
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            extends: ['plugin:testing-library/react', 'plugin:testing-library/dom'],
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        node: {
            resolvePaths: [__dirname],
            tryExtensions: ['ts', 'tsx', '.js', '.json', '.node'],
        },
        'testing-library/utils-module': 'off',
        'testing-library/custom-renders': 'off',
        'testing-library/custom-queries': 'off',
    },
    globals: {
        __DEV__: 'readonly',
        __PROD__: 'readonly',
        __CLIENT__: 'readonly',
        __SERVER__: 'readonly',

        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        createDefaultProgram: true,
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'esnext',
        sourceType: 'module',
    },
    // sample rules https://gist.github.com/BoresXP/e404f16a0e153eeb6ce15ce06848f36e
    rules: {
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'node/no-unsupported-features/node-builtins': [
            'error',
            {
                ignores: ['perf_hooks'],
            },
        ],
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        complexity: ['warn', 10],
        'max-lines': ['warn', { max: 200, skipBlankLines: true }],
        'max-depth': ['warn', 3],
        'max-nested-callbacks': ['warn', 3],
        'max-lines-per-function': ['warn', { max: 200, skipBlankLines: true }],
        'no-param-reassign': 'warn',
        'max-params': ['warn', 3],
        'detect-object-injection': 'off',
        'security/detect-object-injection': 'off',
        'fp/no-let': 'off',
        'fp/no-loops': 'off',
        'fp/no-throw': 'off',
        'fp/no-mutating-assign': 'warn',
        'fp/no-mutating-methods': 'warn',
        'fp/no-mutation': 'off',
        'fp/no-delete': 'warn',
        'deprecate/function': ['warn', { name: 'legacyFunc', use: 'newFunc from this package' }],
        'node/no-unsupported-features/es-builtins': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-import': 'off',
        'no-process-exit': 'warn',
        'no-native-reassign': ['error', { exceptions: ['Redis.Promise'] }],
        'no-irregular-whitespace': 'warn',
    },
};
