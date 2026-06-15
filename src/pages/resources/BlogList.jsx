import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';

const BlogList = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
            <Helmet>
                <title>Blog | Switch Labs</title>
                <meta name="description" content="Insights, news, and updates from Switch Labs on heavy-duty EV logistics." />
            </Helmet>

            <section className="container">
                <div className="section-header">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        Resources & Blog
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
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
                            height: '100%'
                        }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{
                                    background: 'rgba(5, 213, 114, 0.1)',
                                    color: 'var(--color-accent)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {post.category}
                                </span>
                                <span style={{
                                    color: 'var(--color-grey-light)',
                                    fontSize: '0.8rem',
                                    marginLeft: '1rem'
                                }}>
                                    {post.date}
                                </span>
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                                <Link to={`/resources/blog/${post.slug}`} style={{ color: 'var(--color-white)', textDecoration: 'none' }}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p style={{ color: 'var(--color-grey-light)', marginBottom: '1.5rem', flexGrow: 1 }}>
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
