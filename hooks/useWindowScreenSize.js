import { useState, useEffect } from 'react';

const useWindowScreenSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // window.addEventListener('resize', () => console.log('Trigger resize'));

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [])

    return [width, height];
}

export default useWindowScreenSize