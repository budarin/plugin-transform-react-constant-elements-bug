import React from 'react';

import Title from './Title';
import { RoutesComponent } from './RoutesComponent';

const App = () => {
    return (
        <React.Fragment key="app">
            <Title />
            <RoutesComponent />
        </React.Fragment>
    );
};

export default App;
