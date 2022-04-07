import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
    useEffect(() => {
        document.title = 'Page 2';
    }, []);

    return (
        <React.Fragment key="page2">
            <h2>Page 2</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/page1">Page 1</Link>
            <br />
            <Link to="/page3">Page 3</Link>
            <br />
            <Link to="/dasdad">Not Found</Link>
        </React.Fragment>
    );
};

export default Page2;
