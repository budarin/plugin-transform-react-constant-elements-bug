import NotFound from 'common/components/pages/NotFoundPage';

const NotFoundPageContainer: React.FC = (): JSX.Element => {
    return <NotFound />;
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default NotFoundPageContainer;
