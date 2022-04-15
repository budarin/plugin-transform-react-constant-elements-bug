const {
    browserslist: { production },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./package.json');

module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-config-prettier',
        'stylelint-config-idiomatic-order',
    ],
    plugins: [
        'stylelint-no-unsupported-browser-features',
        'stylelint-a11y',
        'stylelint-use-logical-spec',
        'stylelint-declaration-block-no-ignored-properties',
    ],
    rules: {
        'declaration-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
            },
        ],
        'plugin/declaration-block-no-ignored-properties': true,
        'liberty/use-logical-spec': true,
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning',
                browsers: production,
            },
        ],
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
        'declaration-no-important': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['define-mixin', 'mixin', 'value'],
            },
        ],
        'number-leading-zero': 'always',
        indentation: [
            4,
            {
                indentInsideParens: 'once-at-root-twice-in-block',
                severity: 'error',
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local'],
            },
        ],
        'selector-pseudo-class-case': null,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes', 'r'],
            },
        ],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['x'],
            },
        ],
        'declaration-property-unit-disallowed-list': {
            'font-size': ['px'],
        },
        // 'unit-disallowed-list': ['px'],
        // 'unicode-bom': 'always',
    },
    ignoreFiles: ['src/**/*.tmp.css', 'scripts/**/*', 'huskyrc/**/*'],
};
