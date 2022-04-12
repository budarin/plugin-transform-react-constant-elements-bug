import { lazyComponentBabel } from '../components/LazyComponent';
import LoadingFallback from '../components/LazyComponent/LoadingFallback';

const HomePage = lazyComponentBabel(
    () => import(/* webpackChunkName: "page.Home" */ '../containers/pages/Home'),
    <LoadingFallback component={<h2>Загрузка Home ...</h2>} />,
);


export default HomePage;
