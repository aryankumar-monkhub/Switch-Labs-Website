import React, { useState } from 'react';

const inputStyle = {
    width: '100%',
    padding: '0.9rem 1rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--color-accent-dark)',
    borderRadius: '8px',
    color: '#fff',
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

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `Name: ${form.name}%0AEmail: ${form.email}%0AContact: ${form.contact}%0ACompany: ${form.company}%0ASubject: ${form.subject}%0A%0AMessage:%0A${form.message}`;
        window.location.href = `mailto:switchlabsautomobiles@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact Form Submission')}&body=${body}`;
        setSent(true);
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Get in <span style={{ color: 'var(--color-accent)' }}>Touch</span>
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
                        Let's discuss how SwitchLabs can transform your fleet operations.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
                    {/* Contact Information */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>

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
                                <p style={{ color: 'var(--color-white)', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Team Coworks, Prop no - 55 Lane - 2, Westend Marg,<br />
                                    New Delhi, Delhi - 110030
                                </p>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Follow Us
                                </h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)', fontSize: '0.9rem' }}>
                                        LinkedIn
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send us a Message</h3>
                        <p style={{ color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        {sent ? (
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Message Ready!</h3>
                                <p style={{ color: 'var(--color-grey-light)' }}>Your email client will open to send your message.</p>
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
                                    padding: '1rem',
                                    background: 'var(--color-accent)',
                                    color: 'var(--color-primary)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
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
