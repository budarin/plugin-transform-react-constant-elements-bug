import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <React.Fragment key="home">
            <h2>Home page</h2>

            <Link to="/page1">Page 1</Link>
            <br />
            <Link to="/page2">Page 2</Link>
            <br />
            <Link to="/page3">Page 3</Link>
            <br />
            <Link to="/dasdad">Not Found</Link>
        </React.Fragment>
    );
};

export default HomePage;
