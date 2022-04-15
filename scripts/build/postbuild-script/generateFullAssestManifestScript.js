const fs = require('fs');
const path = require('path');

const { version } = require(path.resolve('package.json'));

const generateFullAssestManifestScript = (assetsManifest) => {
    const fullAssetsManifest = [];

    Object.keys(assetsManifest).forEach((key) => {
        const excludeStartsWith = ['root/'];
        const excludeExact = ['entrypoints', 'sw.js', 'copy_assets.sh'];

        if (!excludeExact.includes(key) && excludeStartsWith.every((excludeItem) => !key.startsWith(excludeItem))) {
            fullAssetsManifest.push('/' + assetsManifest[key]);
        }
    });

    const fileName = path.resolve(`dist/${version}/fullAssetsManifest-${version}.js`);
    const content = `const fullAssetsManifest = ${JSON.stringify(fullAssetsManifest)};`;

    fs.writeFileSync(fileName, content);
};

module.exports = {
    generateFullAssestManifestScript,
};
