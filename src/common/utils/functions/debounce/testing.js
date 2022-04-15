/* eslint-disable */
// @ts-nocheck

console.log('start');

const delayPromise = (timeToOut) =>
    new Promise((resolve) => {
        setTimeout(resolve, timeToOut);
    });

function debounce(func, timeout, safetyaTimeout = 0) {
    let timer;
    let saftyTimer = 0;
    let funcWasCalledWithTimeout = false;

    return (...args) => {
        clearTimeout(timer);

        // console.log('Старт обычного таймера');
        timer = setTimeout(() => {
            console.log('Срабатывание обычного таймера');
            clearTimeout(saftyTimer);
            saftyTimer = 0;

            func(...args);
            funcWasCalledWithTimeout = true;
        }, timeout);

        // стартуем при 1м вызове и при 1м следующем вызове после исполнения func
        if (!saftyTimer && funcWasCalledWithTimeout === false && safetyaTimeout) {
            // console.log('Старт saftyTimer');

            saftyTimer = setTimeout(() => {
                console.log('Вызов функции по предохранительному таймауту');

                clearTimeout(timer);
                saftyTimer = 0;
                func(...args);
            }, safetyaTimeout);
        }

        if (funcWasCalledWithTimeout) {
            funcWasCalledWithTimeout = false;
        }
    };
}

function sum(a, b) {
    return a + b;
}

let t;
let i = 0;
const stopTime = Date.now() + 3500;
const debouncedSum = debounce(sum, 200, 1000);

console.log('start while');
void (async () => {
    while (Date.now() < stopTime) {
        i++;
        console.log('i', i);
        await delayPromise(1);
        await debouncedSum(1, 2);
    }
})();
