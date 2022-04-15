import { matchUrl } from 'common/utils/matchUrl';

export function createStateForPwa(): Partial<IAppState> {
    const router = matchUrl(document.location.pathname);
    const { route } = router;

    return {
        showUpdateSwDialog: false,
        router: {
            route,
        },
    };
}
