export const isChromium =
    'userAgentData' in navigator && navigator.userAgentData?.brands.find((el) => el.brand === 'Chromium');
