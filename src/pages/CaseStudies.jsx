import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, MapPin } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = ({ onAction }) => {
    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            {/* Hero Section */}
            <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem',
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        Success Stories
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Pioneering the future of sustainable logistics across India with proven results and industry-leading efficiency.
                    </p>
                </div>

                {/* Stats Overview */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '5rem',
                }}>
                    <div className="glass" style={{
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'var(--transition-smooth)',
                    }}>
                        <TrendingUp size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-accent)',
                            marginBottom: '0.5rem',
                        }}>
                            24+
                        </div>
                        <div style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                        }}>
                            Active Trucks
                        </div>
                    </div>

                    <div className="glass" style={{
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'var(--transition-smooth)',
                    }}>
                        <Zap size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-accent)',
                            marginBottom: '0.5rem',
                        }}>
                            155K+
                        </div>
                        <div style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                        }}>
                            Kilometers Covered
                        </div>
                    </div>

                    <div className="glass" style={{
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'var(--transition-smooth)',
                    }}>
                        <MapPin size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                        <div style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-accent)',
                            marginBottom: '0.5rem',
                        }}>
                            4
                        </div>
                        <div style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                        }}>
                            Active Routes
                        </div>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem',
                }}>
                    {caseStudies.map((study) => (
                        <Link
                            key={study.id}
                            to={`/case-studies/${study.id}`}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            <div
                                className="glass"
                                style={{
                                    height: '100%',
                                    overflow: 'hidden',
                                    transition: 'var(--transition-smooth)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Image Placeholder */}
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                }}>
                                    <Zap size={48} color="var(--color-accent)" style={{ opacity: 0.5 }} />
                                </div>

                                {/* Content */}
                                <div style={{
                                    padding: '2rem',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: 'var(--color-accent)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        marginBottom: '0.75rem',
                                    }}>
                                        {study.client}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        color: 'var(--color-white)',
                                        marginBottom: '1rem',
                                        lineHeight: '1.3',
                                    }}>
                                        {study.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: '1.6',
                                        marginBottom: '1.5rem',
                                        flex: 1,
                                    }}>
                                        {study.summary}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--color-accent)',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                    }}>
                                        Learn More
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className="glass"
                    style={{
                        marginTop: '5rem',
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
                        Ready to Transform Your Fleet?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2rem',
                        fontSize: '1.1rem',
                    }}>
                        Join industry leaders in making the switch to sustainable logistics.
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
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
