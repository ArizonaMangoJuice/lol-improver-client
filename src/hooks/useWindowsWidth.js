import { useEffect, useState } from 'react';

export const useWindowsWidth = () => {
    const [windowWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 0);
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.addEventListener("resize", resizeListener);
        }
    }, [windowWidth])

    return windowWidth;
}