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
                    <div style={{
                        width: '99.2vw',
                        position: 'relative',
                        left: '50%',
                        right: '50%',
                        marginLeft: '-49.5vw',
                        marginRight: '-49.5vw',
                        background: 'linear-gradient(90deg, #FBE9E7, #FFCCBC, #FBE9E7)',
                        border: 'var(--oem-border)',
                        borderRadius: '12px',
                        boxSizing: 'border-box',
                        padding: '0.8rem 0',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '6rem',
                            width: 'max-content',
                            animation: 'marquee 30s linear infinite',
                        }}>
                            {[
                                { name: 'Tata Motors', src: '/assets/logos/tata_motors.png' },
                                { name: 'Energy in Motion', src: '/assets/logos/energy_in_motion.png', width: '150px' },
                                { name: 'IPL Tech Electric', src: '/assets/logos/ipl_tech.png' },
                                { name: 'Tata Motors', src: '/assets/logos/tata_motors.png' },
                                { name: 'Energy in Motion', src: '/assets/logos/energy_in_motion.png', width: '150px' },
                                { name: 'IPL Tech Electric', src: '/assets/logos/ipl_tech.png' },
                            ].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    style={{
                                        width: logo.width || '180px',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        flexShrink: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Credibility;
