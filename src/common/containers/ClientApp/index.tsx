import { BrowserRouter } from 'react-router-dom';

import App from 'common/components/App';
import { AppStoreProvider } from '../AppStore';
import { appReducer } from 'common/redux/appReducer';
import { appMiddlewares } from 'common/redux/appMiddlewares';

interface IClientAppProps {
    state: Partial<IAppState>;
}

const ClientApp: React.FC<IClientAppProps> = ({ state }): JSX.Element => {
    return (
        <BrowserRouter>
            <AppStoreProvider initialState={state} reducer={appReducer(state)} middlewares={appMiddlewares}>
                <App />
            </AppStoreProvider>
        </BrowserRouter>
    );
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default ClientApp;
