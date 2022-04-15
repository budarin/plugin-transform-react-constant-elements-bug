export const networkConnection = navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection || {
        type: undefined,
        effectiveType: undefined,
        downlinkMax: undefined,
        downlink: undefined,
        rtt: undefined,
        saveData: undefined,
    };
