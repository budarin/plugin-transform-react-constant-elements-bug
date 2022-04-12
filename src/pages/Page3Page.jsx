import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page3Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page3" */ '../containers/pages/Page3'),
    <LoadingFallback component={<h2>Загрузка Page3 ...</h2>} />,
);

export default Page3Page;
