import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const NotFoundPage = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.NotFound" */ '../components/NotFound'),
    <LoadingFallback component={<h2>Загрузка NotFound ...</h2>} />,
);
NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
