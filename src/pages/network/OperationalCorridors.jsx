import React, { useState, useEffect } from 'react';
import CorridorMap from '../../components/CorridorMap';
import { useTheme } from '../../context/ThemeContext';

const OperationalCorridors = () => {
    const { theme } = useTheme();
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ paddingTop: isMobile ? '60px' : '80px' }}>
            <CorridorMap darkText={true} accentColor={theme === 'light' ? '#4CA3FF' : '#00ff88'} />
        </div>
    );
};

export default OperationalCorridors;
