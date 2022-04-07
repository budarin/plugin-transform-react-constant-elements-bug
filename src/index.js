import ReactDOM from 'react-dom';
import ClientApp from './containers/ClientApp';

function onDomContentLoaded() {
    const appElement = document.getElementById('root');

    if (appElement) {
        ReactDOM.render(<ClientApp />, appElement, () => {
            console.log('app is rendered');
        });
    }
}

document.addEventListener('DOMContentLoaded', onDomContentLoaded, { once: true });
