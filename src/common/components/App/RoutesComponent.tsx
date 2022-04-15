import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import { router } from 'common/router';
import { cleanUpHtml } from 'client/utils/cleanUpHtml';

import type { TRoutes } from 'common/router';

export function RoutesComponent() {
    useEffect(() => {
        // теперь уже можно удалить critical css из html и другие скрипты
        cleanUpHtml();
    }, []);

    return (
        <Routes>
            {Object.keys(router)
                .map((routerKey) => {
                    const route = router[routerKey as keyof TRoutes];

                    if (route && route.element) {
                        const { path, element: Component } = route;

                        return <Route key={routerKey} path={path} element={<Component />} />;
                    } else {
                        return null;
                    }
                })
                .filter(Boolean)}
        </Routes>
    );
}
