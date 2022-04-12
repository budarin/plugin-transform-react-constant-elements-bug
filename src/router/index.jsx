import { NOT_FOUND_ROUTE } from '../utils/notFoundRoute';

import HomePage from '../pages/HomePage';
import Page1Page from '../pages/Page1Page';
import Page2Page from '../pages/Page2Page';
import Page3Page from '../pages/Page3Page';
import NotFoundPage from '../pages/NotFoundPage';

export const Routes = {
    Home: 'Home',
    Page1: 'Page1',
    Page2: 'Page2',
    Page3: 'Page3',
    NotFound: 'NotFound',
    Default: 'Default',
};

export const router = {
    [Routes.Home]: {
        path: '/',
        title: 'Home',
        description: 'Home page',
        element: HomePage,
    },
    [Routes.Page1]: {
        path: '/page1',
        title: 'Page1',
        description: 'Page1 page',
        element: Page1Page,
    },
    [Routes.Page2]: {
        path: '/page2',
        title: 'Page2',
        description: 'Page2 page',
        element: Page2Page,
    },
    [Routes.Page3]: {
        path: '/page3',
        title: 'Page3',
        description: 'Page3 page',
        element: Page3Page,
    },
    [Routes.NotFound]: {
        path: NOT_FOUND_ROUTE,
        title: 'Not Found',
        description: 'Nothing is found',
        element: NotFoundPage,
    },
    [Routes.Default]: {
        path: '*',
        title: 'Not Found',
        description: 'Nothing is found',
        element: NotFoundPage,
    },
};
