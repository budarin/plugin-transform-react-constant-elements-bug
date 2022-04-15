const { debug } = console;

export function loggerMiddleware(): (next: IDispatch) => (action: IAction) => unknown {
    return (next: IDispatch) =>
        (action: IAction): unknown => {
            const log = {
                what: 'action',
                why: 'команда послана в Store',
                where: 'loggerMiddleware',
                action,
            };

            debug(log);

            return next(action);
        };
}
