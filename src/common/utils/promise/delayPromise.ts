export function delayPromise(timeToOut: number): Promise<never> {
    return new Promise((resolve) => {
        setTimeout(resolve, timeToOut);
    });
}
