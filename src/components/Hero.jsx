import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onAction }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = width <= 768;
    const isSmallPhone = width <= 480;
    const isTablet = width > 768 && width <= 1024;
    const isLargeTablet = width > 1024 && width <= 1368;

    const getCleanRunValue = () => {
        const now = new Date();
        const baseDate = new Date(2026, 6, 1);
        const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
        const baseValue = 10;
        const total = baseValue + (monthsDiff * 2);
        return `${total}Lac.+ Kms.`;
    };

    const getFuelSavedValue = () => {
        const now = new Date();
        const baseDate = new Date(2026, 6, 1);
        const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
        const baseLitres = 250000;
        const total = baseLitres + (monthsDiff * 80000);
        if (total >= 100000) {
            return `${(total / 100000).toFixed(1)}Lac.+ Litres`;
        }
        return `${total.toLocaleString()}+ Litres`;
    };

    const getTreeSavedValue = () => {
        const now = new Date();
        const baseDate = new Date(2026, 6, 1);
        const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
        const baseTrees = 5500;
        const total = baseTrees + (monthsDiff * 4760);
        if (total >= 1000) {
            return `${(total / 1000).toFixed(1)}K+`;
        }
        return `${total.toLocaleString()}+`;
    };

    const getCO2SavedValue = () => {
        const now = new Date();
        const baseDate = new Date(2026, 6, 1);
        const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + (now.getMonth() - baseDate.getMonth());
        const baseTons = 500;
        const total = baseTons + (monthsDiff * 100);
        return `${total}+ Tons`;
    };

    const slides = [
        '/assets/hero_truck_1.png',
        '/assets/hero_truck.png',
        '/assets/hero_truck_2.png'
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
    }, [slides.length]);

    return (
        <>
        <section id="hero" className="noise-overlay" style={{
            minHeight: isMobile ? 'auto' : isLargeTablet ? '80vh' : '100vh',
            maxHeight: isMobile ? '85vh' : isLargeTablet ? '85vh' : 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            position: 'relative',
            paddingTop: isMobile ? '6.5rem' : isLargeTablet ? '4rem' : '3.5rem',
            paddingBottom: isMobile ? '2rem' : '0',
            overflow: 'hidden',
        }}>
            {/* Background Image - All Devices */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                overflow: 'hidden',
            }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                        src="/assets/hero_truck_1.png"
                        alt="SwitchLabs Electric Truck 1"
                        loading="eager"
                        fetchPriority="high"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: isMobile ? 'center 30%' : isLargeTablet ? 'center 40%' : 'center center',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentSlide === 0 ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            transform: isMobile ? 'scale(1.08)' : isLargeTablet ? 'scale(1.04)' : 'none',
                            filter: 'saturate(1.4) brightness(0.85) contrast(1.05)',
                        }}
                    />
                    <img
                        src="/assets/hero_truck.png"
                        alt="SwitchLabs Electric Truck 2"
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: isMobile ? 'center 30%' : isLargeTablet ? 'center 40%' : 'center center',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentSlide === 1 ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            transform: isMobile ? 'scale(1.08)' : isLargeTablet ? 'scale(1.04)' : 'none',
                            filter: 'saturate(1.4) brightness(0.85) contrast(1.05)',
                        }}
                    />
                    <img
                        src="/assets/hero_truck_2.png"
                        alt="SwitchLabs Electric Truck 3"
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: isMobile ? 'center 30%' : isLargeTablet ? 'center 40%' : 'center center',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentSlide === 2 ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            transform: isMobile ? 'scale(1.08)' : isLargeTablet ? 'scale(1.04)' : 'none',
                            filter: 'saturate(1.4) brightness(0.85) contrast(1.05)',
                        }}
                    />
                    {/* Gradient Overlay for better text readability */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: isSmallPhone 
                            ? 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.6) 100%)'
                            : isMobile 
                                ? 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6) 100%)'
                                : isLargeTablet
                                    ? 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.3) 100%)'
                                    : 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.2) 100%)',
                        pointerEvents: 'none',
                    }} />
                    {/* Bottom Gradient for smooth transition to next section */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: isSmallPhone ? '40%' : isMobile ? '35%' : isLargeTablet ? '25%' : '30%',
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
                padding: isMobile ? '2rem 1.5rem 0' : isLargeTablet ? '0 0 0 6%' : '0 0 0 5%',
                paddingTop: isMobile ? '0rem' : undefined,
                textAlign: isMobile ? 'center' : 'left',
            }}>
                <motion.h1
                    initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -20 : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: isSmallPhone ? '1.8rem' : isMobile ? '2rem' : isTablet ? '2.5rem' : isLargeTablet ? '2.8rem' : '3.4rem',
                        lineHeight: '1.1',
                        fontWeight: '900',
                        color: '#ffffff',
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                        margin: 0,
                        marginTop: '0',
                        textAlign: 'left',
                        maxWidth: isLargeTablet ? '700px' : '900px',
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
            <div style={{ textAlign: 'center', padding: isMobile ? '1.5rem 1.5rem 0' : isLargeTablet ? '2rem 0 1rem' : '2rem 0', zIndex: 3, position: 'relative' }}>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={onAction}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        padding: isSmallPhone ? '0.8rem 1.5rem' : isMobile ? '1rem 2rem' : isLargeTablet ? '1rem 2.2rem' : '1.2rem 2.5rem',
                        borderRadius: '4px',
                        fontWeight: '800',
                        fontSize: isSmallPhone ? '0.85rem' : isLargeTablet ? '0.95rem' : '1rem',
                        textTransform: 'uppercase',
                        boxShadow: '0 0 30px var(--color-accent-glow)',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Let's Talk
                </motion.button>
            </div>
        </section>

        {/* Stats Cards - Below the hero image */}
        <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexWrap: 'wrap',
            gap: isSmallPhone ? '0.6rem' : isLargeTablet ? '0.8rem' : '1rem',
            padding: isMobile ? '2rem 1.5rem' : isLargeTablet ? '2.5rem 2rem' : '3rem 2rem',
            background: 'rgba(15, 23, 42, 0.85)',
            zIndex: 3,
        }}>
            {[
                { label: 'Clean Run', value: getCleanRunValue() },
                { label: 'Fuel Saved', value: getFuelSavedValue() },
                { label: 'CO₂ Saved', value: getCO2SavedValue() },
                { label: 'Tree Saved', value: getTreeSavedValue() },
            ].map((stat, i) => (
                <div key={i} className="" style={{
                    padding: isSmallPhone ? '0.8rem 1rem' : isMobile ? '1rem 1.2rem' : isLargeTablet ? '1.2rem 1.5rem' : '1.5rem 2rem',
                    textAlign: 'center',
                    minWidth: isSmallPhone ? '100px' : isMobile ? '120px' : isLargeTablet ? '140px' : '160px',
                    flex: isMobile ? '1 1 calc(50% - 0.5rem)' : isLargeTablet ? '1 1 calc(25% - 0.6rem)' : 'none',
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
                        fontSize: isSmallPhone ? '1rem' : isMobile ? '1.2rem' : isLargeTablet ? '1.35rem' : '1.5rem',
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

        {/* Trust Bar - Partner Logos */}
        <div style={{
            position: 'relative',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0rem 0 1.5rem 0',
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
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: isSmallPhone ? '1rem' : isMobile ? '1.2rem' : isTablet ? '1.5rem' : isLargeTablet ? '1.6rem' : '1.8rem',
                            color: 'transparent',
                            background: 'linear-gradient(90deg, #00ff88, #00cc6a)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '0.6rem',
                            marginTop: '-0.3rem',
                            letterSpacing: '0.3rem',
                        }}>
                            OUR CLIENTS
                        </div>
                    <div style={{
                        display: 'flex',
                        gap: isLargeTablet ? '4rem' : '6rem',
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
                                sizes={isSmallPhone ? '80px' : isMobile ? '100px' : isTablet ? '150px' : isLargeTablet ? '180px' : '220px'}
                                style={{
                                    width: isSmallPhone ? '80px' : isMobile ? '100px' : isTablet ? '150px' : isLargeTablet ? (i === 0 || i === 3 || i === 4 || i === 7 ? '190px' : i === 2 || i === 6 ? '140px' : '160px') : (i === 0 || i === 3 || i === 4 || i === 7 ? '220px' : i === 2 || i === 6 ? '162px' : '180px'),
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
        </>
    );
};

export default Hero;
