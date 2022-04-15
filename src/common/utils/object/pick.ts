// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pick(object: Record<string, any>, keys: string[]): Record<string, any> {
    let index = -1;
    const length = keys.length;
    const result = {};

    // eslint-disable-next-line fp/no-loops
    while (++index < length) {
        // eslint-disable-next-line security/detect-object-injection
        const key = keys[index];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/no-unsafe-assignment
        const value = object[key];

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/no-unsafe-assignment
        result[key] = value;
    }
    return result;
}
