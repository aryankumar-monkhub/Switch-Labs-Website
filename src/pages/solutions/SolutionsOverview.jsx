import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SolutionsOverview = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ minHeight: '100vh', paddingTop: isMobile ? '6rem' : '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: isSmallPhone ? '1.8rem' : isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem', marginBottom: '1rem' }}>
                        The SwitchLabs <span style={{ color: 'var(--color-accent)' }}>Transformation Stack</span>
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: isSmallPhone ? '1rem' : '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Integrated solutions for a zero-emission industrial future. Full-stack EV transformation for heavy-duty freight.
                    </p>
                </div>

                {/* Solution Pillars Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '2rem', marginTop: '4rem' }}>
                    <Link
                        to="/solutions/vehicles-operations"
                        className="glass border-heavy white-card-border"
                        style={{
                            padding: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: isSmallPhone ? '2rem' : '3rem', marginBottom: '1rem' }}>🚛</div>
                        <h3 style={{ fontSize: isSmallPhone ? '1.3rem' : '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Vehicles & Operations
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            End-to-end Electric Truck-as-a-Service—from vehicle deployment to fleet operations.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>

                    <Link
                        to="/solutions/infrastructure"
                        className="glass border-heavy white-card-border"
                        style={{
                            padding: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: isSmallPhone ? '2rem' : '3rem', marginBottom: '1rem' }}>⚡</div>
                        <h3 style={{ fontSize: isSmallPhone ? '1.3rem' : '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Infrastructure
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            State-of-the-art charging and swapping stations optimized for industrial loop utilization.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>

                    <Link
                        to="/solutions/intelligence"
                        className="glass border-heavy white-card-border"
                        style={{
                            padding: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: isSmallPhone ? '2rem' : '3rem', marginBottom: '1rem' }}>🧠</div>
                        <h3 style={{ fontSize: isSmallPhone ? '1.3rem' : '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Intelligence Platform
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            Proprietary route optimization and energy management tech ensuring 24/7 uptime in heavy-duty cycles.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>

                </div>

                {/* CTA Section */}
                <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: isSmallPhone ? '1.3rem' : isMobile ? '1.5rem' : '2rem', marginBottom: '1.5rem' }}>
                        Ready to Transform Your Fleet?
                    </h3>
                    <Link to="/contact" className="button-primary">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SolutionsOverview;
