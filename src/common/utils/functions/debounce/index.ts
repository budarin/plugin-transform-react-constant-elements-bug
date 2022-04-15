/**
 *  default @safetyaTimeout = 0
 *
 *  Функция устранения частых повторных вызовов функции с защитным таймером `safetyaTimeout` при огромном количестве повторяющихся вызовов, не оставляющих времени `timeout` на вызов самой функции.
 */
export function debounce<Params extends unknown[]>(
    func: (...args: Params) => unknown,
    timeout: number,
    safetyaTimeout = 0,
) {
    let timer: NodeJS.Timeout;
    let saftyTimer: NodeJS.Timeout;
    let funcWasCalledWithTimeout = false;

    return function debouncedFunction(...args: Params) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            funcWasCalledWithTimeout = true;

            if (saftyTimer) {
                clearTimeout(saftyTimer);
                saftyTimer = 0 as unknown as NodeJS.Timeout;
            }

            func(...args);
        }, timeout);

        // стартуем при 1м вызове и при 1м следующем вызове после исполнения func
        if (!saftyTimer && funcWasCalledWithTimeout === false && safetyaTimeout) {
            saftyTimer = setTimeout(() => {
                clearTimeout(timer);
                saftyTimer = 0 as unknown as NodeJS.Timeout;

                func(...args);
            }, safetyaTimeout);
        }

        if (funcWasCalledWithTimeout) {
            funcWasCalledWithTimeout = false;
        }
    };
}
