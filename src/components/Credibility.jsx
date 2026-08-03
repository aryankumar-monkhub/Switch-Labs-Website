import React, { useState, useEffect } from 'react';

const Credibility = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;
    const isLargeTablet = width > 1024 && width <= 1368;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="about-us">
            {/* Partners - Full-bleed background */}
            <section style={{ textAlign: 'center', padding: isMobile ? '2rem 0' : '4rem 0', overflow: 'hidden' }}>
                <div style={{
                    background: '#eeeeee',
                    borderRadius: 0,
                    boxSizing: 'border-box',
                    padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
                    width: '100%',
                    position: 'relative',
                    left: 0,
                    right: 0,
                    marginLeft: 0,
                    marginRight: 0,
                }}>
                    <div className="container">
                        <h4 style={{ color: '#4CA3FF', fontSize: isSmallPhone ? '1rem' : isMobile ? '1.2rem' : isTablet ? '1.5rem' : isLargeTablet ? '1.6rem' : '1.8rem', textTransform: 'uppercase', letterSpacing: '0.3rem', marginBottom: '2rem', fontWeight: '700', textAlign: 'center' }}>
                            Strategic OEM Partners
                        </h4>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: isMobile ? '2rem' : '4rem',
                            flexWrap: 'wrap',
                        }}>
                            {[
                                { name: 'Tata Motors', src: '/assets/logos/tata_motors.png' },
                                { name: 'Energy in Motion', src: '/assets/logos/energy_in_motion.png', width: '150px', filter: 'grayscale(1) brightness(0)' },
                                { name: 'IPL Tech Electric', src: '/assets/logos/ipl_tech.png' },
                            ].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    sizes={isSmallPhone ? '90px' : isMobile ? '120px' : isTablet ? '150px' : isLargeTablet ? '170px' : '180px'}
                                    style={{
                                        width: isSmallPhone ? '90px' : isMobile ? '120px' : isTablet ? '150px' : isLargeTablet ? '170px' : (logo.width || '180px'),
                                        height: 'auto',
                                        objectFit: 'contain',
                                        flexShrink: 0,
                                        filter: logo.filter || 'none',
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
