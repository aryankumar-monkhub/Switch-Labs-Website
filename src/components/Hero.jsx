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
            background: 'linear-gradient(90deg, rgba(17,18,20,0.9) 0%, rgba(17,18,20,0.4) 60%, transparent 100%), radial-gradient(circle at 80% 50%, var(--color-accent-glow) 0%, transparent 60%), var(--color-background)',
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
                    filter: 'drop-shadow(0 0 50px rgba(0,0,0,0.8))',
                }}
            >
                <img
                    src="/assets/hero_truck.png"
                    alt="Switch Labs 55T Electric Truck"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maskImage: 'linear-gradient(to left, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent)',
                    }}
                />
            </motion.div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '700px' }}>
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-grey-light)',
                            marginBottom: '3rem',
                            maxWidth: '550px',
                        }}
                    >
                        The full-stack EV transformation for heavy-duty freight. 40% lower costs. Zero emissions. 100% uptime.
                    </motion.p>

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
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '2rem 0',
                background: 'rgba(0,0,0,0.5)',
            }}>
                <div className="ticker" style={{
                    display: 'flex',
                    gap: '4rem',
                    whiteSpace: 'nowrap',
                    animation: 'scroll 40s linear infinite',
                    alignItems: 'center'
                }}>
                    {['JK LAKSHMI', 'DALMIA CEMENTS', 'UPL', 'TATA STEEL', 'JSW', 'ADANI GROUP'].map((logo, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: '800',
                                color: 'var(--color-white)',
                                opacity: 0.3,
                                letterSpacing: '0.1rem',
                            }}>
                                {logo}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {['JK LAKSHMI', 'DALMIA CEMENTS', 'UPL', 'TATA STEEL', 'JSW', 'ADANI GROUP'].map((logo, i) => (
                        <div key={`dup-${i}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: '800',
                                color: 'var(--color-white)',
                                opacity: 0.3,
                                letterSpacing: '0.1rem',
                            }}>
                                {logo}
                            </span>
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
