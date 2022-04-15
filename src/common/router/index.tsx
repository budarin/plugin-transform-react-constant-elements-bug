import { LazyComponentType } from '../components/LazyComponent';

import { PWA_URL } from '../utils/consts/pwa';
import { NOT_FOUND_ROUTE } from 'common/utils/notFoundRoute';

import HomePage from 'common/pages/HomePage';
import Page1Page from 'common/pages/Page1Page';
import Page2Page from 'common/pages/Page2Page';
import Page3Page from 'common/pages/Page3Page';
import NotFoundPage from 'common/pages/NotFoundPage';

type APIMethodName = string;

export interface AppRouteProps {
    path: string;
    title: string;
    description: string;
    isStatic: boolean;
    loadData?: APIMethodName;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    element?: LazyComponentType<any>;
}

export const Routes = {
    PWA: 'PWA',
    Home: 'Home',
    Page1: 'Page1',
    Page2: 'Page2',
    Page3: 'Page3',
    NotFound: 'NotFound',
    Default: 'Default',
} as const;

export type TRoutes = typeof Routes;

// Внимание !!!
// компонент страницы обязан иметь displayName - он нужен для загрузки чанка по этому имени в SSR и на клиенте

export const router: Record<string, AppRouteProps> = {
    [Routes.PWA]: {
        path: PWA_URL,
        title: 'Raketa',
        description: 'Raketa application',
        isStatic: true,
    },
    [Routes.Home]: {
        path: '/',
        title: 'Home',
        description: 'Home page',
        element: HomePage,
        isStatic: false,
        loadData: 'getHomeData',
    },
    [Routes.Page1]: {
        path: '/page1',
        title: 'Page1',
        description: 'Page1 page',
        element: Page1Page,
        isStatic: false,
        loadData: 'getPage1Data',
    },
    [Routes.Page2]: {
        path: '/page2',
        title: 'Page2',
        description: 'Page2 page',
        element: Page2Page,
        isStatic: false,
        loadData: 'getPage2Data',
    },
    [Routes.Page3]: {
        path: '/page3',
        title: 'Page3',
        description: 'Page3 page',
        element: Page3Page,
        isStatic: false,
        loadData: 'getPage3Data',
    },
    [Routes.NotFound]: {
        path: NOT_FOUND_ROUTE,
        title: 'Not Found',
        description: 'Nothing is found',
        element: NotFoundPage,
        isStatic: true,
    },
    [Routes.Default]: {
        path: '*',
        title: 'Not Found',
        description: 'Nothing is found',
        element: NotFoundPage,
        isStatic: true,
    },
};

if (__DEV__ && module.hot) {
    // eslint-disable-next-line node/no-missing-require, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const noop = require('common/utils/functions/noop') as () => void;

    module.hot.accept('../pages/HomePage', noop);
    module.hot.accept('../pages/Page1Page', noop);
    module.hot.accept('../pages/Page2Page', noop);
    module.hot.accept('../pages/Page3Page', noop);
    module.hot.accept('../pages/NotFoundPage', noop);
}
