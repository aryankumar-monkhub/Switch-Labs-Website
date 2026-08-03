import React, { useState, useEffect } from 'react';
import { feature } from 'topojson-client';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { useTheme } from '../context/ThemeContext';

// Using a TopoJSON file that represents Indian states with detailed boundaries
// This file is stored locally in the public folder for reliable access
const geoUrl = "/india-states.json";

const routes = [
    { name: 'Sirohi ↔ Kalol', start: 'Sirohi', end: 'Kalol', distance: '240 km', trucks: '25', routeDescription: 'Sirohi to Kalol', coordinates: [[72.858894, 24.882618], [72.6186, 23.0338]] },
    { name: 'Ankaleshwar ↔ Jhagadia', start: 'Ankaleshwar', end: 'Jhagadia', distance: '20 km', trucks: '4', routeDescription: 'Ankaleshwar to Jhagadia', coordinates: [[72.99001, 21.63236], [73.151009, 21.719477]] },
    { name: 'Kalamboli ↔ Khopoli', start: 'Kalamboli', end: 'Khopoli', distance: '40 km', trucks: '8', routeDescription: 'Kalamboli to Khopoli', coordinates: [[73.1012, 19.0328], [73.34589, 18.78562]] },
    { name: 'Dalmiapuram ↔ Karaikal Port', start: 'Dalmiapuram', end: 'Karaikal Port', distance: '140 km', trucks: '24', routeDescription: 'Dalmiapuram to Karaikal Port', coordinates: [[78.95250, 10.97667], [79.8573, 10.8327]] },
    { name: 'Ahiwara ↔ Adani Raipur', start: 'Ahiwara', end: 'Adani Raipur', distance: '80 km', trucks: '4', routeDescription: 'Ahiwara to Adani Raipur', coordinates: [[81.412346, 21.356577], [81.629997, 21.250000]] },
];

