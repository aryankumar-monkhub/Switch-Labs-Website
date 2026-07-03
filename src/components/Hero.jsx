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

            {/* Impact Stats Cards */}
            <div style={{
                position: 'absolute',
                bottom: '11rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                padding: '0 2rem 0 22rem',
                zIndex: 2,
            }}>
                {[
                    { label: 'Clean Run', value: '1.5L+ Kms' },
                    { label: 'Fuel Saved', value: '45K+ Litres' },
                    { label: 'CO₂ Saved', value: '120+ Tons' },
                    { label: 'Tree Saved', value: '5.5K+' },
                ].map((stat, i) => (
                    <div key={i} className="glass" style={{
                        padding: '1.5rem 2rem',
                        textAlign: 'center',
                        minWidth: '160px',
                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(59, 130, 246, 0.2))',
                        backdropFilter: 'blur(16px)',
                        transform: 'perspective(800px) rotateX(3deg)',
                        border: '1px solid rgba(76, 163, 255, 0.15)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        transition: 'var(--transition-smooth)',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(76, 163, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'perspective(800px) rotateX(3deg)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                    }}
                    >
                        <div style={{
                            fontSize: '0.75rem',
                            color: i < 2 ? 'var(--stat-heading-primary)' : '#00ff88',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            fontWeight: '600',
                        }}>
                            {stat.label}
                        </div>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: 'var(--color-accent)',
                            lineHeight: 1.2,
                            marginTop: '0.25rem',
                        }}>
                            {stat.value}
                        </div>
                    </div>
                ))}
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
                        <div style={{
                            width: '99.7%',
                            marginLeft: '0.3%',
                            background: 'linear-gradient(90deg, #FBE9E7, #FFCCBC, #FBE9E7)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: 'var(--oem-border)',
                            padding: '0.8rem 0',
                        }}>
                        <div style={{
                            display: 'flex',
                            gap: '6rem',
                            width: 'max-content',
                            animation: 'marquee 30s linear infinite',
                        }}>
                            {[
                                { name: 'JK Lakshmi Cements', src: '/assets/logos/jk_lakshmi.png' },
                                { name: 'Dalmia Cements', src: '/assets/logos/dalmia.svg' },
                                { name: 'UPL', src: '/assets/logos/upl.svg' },
                                { name: 'Tata Steel', src: '/assets/logos/tata_steel.svg' },
                                { name: 'JK Lakshmi Cements', src: '/assets/logos/jk_lakshmi.png' },
                                { name: 'Dalmia Cements', src: '/assets/logos/dalmia.svg' },
                                { name: 'UPL', src: '/assets/logos/upl.svg' },
                                { name: 'Tata Steel', src: '/assets/logos/tata_steel.svg' },
                            ].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo.src}
                                    alt={`${logo.name} Logo`}
                                    className="partner-logo"
                                    style={{
                                        width: i === 0 || i === 3 || i === 4 || i === 7 ? '220px' : i === 2 || i === 6 ? '162px' : '180px',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        flexShrink: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
