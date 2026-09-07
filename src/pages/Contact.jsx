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
    const [showPopup, setShowPopup] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const closeDropdown = () => {
            document.querySelectorAll('[data-phone-dropdown]').forEach(el => {
                el.style.display = 'none';
            });
        };
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_kitlnb8', 'template_l7pv5qh', {
            name: form.name,
            email: form.email,
            phone: `+91 ${form.contact}`,
            company: form.company,
            subject: form.subject || 'Contact Inquiry',
            message: form.message,
        }, { publicKey: 'StxpEdmeC33SuAAk4' })
        .then(() => {
            setShowPopup(true);
        })
        .catch((err) => console.error('EmailJS error:', err));
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

                            <div style={{ position: 'relative' }}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Phone
                                </h4>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                                        if (isMobile) {
                                            const dropdown = e.currentTarget.nextElementSibling;
                                            if (dropdown) {
                                                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                                            }
                                        } else {
                                            window.open('https://wa.me/919004253299', '_blank');
                                        }
                                    }}
                                    style={{ color: 'var(--color-white)', fontSize: '1.1rem', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.3s' }}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                                >
                                    +91 9004253299
                                </div>
                                <div data-phone-dropdown style={{
                                    display: 'none',
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    background: 'rgba(15, 23, 42, 0.95)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(0, 255, 136, 0.2)',
                                    borderRadius: '8px',
                                    padding: '0.5rem 0',
                                    minWidth: '180px',
                                    zIndex: 100,
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                }}>
                                    <a
                                        href="tel:+919004253299"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1rem', color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'background 0.2s' }}
                                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                        +91 9004253299
                                    </a>
                                    <a
                                        href="https://wa.me/919004253299"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1rem', color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'background 0.2s' }}
                                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                        </svg>
                                        +91 9004253299
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Office
                                </h4>
                                <div
                                    style={{ color: 'var(--color-white)', fontSize: '1rem', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    Alphathum, Unit No. 1106/1107, Tower B, Plot No. 1,<br />
                                    Sector-90, Noida - 201305, Uttar Pradesh, India
                                </div>
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
                                <div style={{ ...inputStyle, display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1rem', borderRight: '1px solid var(--color-accent-dark)', paddingRight: '0.5rem', marginRight: '0.5rem' }}>+91</span>
                                    <input
                                        name="contact"
                                        type="tel"
                                        maxLength={10}
                                        placeholder="XXXXX XXXXX"
                                        value={form.contact}
                                        onChange={(e) => { const val = e.target.value.replace(/\D/g, ''); setForm({ ...form, contact: val }); }}
                                        required
                                        style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', fontSize: '1rem', outline: 'none', width: '100%', padding: '1rem 0' }}
                                    />
                                </div>
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
                    </div>
                </div>
            </section>

            {/* Success Popup */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    padding: '1rem'
                }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        border: '1px solid var(--color-accent)',
                        borderRadius: '16px',
                        padding: isSmallPhone ? '2rem 1.5rem' : '3rem',
                        maxWidth: '420px',
                        width: '100%',
                        textAlign: 'center',
                        boxShadow: '0 0 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--color-accent-glow)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: isSmallPhone ? '1.3rem' : '1.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                            Your Message has been sent
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', marginBottom: '2rem' }}>
                            Our team will reach you within 24 hours
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            style={{
                                padding: '0.8rem 2.5rem',
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 0 20px var(--color-accent-glow)',
                                transition: 'var(--transition-smooth)'
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
