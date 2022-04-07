import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    useEffect(() => {
        document.title = 'Nothing is found !';
    }, []);

    return (
        <React.Fragment key="notFound">
            <h2>Nothing is Found</h2>
            <Link to="/">Go to Home</Link>
        </React.Fragment>
    );
};

export default NotFoundPage;
