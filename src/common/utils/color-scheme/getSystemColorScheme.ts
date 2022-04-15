export function getSystemColorScheme(): string {
    const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}
