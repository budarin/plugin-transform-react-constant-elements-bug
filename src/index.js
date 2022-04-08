import ReactDOM from 'react-dom';
import ClientApp from './containers/ClientApp';
import { matchUrl } from './utils/matchUrl';

async function onDomContentLoaded() {
    const { description: element } = matchUrl(location.pathname);

    console.log('foundRoute', element);

    if (element && element.element) {
        await element.element?.loader();
    }

    const appElement = document.getElementById('root');

    if (appElement) {
        ReactDOM.render(<ClientApp />, appElement, () => {
            console.log('app is rendered');
        });
    }
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded, { once: true });
