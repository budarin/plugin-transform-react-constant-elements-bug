import { Routes } from '../../router';

export function getRouteSelector(state: Partial<IAppState>): string {
    if (state && state.router && state.router.route) {
        // FIXME:
        return state.router.route;
    }

    return Routes.NotFound;
}
