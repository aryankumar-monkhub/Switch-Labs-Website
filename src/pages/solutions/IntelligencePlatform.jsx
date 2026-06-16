import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Route, Battery, BarChart3, Smartphone, Cloud, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const IntelligencePlatform = () => {
    const platformFeatures = [
        {
            icon: <Route size={40} />,
            title: 'Route Optimization',
            description: 'AI-powered routing for maximum efficiency',
            features: [
                'Real-time traffic integration',
                'Weather-based adjustments',
                'Elevation & load prediction',
                'Multi-stop planning'
            ]
        },
        {
            icon: <Battery size={40} />,
            title: 'Energy Management',
            description: 'Intelligent battery and charging optimization',
            features: [
                'SoC monitoring & prediction',
                'Range calculation',
                'Charging schedule optimization',
                'Regenerative braking analytics'
            ]
        },
        {
            icon: <BarChart3 size={40} />,
            title: 'Fleet Analytics',
            description: 'Comprehensive performance insights',
            features: [
                'Live dashboard tracking',
                'Driver behavior scoring',
                'Trip efficiency reports',
                'Cost per kilometer analysis'
            ]
        },
        {
            icon: <TrendingUp size={40} />,
            title: 'Predictive Maintenance',
            description: 'Prevent downtime before it happens',
            features: [
                'Component wear prediction',
                'Automated service scheduling',
                'Parts inventory management',
                'Downtime minimization'
            ]
        }
    ];

    const dashboardMetrics = [
        {
            category: 'Live Monitoring',
            metrics: [
                'Real-time vehicle location',
                'Battery State-of-Charge (SoC)',
                'Current trip progress',
                'Charging status',
                'Driver connectivity'
            ]
        },
        {
            category: 'Performance Analytics',
            metrics: [
                'Daily/monthly distance covered',
                'Energy consumption trends',
                'Cost per kilometer',
                'Route efficiency scores',
                'Uptime percentage'
            ]
        },
        {
            category: 'Environmental Impact',
            metrics: [
                'CO₂ emissions saved',
                'Diesel displaced (liters)',
                'Equivalent trees planted',
                'Air quality improvement',
                'Carbon credits earned'
            ]
        }
    ];

    const integrations = [
        {
            name: 'API Access',
            description: 'RESTful APIs for seamless integration with your existing systems',
            features: ['Real-time data access', 'Webhook notifications', 'Custom endpoints']
        },
        {
            name: 'ERP/TMS Integration',
            description: 'Connect with enterprise resource planning and transport management systems',
            features: ['SAP integration', 'Oracle compatibility', 'Custom connectors']
        },
        {
            name: 'Mobile Applications',
            description: 'iOS and Android apps for drivers and fleet managers',
            features: ['Trip tracking', 'Charging locator', 'Performance reports']
        }
    ];

    const techStack = [
        { label: 'Cloud Infrastructure', value: 'AWS / Azure' },
        { label: 'Machine Learning', value: 'TensorFlow-based models' },
        { label: 'Real-time Processing', value: 'Edge computing' },
        { label: 'Data Security', value: 'End-to-end encryption' },
        { label: 'Uptime SLA', value: '99.9% platform availability' },
        { label: 'Data Retention', value: '5 years historical data' }
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
                        AI-Powered Intelligence Platform
                    </h1>
                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Proprietary technology ensuring optimal routes, energy efficiency, and 24/7 uptime in heavy-duty cycles.
                    </p>
                </div>

                {/* Platform Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem',
                }}>
                    {platformFeatures.map((feature, index) => (
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
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                color: 'var(--color-white)',
                                marginBottom: '0.75rem',
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                marginBottom: '1.5rem',
                                fontSize: '0.95rem',
                            }}>
                                {feature.description}
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {feature.features.map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.75rem',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '0.9rem',
                                    }}>
                                        <CheckCircle size={16} color="var(--color-accent)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Dashboard Metrics Section */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Comprehensive Dashboard
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Real-time insights and historical analytics at your fingertips
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                    }}>
                        {dashboardMetrics.map((section, index) => (
                            <div
                                key={index}
                                className="glass border-heavy"
                                style={{ padding: '2.5rem' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1.5rem',
                                }}>
                                    <Brain size={28} color="var(--color-accent)" />
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        color: 'var(--color-white)',
                                        margin: 0,
                                    }}>
                                        {section.category}
                                    </h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {section.metrics.map((metric, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem',
                                            color: 'var(--color-text-secondary)',
                                            fontSize: '0.95rem',
                                            padding: '0.5rem',
                                            background: idx % 2 === 0 ? 'rgba(0, 255, 136, 0.03)' : 'transparent',
                                            borderRadius: '4px',
                                        }}>
                                            <CheckCircle size={16} color="var(--color-accent)" />
                                            {metric}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integration Capabilities */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Seamless Integration
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Connect with your existing systems and workflows
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}>
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{
                                    padding: '2.5rem',
                                    transition: 'var(--transition-smooth)',
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1rem',
                                }}>
                                    {index === 0 && <Cloud size={32} color="var(--color-accent)" />}
                                    {index === 1 && <BarChart3 size={32} color="var(--color-accent)" />}
                                    {index === 2 && <Smartphone size={32} color="var(--color-accent)" />}
                                    <h3 style={{
                                        fontSize: '1.35rem',
                                        fontWeight: '800',
                                        color: 'var(--color-white)',
                                        margin: 0,
                                    }}>
                                        {integration.name}
                                    </h3>
                                </div>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                }}>
                                    {integration.description}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {integration.features.map((feature, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '0.5rem',
                                            color: 'var(--color-accent)',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                        }}>
                                            <ArrowRight size={14} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Enterprise-Grade Technology
                        </h2>
                    </div>

                    <div className="glass" style={{ padding: '3rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                        }}>
                            {techStack.map((spec, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    background: 'rgba(0, 255, 136, 0.05)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(0, 255, 136, 0.1)',
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
                        Experience the Platform
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2.5rem',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}>
                        See how our intelligence platform can transform your fleet operations with data-driven insights.
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
                            Request Platform Demo
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntelligencePlatform;
