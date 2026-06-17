import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div style={{ minHeight: '100vh', paddingTop: '8rem', textAlign: 'center' }}>
                <h1>Post not found</h1>
                <Link to="/resources/blog" className="button-primary" style={{ marginTop: '2rem' }}>Back to Blog</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
            <Helmet>
                <title>{post.title} | SwitchLabs Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <article className="container" style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/resources/blog" style={{ color: 'var(--color-grey-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                        &larr; Back to Resources
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
                            {post.category}
                        </span>
                        <span style={{ color: 'var(--color-grey-light)' }}>{post.date}</span>
                    </div>

                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{post.title}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-grey-light)' }}>
                        <span>By <span style={{ color: 'var(--color-white)' }}>{post.author}</span></span>
                    </div>
                </div>

                <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            lineHeight: '1.8',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.1rem'
                        }}
                    />
                </div>

                {/* Simple CSS for the blog content, injected here for simplicity */}
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

export default BlogPost;
