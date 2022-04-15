import { useEffect, useState } from 'react';

interface ILoading {
    timeout?: number;
    component?: JSX.Element | null;
}

const LoadingFallback = ({ timeout = 250, component = null }: ILoading): JSX.Element | null => {
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
