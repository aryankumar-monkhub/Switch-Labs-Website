import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Battery, MapPin, Gauge, CheckCircle, ArrowRight, Sun, Clock } from 'lucide-react';

const Infrastructure = () => {
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
        {
            icon: <Sun size={40} />,
            title: 'Renewable Integration',
            power: 'Solar-powered',
            features: [
                'On-site solar canopies',
                'Grid independence',
                'Lower energy costs',
                'True zero-emission'
            ]
        }
    ];

    const locations = [
        {
            state: 'Rajasthan',
            stations: [
                {
                    name: 'Sirohi Hub',
                    chargers: '2x 180 kW + 1x 120 kW',
                    features: ['Solar canopy (50 kW)', '24/7 operation', 'Fleet parking'],
                    uptime: '99.7%'
                }
            ]
        },
        {
            state: 'Gujarat',
            stations: [
                {
                    name: 'Balaram Station',
                    chargers: '1x 180 kW',
                    features: ['11 kV grid connection', 'Covered parking'],
                    uptime: '99.5%'
                },
                {
                    name: 'Kalol Depot',
                    chargers: '4x 180 kW + 2x 240 kW',
                    features: ['Fleet parking (20 trucks)', 'On-site maintenance', 'Driver amenities'],
                    uptime: '99.8%'
                },
                {
                    name: 'Ankleshwar Industrial Hub',
                    chargers: '2x 120 kW',
                    features: ['In-plant installation', 'Dedicated UPL operations'],
                    uptime: '99.6%'
                }
            ]
        },
        {
            state: 'Madhya Pradesh',
            stations: [
                {
                    name: 'Ahirwara Charging Point',
                    chargers: '2x 180 kW',
                    features: ['Near Adani Power', 'Covered parking', 'Security'],
                    uptime: '99.4%'
                }
            ]
        }
    ];

    const technicalSpecs = [
        { label: 'Charging Standards', value: 'CCS2, CHAdeMO compatible' },
        { label: 'Power Output', value: '60-240 kW per dispenser' },
        { label: 'Uptime Guarantee', value: '99.5% SLA' },
        { label: 'Remote Monitoring', value: '24/7 cloud-based platform' },
        { label: 'Payment Options', value: 'Contactless, RFID, App-based' },
        { label: 'Grid Connection', value: '11 kV / 33 kV' }
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
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
                        fontSize: '1.35rem',
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem',
                }}>
                    {chargingTypes.map((type, index) => (
                        <div
                            key={index}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                transition: 'var(--transition-smooth)',
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
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
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
                                color: 'var(--color-accent)',
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
                            fontSize: '2.5rem',
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
                                fontSize: '1.75rem',
                                fontWeight: '800',
                                color: 'var(--color-accent)',
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
                                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                gap: '1.5rem',
                            }}>
                                {location.stations.map((station, idx) => (
                                    <div
                                        key={idx}
                                        className="glass border-heavy"
                                        style={{ padding: '2rem' }}
                                    >
                                        <h4 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            color: 'var(--color-white)',
                                            marginBottom: '1rem',
                                        }}>
                                            {station.name}
                                        </h4>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '1rem',
                                            padding: '0.75rem',
                                            background: 'rgba(0, 255, 136, 0.1)',
                                            borderRadius: '6px',
                                        }}>
                                            <Zap size={20} color="var(--color-accent)" />
                                            <span style={{
                                                color: 'var(--color-accent)',
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
                                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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

                {/* Technical Specifications */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Technical Specifications
                        </h2>
                    </div>

                    <div className="glass" style={{ padding: '3rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                        }}>
                            {technicalSpecs.map((spec, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    background: 'rgba(0, 255, 136, 0.05)',
                                    borderRadius: '8px',
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                    }}>
                                        {spec.label}
                                    </div>
                                    <div style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--color-white)',
                                        fontWeight: '700',
                                    }}>
                                        {spec.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Installation Process */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Installation Process
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            From assessment to activation in 8-12 weeks
                        </p>
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
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '2rem',
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--color-accent)',
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
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(0, 255, 136, 0.1)',
                                        borderRadius: '4px',
                                        color: 'var(--color-accent)',
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                    }}>
                                        {item.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

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
                        Ready to Build Your Charging Infrastructure?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2.5rem',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}>
                        Let's assess your site and design the perfect charging solution for your operations.
                    </p>
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
                            }}
                        >
                            Plan Your Infrastructure
                        </Link>
                        <Link
                            to="/network/corridors"
                            style={{
                                background: 'transparent',
                                color: 'var(--color-accent)',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                                border: '2px solid var(--color-accent)',
                            }}
                        >
                            View Network Map
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
