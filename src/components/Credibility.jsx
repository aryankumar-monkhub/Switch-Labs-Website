import React from 'react';

const Credibility = () => {
    return (
        <div id="about-us">
            {/* Partners */}
            <section style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <h4 style={{ color: 'var(--color-grey-light)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.3rem', marginBottom: '3rem' }}>
                        Strategic OEM Partners
                    </h4>
                    <div className="glass oem-partners-card" style={{ margin: '0 -4rem', padding: '2.7rem 3rem', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                            {[
                                { name: 'Tata Motors', src: '/assets/logos/tata_motors.png' },
                                { name: 'Energy in Motion', src: '/assets/logos/energy_in_motion.png' },
                                { name: 'IPL Tech Electric', src: '/assets/logos/ipl_tech.png' },
                            ].map((logo, i) => (
                                <div key={i} className="oem-logo-card" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '256px',
                                    height: '115px',
                                    borderRadius: '12px',
                                    background: '#ffffff',
                                    padding: '4px 8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                }}>
                                    <img
                                        src={logo.src}
                                        alt={`${logo.name} Logo`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            transition: 'transform 0.6s ease',
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Credibility;
