import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onAction }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        countryCode: '+91',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
            case 'company':
                if (!value.trim()) error = 'This field is required';
                break;
            case 'email':
                if (!value.trim()) {
                    error = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'phone':
                if (!value.trim()) {
                    error = 'Phone number is required';
                } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
                    error = 'Invalid phone number (10 digits required)';
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (['name', 'company', 'email', 'phone'].includes(key)) {
                const error = validateField(key, formData[key]);
                if (error) newErrors[key] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitted(true);
        console.log('Lead Captured:', formData);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const getFooterInputStyle = (fieldName) => ({
        ...footerInputStyle,
        border: errors[fieldName] ? '1px solid var(--color-error)' : footerInputStyle.border,
        boxShadow: errors[fieldName] ? '0 0 10px rgba(239, 68, 68, 0.2)' : 'none'
    });

    return (
        <footer id="contact" style={{ background: '#0D0E10', padding: '6rem 0 2rem', position: 'relative' }}>
            {/* Visual background element */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40%',
                height: '100%',
                background: 'radial-gradient(circle at 100% 0%, var(--color-accent-glow) 0%, transparent 70%)',
                opacity: 0.3,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr',
                    gap: '6rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <img
                                src="/switch-labs-logo.png"
                                alt="Switch Labs Logo"
                                style={{
                                    height: '50px',
                                    width: 'auto',
                                    marginBottom: '2rem'
                                }}
                            />
                        </Link>
                        <h2 style={{ fontSize: '3.5rem', lineHeight: '1', marginBottom: '2rem', fontWeight: '900' }}>
                            Ready for a <br />
                            <span style={{ color: 'var(--color-accent)' }}>Zero-Emission</span> <br />
                            Future?
                        </h2>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '400px' }}>
                            Transform your fleet operations with India's leading heavy-duty EV ecosystem.
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '3.5rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: errors.name ? 'var(--color-error)' : 'var(--color-accent)', letterSpacing: '0.05em' }}>Full Name</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            style={getFooterInputStyle('name')}
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: errors.company ? 'var(--color-error)' : 'var(--color-accent)', letterSpacing: '0.05em' }}>Company Name</label>
                                        <input
                                            name="company"
                                            type="text"
                                            placeholder="Your organization"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            style={getFooterInputStyle('company')}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: errors.phone ? 'var(--color-error)' : 'var(--color-accent)', letterSpacing: '0.05em' }}>Phone Number</label>
                                        <div style={{ ...getFooterInputStyle('phone'), display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleInputChange}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'var(--color-accent)',
                                                    fontWeight: 'bold',
                                                    fontSize: '1rem',
                                                    outline: 'none',
                                                    cursor: 'pointer',
                                                    paddingRight: '0.5rem',
                                                    borderRight: '1px solid rgba(255,255,255,0.1)',
                                                    marginRight: '0.5rem',
                                                }}
                                            >
                                                <option value="+91">+91</option>
                                                <option value="+1">+1</option>
                                                <option value="+44">+44</option>
                                                <option value="+971">+971</option>
                                            </select>
                                            <input
                                                type="tel"
                                                name="phone"
                                                maxLength={10}
                                                placeholder="98765 43210"
                                                value={formData.phone}
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '');
                                                    e.target.value = val;
                                                    handleInputChange(e);
                                                }}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'var(--color-white)',
                                                    fontSize: '1rem',
                                                    outline: 'none',
                                                    width: '100%',
                                                    padding: '1rem 0'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="input-field">
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.75rem', color: errors.email ? 'var(--color-error)' : 'var(--color-accent)', letterSpacing: '0.05em' }}>Work Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="email@company.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            style={getFooterInputStyle('email')}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="button-primary"
                                    style={{
                                        marginTop: '1rem',
                                        width: '100%',
                                        padding: '1.5rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Initialize Transformation
                                </button>

                                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                                    OR <button onClick={(e) => { e.preventDefault(); onAction(); }} style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>Take the interactive ROI tour</button>
                                </p>
                            </form>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⚡️</div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Request Logged</h3>
                                <p style={{ color: 'var(--color-grey-light)' }}>Our engineers will reach out with a custom fleet study.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Links Section - All Navbar Dropdowns */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '3rem'
                    }}>
                        {/* Solutions */}
                        <div>
                            <h4 style={sectionHeaderStyle}>Solutions</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/solutions" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Overview</Link>
                                <Link to="/solutions/vehicles-operations" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Vehicles & Operations</Link>
                                <Link to="/solutions/infrastructure" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Infrastructure</Link>
                                <Link to="/solutions/intelligence" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Intelligence Platform</Link>
                                <Link to="/solutions/financing" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>EV Truck as a Service</Link>
                            </div>
                        </div>


                        {/* Network */}
                        <div>
                            <h4 style={sectionHeaderStyle}>Network</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/network/corridors" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Operational Corridors</Link>
                                <Link to="/network/infrastructure" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Charging Infrastructure</Link>

                            </div>
                        </div>

                        {/* Impact */}
                        <div>
                            <h4 style={sectionHeaderStyle}>Impact</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/impact/calculator" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>ROI Calculator</Link>
                                <Link to="/impact/environmental" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Environmental Impact</Link>
                                <Link to="/impact/economic" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Economic Analysis</Link>

                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 style={sectionHeaderStyle}>Company</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/company/about" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>About Us</Link>
                                <Link to="/company/team" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Leadership Team</Link>
                                <Link to="/company/investors" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Investors</Link>
                                <Link to="/company/partners" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Partners</Link>
                                <Link to="/company/careers" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Careers</Link>
                                <Link to="/company/newsroom" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Newsroom</Link>
                            </div>
                        </div>

                        {/* Resources & Legal */}
                        <div>
                            <h4 style={sectionHeaderStyle}>Resources</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/resources/blog" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Blog</Link>

                                <Link to="/resources/guides" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Guides</Link>
                                <Link to="/resources/faq" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>FAQ</Link>
                                <Link to="/site-map" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Site Map</Link>
                                <a href="#contact" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Contact</a>
                            </div>
                            <h4 style={{ ...sectionHeaderStyle, marginTop: '2rem' }}>Legal</h4>
                            <div style={linkContainerStyle}>
                                <Link to="/policies" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Privacy Policy</Link>
                                <Link to="/terms-and-conditions" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Terms & Conditions</Link>
                                <a href="https://www.linkedin.com/company/switch-labs" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>LinkedIn ↗</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: '0.85rem'
                }}>
                    © 2026 Switch Labs Private Limited. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

// Styles
const sectionHeaderStyle = {
    color: 'var(--color-accent)',
    marginBottom: '1.25rem',
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.15em'
};

const linkContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
};

const linkStyle = {
    fontSize: '0.95rem',
    color: 'var(--color-grey-light)',
    textDecoration: 'none',
    transition: 'var(--transition-smooth)'
};

const linkHover = (e) => (e.target.style.color = 'white');
const linkOut = (e) => (e.target.style.color = 'var(--color-grey-light)');

const footerInputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '1.25rem',
    color: 'white',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition-smooth)'
};

export default Footer;
