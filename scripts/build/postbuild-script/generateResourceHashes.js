const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');

const { version } = require(path.resolve('package.json'));

require(path.resolve('./src/server/utils/setupDotEnv'));

const getSha256HashBase64 = (input) => {
    return `sha256-${createHash('sha256')
        .update(input, 'utf8')
        .digest('base64')
        .replace(/-/g, '+')
        .replace(/_/g, '/')}`;
};

const generateResourceHashes = (manifest) => {
    const jsHashes = {};
    Object.keys(manifest)
        .filter((key) => key.endsWith('.js'))
        .forEach((key) => {
            const script = fs.readFileSync(`dist/${version}/${manifest[key]}`, { encoding: 'utf-8' });
            jsHashes[key] = `'${getSha256HashBase64(script)}'`;
            jsHashes[manifest[key]] = jsHashes[key];
        });

    const jsEntypoint = manifest.entrypoints.client.assets.js;
    jsHashes['entrypoint'] = jsEntypoint.map((key) => {
        const script = fs.readFileSync(`dist/${version}/${key}`, { encoding: 'utf-8' });
        return `'${getSha256HashBase64(script)}'`;
    });

    fs.writeFileSync(`dist/${version}/js-hashes.json`, JSON.stringify(jsHashes, null, 4));

    const cssHashes = {};
    Object.keys(manifest)
        .filter((key) => key.endsWith('.css'))
        .forEach((key) => {
            const sctyle = fs.readFileSync(`dist/${version}/${manifest[key]}`, { encoding: 'utf-8' });
            cssHashes[key] = `'${getSha256HashBase64(sctyle)}'`;
            cssHashes[manifest[key]] = cssHashes[key];
        });

    const cssEntypoint = manifest.entrypoints.client.assets.css;
    cssHashes['entrypoint'] = cssEntypoint.map((key) => {
        const sctyle = fs.readFileSync(`dist/${version}/${key}`, { encoding: 'utf-8' });
        return `'${getSha256HashBase64(sctyle)}'`;
    });
    fs.writeFileSync(`dist/${version}/css-hashes.json`, JSON.stringify(cssHashes, null, 4));

    console.log('generation resource hashes is finished');
};

module.exports = {
    generateResourceHashes,
};
