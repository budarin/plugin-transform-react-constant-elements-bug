import {} from '@budarin/use-react-redux';

import { useAppStore } from '../AppStore';
import Page1 from 'common/components/pages/Page1';
import { page1DataSelector } from 'common/redux/selectors/page1DataSelector';

const Page1Container: React.FC = (): JSX.Element => {
    const pageData = useAppStore({ selector: page1DataSelector });

    return <Page1 pageData={pageData} />;
};

if (__DEV__) {
    module.hot && module.hot.accept();
}

export default Page1Container;
