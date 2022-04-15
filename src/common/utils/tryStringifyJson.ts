/* eslint-disable @typescript-eslint/no-explicit-any */
function getCircularReplacer(): (_: any, value: any) => any {
    const seen = new WeakSet();

    return (_: any, value: any): any => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value as object)) {
                return undefined;
            }
            seen.add(value as object);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value;
    };
}

export function tryStringifyJson<T>(
    obj: T,
): { result: string; error: undefined } | { result: undefined; error: string } {
    try {
        return {
            result: JSON.stringify(obj, getCircularReplacer()),
            error: undefined,
        };
    } catch (error) {
        return {
            result: undefined,
            error: (error as Error).message,
        };
    }
}
