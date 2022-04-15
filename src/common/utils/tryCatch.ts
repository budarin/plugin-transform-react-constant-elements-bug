export const tryCatch = <T>(tryer: () => T): [T, null] | [null, unknown] => {
    try {
        const result = tryer();

        return [result, null];
    } catch (error) {
        return [null, error];
    }
};
