import ReactDOM from 'react-dom';

import { matchUrl } from 'common/utils/matchUrl';
import { APP_ID } from 'common/utils/consts/html';

import ClientApp from 'common/containers/ClientApp';

export async function renderApp(appState: Partial<Readonly<IAppState>>): Promise<void> {
    const { description: element } = matchUrl(location.pathname);

    if (element && element.element) {
        // предзагружаем в кэш вебпака модуль - иначе будет долгая загрузка
        // и предупреждение о не соответствии серверного и клиентсеого рендера
        await element.element?.loader();
    }

    const appElement = document.getElementById(APP_ID);

    if (appElement) {
        if (appElement.hasChildNodes()) {
            ReactDOM.hydrate(<ClientApp state={appState} />, appElement);
        } else {
            ReactDOM.render(<ClientApp state={appState} />, appElement);
        }
    }
}
