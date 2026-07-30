import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const inputStyle = {
    width: '100%',
    padding: '0.9rem 1rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--color-accent-dark)',
    borderRadius: '8px',
    color: 'var(--color-white)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border 0.2s',
    boxSizing: 'border-box'
};

const labelStyle = {
    display: 'block',
    color: 'var(--color-accent)',
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem'
};

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', contact: '', company: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    from_name: form.name,
                    from_email: form.email,
                    contact: form.contact,
                    company: form.company,
                    subject: form.subject,
                    message: form.message,
                    to_email: 'switchlabsautomobiles@gmail.com',
                },
                'YOUR_PUBLIC_KEY'
            );
            setSent(true);
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: isMobile ? '7rem' : '9rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: isSmallPhone ? '2rem' : isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem', marginBottom: '1rem' }}>
                        Get in <span style={{ color: 'var(--color-accent)' }}>Touch</span>
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: isSmallPhone ? '1rem' : '1.2rem' }}>
                        Let's discuss how SwitchLabs can transform your fleet operations.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', marginTop: '4rem' }}>
                    {/* Contact Information */}
                    <div>
                        <h3 style={{ fontSize: isSmallPhone ? '1.2rem' : '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Email
                                </h4>
                                <a href="mailto:switchlabsautomobiles@gmail.com" style={{ color: 'var(--color-white)', fontSize: '1.1rem', textDecoration: 'none' }}>
                                    switchlabsautomobiles@gmail.com
                                </a>

                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Phone
                                </h4>
                                <a href="tel:+919004253299" style={{ color: 'var(--color-white)', fontSize: '1.1rem', textDecoration: 'none' }}>
                                    +91 9004253299
                                </a>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Office
                                </h4>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Team+Coworks,+Prop+no+-+55+Lane+-+2,+Westend+Marg,+New+Delhi,+Delhi+-+110030" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ color: 'var(--color-white)', fontSize: '1rem', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--color-white)'}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Team Coworks, Prop no - 55 Lane - 2, Westend Marg,<br />
                                    New Delhi, Delhi - 110030
                                </a>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Follow Us
                                </h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://www.linkedin.com/company/switchlabs-ev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)', fontSize: '0.9rem' }}>
                                        LinkedIn
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass" style={{ padding: isSmallPhone ? '1.5rem' : '2rem', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: isSmallPhone ? '1.2rem' : '1.5rem', marginBottom: '1.5rem' }}>Send us a Message</h3>

                        {sent ? (
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Your Message has been sent</h3>
                                <p style={{ color: 'var(--color-grey-light)' }}>Our Team will reach you within 24 hours</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={labelStyle}>Name</label>
                                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Your Email</label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@company.com" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Contact</label>
                                    <input name="contact" value={form.contact} onChange={handleChange} required placeholder="Phone number" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Company Name</label>
                                    <input name="company" value={form.company} onChange={handleChange} required placeholder="Your organization" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Subject</label>
                                    <input name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your requirements..." rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
                                </div>
                                <button type="submit" style={{
                                    padding: isSmallPhone ? '0.8rem' : '1rem',
                                    background: 'var(--color-accent)',
                                    color: 'var(--color-primary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: isSmallPhone ? '0.9rem' : '1rem',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    boxShadow: '0 0 20px var(--color-accent-glow)',
                                    transition: 'var(--transition-smooth)',
                                    marginTop: '0.5rem'
                                }}>
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
