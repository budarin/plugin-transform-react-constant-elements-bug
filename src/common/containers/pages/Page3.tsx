import Page3 from 'common/components/pages/Page3';

const Page3Container: React.FC = (): JSX.Element => {
    return <Page3 />;
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default Page3Container;
