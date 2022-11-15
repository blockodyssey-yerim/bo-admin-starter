import { useEffect, useRef } from 'react';

const useTimeout = () => {
    const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleDelay = (callback: () => void, delay = 300) => {
        timerId.current = setTimeout(() => callback(), delay);
    };

    useEffect(() => {
        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current);
            }
        };
    }, []);

    return handleDelay;
};

export default useTimeout;
