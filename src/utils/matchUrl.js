import { matchPath } from 'react-router';
import { Routes, router } from '../router';

export function matchUrl(url) {
    for (const routeName of Object.keys(Routes)) {
        const route = router[routeName];

        if (route) {
            const result = matchPath(route.path, url);

            if (result) {
                return { route: routeName, description: route, ...result };
            }
        }
    }

    return { route: Routes.NotFound };
}
