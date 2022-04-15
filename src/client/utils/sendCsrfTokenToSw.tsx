import { SSR } from 'common/utils/consts';
import { getCsrfTokenFomDom } from './getCsrfTokenFomDom';
import { swSetCSRFTokenMessage } from 'common/utils/consts/sw';

export function sendCsrfTokenToSw(appType: string): void {
    if (appType == SSR) {
        const token = getCsrfTokenFomDom();
        navigator.serviceWorker?.controller?.postMessage(swSetCSRFTokenMessage(token));
    }
}
