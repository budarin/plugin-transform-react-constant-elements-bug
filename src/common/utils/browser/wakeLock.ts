let wakeLock: WakeLockSentinel | null | undefined;
let locks = 0;

export const requestWakeLock = __CLIENT__
    ? async () => {
          if ('wakeLock' in navigator && document.visibilityState === 'visible') {
              wakeLock = await navigator.wakeLock.request('screen');
              locks++;
          }
      }
    : async () => Promise.resolve();

export const releaseWakeLock = __CLIENT__
    ? async () => {
          if ('wakeLock' in navigator) {
              if (locks) {
                  locks--;
              } else {
                  return;
              }

              if (wakeLock) {
                  await wakeLock.release().then(() => {
                      wakeLock = null;
                  });
              }
          }
      }
    : async () => Promise.resolve();

if (__CLIENT__ && 'wakeLock' in navigator) {
    document.addEventListener('visibilitychange', () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            locks--;
            void requestWakeLock();
        }
    });
}
