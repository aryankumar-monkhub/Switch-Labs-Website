import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Truck, Battery, MapPin, TrendingUp, Calendar, Package } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetail = ({ onAction }) => {
    const { id } = useParams();
    const study = caseStudies.find(s => s.id === id);

    if (!study) {
        return (
            <div style={{
                minHeight: '100vh',
                paddingTop: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Case Study Not Found</h1>
                    <Link to="/case-studies" style={{ color: 'var(--color-accent)' }}>
                        Back to Case Studies
                    </Link>
                </div>
            </div>
        );
    }

    const renderDetailItem = (icon, label, value) => (
        <div className="glass" style={{
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
        }}>
            <div style={{
                padding: '0.75rem',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '8px',
                flexShrink: 0,
            }}>
                {icon}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.25rem',
                }}>
                    {label}
                </div>
                <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: 'var(--color-white)',
                }}>
                    {value}
                </div>
            </div>
        </div>
    );

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
            }}>
                {/* Back Button */}
                <Link
                    to="/case-studies"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--color-accent)',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontWeight: '600',
                        transition: 'var(--transition-smooth)',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                    <ArrowLeft size={20} />
                    Back to Case Studies
                </Link>

                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        color: 'var(--color-accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        marginBottom: '1rem',
                    }}>
                        {study.client}
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        {study.title}
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: '1.6',
                        maxWidth: '800px',
                    }}>
                        {study.summary}
                    </p>
                </div>

                {/* Hero Image Placeholder */}
                <div
                    className="glass"
                    style={{
                        width: '100%',
                        height: '400px',
                        marginBottom: '4rem',
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.05) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <Truck size={80} color="var(--color-accent)" style={{ opacity: 0.3 }} />
                </div>

                {/* Key Metrics Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                }}>
                    {study.details.operationStart && renderDetailItem(
                        <Calendar size={24} color="var(--color-accent)" />,
                        'Operation Start',
                        study.details.operationStart
                    )}

                    {study.details.totalDistance && renderDetailItem(
                        <TrendingUp size={24} color="var(--color-accent)" />,
                        'Total Distance',
                        study.details.totalDistance
                    )}

                    {study.details.routeLength && renderDetailItem(
                        <MapPin size={24} color="var(--color-accent)" />,
                        'Route Length',
                        study.details.routeLength
                    )}

                    {study.details.fleetSize && renderDetailItem(
                        <Truck size={24} color="var(--color-accent)" />,
                        'Fleet Size',
                        study.details.fleetSize
                    )}

                    {study.details.vehicle && renderDetailItem(
                        <Battery size={24} color="var(--color-accent)" />,
                        'Vehicle Type',
                        study.details.vehicle
                    )}

                    {study.details.cargo && renderDetailItem(
                        <Package size={24} color="var(--color-accent)" />,
                        'Cargo Type',
                        study.details.cargo
                    )}
                </div>

                {/* Full Description */}
                <div className="glass" style={{
                    padding: '3rem',
                    marginBottom: '4rem',
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: 'var(--color-white)',
                        marginBottom: '1.5rem',
                    }}>
                        Operation Overview
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-secondary)',
                    }}>
                        {study.fullDescription}
                    </p>
                </div>

                {/* Key Highlights */}
                {study.details.keyHighlight && (
                    <div
                        className="glass"
                        style={{
                            padding: '3rem',
                            marginBottom: '4rem',
                            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                            borderLeft: '4px solid var(--color-accent)',
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Key Highlight
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: 'var(--color-text-secondary)',
                        }}>
                            {study.details.keyHighlight}
                        </p>
                    </div>
                )}

                {/* Additional Details */}
                <div className="glass" style={{
                    padding: '3rem',
                    marginBottom: '4rem',
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: 'var(--color-white)',
                        marginBottom: '2rem',
                    }}>
                        Operational Details
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                    }}>
                        {Object.entries(study.details).map(([key, value]) => {
                            // Skip already displayed items
                            if (['keyHighlight', 'operationStart', 'totalDistance', 'routeLength', 'fleetSize', 'vehicle', 'cargo'].includes(key)) {
                                return null;
                            }

                            return (
                                <div key={key}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-text-secondary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '0.5rem',
                                    }}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        color: 'var(--color-accent)',
                                    }}>
                                        {value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div
                    className="glass"
                    style={{
                        padding: '3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                    }}
                >
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '900',
                        color: 'var(--color-white)',
                        marginBottom: '1rem',
                    }}>
                        Want Similar Results for Your Fleet?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2rem',
                        fontSize: '1.1rem',
                    }}>
                        Let's discuss how we can optimize your logistics operations.
                    </p>
                    <button
                        onClick={onAction}
                        className="cta-button"
                        style={{
                            background: 'var(--color-accent)',
                            color: 'var(--color-primary)',
                            padding: '1rem 2.5rem',
                            borderRadius: '4px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 0 30px var(--color-accent-glow)',
                            transition: 'var(--transition-smooth)',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 0 40px var(--color-accent-glow)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 0 30px var(--color-accent-glow)';
                        }}
                    >
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
