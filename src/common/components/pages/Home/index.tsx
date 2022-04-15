import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import css from './home.css';

const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <React.Fragment key="home">
            <h2 className={css.home}>Home!</h2>

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
