const fs = require('fs/promises');
const path = require('path');
const { version } = require(path.resolve('./package.json'));

const createVersionFile = () => {
    fs.writeFile(path.resolve(`./dist/${version}/${version}`), version, { encoding: 'utf8' });
};

module.exports = {
    createVersionFile,
};
