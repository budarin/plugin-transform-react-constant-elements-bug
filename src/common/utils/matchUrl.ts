import { matchPath } from 'react-router';
import { Routes, router } from 'common/router';

import type { RouterEvent } from 'common/types/routes';

export function matchUrl(url: string): RouterEvent {
    for (const routeName of Object.keys(Routes)) {
        const route = router[routeName];

        if (route) {
            const result = matchPath(route.path, url);

            if (result) {
                return { route: routeName, description: route, ...result };
            }
        }
    }

    return { route: Routes.NotFound } as RouterEvent;
}
