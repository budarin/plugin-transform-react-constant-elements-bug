// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('babel-jest').default.createTransformer(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../config/babel/client.babel.config'),
);
