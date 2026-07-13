import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import { useTheme } from '../../context/ThemeContext';

const BlogList = () => {
    const { theme } = useTheme();
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
            <Helmet>
                <title>Blog | SwitchLabs</title>
                <meta name="description" content="Insights, news, and updates from SwitchLabs on heavy-duty EV logistics." />
            </Helmet>

            <section className="container">
                <div className="section-header" style={{ paddingTop: '2rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        Resources & Blog
                    </h1>
                    <p style={{ color: theme === 'light' ? '#000000' : '#ffffff', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Stay updated with the latest in heavy-duty electric vehicle logistics, operational insights, and industry trends.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem'
                }}>
                    {blogPosts.map((post) => (
                        <div key={post.id} className="glass" style={{
                            padding: '2rem',
                            borderRadius: '12px',
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            background: theme === 'light' 
                                ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                                : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: theme === 'light' ? '#155394' : '#4CA3FF',
                        }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    background: 'rgba(5, 213, 114, 0.1)',
                                    color: theme === 'light' ? '#059669' : '#00ff88',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {post.category}
                                </span>
                                <span style={{
                                    color: theme === 'light' ? '#000000' : '#ffffff',
                                    fontSize: '0.8rem',
                                    marginLeft: '1rem'
                                }}>
                                    {post.date}
                                </span>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                <Link to={`/resources/blog/${post.slug}`} style={{ color: theme === 'light' ? '#155394' : '#4CA3FF', textDecoration: 'none' }}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p style={{ color: theme === 'light' ? '#000000' : '#ffffff', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {post.excerpt}
                            </p>

                            <Link
                                to={`/resources/blog/${post.slug}`}
                                style={{
                                    color: 'var(--color-accent)',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Read Article &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogList;
