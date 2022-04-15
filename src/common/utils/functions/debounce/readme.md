# Debounce

Функция устранения частых повторных вызовов функции с защитным таймером `safetyaTimeout` при огромном количестве повторяющихся вызовов, не оставляющих времени `timeout` на вызов самой функции.

```ts
function sum(a: number, b: numbes) {
    return a + b;
}
const debouncedSum = <typeof func>debounce(sum, 50, 1000);

let sum = debouncedSum(1, 2);
```

https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
