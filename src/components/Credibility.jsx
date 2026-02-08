import React from 'react';

const Credibility = () => {
    const investors = [
        { name: 'Juzer Tambawala', role: 'Industry Veteran' },
        { name: 'Anand Radhakrishnan', role: 'CIO, Sundaram Mutual Fund' },
        { name: 'Santosh Kamath', role: 'CIO, Franklin Templeton' }
    ];

    return (
        <div id="about-us">
            {/* Testimonial */}
            <section style={{ background: 'rgba(76, 163, 255, 0.02)' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '300px 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '300px',
                            height: '400px',
                            background: 'var(--color-grey-dark)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '4px solid var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Profile Image Placeholder */}
                            <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.1)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: '800' }}>PHOTO_HOLDER</div>
                                <div style={{ fontSize: '0.6rem' }}>Shishir Gupta</div>
                            </div>
                        </div>
                        <div>
                            <div style={{ color: 'var(--color-accent)', fontSize: '4rem', fontFamily: 'serif', lineHeight: '1', marginBottom: '1rem' }}>“</div>
                            <p style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '2rem', fontStyle: 'italic' }}>
                                We started with 1 pilot and now, with the great progress and service from Switch Labs, we have scaled to 15 trucks on our key route. They are true partners in our Net Zero journey.
                            </p>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Shishir Gupta</h4>
                                <p style={{ color: 'var(--color-grey-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1rem' }}>
                                    DGM, JK Lakshmi Cement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section style={{ textAlign: 'center' }}>
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
