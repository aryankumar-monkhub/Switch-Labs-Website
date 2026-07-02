import React from 'react';

const Gallery = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        GALLERY
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
                        Explore moments and milestones from SwitchLabs.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="glass" style={{
                            aspectRatio: '4/3',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--subtle-border)',
                            color: 'var(--color-grey-light)',
                            fontSize: '1rem',
                        }}>
                            Gallery Image {i}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
