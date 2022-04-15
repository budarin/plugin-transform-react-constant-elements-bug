import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const Page3Page = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Page3" */ '../containers/pages/Page3'),
    <LoadingFallback component={<h2>Загрузка Page3 ...</h2>} />,
);

Page3Page.displayName = 'Page3Page';

export default Page3Page;
