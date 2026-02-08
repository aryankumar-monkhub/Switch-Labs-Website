import React, { useState } from 'react';

const Footer = ({ onAction }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log('Lead Captured:', formData);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <footer id="contact" style={{ background: '#0D0E10', padding: '10rem 0 4rem', position: 'relative' }}>
            {/* Visual background element */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40%',
                height: '100%',
                background: 'radial-gradient(circle at 100% 0%, var(--color-accent-glow) 0%, transparent 70%)',
                opacity: 0.3,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr',
                    gap: '6rem'
                }}>
                    <div>
                        <img
                            src="/switch-labs-logo.png"
                            alt="Switch Labs Logo"
                            style={{
                                height: '50px',
                                width: 'auto',
                                marginBottom: '2rem'
                            }}
                        />
                        <h2 style={{ fontSize: '3.5rem', lineHeight: '1', marginBottom: '2rem', fontWeight: '900' }}>
                            Ready for a <br />
                            <span style={{ color: 'var(--color-accent)' }}>Zero-Emission</span> <br />
                            Future?
                        </h2>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '400px' }}>
                            Transform your fleet operations with India's leading heavy-duty EV ecosystem.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-grey-light)' }}>
                            <a href="#" style={{ transition: 'var(--transition-smooth)' }} onMouseOver={e => (e.target.style.color = 'var(--color-accent)')} onMouseOut={e => (e.target.style.color = 'var(--color-grey-light)')}>LinkedIn</a>
                            <a href="#" style={{ transition: 'var(--transition-smooth)' }} onMouseOver={e => (e.target.style.color = 'var(--color-accent)')} onMouseOut={e => (e.target.style.color = 'var(--color-grey-light)')}>Privacy Policy</a>
                            <a href="#" style={{ transition: 'var(--transition-smooth)' }} onMouseOver={e => (e.target.style.color = 'var(--color-accent)')} onMouseOut={e => (e.target.style.color = 'var(--color-grey-light)')}>Career</a>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '3.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            style={footerInputStyle}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>Company Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your organization"
                                            value={formData.company}
                                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                                            style={footerInputStyle}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+91"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            style={footerInputStyle}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="email@company.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            style={footerInputStyle}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="button-primary"
                                    style={{
                                        marginTop: '1rem',
                                        width: '100%',
                                        padding: '1.5rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Initialize Transformation
                                </button>

                                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                                    OR <button onClick={(e) => { e.preventDefault(); onAction(); }} style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>Take the interactive ROI tour</button>
                                </p>
                            </form>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚡️</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Request Logged</h3>
                                <p style={{ color: 'var(--color-grey-light)' }}>Our engineers will reach out with a custom fleet study.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                    © 2026 Switch Labs Private Limited. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

const footerInputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '1.25rem',
    color: 'white',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition-smooth)'
};

export default Footer;
