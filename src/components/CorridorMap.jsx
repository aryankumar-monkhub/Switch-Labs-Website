import React, { useState, useEffect } from 'react';
import { feature } from 'topojson-client';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';

// Using a TopoJSON file that represents Indian states with detailed boundaries
// This file is stored locally in the public folder for reliable access
const geoUrl = "/india-states.json";

const routes = [
    { name: 'Sirohi ↔ Kalol', start: 'Sirohi', end: 'Kalol', distance: '220 km', trucks: '15', routeDescription: 'Sirohi to Kalol', coordinates: [[72.858894, 24.882618], [72.6186, 23.0338]] },
    { name: 'Ankaleshwar ↔ Jhagadia', start: 'Ankaleshwar', end: 'Jhagadia', distance: '20 km', trucks: '4', routeDescription: 'Ankaleshwar to Jhagadia', coordinates: [[72.99001, 21.63236], [73.151009, 21.719477]] },
    { name: 'Kalamboli ↔ Khopoli', start: 'Kalamboli', end: 'Khopoli', distance: '50 km', trucks: '8', routeDescription: 'Kalamboli to Khopoli', coordinates: [[73.1012, 19.0328], [73.34589, 18.78562]] },
    { name: 'Dalmiapuram ↔ Karaikal Port', start: 'Dalmiapuram', end: 'Karaikal Port', distance: '280 km', trucks: '12', routeDescription: 'Dalmiapuram to Karaikal Port', coordinates: [[78.95250, 10.97667], [79.8573, 10.8327]] },
    { name: 'Ahiwara ↔ Adani Raipur', start: 'Ahiwara', end: 'Adani Raipur', distance: '45 km', trucks: '6', routeDescription: 'Ahiwara to Adani Raipur', coordinates: [[81.412346, 21.356577], [81.629997, 21.250000]] },
];

const CorridorMap = () => {
    const [statesData, setStatesData] = useState(null);

    useEffect(() => {
        fetch(geoUrl)
            .then(res => res.json())
            .then(topojson => {
                const states = feature(topojson, topojson.objects.states);
                setStatesData(states);
            })
            .catch(err => console.error('Failed to load map data:', err));
    }, []);

    return (
        <section id="our-corridors" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Connecting India’s <span style={{ color: 'var(--color-accent)' }}>Industrial Hubs</span></h2>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.1rem' }}>Operational routes optimized for heavy-duty loop utilization.</p>
                </div>

                <div className="grid-corridor" style={{
                    display: 'grid',
                    gridTemplateColumns: '1.8fr 1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Interactive Map Container */}
                    <div className="glass map-container border-heavy" style={{
                        padding: '0',
                        aspectRatio: '1.4/1',
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.08)'
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
                            gap: '0.5rem'
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-white)', fontWeight: 600 }}>Pan-India Network</span>
                        </div>

                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{ scale: 750, center: [82, 21] }}
                            width={700}
                            height={500}
                            style={{ width: "100%", height: "100%" }}
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
                                const lineY = isAbove ? yOff + 62 : yOff;

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
                                    <Line
                                        from={route.coordinates[0]}
                                        to={route.coordinates[1]}
                                        stroke="var(--color-accent)"
                                        strokeWidth={1.5}
                                        strokeLinecap="round"
                                    />
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
                                            <rect width={boxWidth} height="62" rx="4" ry="4" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                                            <text x="8" y="16" fill="var(--color-accent)" fontSize="10" fontFamily="Montserrat, sans-serif" fontWeight="700">{route.name}</text>
                                            <text x="8" y="30" fill="var(--color-grey-light)" fontSize="9" fontFamily="Inter, sans-serif">Distance: {route.distance}</text>
                                            <text x="8" y="42" fill="var(--color-grey-light)" fontSize="9" fontFamily="Inter, sans-serif">No. of Trucks: {route.trucks}</text>
                                            <text x="8" y="54" fill="var(--color-grey-light)" fontSize="9" fontFamily="Inter, sans-serif">Route: {route.routeDescription}</text>
                                        </g>
                                    </Marker>
                                    <Marker coordinates={route.coordinates[1]}>
                                        <circle r={4} fill="#ef4444" />
                                    </Marker>
                                </React.Fragment>
                                );
                            })}
                        </ComposableMap>

                        {/* Overlay Gradient */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(circle at 70% 30%, transparent 60%, rgba(0,0,0,0.6))',
                            pointerEvents: 'none'
                        }} />
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
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', lineHeight: 1 }}>20</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Routes Live Today
                                    </div>
                                </div>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', lineHeight: 1 }}>60+</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Planned for Q3 2026
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
