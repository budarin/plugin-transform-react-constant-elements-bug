import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <React.Fragment key="page1">
            <h2>Page 1</h2>
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
