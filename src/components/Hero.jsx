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
                <div style={{ maxWidth: '700px', textAlign: 'left', marginTop: '-10%', marginLeft: '-10%' }}>
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
                        style={{ display: 'flex', gap: '1.5rem', marginTop: '-1rem' }}
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
                            Let's Talk
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Trust Bar Placeholder Logic */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                borderTop: 'var(--border-industrial)',
                padding: '2rem 0',
                background: 'var(--overlay-bg)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="ticker" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '12px',
                }}>
                    <div className="partner-chip-card" style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: '24px 0',
                        borderRadius: '0',
                    }}>
                        {[
                            { name: 'JK Lakshmi Cements', src: '/assets/logos/jk_lakshmi.png' },
                            { name: 'Dalmia Cements', src: '/assets/logos/dalmia.svg' },
                            { name: 'UPL', src: '/assets/logos/upl.svg' },
                            { name: 'Tata Steel', src: '/assets/logos/tata_steel.svg' },

                        ].map((logo, i) => (
                            <div key={i} className="partner-logo-card" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '260px',
                                height: '96px',
                                borderRadius: '12px',
                                background: 'rgba(63, 63, 63, 0.6)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                padding: '12px 20px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                            }}>
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    className="partner-logo"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
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
    );
};

export default Hero;
