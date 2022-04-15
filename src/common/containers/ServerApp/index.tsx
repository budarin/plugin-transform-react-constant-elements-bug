import { StaticRouter } from 'react-router-dom/server';

import App from 'common/components/App';
import { AppStoreProvider } from '../AppStore';
import { appReducer } from 'common/redux/appReducer';
import { appMiddlewares } from 'common/redux/appMiddlewares';

interface IServerAppProps {
    url: string;
    state: IAppState;
}

const ServerApp: React.FC<IServerAppProps> = ({ url, state }) => {
    return (
        <StaticRouter location={url}>
            <AppStoreProvider initialState={state} reducer={appReducer(state)} middlewares={appMiddlewares}>
                <App />
            </AppStoreProvider>
        </StaticRouter>
    );
};

export default ServerApp;
