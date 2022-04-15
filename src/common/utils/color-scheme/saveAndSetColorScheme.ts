import { COLOR_SCHEME_KEY } from '../consts/html';

export function saveAndSetColorScheme(scheme: string): void {
    localStorage.setItem('color-scheme', scheme);

    // eslint-disable-next-line security/detect-object-injection
    document.documentElement.dataset[COLOR_SCHEME_KEY.replace('-', '_')] = scheme ? scheme : '';
}
