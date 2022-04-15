// must be .js and syncronouse
/* eslint-disable */

const { name } = require('../../../../package.json');

console.log('appName', `'${name}'`);

module.exports = name;
