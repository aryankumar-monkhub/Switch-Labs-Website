import React from 'react';
import { motion } from 'framer-motion';

const CorridorMap = () => {
    const routes = [
        { name: 'Sirohi ↔ Kalol', x: 25, y: 40 },
        { name: 'Ankaleshwar ↔ Jhagadia', x: 23, y: 55 },
        { name: 'Kalamboli ↔ Khopoli', x: 22, y: 65 },
        { name: 'Dalmiapuram ↔ Karaikal Port', x: 35, y: 88 },
        { name: 'Ahiwara ↔ Adani Raipur', x: 55, y: 55 },
    ];

    return (
        <section id="our-corridors">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Connecting India’s <span style={{ color: 'var(--color-accent)' }}>Industrial Hubs</span></h2>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>Operational routes optimized for heavy-duty loop utilization.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="corridor-grid">
                    {/* Interactive SVG Map */}
                    <div className="glass map-container border-heavy" style={{
                        padding: '2rem',
                        aspectRatio: '1/1.2',
                        position: 'relative',
                        background: 'rgba(0,0,0,0.5)',
                        overflow: 'hidden'
                    }}>
                        {/* Simple India Outline Placeholder (SVG) */}
                        <svg viewBox="0 0 100 120" style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                            <path d="M30,10 L45,5 L60,10 L70,30 L85,45 L80,60 L75,80 L65,100 L50,115 L35,100 L20,80 L10,60 L15,40 L20,20 Z" fill="none" stroke="var(--color-white)" strokeWidth="0.5" />
                        </svg>

                        {/* Pulsing Pins */}
                        {routes.map((route, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                left: `${route.x}%`,
                                top: `${route.y}%`,
                            }}>
                                <div
                                    className="animate-pulse-blue"
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--color-accent)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 15px var(--color-accent)',
                                    }}
                                />
                                <div className="route-tooltip" style={{
                                    position: 'absolute',
                                    left: '20px',
                                    top: '-10px',
                                    background: 'var(--color-primary)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    fontSize: '0.7rem',
                                    whiteSpace: 'nowrap',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    opacity: 0.8
                                }}>
                                    {route.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats & Growth */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Implementation Roadmap</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-accent)' }}>20</div>
                                    <div style={{ color: 'var(--color-grey-light)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>
                                        Trucks Operational Today
                                    </div>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--color-grey-dark)', paddingLeft: '1.5rem' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-white)' }}>60+</div>
                                    <div style={{ color: 'var(--color-grey-light)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>
                                        Trucks in Q3 2026 Pipeline
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            padding: '2rem',
                            background: 'var(--color-accent-glow)',
                            border: '1px solid var(--color-accent)',
                            borderRadius: '8px'
                        }}>
                            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>
                                "Switch Labs has optimized our core corridors, reducing turnaround time by 12% through intelligent swapping logic."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorridorMap;
