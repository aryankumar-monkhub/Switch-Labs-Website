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

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    from_name: form.name,
                    from_email: form.email,
                    contact: form.contact,
                    company: form.company,
                    subject: form.subject,
                    message: form.message,
                    to_email: 'switchlabsautomobiles@gmail.com',
                },
                'YOUR_PUBLIC_KEY'
            );
            setSent(true);
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        }
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

                {sent ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Your Message has been sent</h3>
                        <p style={{ color: 'var(--color-grey-light)' }}>Our Team will reach you within 24 hours</p>
                    </div>
                ) : (
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
                            <input name="contact" value={form.contact} onChange={handleChange} required placeholder="Phone number" style={inputStyle} />
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
                )}
            </motion.div>
        </div>
    );
};

export default LeadModal;
