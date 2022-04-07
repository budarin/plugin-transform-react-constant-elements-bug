import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page3 = () => {
    useEffect(() => {
        document.title = 'Page 3';
    }, []);

    return (
        <React.Fragment key="page3">
            <h2>Page 3</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/page1">Page 1</Link>
            <br />
            <Link to="/page2">Page 2</Link>
            <br />
            <Link to="/dasdad">Not Found</Link>
        </React.Fragment>
    );
};

export default Page3;
