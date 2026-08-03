import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardStyle = {
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        position: 'relative',
        paddingBottom: '75%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'perspective(1000px) rotateX(2deg) rotateY(0deg)',
    };

    const cardHoverHandlers = {
        onMouseOver: (e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-12px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.border = '1px solid rgba(0, 255, 136, 0.3)';
        },
        onMouseOut: (e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(0deg)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.15)';
        },
    };

    const renderSection = (title, images, index) => (
        <>
            <h2 style={{
                fontSize: isSmallPhone ? '1.3rem' : '1.75rem',
                fontWeight: '800',
                color: '#4CA3FF',
                marginBottom: '1.5rem',
                marginTop: index > 0 ? (isMobile ? '2rem' : '4rem') : '0',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}>
                {title}
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: isMobile ? '1rem' : '1.5rem',
            }}>
                {images.map((img, i) => (
                    <div 
                        key={i} 
                        style={cardStyle}
                        {...cardHoverHandlers}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.4s ease',
                            }}
                        />
                        {/* Glass Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                            pointerEvents: 'none',
                        }} />
                        {/* Shine Effect */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                            pointerEvents: 'none',
                        }} />
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div style={{ minHeight: '100vh', paddingTop: isMobile ? '6rem' : '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        marginTop: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        GALLERY
                    </h1>
                    <p style={{ color: 'var(--color-white)', fontSize: isSmallPhone ? '1rem' : '1.2rem' }}>
                        Explore moments and milestones from SwitchLabs.
                    </p>
                </div>

                {renderSection('JK Lakshmi Cement Ltd. (Jaykaypuram to Kalol)', [
                    { src: '/assets/jaykaypuram_kalol_1.png', alt: 'Jaykaypuram Kalol 1' },
                    { src: '/assets/jaykaypuram_kalol_2.png', alt: 'Jaykaypuram Kalol 2' },
                    { src: '/assets/jaykaypuram_kalol_3.png', alt: 'Jaykaypuram Kalol 3' },
                ], 0)}

                {renderSection('JK Lakshmi Cement Ltd. (Ahiwara to Adani Raipur)', [
                    { src: '/assets/jk_lakshmi_1.png', alt: 'JK Lakshmi 1' },
                    { src: '/assets/jk_lakshmi_2.png', alt: 'JK Lakshmi 2' },
                    { src: '/assets/jk_lakshmi_3.png', alt: 'JK Lakshmi 3' },
                ], 1)}

                {renderSection('JK Lakshmi Cement Ltd. (Jaykaypuram to Balaram)', [
                    { src: '/assets/sirohi_balaram_1.png', alt: 'Sirohi Balaram 1' },
                    { src: '/assets/sirohi_balaram_2.png', alt: 'Sirohi Balaram 2' },
                ], 2)}

                {renderSection('UPL (Jhagadia to Ankleshwar)', [
                    { src: '/assets/jhagadia_ankleshwar_1.png', alt: 'Jhagadia Ankleshwar 1' },
                    { src: '/assets/jhagadia_ankleshwar_2.png', alt: 'Jhagadia Ankleshwar 2' },
                    { src: '/assets/jhagadia_ankleshwar_3.png', alt: 'Jhagadia Ankleshwar 3' },
                ], 3)}
            </section>
        </div>
    );
};

export default Gallery;
