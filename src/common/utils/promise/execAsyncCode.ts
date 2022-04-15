export async function execAsyncCode(cb: () => Promise<unknown>): Promise<unknown> {
    return await cb();
}
