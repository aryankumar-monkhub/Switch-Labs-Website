import React from 'react';
import CorridorMap from '../../components/CorridorMap';
import { useTheme } from '../../context/ThemeContext';

const OperationalCorridors = () => {
    const { theme } = useTheme();
    return (
        <div style={{ paddingTop: '80px' }}>
            <CorridorMap darkText={true} accentColor={theme === 'light' ? '#4CA3FF' : '#00ff88'} />
        </div>
    );
};

export default OperationalCorridors;
