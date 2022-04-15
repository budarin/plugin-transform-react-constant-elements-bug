window.onerror = null;

window.addEventListener('unhandledrejection', function (event: PromiseRejectionEvent): void {
    event.preventDefault();
});

if (__PROD__) {
    window.addEventListener('error', (event: ErrorEvent): boolean => {
        event.preventDefault();

        return false;
    });
}
