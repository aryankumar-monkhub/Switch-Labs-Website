import React from 'react';
import { BadgeDollarSign, Plug, Gauge, Leaf, GraduationCap } from 'lucide-react';

const TransformationStack = ({ onAction }) => {
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
                    gap: '1.5rem',
                }}>
                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: '1',
                            padding: '2rem',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <BadgeDollarSign size={28} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: 'var(--color-card-heading)',
                                marginBottom: '0.75rem',
                            }}>
                                Cost Effective Sustainability
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.7',
                                color: 'var(--color-white)',
                            }}>
                                Long-term contracts and affordable leasing options make our smart financing an easy choice, enabling businesses to embrace green solutions without hefty upfront costs or increased freight expenses.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-green"
                        style={{
                            aspectRatio: '1',
                            padding: '2rem',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-icon-border)',
                                background: 'rgba(0, 255, 136, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#00ff88',
                            }}>
                                <Plug size={28} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: 'var(--color-card-heading)',
                                marginBottom: '0.75rem',
                            }}>
                                Strategic Charging Infra Creation
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.7',
                                color: 'var(--color-white)',
                            }}>
                                Creating a dedicated charging network along key routes for seamless access to our electric fleet, optimizing efficiency and ensuring sustainable, reliable transportation.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: '1',
                            padding: '2rem',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <Gauge size={28} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: 'var(--color-card-heading)',
                                marginBottom: '0.75rem',
                            }}>
                                Efficient Operation & Management
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.7',
                                color: 'var(--color-white)',
                            }}>
                                With robust SOPs, trained drivers, and advanced telematics, our fleet management optimizes in real time, boosting efficiency for maximum benefits in sustainable transportation.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-green"
                        style={{
                            aspectRatio: '1',
                            padding: '2rem',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-icon-border)',
                                background: 'rgba(0, 255, 136, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#00ff88',
                            }}>
                                <Leaf size={28} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: 'var(--color-card-heading)',
                                marginBottom: '0.75rem',
                            }}>
                                Tailored Green Solutions
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.7',
                                color: 'var(--color-white)',
                            }}>
                                From charging infrastructure to sourcing renewable energy and generating carbon credits, we collaborate with businesses to tailor sustainable plans, aligning with unique goals and reducing scope 3 emissions.
                            </p>
                        </div>
                    </div>

                    <div
                        className="glass border-heavy white-card-border info-card-bg-blue"
                        style={{
                            aspectRatio: '1',
                            padding: '2rem',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '12px',
                                border: '2px solid var(--color-blue-icon-border)',
                                background: 'rgba(76, 163, 255, 0.12)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1rem',
                                color: '#4CA3FF',
                            }}>
                                <GraduationCap size={28} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '800',
                                color: 'var(--color-card-heading)',
                                marginBottom: '0.75rem',
                            }}>
                                Driver Training for Optimal Performance
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.7',
                                color: 'var(--color-white)',
                            }}>
                                Our EV truck driver training program equips operators with essential skills for efficient and safe electric vehicle handling, emphasizing battery management and eco-friendly driving practices.
                            </p>
                        </div>
                    </div>
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
