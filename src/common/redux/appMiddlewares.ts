import { loggerMiddleware } from './middlewares/loggerMiddleware';
import { middleware as businessLogicMiddleware } from './middlewares/appBussinessLogicMiddleware';

export const appMiddlewares = [businessLogicMiddleware];

if (__DEV__) {
    // eslint-disable-next-line fp/no-mutating-methods
    appMiddlewares.push(loggerMiddleware);
}
