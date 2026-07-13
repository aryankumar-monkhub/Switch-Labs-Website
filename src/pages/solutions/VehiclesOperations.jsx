import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const VehiclesOperations = () => {
    const { theme } = useTheme();
    const features = [
        {
            icon: <Truck size={40} />,
            title: 'Fleet Management',
            stats: [
                '55-ton tractor fleet',
                '1hr Charging',
                '155,000+ km proven',
                '150-180+ Km'
            ]
        },
        {
            icon: <Zap size={40} />,
            title: 'Vehicle Specifications',
            stats: [
                'IPL Tech (258-282 kWh)',
                'Energy in Motion (282 kWh)',
                'Tata Motors (301-450 kWh)',
                'Swappable battery tech'
            ]
        },
        {
            icon: <Shield size={40} />,
            title: 'Operations Excellence',
            stats: [
                '24/7 fleet monitoring',
                'Predictive maintenance',
                'Real-time optimization',
                'Driver training programs'
            ]
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Service Models',
            stats: [
                'Pay-per-ton pricing',
                'Pay-per-km pricing',
                'Fixed monthly rentals',
                'Custom enterprise SLAs'
            ]
        }
    ];


    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            {/* Hero Section */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem', paddingTop: '2rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        Full-Stack EV-as-a-Service
                    </h1>
                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        We own, operate, and maintain the fleet. You focus on your core business while we deliver zero-emission logistics.
                    </p>
                </div>

                {/* Key Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem',
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                transition: 'var(--transition-smooth)',
                                cursor: 'pointer',
                                background: (index === 0 || index === 2) 
                                    ? (theme === 'light' 
                                        ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                                        : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)')
                                    : (index === 1 || index === 3)
                                        ? (theme === 'light'
                                            ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.08) 100%)'
                                            : 'linear-gradient(135deg, rgba(0, 100, 0, 0.4) 0%, rgba(0, 100, 0, 0.2) 100%)')
                                        : 'var(--color-card-bg)',
                                border: (index === 0 || index === 2) 
                                    ? (theme === 'light' 
                                        ? '1px solid rgba(21, 83, 148, 0.5)'
                                        : '1px solid rgba(76, 163, 255, 0.3)')
                                    : (index === 1 || index === 3)
                                        ? (theme === 'light'
                                            ? '1px solid rgba(0, 80, 0, 0.5)'
                                            : '1px solid rgba(0, 255, 136, 0.4)')
                                        : 'none',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.2)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ color: (index === 0 || index === 2) ? (theme === 'light' ? '#155394' : '#4CA3FF') : (index === 1 || index === 3) ? (theme === 'light' ? '#059669' : '#00ff88') : 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                color: 'var(--color-white)',
                                marginBottom: '1.5rem',
                            }}>
                                {feature.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {feature.stats.map((stat, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '0.95rem',
                                    }}>
                                        <CheckCircle size={16} color="var(--color-accent)" />
                                        {stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Service Models Section */}
                {/* CTA Section */}
                <div
                    className="glass"
                    style={{
                        padding: '4rem 3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                    }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'var(--color-white)',
                        marginBottom: '1rem',
                    }}>
                        Ready to Transform Your Fleet?
                    </h2>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/contact"
                            className="cta-button"
                            style={{
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 0 30px var(--color-accent-glow)',
                                transition: 'var(--transition-smooth)',
                            }}
                        >
                            Schedule Assessment
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehiclesOperations;
