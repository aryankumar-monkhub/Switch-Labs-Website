import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Credibility = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            text: "We started with 1 pilot and now, with the great progress and service from Switch Labs, we have scaled to 15 trucks on our key route. They are true partners in our Net Zero journey.",
            name: "Shishir Gupta",
            role: "DGM, JK Lakshmi Cement"
        },
        {
            text: "Switch Labs helped us reduce our carbon footprint by 40% within the first year. The transition was seamless and the support has been exceptional.",
            name: "Rajesh Kumar",
            role: "Logistics Head, UltraTech Cement"
        },
        {
            text: "The data insights provided by their platform have optimized our fleet operations significantly. Highly recommended for any logistics company aiming for sustainability.",
            name: "Anita Desai",
            role: "Director of Operations, Blue Dart Express"
        }
    ];

    const investors = [
        { name: 'Juzer Tambawala', role: 'Industry Veteran' },
        { name: 'Anand Radhakrishnan', role: 'CIO, Sundaram Mutual Fund' },
        { name: 'Santosh Kamath', role: 'CIO, Franklin Templeton' }
    ];

    const handlePrev = () => {
        setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div id="about-us">
            {/* Testimonial Slider */}
            <section style={{ background: 'rgba(76, 163, 255, 0.02)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', minHeight: '400px' }}>
                    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

                        {/* Arrow Controls */}
                        <button
                            onClick={handlePrev}
                            style={{
                                position: 'absolute',
                                left: '-60px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--color-text)',
                                zIndex: 10,
                                transition: 'all 0.3s ease'
                            }}
                            className="hover:bg-white/10"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={handleNext}
                            style={{
                                position: 'absolute',
                                right: '-60px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--color-text)',
                                zIndex: 10,
                                transition: 'all 0.3s ease'
                            }}
                            className="hover:bg-white/10"
                        >
                            <ChevronRight size={20} />
                        </button>

                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(250px, 300px) 1fr',
                                    gap: '4rem',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                {/* Image / Avatar */}
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '3/4',
                                    background: 'var(--color-grey-dark)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '4px solid var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                }}>
                                    <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.1)' }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '800' }}>PHOTO_HOLDER</div>
                                        <div style={{ fontSize: '0.6rem' }}>{testimonials[activeTestimonial].name}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <div style={{ color: 'var(--color-accent)', fontSize: '4rem', fontFamily: 'serif', lineHeight: '1', marginBottom: '1rem' }}>“</div>
                                    <p style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '2rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                                        {testimonials[activeTestimonial].text}
                                    </p>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.2rem' }}>{testimonials[activeTestimonial].name}</h4>
                                        <p style={{ color: 'var(--color-grey-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1rem' }}>
                                            {testimonials[activeTestimonial].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', justifyContent: 'center' }}>
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTestimonial(idx)}
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: idx === activeTestimonial ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <h4 style={{ color: 'var(--color-grey-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3rem', marginBottom: '3rem' }}>
                        Strategic OEM Partners
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', opacity: 0.5 }}>
                        {['TATA MOTORS', 'ENERGY IN MOTION', 'IPL TECH ELECTRIC'].map(p => (
                            <span key={p} style={{ fontWeight: '900', fontSize: '1.2rem' }}>{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investors */}
            <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="section-header">
                        <h2 style={{ fontSize: '3.5rem' }}>Backed by <span style={{ color: 'var(--color-accent)' }}>Industry Visionaries</span></h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem'
                    }}>
                        {investors.map((inv, i) => (
                            <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{inv.name}</h4>
                                <p style={{ color: 'var(--color-grey-light)', fontSize: '0.8rem' }}>{inv.role}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--color-grey-light)', fontSize: '0.9rem' }}>
                        and other industry veterans.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Credibility;
