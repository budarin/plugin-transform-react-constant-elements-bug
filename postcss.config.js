const {
    browserslist: { production },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./package.json');

const config = {
    plugins: [
        require('postcss-pixels-to-rem')({
            base: 16,
            unit: 'rem',
            exclude: ['font-size'],
            mediaQueries: false,
        }),
        require('postcss-preset-env')({
            stage: 3,
            autoprefixer: {
                flexbox: 'no-2009',
            },
            browsers: production,
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
            },
        }),
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        require('postcss-csso')({
            restructure: true,
        }),
    );
}

module.exports = config;
