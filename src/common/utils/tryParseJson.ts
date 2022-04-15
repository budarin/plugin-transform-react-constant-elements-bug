interface ITryParseJson {
    <T>(str: string): { result: T; error: undefined } | { result: undefined; error: Error };
}

export const tryParseJson: ITryParseJson = <T>(str: string) => {
    try {
        return {
            result: JSON.parse(str) as T,
            error: undefined,
        };
    } catch (error) {
        return {
            result: undefined,
            error: error as Error,
        };
    }
};
