export function arrayToBooleanHash(array: string[]): Record<string, boolean> {
    return array.reduce((acc, item: string): Record<string, boolean> => {
        // eslint-disable-next-line security/detect-object-injection
        acc[item] = true;
        return acc;
    }, {} as Record<string, boolean>);
}
