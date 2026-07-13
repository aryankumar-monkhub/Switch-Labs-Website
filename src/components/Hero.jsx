import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onAction }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;
    const isSmallPhone = width <= 480;

    const slides = [
        { src: '/assets/hero_truck.png', mobilePosition: 'center 30%' },
        { src: '/assets/hero_truck_2.png', mobilePosition: 'center 40%' }
    ];

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="noise-overlay" style={{
            minHeight: isMobile ? 'auto' : '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            position: 'relative',
            paddingTop: isMobile ? '6rem' : '8rem',
            paddingBottom: isMobile ? '2rem' : '0',
            overflow: 'hidden',
        }}>
            {/* Fixed Background Image - All Devices */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                overflow: 'hidden',
            }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {slides.map((slide, i) => (
                        <img
                            key={i}
                            src={slide.src}
                            alt={`SwitchLabs Electric Truck ${i + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                display: 'block',
                                position: i === 0 ? 'relative' : 'absolute',
                                top: 0,
                                left: 0,
                                opacity: currentSlide === i ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                                transform: isMobile ? 'scale(1.05)' : 'none',
                                filter: 'saturate(1.4) brightness(0.85) contrast(1.05)',
                            }}
                        />
                    ))}
                    {/* Gradient Overlay for better text readability */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: isSmallPhone 
                            ? 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.6) 100%)'
                            : isMobile 
                                ? 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)'
                                : 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.2) 100%)',
                        pointerEvents: 'none',
                    }} />
                    {/* Bottom Gradient for smooth transition to next section */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: isSmallPhone ? '40%' : isMobile ? '35%' : '30%',
                        background: 'linear-gradient(to top, var(--color-background), transparent)',
                        pointerEvents: 'none',
                    }} />
                </div>
            </div>

            {/* Hero Content Overlay - All Devices */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : 'flex-start',
                justifyContent: isMobile ? 'flex-start' : 'center',
                flex: isMobile ? 'none' : 1,
                padding: isMobile ? '2rem 1.5rem 0' : '0 0 0 5%',
                paddingTop: isMobile ? '0rem' : undefined,
                textAlign: isMobile ? 'center' : 'left',
            }}>
                <motion.h1
                    initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -20 : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: isSmallPhone ? '1.8rem' : isMobile ? '2rem' : isTablet ? '2.5rem' : '3.4rem',
                        lineHeight: '1.1',
                        fontWeight: '900',
                        color: '#ffffff',
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                        margin: 0,
                        textAlign: 'left',
                        maxWidth: '900px',
                    }}
                >
                    Powering the<br />Shift to<br />
                    <span style={{
                        background: 'linear-gradient(90deg, #00ff88, #00cc6a)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Electric Freight
                    </span>
                </motion.h1>
            </div>

            {/* Let's Talk Button */}
            <div style={{ textAlign: 'center', padding: isMobile ? '1.5rem 1.5rem 0' : '2rem 0', zIndex: 3, position: 'relative' }}>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={onAction}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        padding: isSmallPhone ? '0.8rem 1.5rem' : isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                        borderRadius: '4px',
                        fontWeight: '800',
                        fontSize: isSmallPhone ? '0.85rem' : '1rem',
                        textTransform: 'uppercase',
                        boxShadow: '0 0 30px var(--color-accent-glow)',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Let's Talk
                </motion.button>
            </div>
            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: isMobile ? 'flex-start' : 'center',
                flexWrap: 'wrap',
                gap: isSmallPhone ? '0.6rem' : '1rem',
                padding: isMobile ? '6rem 1.5rem 0' : '8rem 2rem',
                zIndex: 3,
            }}>
                {[
                    { label: 'Clean Run', value: '10Lac.+ Kms.' },
                    { label: 'Fuel Saved', value: '2.5Lac.+ Litres' },
                    { label: 'CO₂ Saved', value: '500+ Tons' },
                    { label: 'Tree Saved', value: '5.5K+' },
                ].map((stat, i) => (
                    <div key={i} className="" style={{
                        padding: isSmallPhone ? '0.8rem 1rem' : isMobile ? '1rem 1.2rem' : '1.5rem 2rem',
                        textAlign: 'center',
                        minWidth: isSmallPhone ? '100px' : isMobile ? '120px' : '160px',
                        flex: isMobile ? '1 1 calc(50% - 0.5rem)' : 'none',
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        transform: isMobile ? 'none' : 'perspective(800px) rotateX(3deg)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = isMobile ? 'none' : 'perspective(800px) rotateX(0deg) translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 255, 136, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = isMobile ? 'none' : 'perspective(800px) rotateX(3deg)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    >
                        <div style={{
                            fontSize: '0.75rem',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            fontWeight: '600',
                        }}>
                            {stat.label}
                        </div>
                        <div style={{
                            fontSize: isSmallPhone ? '1rem' : isMobile ? '1.2rem' : '1.5rem',
                            fontWeight: '800',
                            color: '#00ff88',
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
                position: 'relative',
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem 0',
                background: 'rgba(15, 23, 42, 0.5)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 3,
            }}>
                <div className="ticker" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                        <div style={{
                            width: '99.7%',
                            marginLeft: '0.3%',
                            borderRadius: '12px',
                            overflow: 'hidden',
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
                                        width: isSmallPhone ? '80px' : isMobile ? '100px' : isTablet ? '150px' : (i === 0 || i === 3 || i === 4 || i === 7 ? '220px' : i === 2 || i === 6 ? '162px' : '180px'),
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
