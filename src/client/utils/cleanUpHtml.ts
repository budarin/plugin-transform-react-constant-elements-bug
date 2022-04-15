/* eslint-disable fp/no-delete */

import {
    HEAD_SCRIPT_ID,
    CRITICAL_CSS_ID,
    SPLASH_SCREEN_ID,
    SPLASH_STYLES_ID,
    STARTUP_SCRIPT_ID,
    APP_STATE_SCRIPT_ID,
} from 'common/utils/consts/html';
import { removeElementById } from './removeElementById';

export function cleanUpHtml(): void {
    [
        STARTUP_SCRIPT_ID,
        HEAD_SCRIPT_ID,
        SPLASH_SCREEN_ID,
        SPLASH_STYLES_ID,
        CRITICAL_CSS_ID,
        APP_STATE_SCRIPT_ID,
    ].forEach((id) => removeElementById(id));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.__APP_STATE__;

    if (window.wakeLockRequest) {
        void window.wakeLockRequest.release().then(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            delete window.wakeLockRequest;
        });
    }
}
