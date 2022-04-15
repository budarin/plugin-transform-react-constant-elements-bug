import Page2 from 'common/components/pages/Page2';

const Page2Container: React.FC = (): JSX.Element => {
    return <Page2 />;
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default Page2Container;
