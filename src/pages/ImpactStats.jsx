import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCleanRunValue, getFuelSavedValue, getTreeSavedValue, getCO2SavedValue } from '../data/impactStats';

const ImpactStats = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 768;
    const isSmallPhone = width <= 480;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stats = [
        {
            label: 'Clean Run',
            value: getCleanRunValue(),
            icon: 'clean-run',
            description: 'Kilometres run cleanly on our electric fleet.',
        },
        {
            label: 'Fuel Saved',
            value: getFuelSavedValue(),
            icon: 'fuel',
            description: 'Litres of diesel fuel saved from being consumed.',
        },
        {
            label: 'CO₂ Saved',
            value: getCO2SavedValue(),
            icon: 'co2',
            description: 'Tonnes of CO₂ emissions prevented.',
        },
        {
            label: 'Tree Saved',
            value: getTreeSavedValue(),
            icon: 'tree',
            description: 'Trees equivalent saved in carbon offset.',
        },
    ];

    const renderIcon = (type) => {
        const iconStyle = { width: '48px', height: '48px' };
        switch (type) {
            case 'clean-run':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L12 22M12 22C12 22 20 16 20 10C20 5 16 2 12 2C8 2 4 5 4 10C4 16 12 22 12 22Z"/>
                        <path d="M12 7L7 12M12 7L17 12"/>
                    </svg>
                );
            case 'fuel':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
                        <path d="M15 10h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 4"/>
                        <path d="M3 22h12"/>
                        <rect x="6" y="8" width="6" height="4" rx="1"/>
                    </svg>
                );
            case 'co2':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12a4 4 0 0 0 8 0"/>
                        <path d="M12 8v-2"/>
                        <path d="M12 18v2"/>
                    </svg>
                );
            case 'tree':
                return (
                    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22V12"/>
                        <path d="M17 12L12 7L7 12"/>
                        <path d="M12 7C12 7 8 3 4 7C4 7 6 4 12 7Z"/>
                        <path d="M12 7C12 7 16 3 20 7C20 7 18 4 12 7Z"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '6rem', paddingBottom: '4rem' }}>
            {/* Hero Header */}
            <section style={{
                padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
                textAlign: 'center',
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: isSmallPhone ? '2rem' : isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
                        fontWeight: '900',
                        color: 'var(--color-white)',
                        margin: 0,
                        marginBottom: '1rem',
                        lineHeight: '1.1',
                    }}
                >
                    Our{' '}
                    <span style={{
                        background: 'linear-gradient(90deg, var(--color-vision-icon), var(--color-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Impact
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: isSmallPhone ? '1rem' : '1.2rem',
                        color: 'var(--color-grey-light)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}
                >
                    Driving measurable environmental impact through electric freight logistics.
                </motion.p>
            </section>

            {/* Stats Grid */}
            <section style={{
                padding: isMobile ? '1rem 1.5rem' : '2rem 4rem',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr',
                    gap: isMobile ? '1.5rem' : '2rem',
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{
                                background: 'var(--color-primary)',
                                border: '1px solid var(--color-grey-dark)',
                                borderRadius: '16px',
                                padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 40px rgba(0, 255, 136, 0.15)',
                                borderColor: 'var(--color-vision-icon)',
                            }}
                        >
                            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {renderIcon(stat.icon)}
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'var(--color-grey-light)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontWeight: '700',
                                marginBottom: '0.75rem',
                            }}>
                                {stat.label}
                            </div>
                            <div style={{
                                fontSize: isMobile ? '2rem' : '2.8rem',
                                fontWeight: '900',
                                background: 'linear-gradient(135deg, var(--color-vision-icon), var(--color-accent))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: '1.2',
                                marginBottom: '0.75rem',
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: '0.95rem',
                                color: 'var(--color-grey-light)',
                                lineHeight: '1.5',
                            }}>
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                    padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    background: 'var(--color-primary)',
                    border: '1px solid var(--color-grey-dark)',
                    borderRadius: '16px',
                    padding: isMobile ? '2rem 1.5rem' : '3rem 3rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}>
                    <h2 style={{
                        fontSize: isSmallPhone ? '1.3rem' : isMobile ? '1.5rem' : '2rem',
                        fontWeight: '800',
                        color: 'var(--color-white)',
                        marginBottom: '1rem',
                    }}>
                        Be Part of the Change
                    </h2>
                    <p style={{
                        fontSize: '1.05rem',
                        color: 'var(--color-grey-light)',
                        marginBottom: '2rem',
                        lineHeight: '1.6',
                    }}>
                        Every kilometre driven electric is a step towards a cleaner, greener future. Let's move forward together.
                    </p>
                    <a
                        href="/contact"
                        style={{
                            display: 'inline-block',
                            background: 'var(--color-accent)',
                            color: 'var(--color-primary)',
                            padding: '0.9rem 2.2rem',
                            borderRadius: '4px',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            boxShadow: '0 0 30px var(--color-accent-glow)',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 40px var(--color-accent-glow)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 0 30px var(--color-accent-glow)';
                        }}
                    >
                        Get in Touch
                    </a>
                </div>
            </motion.section>
        </div>
    );
};

export default ImpactStats;
