#!/usr/bin/env zx

$.verbose = false;

// import Bowser from 'bowser';
// const browser = Bowser.getParser(
//     'Mozilla/5.0 (Linux; Android 5.1.1; PE-TL10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36 OPR/58.2.2878.53403',
// );
// console.log(browser);

console.log(chalk.green('start generating browserVersions from browsersList...'));

const browsers = await $`browserslist`;
const shortBrowsersNamesInfo = {
    and_chr: 'Chrome for Android',
    and_ff: 'Firefox for Android',
    android: 'Android WebViewr',
    chrome: 'Google Chrome',
    edge: 'Edge',
    firefox: 'Firefox',
    ios_saf: 'iOS Safari',
    op_mob: 'Opera Mobile',
    opera: 'Opera',
    safari: 'Safari',
    samsung: 'Samsung',
};

const browsersArray = browsers.stdout.split('\n').filter(Boolean);
const browserVersions = browsersArray.reduce((acc, item) => {
    const [browser, version] = item.split(' ');
    const name = shortBrowsersNamesInfo[browser];
    let ver;

    if (version.includes('-')) {
        const versions = version.split('-').map((item) => parseFloat(item));
        ver = Math.min.apply(null, versions);
    } else {
        ver = parseFloat(version);
    }

    if (!acc[name] || (acc[name] && acc[name] > ver)) {
        acc[name] = ver;
    }

    return acc;
}, {});

// console.log(browsersArray);
// console.log(browserVersions);

const data = `export const browserVersionsFromBrowsersList = ${JSON.stringify(browserVersions, null, 4)};

export type TBrowserVersionsFromBrowsersList = keyof typeof browserVersionsFromBrowsersList;
`;

fs.writeFile('./src/server/middlewares/utils/browserVersionsFromBrowsersList.ts', data, {
    encoding: 'utf-8',
});
