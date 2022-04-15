import React, { useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Title from './Title';
import { ErrorFallback } from './ErrorFallback';
import { RoutesComponent } from './RoutesComponent';

import './app.css';

const App: React.FC = (): JSX.Element => {
    const onResetHandler = useCallback(() => {
        // reset the state of your app so the error doesn't happen again
        location.reload();
    }, []);

    return (
        <React.Fragment key="app">
            <Title />
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onResetHandler}>
                <RoutesComponent />
            </ErrorBoundary>
        </React.Fragment>
    );
};

export default App;

if (__DEV__ && module.hot) {
    module.hot.accept('./Title');
}
