// must be .js and syncronouse
/* eslint-disable */

const fs = require('fs');
const path = require('path');

const manifest = path.resolve('src/common/assets/manifest.webmanifest');

const json = JSON.parse(fs.readFileSync(manifest, { encoding: 'utf8' }));
const startUrl = json.start_url;

console.log('manifestStartUrl', `'${startUrl}'`);

module.exports = startUrl;
