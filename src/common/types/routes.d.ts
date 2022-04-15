import type { matchPath } from 'react-router-dom';
import type { AppRouteProps } from 'common/router';

declare interface RouterEvent extends matchPath {
    route: string;
    description: AppRouteProps;
}
