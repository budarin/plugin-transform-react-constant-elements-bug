import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import css from './page1.css';

interface IUseAppStoreResult {
    props: Partial<IAppState>;
    actions?: Record<string, unknown>;
    dispatch: IDispatch;
}

interface IPage1 {
    pageData: IUseAppStoreResult;
}

// eslint-disable-next-line max-lines-per-function
const Page1: React.FC<IPage1> = () => {
    useEffect(() => {
        document.title = 'Page 1';
    }, []);

    return (
        <React.Fragment key="page1">
            <h2 className={css.page1}>Page 1</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/page2">Page 2</Link>
            <br />
            <Link to="/page3">Page 3</Link>
            <br />
            <Link to="/dasdad">Not Found</Link>
        </React.Fragment>
    );
};

export default Page1;
