export const omit = <T>(obj: Record<string, T>, keys: string[]): Record<string, T> => {
    const exclude = new Set(keys);

    return Object.fromEntries(Object.entries(obj).filter((e) => !exclude.has(e[0])));
};
