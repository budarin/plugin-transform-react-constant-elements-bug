const { prepareManifest } = require('./prepareManifest');
const { createVersionFile } = require('./createVersionFile');
const { generateResourceHashes } = require('./generateResourceHashes');
const { normalizeAssetsManifest } = require('./normalizeAssetsManifest');
const { generateFullAssestManifestScript } = require('./generateFullAssestManifestScript');

console.log('\nstart postbuilding ...');

const assetsManifest = normalizeAssetsManifest();

prepareManifest(assetsManifest);
generateResourceHashes(assetsManifest);
generateFullAssestManifestScript(assetsManifest);
createVersionFile();

console.log('\n');
