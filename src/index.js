import ReactDOM from 'react-dom';
import ClientApp from './containers/ClientApp';
import { matchUrl } from './utils/matchUrl';

async function onDomContentLoaded() {
    const foundRoute = matchUrl(location.pathname);

    console.log('foundRoute', foundRoute);

    if (foundRoute && foundRoute.element) {
        await foundRoute.element?.loader();
    }

    const appElement = document.getElementById('root');

    if (appElement) {
        ReactDOM.render(<ClientApp />, appElement, () => {
            console.log('app is rendered');
        });
    }
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded, { once: true });
