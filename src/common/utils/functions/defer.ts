type CBVoidOrPromise = () => void | Promise<unknown>;

export function defer(cb: Promise<unknown> | CBVoidOrPromise): void {
    setTimeout(() => {
        if (cb instanceof Promise) {
            void cb;
        } else {
            void cb();
        }
    });
}
