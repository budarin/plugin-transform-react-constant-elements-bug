import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App';

const ClientApp = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default ClientApp;
