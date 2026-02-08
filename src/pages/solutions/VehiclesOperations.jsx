import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const VehiclesOperations = () => {
    const features = [
        {
            icon: <Truck size={40} />,
            title: 'Fleet Management',
            stats: [
                '55-ton tractor fleet',
                '24+ trucks operational',
                '155,000+ km proven',
                '10,000 km/month avg'
            ]
        },
        {
            icon: <Zap size={40} />,
            title: 'Vehicle Specifications',
            stats: [
                'IPL Tech (258-282 kWh)',
                'Energy in Motion (282 kWh)',
                'CCS2 fast charging',
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
                'Pay-per-km pricing',
                'Fixed monthly contracts',
                'Hybrid models',
                'Custom enterprise SLAs'
            ]
        }
    ];

    const caseStudies = [
        {
            title: 'JK Lakshmi Sirohi-Balaram',
            distance: '70 km one-way',
            fleet: '1 truck',
            achievement: '155,000+ km in 16 months',
            efficiency: '10,000 km/month average',
            link: '/case-studies/jk-lakshmi-sirohi-balaram'
        },
        {
            title: 'JK Lakshmi Sirohi-Kalol',
            distance: '220 km one-way',
            fleet: '15 trucks',
            achievement: 'Long-haul pioneer',
            efficiency: '25 trips/month per truck',
            link: '/case-studies/jk-lakshmi-sirohi-kalol'
        },
        {
            title: 'UPL Ankleshwar-Jageria',
            distance: '20 km',
            fleet: '4 trucks',
            achievement: 'First EV chemical transport',
            efficiency: 'Swappable tanker technology',
            link: '/case-studies/upl-ankleshwar-jageria'
        }
    ];

    const serviceModels = [
        {
            name: 'Pay-Per-Kilometer',
            description: 'Zero upfront investment. Pay only for kilometers driven.',
            features: [
                'No capital expenditure',
                'All-inclusive service',
                'Flexible scaling',
                'Immediate cost savings'
            ],
            ideal: 'Variable demand, pilot programs'
        },
        {
            name: 'Monthly Subscription',
            description: 'Fixed monthly fee with predictable budgeting.',
            features: [
                'Unlimited kilometers*',
                'Predictable expenses',
                'Long-term planning',
                'Volume discounts'
            ],
            ideal: 'Steady operations, established routes'
        },
        {
            name: 'Custom Enterprise',
            description: 'Tailored solutions for large-scale operations.',
            features: [
                'Dedicated fleet',
                'Custom SLAs',
                'Priority support',
                'Flexible terms'
            ],
            ideal: 'Large enterprises, multi-route operations'
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
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Flexible Service Models
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Choose the model that best fits your operational and financial requirements
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}>
                        {serviceModels.map((model, index) => (
                            <div
                                key={index}
                                className="glass border-heavy"
                                style={{
                                    padding: '2.5rem',
                                    transition: 'var(--transition-smooth)',
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: 'var(--color-accent)',
                                    marginBottom: '1rem',
                                }}>
                                    {model.name}
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                }}>
                                    {model.description}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem',
                                            color: 'var(--color-white)',
                                            fontSize: '0.95rem',
                                        }}>
                                            <CheckCircle size={16} color="var(--color-accent)" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: '0.5rem',
                                    }}>
                                        Ideal for:
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--color-accent)',
                                        fontWeight: '600',
                                    }}>
                                        {model.ideal}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies Section */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Proven Track Record
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Real operations delivering real results across India's industrial corridors
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}>
                        {caseStudies.map((study, index) => (
                            <Link
                                key={index}
                                to={study.link}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div
                                    className="glass"
                                    style={{
                                        padding: '2rem',
                                        height: '100%',
                                        transition: 'var(--transition-smooth)',
                                        cursor: 'pointer',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.35rem',
                                        fontWeight: '800',
                                        color: 'var(--color-white)',
                                        marginBottom: '1.5rem',
                                    }}>
                                        {study.title}
                                    </h3>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '1rem',
                                        }}>
                                            <div>
                                                <div style={{
                                                    fontSize: '0.8rem',
                                                    color: 'var(--color-text-secondary)',
                                                    marginBottom: '0.25rem',
                                                }}>
                                                    Distance
                                                </div>
                                                <div style={{
                                                    fontSize: '1rem',
                                                    color: 'var(--color-accent)',
                                                    fontWeight: '700',
                                                }}>
                                                    {study.distance}
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{
                                                    fontSize: '0.8rem',
                                                    color: 'var(--color-text-secondary)',
                                                    marginBottom: '0.25rem',
                                                }}>
                                                    Fleet Size
                                                </div>
                                                <div style={{
                                                    fontSize: '1rem',
                                                    color: 'var(--color-accent)',
                                                    fontWeight: '700',
                                                }}>
                                                    {study.fleet}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '1rem',
                                        background: 'rgba(0, 255, 136, 0.05)',
                                        borderRadius: '8px',
                                        marginBottom: '1rem',
                                    }}>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--color-white)',
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                        }}>
                                            {study.achievement}
                                        </div>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--color-text-secondary)',
                                        }}>
                                            {study.efficiency}
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--color-accent)',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                    }}>
                                        View Details
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
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
                        Ready to Transform Your Fleet?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2.5rem',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}>
                        Schedule a fleet assessment and discover how Switch Labs can optimize your logistics operations.
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
                                transition: 'var(--transition-smooth)',
                            }}
                        >
                            Schedule Assessment
                        </Link>
                        <Link
                            to="/impact/calculator"
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
                                transition: 'var(--transition-smooth)',
                            }}
                        >
                            Calculate ROI
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehiclesOperations;
