const fs = require('fs');
const path = require('path');

const { version } = require('../../../package.json');

require(path.resolve('./src/server/utils/setupDotEnv'));

const normalizeAssetsManifest = () => {
    const assetsManifestPath = path.resolve(`dist/${version}/assets-manifest.json`);
    const assetsManifestPathBr = path.resolve(`dist/${version}/assets-manifest.json.br`);
    const assetsManifestPathGz = path.resolve(`dist/${version}/assets-manifest.json.gz`);
    const assetsManifest = require(assetsManifestPath);
    const newAsstsManifest = {};

    const hashLength = 64;

    Object.keys(assetsManifest).forEach((key) => {
        if (key.includes('.')) {
            const parts = key.split('.');

            if (
                !['br', 'gz', 'txt'].includes(parts[parts.length - 1]) &&
                parts[parts.length - 2].length !== hashLength
            ) {
                newAsstsManifest[key] = assetsManifest[key];
            }
        } else {
            newAsstsManifest[key] = assetsManifest[key];
        }
    });

    fs.writeFileSync(assetsManifestPath, JSON.stringify(newAsstsManifest, null, 4));
    try {
        fs.unlinkSync(assetsManifestPathBr);
        fs.unlinkSync(assetsManifestPathGz);
    } catch (error) {}

    console.log('normalization of assets-manifest is finished');

    return newAsstsManifest;
};

module.exports = {
    normalizeAssetsManifest,
};
