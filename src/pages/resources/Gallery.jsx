import React from 'react';

const Gallery = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        GALLERY
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
                        Explore moments and milestones from SwitchLabs.
                    </p>
                </div>

                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--gallery-heading)',
                    marginBottom: '1.5rem',
                }}>
                    JK Lakshmi Cement Ltd.
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="glass" style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--subtle-border)',
                        }}>
                            <img
                                src={`/assets/jk_lakshmi_${i}.png`}
                                alt={`JK Lakshmi ${i}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>

                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--gallery-heading)',
                    marginBottom: '1.5rem',
                    marginTop: '4rem',
                }}>
                    Energy In Motion
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass" style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--subtle-border)',
                            position: 'relative',
                            paddingBottom: '75%',
                        }}>
                            <img
                                src={`/assets/energy_in_motion_${i}.png`}
                                alt={`Energy In Motion ${i}`}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>

                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--gallery-heading)',
                    marginBottom: '1.5rem',
                    marginTop: '4rem',
                }}>
                    Smart Freight Centre India with GERMI
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {[1, 2].map((i) => (
                        <div key={i} className="glass" style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--subtle-border)',
                            position: 'relative',
                            paddingBottom: '75%',
                        }}>
                            <img
                                src={`/assets/germi_${i}.png`}
                                alt={`Smart Freight ${i}`}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>

                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: 'var(--gallery-heading)',
                    marginBottom: '1.5rem',
                    marginTop: '4rem',
                }}>
                    Jaykaypuram, Sirohi Plant To Balaram
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem',
                }}>
                    {[1, 2].map((i) => (
                        <div key={i} className="glass" style={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--subtle-border)',
                            position: 'relative',
                            paddingBottom: '75%',
                        }}>
                            <img
                                src={`/assets/sirohi_balaram_${i}.png`}
                                alt={`Sirohi Balaram ${i}`}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
