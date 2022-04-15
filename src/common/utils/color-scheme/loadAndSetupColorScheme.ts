import { COLOR_SCHEME_KEY } from '../consts/html';

function getColorSchemeValue(value: null | string): string {
    const isValidValue = [null, 'dark', 'light'].includes(value);

    if (!isValidValue) {
        localStorage.removeItem(COLOR_SCHEME_KEY);
    }

    return isValidValue ? (value ? value : '') : '';
}

export function loadAndSetupColorScheme(): string {
    const scheme = getColorSchemeValue(localStorage.getItem(COLOR_SCHEME_KEY));

    // eslint-disable-next-line security/detect-object-injection
    document.documentElement.dataset[COLOR_SCHEME_KEY.replace('-', '_')] = scheme ? scheme : '';

    return scheme;
}
