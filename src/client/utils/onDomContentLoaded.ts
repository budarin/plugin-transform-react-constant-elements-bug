import { renderApp } from './renderApp';
import { createStateForPwa } from './createStateForPwa';
import { execAsyncCode } from '../../common/utils/promise/execAsyncCode';

const appState = window.__APP_STATE__ || createStateForPwa();

export function onDomContentLoaded(): void {
    void execAsyncCode(async () => {
        await renderApp(appState);
    });
}
