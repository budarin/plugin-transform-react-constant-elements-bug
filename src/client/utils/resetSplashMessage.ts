import { SPLASH_LOADING_LABLE_ID, SPLASH_PROGRESS_INDICATOR_ID, SPLASH_PROGRESS_ID } from 'common/utils/consts/html';

export function resetSplashMessage(): void {
    let el = document.getElementById(SPLASH_PROGRESS_ID);
    if (el) {
        el.style.visibility = 'hidden';
    }
    el = document.getElementById(SPLASH_PROGRESS_INDICATOR_ID);
    if (el) {
        el.style.inlineSize = `0%`;
    }

    el = document.getElementById(SPLASH_LOADING_LABLE_ID);
    if (el) {
        el.textContent = `Полетели! !`;
    }
}
