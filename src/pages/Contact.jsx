import React from 'react';

const Contact = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Get in <span style={{ color: 'var(--color-accent)' }}>Touch</span>
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
                        Let's discuss how Switch Labs can transform your fleet operations.
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
                                <a href="mailto:info@switchlabs.in" style={{ color: 'var(--color-white)', fontSize: '1.1rem', textDecoration: 'none' }}>
                                    info@switchlabs.in
                                </a>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Phone
                                </h4>
                                <a href="tel:+91XXXXXXXXXX" style={{ color: 'var(--color-white)', fontSize: '1.1rem', textDecoration: 'none' }}>
                                    +91 XXX XXX XXXX
                                </a>
                            </div>

                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Office
                                </h4>
                                <p style={{ color: 'var(--color-white)', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Switch Labs Private Limited<br />
                                    [Office Address]<br />
                                    India
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
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-white)', fontSize: '0.9rem' }}>
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send us a Message</h3>
                        <p style={{ color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-grey-light)' }}>
                            <p>Contact form will be integrated here.</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                                For now, please use the "Get a Quote" button in the navigation to open the lead capture modal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
