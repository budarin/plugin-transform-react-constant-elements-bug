#!/usr/bin/env zx

$.verbose = false;

const version = require('../../package.json').version;

console.log('app version', version);

const content = `module.exports = {
    APP_VERSION: '${version}',
};
`;

fs.writeFile(path.resolve('./src/common/utils/prevals/appVersion.js'), content, { encoding: 'utf8' });
