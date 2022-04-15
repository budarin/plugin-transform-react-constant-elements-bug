import HomePage from 'common/components/pages/Home';

const HomePageContainer: React.FC = (): JSX.Element => {
    return <HomePage />;
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default HomePageContainer;
