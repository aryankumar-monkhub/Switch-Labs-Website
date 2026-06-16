import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Dropdown from './Dropdown';
import { navigationConfig } from '../../data/navigation';

const Navbar = ({ onGetStarted }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav
            className="glass"
            style={{
                position: 'fixed',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 1000,
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {/* Logo */}
            <Link
                to="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none'
                }}
            >
                <img
                    src="/switch-labs-logo.png"
                    alt="Switch Labs Logo"
                    style={{
                        height: '40px',
                        width: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </Link>

            {/* Desktop Navigation */}
            <div
                className="nav-links"
                style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                }}
            >
                {/* Dropdown Menus */}
                <Dropdown
                    label={navigationConfig.solutions.label}
                    items={navigationConfig.solutions.items}
                    currentPath={location.pathname}
                />

                <Dropdown
                    label={navigationConfig.network.label}
                    items={navigationConfig.network.items}
                    currentPath={location.pathname}
                />
                <Dropdown
                    label={navigationConfig.impact.label}
                    items={navigationConfig.impact.items}
                    currentPath={location.pathname}
                />
                <Dropdown
                    label={navigationConfig.company.label}
                    items={navigationConfig.company.items}
                    currentPath={location.pathname}
                />
                <Dropdown
                    label={navigationConfig.resources.label}
                    items={navigationConfig.resources.items}
                    currentPath={location.pathname}
                />

                {/* Contact Link */}
                <Link
                    to="/contact"
                    style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: location.pathname === '/contact' ? 'var(--color-accent)' : 'var(--color-white)',
                        opacity: 0.8,
                        transition: 'var(--transition-smooth)',
                        textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.opacity = 1;
                        e.target.style.color = 'var(--color-accent)';
                    }}
                    onMouseOut={(e) => {
                        if (location.pathname !== '/contact') {
                            e.target.style.opacity = 0.8;
                            e.target.style.color = 'var(--color-white)';
                        }
                    }}
                >
                    Contact
                </Link>

                {/* CTA Button */}
                <button
                    onClick={onGetStarted}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '4px',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        boxShadow: '0 0 20px var(--color-accent-glow)',
                        transition: 'var(--transition-smooth)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 0 30px var(--color-accent-glow)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 0 20px var(--color-accent-glow)';
                    }}
                >
                    Get a Quote
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu" style={{ display: 'none' }}>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                >
                    {isMobileMenuOpen ? <X color="white" size={24} /> : <Menu color="white" size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    style={{
                        position: 'fixed',
                        top: '5rem',
                        left: '5%',
                        right: '5%',
                        background: 'rgba(10, 12, 14, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '12px',
                        padding: '2rem',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                    }}
                >
                    {/* Mobile navigation items would go here */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {Object.values(navigationConfig).map((section) => (
                            <div key={section.label}>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                                    {section.label}
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem' }}>
                                    {section.items.filter(item => item.path).map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            style={{
                                                color: 'var(--color-white)',
                                                textDecoration: 'none',
                                                fontSize: '0.85rem',
                                                padding: '0.5rem 0'
                                            }}
                                        >
                                            {item.icon && `${item.icon} `}{item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                color: 'var(--color-white)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}
                        >
                            Contact
                        </Link>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onGetStarted();
                            }}
                            className="button-primary"
                            style={{ marginTop: '1rem' }}
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
