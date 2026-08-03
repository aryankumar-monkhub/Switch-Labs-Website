import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.8rem',
    background: 'var(--subtle-bg)',
    border: '1px solid var(--color-white)',
    borderRadius: '8px',
    color: 'var(--color-white)',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border 0.2s',
    boxSizing: 'border-box'
};

const labelStyle = {
    display: 'block',
    color: 'var(--color-accent)',
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem'
};

const LeadModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({ name: '', email: '', contact: '', company: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_kitlnb8', 'template_l7pv5qh', {
            name: form.name,
            email: form.email,
            phone: `+91 ${form.contact}`,
            company: form.company,
            subject: form.subject || 'Contact Inquiry',
            message: form.message,
        }, { publicKey: 'StxpEdmeC33SuAAk4' })
        .then(() => {
            setSent(true);
            setShowPopup(true);
        })
        .catch((err) => console.error('EmailJS error:', err));
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        }} onClick={onClose}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 0 50px rgba(0, 0, 0, 0.5), 0 0 20px var(--color-accent-glow)',
                    background: 'var(--color-primary)',
                    border: '1px solid var(--subtle-border)',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        color: 'var(--color-grey-light)',
                        transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-grey-light)'}
                >
                    <X size={24} />
                </button>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Send us a Message</h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <div>
                        <label style={labelStyle}>Name</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Your Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@company.com" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Contact</label>
                        <div style={{ ...inputStyle, display: 'flex', alignItems: 'center', padding: '0 0.8rem' }}>
                            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '1rem', borderRight: '1px solid var(--color-white)', paddingRight: '0.5rem', marginRight: '0.5rem' }}>+91</span>
                            <input
                                name="contact"
                                type="tel"
                                maxLength={10}
                                placeholder="XXXXX XXXXX"
                                value={form.contact}
                                onChange={(e) => { const val = e.target.value.replace(/\D/g, ''); setForm({ ...form, contact: val }); }}
                                required
                                style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', fontSize: '1rem', outline: 'none', width: '100%', padding: '0.6rem 0' }}
                            />
                        </div>
                    </div>
                    <div>
                        <label style={labelStyle}>Company Name</label>
                        <input name="company" value={form.company} onChange={handleChange} required placeholder="Your organization" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Subject</label>
                        <input name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your requirements..." rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                    <button type="submit" style={{
                        padding: '0.7rem',
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 0 20px var(--color-accent-glow)',
                        transition: 'var(--transition-smooth)',
                        marginTop: '0.3rem'
                    }}>
                        Send Message
                    </button>
                </form>
            </motion.div>

            {/* Success Popup */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1100,
                    padding: '1rem'
                }}>
                    <div style={{
                        background: 'var(--color-primary)',
                        border: '1px solid var(--color-accent)',
                        borderRadius: '16px',
                        padding: '2rem',
                        maxWidth: '420px',
                        width: '100%',
                        textAlign: 'center',
                        boxShadow: '0 0 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--color-accent-glow)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                            Your Message has been sent
                        </h3>
                        <p style={{ color: 'var(--color-grey-light)', fontSize: '1rem', marginBottom: '2rem' }}>
                            Our team will reach you within 24 hours
                        </p>
                        <button
                            onClick={() => {
                                setShowPopup(false);
                                setSent(false);
                                setForm({ name: '', email: '', contact: '', company: '', subject: '', message: '' });
                                onClose();
                            }}
                            style={{
                                padding: '0.8rem 2.5rem',
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 0 20px var(--color-accent-glow)',
                                transition: 'var(--transition-smooth)'
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeadModal;
