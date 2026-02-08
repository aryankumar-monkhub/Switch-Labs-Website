import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsOverview = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        The Switch Labs <span style={{ color: 'var(--color-accent)' }}>Transformation Stack</span>
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Integrated solutions for a zero-emission industrial future. Full-stack EV transformation for heavy-duty freight.
                    </p>
                </div>

                {/* Solution Pillars Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '4rem' }}>
                    <Link
                        to="/solutions/vehicles-operations"
                        className="glass border-heavy"
                        style={{
                            padding: '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚛</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Vehicles & Operations
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            Full-stack EV-as-a-Service. We own, operate, and maintain the 55T tractor fleet so you don't have to.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>

                    <Link
                        to="/solutions/infrastructure"
                        className="glass border-heavy"
                        style={{
                            padding: '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
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
                        className="glass border-heavy"
                        style={{
                            padding: '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Intelligence Platform
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            Proprietary route optimization and energy management tech ensuring 24/7 uptime in heavy-duty cycles.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>

                    <Link
                        to="/solutions/financing"
                        className="glass border-heavy"
                        style={{
                            padding: '3rem',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            color: 'inherit',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                            Financing Options
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7' }}>
                            Flexible financial models and ROI calculators to make your EV transition seamless and cost-effective.
                        </p>
                        <div style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                            Learn More →
                        </div>
                    </Link>
                </div>

                {/* CTA Section */}
                <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
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
