import { SSR, BROWSER } from '../consts';

const environment = __SERVER__ ? SSR : BROWSER;

export function rejectAfterTimeout(ms: number, promise: Promise<unknown>): Promise<unknown> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error(`${environment} timeout ${ms} error.`));
        }, ms);

        promise.then(resolve, reject);
    });
}
