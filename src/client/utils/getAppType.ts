let appType: string;

export function getAppType(): string {
    if (!appType) {
        appType = document.documentElement.dataset['type'] || 'unknown';
    }

    return appType;
}
