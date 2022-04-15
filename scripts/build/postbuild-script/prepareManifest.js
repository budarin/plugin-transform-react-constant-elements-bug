const fs = require('fs');
const path = require('path');

const { version } = require(path.resolve('./package.json'));
const { PWA_SCOPE, PWA_URL, PWA_ID } = require(path.resolve('./src/common/utils/consts/pwa'));

const manifestDistPath = path.resolve(`./dist/${version}/manifest.webmanifest`);
const manifestPath = path.resolve('./scripts/build/postbuild-script/manifest.webmanifest');

require(path.resolve('./src/server/utils/setupDotEnv'));

const prepareManifest = (assetsManifest) => {
    const webmanifestStr = fs
        .readFileSync(manifestPath, { encoding: 'utf-8' })
        .replace('"id": "id",', `"id": "/?${PWA_ID}=${version}",`)
        .replace('"scope": "/"', `"scope": "${PWA_SCOPE}"`)
        .replace('"start_url": "/"', `"start_url": "${PWA_SCOPE}?pwa_ver=${version}"`);
    const webmanifest = JSON.parse(webmanifestStr);

    const icons = [
        {
            src: `/${assetsManifest['android-chrome.png']}`,
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any',
        },
        {
            src: `/${assetsManifest['android-chrome-192x192.png']}`,
            type: 'image/png',
            sizes: '192x192',
        },
        {
            src: `/${assetsManifest['android-chrome-192x192.maskable.png']}`,
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable',
        },
        {
            src: `/${assetsManifest['android-chrome-512x512.png']}`,
            type: 'image/png',
            sizes: '512x512',
        },
        {
            src: `/${assetsManifest['android-chrome-512x512.maskable.png']}`,
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable',
        },
    ];

    webmanifest.icons = icons;

    const data = JSON.stringify(webmanifest, null, 4);

    fs.writeFileSync(manifestDistPath, data);

    console.log('preparation of manifest.webmanifest is finished');
};

module.exports = {
    prepareManifest,
};
