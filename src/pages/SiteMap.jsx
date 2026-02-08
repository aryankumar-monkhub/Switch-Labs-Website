import React from 'react';
import { Link } from 'react-router-dom';

const SiteMap = () => {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Site Map</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Main</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                        <li style={{ marginBottom: '1rem' }}><Link to="/about-us" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
                        <li style={{ marginBottom: '1rem' }}><Link to="/#impact" style={{ color: 'white', textDecoration: 'none' }}>Impact Calculator</Link></li>
                        <li style={{ marginBottom: '1rem' }}><Link to="/#map" style={{ color: 'white', textDecoration: 'none' }}>Corridor Map</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Legal</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}><Link to="/policies" style={{ color: 'white', textDecoration: 'none' }}>Policies</Link></li>
                        <li style={{ marginBottom: '1rem' }}><Link to="/terms-and-conditions" style={{ color: 'white', textDecoration: 'none' }}>Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Connect</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a></li>
                        <li style={{ marginBottom: '1rem' }}><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteMap;
