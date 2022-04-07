import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page2Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page2" */ '../components/Page2'),
    <LoadingFallback component={<h2>Загрузка Page2 ...</h2>} />,
);

Page2Page.displayName = 'Page2Page';

export default Page2Page;
