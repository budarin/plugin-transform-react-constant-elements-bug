import { Routes, Route } from 'react-router';

import { router } from '../../router';
import { objectMap } from '../../utils/object/map';

export function RoutesComponent() {
    return (
        <Routes>
            {objectMap(router, (routerKey) => {
                const route = router[routerKey];

                if (route && route.element) {
                    const { path, element: Component } = route;

                    return <Route key={routerKey} path={path} element={<Component />} />;
                } else {
                    return null;
                }
            }).filter(Boolean)}
        </Routes>
    );
}
