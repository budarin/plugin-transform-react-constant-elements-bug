// eslint-disable-next-line @typescript-eslint/no-var-requires
const { APP_VERSION } = require('../prevals/appVersion');

const PWA_ID = 'raketa';
const PWA_SCOPE = '/';

module.exports = {
    PWA_ID,
    PWA_SCOPE,
    PWA_URL: `${PWA_SCOPE}pwa-shell-${APP_VERSION}.html`,
};
