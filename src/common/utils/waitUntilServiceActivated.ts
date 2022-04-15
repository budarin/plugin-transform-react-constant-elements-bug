import { delayPromise } from './promise/delayPromise';

const WAIT_ACTIVATING_SERVICE_TIME = 20000;

export async function waitUntilServiceActivated(): Promise<void> {
    // ждем окончательного запуска нового инстанса сервиса
    // т.к. он активируется и выкладывает ресурсы, но доккер еще 15 секунд его еще проверяет
    // и его runtime ресурсы еще не доступны
    await delayPromise(WAIT_ACTIVATING_SERVICE_TIME);
}
