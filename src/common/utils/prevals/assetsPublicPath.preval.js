// must be .js and syncronouse
/* eslint-disable */

const path = require('path');
const __DEV__ = process.env.NODE_ENV !== 'production';
const config = __DEV__
    ? require(path.resolve('./config/webpack/client/dev.webpack.config'))
    : require('../../../../config/webpack/client/webpack.config');
const { output } = config;
const { publicPath } = output;

module.exports = publicPath;
