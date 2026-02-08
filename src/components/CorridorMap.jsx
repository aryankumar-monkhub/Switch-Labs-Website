import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

// Using a GeoJSON that represents Indian states with detailed boundaries
// This file is stored locally in the public folder for reliable access
const geoUrl = "/india-states.json";

const routes = [
    { name: 'Sirohi ↔ Kalol', coordinates: [[72.858894, 24.882618], [72.6186, 23.0338]], zoom: 12, center: [72.7, 24], caseStudyId: 'jk-lakshmi-sirohi-kalol' },
    { name: 'Ankaleshwar ↔ Jhagadia', coordinates: [[72.99001, 21.63236], [73.151009, 21.719477]], zoom: 14, center: [73.05, 21.68], caseStudyId: 'upl-ankleshwar-jageria' },
    { name: 'Kalamboli ↔ Khopoli', coordinates: [[73.1012, 19.0328], [73.34589, 18.78562]], zoom: 14, center: [73.2, 18.9] },
    { name: 'Dalmiapuram ↔ Karaikal Port', coordinates: [[78.95250, 10.97667], [79.8573, 10.8327]], zoom: 12, center: [79.4, 10.9] },
    { name: 'Ahiwara ↔ Adani Raipur', coordinates: [[81.412346, 21.356577], [81.629997, 21.250000]], zoom: 13, center: [81.5, 21.3], caseStudyId: 'jk-lakshmi-ahirwara-adani' },
];

