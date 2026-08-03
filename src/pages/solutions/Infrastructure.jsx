import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Battery, MapPin, Gauge, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Infrastructure = () => {
    const { theme } = useTheme();
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const chargingTypes = [
        {
            icon: <Zap size={40} />,
            title: 'Fast DC Charging',
            power: '120-180 kW',
            features: [
                'CCS2 standard compatibility',
                '80% charge in 90 minutes',
                'Smart load management',
                'Grid-optimized scheduling'
            ]
        },
        {
            icon: <Battery size={40} />,
            title: 'Ultra-Fast Charging',
            power: '240+ kW',
            features: [
                'Rapid turnaround time',
                '80% charge in 60 minutes',
                'High-power dispensers',
                'Priority fleet access'
            ]
        },
        {
            icon: <Gauge size={40} />,
            title: 'Battery Swapping',
            power: '5-minute swap',
            features: [
                'Modular 258-350 kWh packs',
                'Automated swap systems',
                'Real-time health monitoring',
                'Zero downtime operations'
            ]
        },
    ];

    const locations = [
        {
            state: 'Rajasthan',
            stations: [
                {
                    name: 'J.K. Puram Hub',
                    chargers: '1x 180 kW',
                    features: ['Dual Gun GB/T Chargers', '1.5 Hr Charging Time', '24/7 Operation'],
                    uptime: '99.7%'
                }
            ]
        },
        {
            state: 'Gujarat',
            stations: [
                {
                    name: 'Jhagadia Hub',
                    chargers: '1x 240 kW',
                    features: ['Dual Gun CCS2 Charger', '1 Hr Charging Time', '24/7 Operation', 'In-plant installation'],
                    uptime: '99.6%'
                },
                {
                    name: 'Mehsana',
                    chargers: '2x 240 kW',
                    features: ['Dual Gun CCS2 Charger', '1 Hr Charging Time', '24/7 Operation', 'Driver Amenities'],
                    uptime: '99.8%'
                },
                {
                    name: 'Amirgarh',
                    chargers: '2x 240 kW',
                    features: ['Dual Gun CCS2 Charger', '1 Hr Charging Time', '24/7 Operation', 'Driver Amenities'],
                    uptime: '99.8%'
                }
            ]
        },
        {
            state: 'Chhattisgarh',
            stations: [
                {
                    name: 'Ahirwara Charging Point',
                    chargers: '1x 240 kW',
                    features: ['Dual Gun CCS2 Charger', '1 Hr Charging Time', '24/7 Operation', 'In-plant installation'],
                    uptime: '99.4%'
                }
            ]
        }
    ];

    const installationSteps = [
        {
            step: '1',
            title: 'Site Assessment',
            description: 'Comprehensive evaluation of location, power availability, and operational requirements',
            duration: '1-2 weeks'
        },
        {
            step: '2',
            title: 'Design & Planning',
            description: 'Custom infrastructure design, electrical engineering, and permit applications',
            duration: '2-3 weeks'
        },
        {
            step: '3',
            title: 'Installation',
            description: 'Grid connection, charger installation, and safety systems commissioning',
            duration: '4-6 weeks'
        },
        {
            step: '4',
            title: 'Testing & Handover',
            description: 'Comprehensive testing, staff training, and 24/7 monitoring activation',
            duration: '1 week'
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: isMobile ? '6rem' : '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: isSmallPhone ? '0 1rem' : '0 2rem' }}>
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem', paddingTop: '3rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        Charging Infrastructure Built for Industrial Scale
                    </h1>
                    <p style={{
                        fontSize: isSmallPhone ? '1rem' : '1.35rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Strategic charging and swapping stations optimized for maximum uptime and minimal downtime.
                    </p>
                </div>

                {/* Charging Types Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isSmallPhone ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem',
                }}>
                    {chargingTypes.map((type, index) => (
                        <div
                            key={index}
                            className="glass industrial-card"
                            style={{
                                padding: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '2.5rem',
                                transition: 'var(--transition-smooth)',
                                background: theme === 'light' 
                                    ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)',
                                border: `1px solid ${theme === 'light' ? '#155394' : '#4CA3FF'}`,
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
                            <div style={{ color: theme === 'light' ? '#155394' : '#4CA3FF', marginBottom: '1.5rem' }}>
                                {type.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                color: 'var(--color-white)',
                                marginBottom: '0.5rem',
                            }}>
                                {type.title}
                            </h3>
                            <div style={{
                                fontSize: '1.25rem',
                                color: theme === 'light' ? '#155394' : '#4CA3FF',
                                fontWeight: '700',
                                marginBottom: '1.5rem',
                            }}>
                                {type.power}
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {type.features.map((feature, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '0.95rem',
                                    }}>
                                        <CheckCircle size={16} color="var(--color-accent)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Network Coverage Section */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Network Coverage
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Strategic locations across major industrial corridors
                        </p>
                    </div>

                    {locations.map((location, index) => (
                        <div key={index} style={{ marginBottom: '3rem' }}>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.3rem' : '1.75rem',
                                fontWeight: '800',
                                color: theme === 'light' ? '#155394' : 'var(--color-accent)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                            }}>
                                <MapPin size={28} />
                                {location.state}
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isSmallPhone ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))',
                                gap: '1.5rem',
                            }}>
                                {location.stations.map((station, idx) => (
                                    <div
                                        key={idx}
                                        className="glass border-heavy industrial-card"
                                        style={{ 
                                            padding: '2rem', 
                                            background: theme === 'light' 
                                                ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                                                : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)',
                                            border: `1px solid ${theme === 'light' ? '#155394' : '#4CA3FF'}`,
                                        }}
                                    >
                                        <h4 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            color: 'var(--color-white)',
                                            marginBottom: '1rem',
                                        }}>
                                            {station.name}
                                        </h4>
                                        <div className="charger-badge" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '1rem',
                                            padding: '0.75rem',
                                            borderRadius: '6px',
                                        }}>
                                            <Zap size={20} color={theme === 'light' ? '#155394' : '#4CA3FF'} />
                                            <span style={{
                                                color: theme === 'light' ? '#155394' : '#4CA3FF',
                                                fontWeight: '700',
                                                fontSize: '0.95rem',
                                            }}>
                                                {station.chargers}
                                            </span>
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
                                            {station.features.map((feature, fidx) => (
                                                <li key={fidx} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    marginBottom: '0.5rem',
                                                    color: 'var(--color-text-secondary)',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    <CheckCircle size={14} color="var(--color-accent)" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            paddingTop: '1rem',
                                            borderTop: '1px solid var(--color-accent)',
                                        }}>
                                            <Clock size={16} color="var(--color-accent)" />
                                            <span style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--color-white)',
                                                fontWeight: '600',
                                            }}>
                                                Uptime: {station.uptime}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Installation Process */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: isSmallPhone ? '1.5rem' : isMobile ? '2rem' : '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Installation Process
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                    }}>
                        {installationSteps.map((item, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    position: 'relative',
                                background: theme === 'light' 
                                    ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                                    : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)',
                                border: `1px solid ${theme === 'light' ? '#155394' : '#4CA3FF'}`,
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '2rem',
                                    width: '50px',
                                    height: '50px',
                                    background: theme === 'light' ? '#059669' : '#00ff88',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: '900',
                                    color: 'var(--color-primary)',
                                }}>
                                    {item.step}
                                </div>
                                <div style={{ marginTop: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.35rem',
                                        fontWeight: '800',
                                        color: 'var(--color-white)',
                                        marginBottom: '0.75rem',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: '1.6',
                                        marginBottom: '1rem',
                                        fontSize: '0.95rem',
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Infrastructure;