const CorridorMap = () => {
    const { theme } = useTheme();
    const [statesData, setStatesData] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;
    const isLargeTablet = width > 1024 && width <= 1368;

    useEffect(() => {
        fetch(geoUrl)
            .then(res => res.json())
            .then(topojson => {
                const states = feature(topojson, topojson.objects.states);
                setStatesData(states);
            })
            .catch(err => console.error('Failed to load map data:', err));
    }, []);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="our-corridors" style={{ padding: isMobile ? '2rem 0' : '4rem 0' }}>
            <div className="container" style={{ padding: isMobile ? '0 1rem' : undefined }}>
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: isSmallPhone ? '1.5rem' : isMobile ? '1.8rem' : isTablet ? '2.4rem' : isLargeTablet ? '2.6rem' : '3rem', marginBottom: '0.5rem', marginTop: '1.5rem', color: theme === 'light' ? '#1A1C1E' : '#ffffff' }}>Connecting India's <span style={{ color: '#4CA3FF' }}>Industrial Hubs</span></h2>
                    <p style={{ color: theme === 'light' ? '#1A1C1E' : '#ffffff', fontSize: isSmallPhone ? '0.95rem' : '1.1rem' }}>Operational routes optimized for heavy-duty loop utilization.</p>
                </div>

                <div className="grid-corridor" style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isLargeTablet ? '1.6fr 1fr' : '1.8fr 1fr',
                    gap: isMobile ? '2rem' : isLargeTablet ? '2.5rem' : '3rem',
                    alignItems: 'center'
                }}>
                    {/* Interactive Map Container */}
                    <div className="glass map-container border-heavy" style={{
                        padding: '0',
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: isMobile ? '260px' : isLargeTablet ? '340px' : undefined,
                    }}>
                        {/* Map Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            zIndex: 10,
                            background: 'var(--color-primary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            border: 'var(--border-industrial)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-white)', fontWeight: 600 }}>Pan-India Network</span>
                        </div>

                        <div style={isMobile ? {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) scale(${isSmallPhone ? 0.3 : 0.38})`,
                            width: '700px',
                            height: '500px',
                        } : {
                            width: '100%',
                            height: '100%',
                        }}>
                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{ scale: 750, center: [82, 21] }}
                            width={700}
                            height={500}
                            style={{ width: "100%", height: "100%", display: 'block' }}
                        >
                            {statesData && (
                            <Geographies geography={statesData}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#ffffff"
                                        stroke="rgba(0,0,0,0.15)"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { fill: "#ffffff", outline: "none", stroke: "rgba(0,0,0,0.15)", strokeWidth: 0.5 },
                                            hover: { fill: "#f0f0f0", outline: "none", stroke: "rgba(0,0,0,0.25)", strokeWidth: 0.7 },
                                            pressed: { fill: "#ffffff", outline: "none" }
                                        }}
                                        />
                                    ))
                                }
                            </Geographies>
                            )}

                            {routes.map((route, i) => {
                                const isLeft = i < 3;
                                const isAbove = i === 0;
                                const isRoute2 = i === 2;
                                const boxWidth = 180;
                                const boxX = isLeft ? -195 : (i === 4 ? 165 : 180);
                                const lineX = isLeft ? [-105, -70, 0][i] : (i === 4 ? 255 : 270);
                                const yOff = isLeft ? [-130, 60, 110][i] : 20;
                                const lineY = isAbove ? yOff + 76 : yOff;

                                const boxCenterY = yOff + 31;
                                const boxRightEdge = boxX + boxWidth;
                                const pathD = isRoute2 ? `M 0,-6 L 0,${boxCenterY} L ${boxRightEdge},${boxCenterY}` : `M 0,-6 L ${lineX},-6 L ${lineX},${lineY}`;
                                let arrowPoints;
                                if (isRoute2) {
                                    arrowPoints = `${boxRightEdge+5},${boxCenterY-4} ${boxRightEdge+5},${boxCenterY+4} ${boxRightEdge},${boxCenterY}`;
                                } else if (isAbove) {
                                    arrowPoints = `${lineX-4},${lineY+5} ${lineX+4},${lineY+5} ${lineX},${lineY}`;
                                } else {
                                    arrowPoints = `${lineX-4},${lineY-5} ${lineX+4},${lineY-5} ${lineX},${lineY}`;
                                }

                                return (
                                <React.Fragment key={i}>
                                    <Marker coordinates={route.coordinates[0]}>
                                        {/* Pin */}
                                        <g transform="translate(-6, -12)">
                                            <title>{route.start}</title>
                                            <path d="M6 0C2.7 0 0 2.7 0 6c0 3.3 6 10 6 10s6-6.7 6-10c0-3.3-2.7-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#ef4444" />
                                            <circle cx="6" cy="6" r="2" fill="#fff" />
                                        </g>
                                        {/* Connecting line with arrow */}
                                        <path d={pathD} stroke="var(--color-accent)" strokeWidth={1} fill="none" opacity="1" strokeLinejoin="round" />
                                        <polygon points={arrowPoints} fill="var(--color-accent)" opacity="1" />
                                        {/* Info box */}
                                        <g transform={`translate(${boxX}, ${yOff})`}>
                                            <rect width={boxWidth} height="76" rx="4" ry="4" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                                            <text x="8" y="16" fill="var(--color-accent)" fontSize="10" fontFamily="Montserrat, sans-serif" fontWeight="700">{route.name}</text>
                                            <g transform="translate(8, 23)">
                                                <path d="M1 4 L5 1 L9 4 M5 1 L5 9" stroke="#60a5fa" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <text x="20" y="30" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">Distance: {route.distance}</text>
                                            <g transform="translate(8, 37)">
                                                <rect x="1" y="2" width="7" height="4" rx="0.5" stroke="#fbbf24" strokeWidth="1" fill="none" />
                                                <rect x="0" y="3" width="2" height="3" rx="0.3" stroke="#fbbf24" strokeWidth="1" fill="none" />
                                                <circle cx="2.5" cy="7" r="1" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
                                                <circle cx="6.5" cy="7" r="1" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
                                            </g>
                                            <text x="20" y="46" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">No. of Trucks: {route.trucks}</text>
                                            <g transform="translate(8, 51)">
                                                <path d="M4 0 C1.5 0 0 2 0 4.5 C0 7 4 9.5 4 9.5 C4 9.5 8 7 8 4.5 C8 2 6.5 0 4 0Z" stroke="#a78bfa" strokeWidth="1" fill="none" />
                                                <circle cx="4" cy="4.5" r="1.2" fill="#a78bfa" />
                                            </g>
                                            <text x="20" y="60" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">Route: {route.routeDescription}</text>
                                        </g>
                                    </Marker>
                                </React.Fragment>
                                );
                            })}

                            {/* Sirohi ↔ Balaram Card with connecting line */}
                            <Marker coordinates={[72.858894, 24.882618]}>
                                <path d="M 0,-6 L 210,-6 L 210,-74" stroke="var(--color-accent)" strokeWidth={1} fill="none" strokeLinejoin="round" />
                                <polygon points="206,-69 214,-69 210,-74" fill="var(--color-accent)" />
                                <g transform="translate(120, -150)">
                                    <rect width={180} height="76" rx="4" ry="4" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                                    <text x="8" y="16" fill="var(--color-accent)" fontSize="10" fontFamily="Montserrat, sans-serif" fontWeight="700">Sirohi ↔ Balaram</text>
                                    <g transform="translate(8, 23)">
                                        <path d="M1 4 L5 1 L9 4 M5 1 L5 9" stroke="#60a5fa" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <text x="20" y="30" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">Distance: 70 km</text>
                                    <g transform="translate(8, 37)">
                                        <rect x="1" y="2" width="7" height="4" rx="0.5" stroke="#fbbf24" strokeWidth="1" fill="none" />
                                        <rect x="0" y="3" width="2" height="3" rx="0.3" stroke="#fbbf24" strokeWidth="1" fill="none" />
                                        <circle cx="2.5" cy="7" r="1" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
                                        <circle cx="6.5" cy="7" r="1" stroke="#fbbf24" strokeWidth="0.8" fill="none" />
                                    </g>
                                    <text x="20" y="46" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">No. of Trucks: 1</text>
                                    <g transform="translate(8, 51)">
                                        <path d="M4 0 C1.5 0 0 2 0 4.5 C0 7 4 9.5 4 9.5 C4 9.5 8 7 8 4.5 C8 2 6.5 0 4 0Z" stroke="#a78bfa" strokeWidth="1" fill="none" />
                                        <circle cx="4" cy="4.5" r="1.2" fill="#a78bfa" />
                                    </g>
                                    <text x="20" y="60" fill="#ffffff" fontSize="9" fontFamily="Inter, sans-serif">Route: Sirohi to Balaram</text>
                                </g>
                            </Marker>
                        </ComposableMap>
                        </div>

                        {/* Overlay Gradient - desktop only */}
                        {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 70% 30%, transparent 60%, rgba(0,0,0,0.6))',
                            pointerEvents: 'none'
                        }} />
                        )}


                    </div>

                    {/* Stats & Growth */}
                    <div className="stats-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '4px', height: '24px', background: 'var(--color-accent)', borderRadius: '2px', display: 'block' }}></span>
                                Implementation Roadmap
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', lineHeight: 1 }}>6</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Routes Live Today
                                    </div>
                                </div>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', lineHeight: 1 }}>10+</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Planned for 2026-27
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorridorMap;
