export function resolveReject(b: boolean, error: Error): Promise<void> {
    return b ? Promise.resolve() : Promise.reject(error);
}
