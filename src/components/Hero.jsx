import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onAction }) => {
    return (
        <section id="hero" className="noise-overlay" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '6rem',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 80% 50%, var(--color-accent-glow) 0%, transparent 60%), var(--color-background)',
        }}>
            {/* Cinematic Truck Image */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: 'absolute',
                    right: '-5%',
                    bottom: '10%',
                    width: '55%',
                    height: 'auto',
                    zIndex: 0,
                    filter: 'drop-shadow(0 0 50px var(--overlay-bg))',
                }}
            >
                <img
                    src="/assets/hero_truck.png"
                    alt="SwitchLabs 55T Electric Truck"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maskImage: 'linear-gradient(to left, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent)',
                    }}
                />
            </motion.div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 0 0', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '700px', textAlign: 'left' }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '4.5rem',
                            lineHeight: '1.1',
                            marginBottom: '2rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                        }}
                    >
                        Electrifying the <br />
                        <span style={{ color: 'var(--color-accent)' }}>Backbone</span> of <br />
                        Indian Industry.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1.5rem' }}
                    >
                        <button
                            onClick={onAction}
                            style={{
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                padding: '1.2rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '800',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                boxShadow: '0 0 30px var(--color-accent-glow)',
                            }}
                        >
                            Request a Callback
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Trust Bar Placeholder Logic */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                overflow: 'hidden',
                borderTop: 'var(--border-industrial)',
                padding: '2rem 0',
                background: 'var(--overlay-bg)',
            }}>
                <div className="ticker" style={{
                    display: 'flex',
                    gap: '6rem',
                    whiteSpace: 'nowrap',
                    animation: 'scroll 30s linear infinite',
                    alignItems: 'center',
                    paddingLeft: '100%' // Start off-screen
                }}>
                    {[
                        { name: 'JK Lakshmi Cements', src: '/assets/logos/jk_lakshmi.svg', maxH: '40px' },
                        { name: 'Dalmia Cements', src: '/assets/logos/dalmia.svg', maxH: '60px' },
                        { name: 'UPL', src: '/assets/logos/upl.png', maxH: '60px' },
                        { name: 'Tata Steel', src: '/assets/logos/tata_steel.svg', maxH: '40px' },
                        { name: 'JSW', src: '/assets/logos/jsw.svg', maxH: '40px' },
                        { name: 'Adani', src: '/assets/logos/adani.svg', maxH: '40px' },
                    ].map((logo, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '60px',
                            minWidth: '150px',
                            opacity: 1,
                            transition: 'opacity 0.3s',
                        }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                className="partner-logo"
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    maxHeight: logo.maxH
                                }}
                            />
                        </div>
                    ))}
                    {/* Duplicate for loop */}
                    {[
                        { name: 'JK Lakshmi Cements', src: '/assets/logos/jk_lakshmi.svg', maxH: '40px' },
                        { name: 'Dalmia Cements', src: '/assets/logos/dalmia.svg', maxH: '60px' },
                        { name: 'UPL', src: '/assets/logos/upl.png', maxH: '60px' },
                        { name: 'Tata Steel', src: '/assets/logos/tata_steel.svg', maxH: '40px' },
                        { name: 'JSW', src: '/assets/logos/jsw.svg', maxH: '40px' },
                        { name: 'Adani', src: '/assets/logos/adani.svg', maxH: '40px' },
                    ].map((logo, i) => (
                        <div key={`dup-${i}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '60px',
                            minWidth: '150px',
                            opacity: 1,
                            transition: 'opacity 0.3s',
                        }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                className="partner-logo"
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    maxHeight: logo.maxH
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
