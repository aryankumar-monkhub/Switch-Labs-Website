import React from 'react';
import { Truck, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const TransformationStack = ({ onAction }) => {
    const pillars = [
        {
            title: 'Vehicle & Ops',
            icon: <Truck size={40} />,
            desc: 'Full-stack EV-as-a-Service. We own, operate, and maintain the 55T tractor fleet so you don\'t have to.',
            tag: 'Pillar 01',
            image: '/assets/battery_tech.png'
        },
        {
            title: 'Infrastructure',
            icon: <Zap size={40} />,
            desc: 'State-of-the-art charging and swapping stations optimized for industrial loop utilization.',
            tag: 'Pillar 02',
            image: '/assets/charging_hub.png'
        },
        {
            title: 'Intelligence',
            icon: <Cpu size={40} />,
            desc: 'Proprietary route optimization and energy management tech ensuring 24/7 uptime in heavy-duty cycles.',
            tag: 'Pillar 03',
            image: '/assets/intelligence.png'
        }
    ];

    return (
        <section id="solutions">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The SwitchLabs <span style={{ color: 'var(--color-accent)' }}>Transformation Stack</span></h2>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>Integrated solutions for a zero-emission industrial future.</p>
                </div>

                <div id="stack-pillars" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    {pillars.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="border-heavy"
                            style={{
                                padding: '3rem 2rem',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)',
                                borderRadius: '8px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ color: 'var(--color-accent-glow)', fontWeight: '900', fontSize: '5rem', position: 'absolute', right: '-10px', top: '-10px', zIndex: 0 }}>
                                {p.tag.split(' ')[1]}
                            </div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ color: 'var(--color-accent)', marginBottom: '2rem' }}>
                                    {p.icon}
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-white)' }}>{p.title}</h3>
                                <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                    {p.desc}
                                </p>
                            </div>

                            <div style={{
                                marginTop: 'auto',
                                width: '100%',
                                height: '180px',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: 0.6,
                                        filter: 'grayscale(0.5) contrast(1.2)',
                                        transition: 'var(--transition-smooth)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                        e.currentTarget.style.filter = 'grayscale(0) contrast(1.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.opacity = '0.6';
                                        e.currentTarget.style.filter = 'grayscale(0.5) contrast(1.2)';
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <button
                        onClick={onAction}
                        className="button-primary"
                        style={{ padding: '1.2rem 3.5rem' }}
                    >
                        Learn More About Our Tech
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TransformationStack;
