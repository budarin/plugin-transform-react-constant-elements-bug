/* eslint-disable fp/no-delete */

import { setAppIsRun } from './isAppRun';
import { delayPromise } from 'common/utils/promise/delayPromise';
import { SPLASH_TRANSITION_TIME, SPLASH_SCREEN_ID } from 'common/utils/consts/html';

let dontHideSplash = false;

export function getDontHideSplash(): boolean {
    return dontHideSplash;
}

export function setDontHideSplash(): void {
    dontHideSplash = true;
}

function hideSplashScreen(): void {
    const splash = document.getElementById(SPLASH_SCREEN_ID);
    if (splash) {
        splash.style.opacity = '0';
        splash.style.zIndex = '-100';
    }
}

export async function closeSplashScreen(): Promise<void> {
    if (window.showSplashTimeoutPromise !== undefined && dontHideSplash === false) {
        await window.showSplashTimeoutPromise;
        hideSplashScreen();
        await delayPromise(SPLASH_TRANSITION_TIME);
        setAppIsRun();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete window.showSplashTimeoutPromise;
    }
}
