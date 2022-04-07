import { useEffect, useState } from 'react';

const LoadingFallback = ({ timeout = 250, component = null }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [setShow, timeout]);

    return show ? component : null;
};

export default LoadingFallback;
