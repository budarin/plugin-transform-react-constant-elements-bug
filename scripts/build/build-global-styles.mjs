#!/usr/bin/env zx

// process.env.NODE_ENV = 'production';

$.verbose = false;
await $`mkdir -p .tmp/styles;`;

console.log(chalk.green('start minifying global.css...'));

async function buildGlobalStyles() {
    const variables = await fs.readFile('src/common/styles/variables.css', { encoding: 'utf-8' });

    const lightScheme = await fs.readFile('src/common/styles/light.scheme.css', { encoding: 'utf-8' });
    const lightSchemeValue = lightScheme.substring(lightScheme.indexOf('{') + 1, lightScheme.indexOf('}')).trim();

    const darkScheme = await fs.readFile('src/common/styles/dark.scheme.css', { encoding: 'utf-8' });
    const darkSchemeValue = darkScheme.substring(darkScheme.indexOf('{') + 1, darkScheme.indexOf('}')).trim();

    const globalStyles = await fs.readFile('src/common/styles/global.css', { encoding: 'utf-8' });

    const themeTemplate = `
    @media (prefers-color-scheme: light), (prefers-color-scheme: no-reference) {
        :root,
        :root[data-color_scheme='light'] {
            ${lightSchemeValue}
        }

        :root[data-color_scheme='dark'] {
            ${darkSchemeValue}
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            ${darkSchemeValue}
        }

        :root[data-color_scheme='light'] {
            ${lightSchemeValue}
        }
    }`;

    await fs.writeFile(
        '.tmp/styles/global.css',
        `
        ${variables}
        ${themeTemplate}
        ${globalStyles}
        `,
        { encoding: 'utf-8' },
    );

    await $`yarn postcss .tmp/styles/global.css -o .tmp/styles/global.min.css`;
    await $`rm .tmp/styles/global.css`;
}

await buildGlobalStyles();
