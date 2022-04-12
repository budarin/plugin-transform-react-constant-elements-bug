import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page1Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page1" */ '../containers/pages/Page1'),
    <LoadingFallback component={<h2>Загрузка Page1 ...</h2>} />,
);

export default Page1Page;
