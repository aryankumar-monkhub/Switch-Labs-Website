import React, { useState, useEffect } from 'react';
import { BadgeDollarSign, Plug, Gauge, Leaf, GraduationCap } from 'lucide-react';

const TransformationStack = ({ onAction }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="solutions">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ fontSize: isSmallPhone ? '1.5rem' : isMobile ? '1.8rem' : isTablet ? '2.5rem' : '3.5rem', marginBottom: '1rem', color: '#ffffff' }}>The SwitchLabs <span style={{ color: '#00ff88' }}>Transformation Stack</span></h2>
                    <p style={{ color: '#ffffff', fontSize: isSmallPhone ? '0.95rem' : '1.2rem' }}>Integrated solutions for a zero-emission industrial future.</p>
                </div>

                <div id="stack-pillars" style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: isMobile ? '1rem' : '1.5rem',
                }}>
                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <BadgeDollarSign size={isMobile ? 24 : 28} />
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Cost Effective Sustainability
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                Long-term contracts and affordable leasing options make our smart financing an easy choice, enabling businesses to embrace green solutions without hefty upfront costs or increased freight expenses.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-green"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-icon-border)',
                                background: 'rgba(0, 255, 136, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#00ff88',
                            }}>
                                <Plug size={isMobile ? 24 : 28} />
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Strategic Charging Infra Creation
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                Creating a dedicated charging network along key routes for seamless access to our electric fleet, optimizing efficiency and ensuring sustainable, reliable transportation.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <Gauge size={isMobile ? 24 : 28} />
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Efficient Operation & Management
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                With robust SOPs, trained drivers, and advanced telematics, our fleet management optimizes in real time, boosting efficiency for maximum benefits in sustainable transportation.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-green"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-icon-border)',
                                background: 'rgba(0, 255, 136, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#00ff88',
                            }}>
                                <Leaf size={isMobile ? 24 : 28} />
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Tailored Green Solutions
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                From charging infrastructure to sourcing renewable energy and generating carbon credits, we collaborate with businesses to tailor sustainable plans, aligning with unique goals and reducing scope 3 emissions.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <GraduationCap size={isMobile ? 24 : 28} />
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Driver Training for Optimal Performance
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                Our EV truck driver training program equips operators with essential skills for efficient and safe electric vehicle handling, emphasizing battery management and eco-friendly driving practices.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-green"
                        style={{
                            aspectRatio: isMobile ? undefined : '1',
                            padding: isSmallPhone ? '1.5rem 1.2rem' : isMobile ? '2rem 1.5rem' : '2rem',
                            borderRadius: '12px',
                            transition: 'var(--transition-smooth)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <div style={{
                                width: isMobile ? '48px' : '56px',
                                height: isMobile ? '48px' : '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-icon-border)',
                                background: 'rgba(0, 255, 136, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#00ff88',
                            }}>
                                <svg width={isMobile ? 24 : 28} height={isMobile ? 24 : 28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9"/>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                </svg>
                            </div>
                            <h3 style={{
                                fontSize: isSmallPhone ? '1.1rem' : '1.25rem',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '0.75rem',
                            }}>
                                Telematics & Smart Intelligent Technology
                            </h3>
                            <p style={{
                                fontSize: isSmallPhone ? '0.82rem' : '0.9rem',
                                lineHeight: '1.7',
                                color: '#ffffff',
                            }}>
                                Empowering fleets with intelligent telematics, live tracking, AI-powered dashboards, and smart dashcam integration to enhance safety, optimize operations, improve asset utilization, and deliver complete end-to-end fleet visibility.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: isMobile ? '2.5rem' : '5rem' }}>
                    <button
                        onClick={onAction}
                        className="button-primary"
                        style={{ padding: isSmallPhone ? '0.8rem 2rem' : isMobile ? '1rem 2.5rem' : '1.2rem 3.5rem', fontSize: isSmallPhone ? '0.85rem' : 'inherit' }}
                    >
                        Learn More About Our Tech
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TransformationStack;
