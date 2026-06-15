import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { whitepapers } from '../../data/whitepapers';

const WhitepaperPost = () => {
    const { slug } = useParams();
    const paper = whitepapers.find(p => p.slug === slug);

    if (!paper) {
        return (
            <div style={{ minHeight: '100vh', paddingTop: '8rem', textAlign: 'center' }}>
                <h1>Whitepaper not found</h1>
                <Link to="/resources/whitepapers" className="button-primary" style={{ marginTop: '2rem' }}>Back to Whitepapers</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
            <Helmet>
                <title>{paper.title} | Switch Labs Whitepapers</title>
                <meta name="description" content={paper.excerpt} />
            </Helmet>

            <article className="container" style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/resources/whitepapers" style={{ color: 'var(--color-grey-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                        &larr; Back to Whitepapers
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{
                            background: 'rgba(5, 213, 114, 0.1)',
                            color: 'var(--color-accent)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            {paper.category}
                        </span>
                        <span style={{ color: 'var(--color-grey-light)' }}>{paper.date}</span>
                    </div>

                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{paper.title}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-grey-light)' }}>
                        <span>By <span style={{ color: 'var(--color-white)' }}>{paper.author}</span></span>
                    </div>
                </div>

                <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: paper.content }}
                        style={{
                            lineHeight: '1.8',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.1rem'
                        }}
                    />
                </div>

                <style>{`
          .blog-content h2 { font-size: 2rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--color-white); }
          .blog-content h3 { font-size: 1.5rem; margin-top: 2rem; margin-bottom: 0.8rem; color: var(--color-white); }
          .blog-content p { margin-bottom: 1.5rem; }
          .blog-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; }
          .blog-content li { margin-bottom: 0.5rem; }
          .blog-content strong { color: var(--color-accent); }
        `}</style>
            </article>
        </div>
    );
};

export default WhitepaperPost;
