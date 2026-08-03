import React, { useState, useEffect } from 'react';
import CorridorMap from '../../components/CorridorMap';

const OperationalCorridors = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ paddingTop: isMobile ? '60px' : '80px' }}>
            <CorridorMap />
        </div>
    );
};

export default OperationalCorridors;