const CorridorMap = () => {
    // Start with a full view of India
    const [position, setPosition] = useState({ coordinates: [78, 22], zoom: 4 });
    const [activeRouteIndex, setActiveRouteIndex] = useState(null); // null means "overview"

    useEffect(() => {
        // Cycle through routes: Overview -> Route 0 -> Route 1 ... -> Overview
        let index = -1; // Start at overview

        const cycle = () => {
            index = (index + 1) % (routes.length + 1); // +1 for the overview state

            if (index === routes.length) {
                // Return to overview
                setActiveRouteIndex(null);
                setPosition({ coordinates: [78, 22], zoom: 4 });
            } else {
                // Zoom to specific route
                setActiveRouteIndex(index);
                const route = routes[index];
                setPosition({ coordinates: route.center, zoom: route.zoom });
            }
        };

        const interval = setInterval(cycle, 5000); // Change view every 5 seconds
        return () => clearInterval(interval);
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
                    gridTemplateColumns: '1.5fr 1fr',
                    gap: '3rem',
                    alignItems: 'center'
                }}>
                    {/* Interactive Map Container */}
                    <div className="glass map-container border-heavy" style={{
                        padding: '0', // Full bleed map
                        aspectRatio: '1.4/1',
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
                        borderRadius: '16px',
                        overflow: 'hidden', // Crucial for zoom clipping
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        {/* Map Title / Status Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            left: '1rem',
                            zIndex: 10,
                            background: 'rgba(15, 23, 42, 0.8)',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: activeRouteIndex !== null ? 'var(--color-accent)' : '#10b981' }} className={activeRouteIndex !== null ? "animate-pulse" : ""} />
                            <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>
                                {activeRouteIndex !== null ? routes[activeRouteIndex].name : "Pan-India Network View"}
                            </span>
                        </div>

                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                scale: 1000,
                            }}
                            width={800}
                            height={600}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <ZoomableGroup
                                zoom={position.zoom}
                                center={position.coordinates}
                            >
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#1e293b"
                                                stroke="#334155"
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { fill: "#1e293b", outline: "none" },
                                                    hover: { fill: "#334155", outline: "none" },
                                                    pressed: { fill: "#1e293b", outline: "none" }
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>

                                {/* Render ALL routes in dim mode, highlight active one */}
                                {routes.map((route, i) => {
                                    const isActive = activeRouteIndex === i;
                                    const isOverview = activeRouteIndex === null;
                                    const opacity = isActive || isOverview ? 1 : 0.2;

                                    return (
                                        <React.Fragment key={i}>
                                            <Line
                                                from={route.coordinates[0]}
                                                to={route.coordinates[1]}
                                                stroke="var(--color-accent)"
                                                strokeWidth={isActive ? 1 : 1.5} // Thinner line when zoomed in, thicker when out
                                                strokeLinecap="round"
                                                style={{
                                                    opacity,
                                                    transition: 'all 0.5s ease',
                                                    filter: isActive ? "drop-shadow(0 0 4px var(--color-accent))" : "none"
                                                }}
                                            />

                                            <Marker coordinates={route.coordinates[0]}>
                                                <circle r={isActive ? 0.3 : 2} fill="var(--color-accent)" style={{ opacity, transition: 'all 0.5s ease' }} />
                                            </Marker>
                                            <Marker coordinates={route.coordinates[1]}>
                                                <circle r={isActive ? 0.3 : 2} fill="var(--color-accent)" style={{ opacity, transition: 'all 0.5s ease' }} />
                                            </Marker>

                                            {/* Only show moving particle if Active or Overview */}
                                            {(isActive || isOverview) && (
                                                <AnimatedRouteMarker
                                                    from={route.coordinates[0]}
                                                    to={route.coordinates[1]}
                                                    duration={isActive ? 3 : 5} // Slower in overview
                                                    radius={isActive ? 0.4 : 2} // Scale size based on zoom level roughly
                                                />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </ZoomableGroup>
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
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)', lineHeight: 1 }}>20</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Routes Live Today
                                    </div>
                                </div>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)', lineHeight: 1 }}>60+</div>
                                    <div style={{ marginTop: '0.5rem', color: 'var(--color-grey)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Planned for Q3 2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Active Route Details (Dynamic) */}
                        <div className="testimonial glass" style={{
                            padding: '1.5rem',
                            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent)',
                            borderLeft: '4px solid var(--color-accent)',
                            borderRadius: '0 8px 8px 0',
                            minHeight: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeRouteIndex !== null ? activeRouteIndex : 'overview'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeRouteIndex !== null ? (
                                        <>
                                            <h4 style={{ color: 'var(--color-white)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                                                {routes[activeRouteIndex].name}
                                            </h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--color-grey-light)', lineHeight: '1.5', marginBottom: '1rem' }}>
                                                Currently optimizing turnaround times for heavy-duty freight on this corridor.
                                            </p>
                                            {routes[activeRouteIndex].caseStudyId && (
                                                <Link
                                                    to={`/case-studies/${routes[activeRouteIndex].caseStudyId}`}
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem',
                                                        color: 'var(--color-accent)',
                                                        textDecoration: 'none',
                                                        fontSize: '0.85rem',
                                                        fontWeight: '600',
                                                        transition: 'var(--transition-smooth)',
                                                    }}
                                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                                >
                                                    View Case Study →
                                                </Link>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-grey-light)', lineHeight: '1.6' }}>
                                                "Switch Labs has optimized our core corridors, reducing turnaround time by <span style={{ color: 'var(--color-white)', fontWeight: '600' }}>12%</span> through intelligent swapping logic."
                                            </p>
                                            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-grey)', fontWeight: '600' }}>
                                                — Logistics Head, Major Cement Manufacturer
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Component to animate a marker moving between two coordinates
const AnimatedRouteMarker = ({ from, to, duration, radius = 2 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => (p + 0.005) % 1); // Slower, smoother
        }, duration * 5);
        return () => clearInterval(interval);
    }, [duration]);

    // Simple linear interpolation
    const curLong = from[0] + (to[0] - from[0]) * progress;
    const curLat = from[1] + (to[1] - from[1]) * progress;

    return (
        <Marker coordinates={[curLong, curLat]}>
            <circle r={radius} fill="#fff" style={{ filter: 'drop-shadow(0 0 4px #fff)' }} />
        </Marker>
    );
};

export default CorridorMap;
