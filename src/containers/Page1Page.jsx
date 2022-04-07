import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page1Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page1" */ '../components/Page1'),
    <LoadingFallback component={<h2>Загрузка Page1 ...</h2>} />,
);

Page1Page.displayName = 'Page1Page';

export default Page1Page;
