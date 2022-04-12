import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page2Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page2" */ '../containers/pages/Page2'),
    <LoadingFallback component={<h2>Загрузка Page2 ...</h2>} />,
);

export default Page2Page;
