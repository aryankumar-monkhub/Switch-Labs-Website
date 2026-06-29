import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Truck, BarChart3, Mail, Phone, Building2, User, CheckCircle2, Factory, Zap } from 'lucide-react';

const LeadModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        interests: [],
        fleetSize: '',
        routeType: '',
        name: '',
        company: '',
        email: '',
        countryCode: '+91',
        phone: ''
    });

    const totalSteps = 4;

    const handleInterestSelect = (interestId) => {
        setFormData(prev => {
            const interests = prev.interests.includes(interestId)
                ? prev.interests.filter(id => id !== interestId)
                : [...prev.interests, interestId];
            return { ...prev, interests };
        });
    };

    const handleFleetSelect = (size) => {
        setFormData({ ...formData, fleetSize: size });
    };

    const [errors, setErrors] = useState({});

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
        setFormData({ ...formData, [name]: value });
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

        setStep(4);
        console.log('Form Submitted:', formData);
    };

    // ... (variants definitions)

    const getInputStyle = (fieldName) => ({
        ...inputStyle,
        border: errors[fieldName] ? '1px solid var(--color-error)' : inputStyle.border,
        boxShadow: errors[fieldName] ? '0 0 10px rgba(239, 68, 68, 0.2)' : 'none'
    });

    // ... (variants definitions continued)

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 }
    };

    const stepVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newStep) => {
        const dir = newStep > step ? 1 : -1;
        setStep(newStep);
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
                className="glass"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    boxShadow: '0 0 50px rgba(0, 0, 0, 0.5), 0 0 20px var(--color-accent-glow)'
                }}
            >
                {/* Progress Bar */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.05)'
                }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        style={{
                            height: '100%',
                            background: 'var(--color-accent)',
                            boxShadow: '0 0 10px var(--color-accent)'
                        }}
                    />
                </div>

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

                <AnimatePresence mode="wait" custom={direction}>
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            custom={1}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                                How can SwitchLabs <span style={{ color: 'var(--color-accent)' }}>power</span> your growth?
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                                Select all areas that fit your needs.
                            </p>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {[
                                    { id: 'fleet', title: 'Transform my Fleet', icon: <Truck size={24} />, desc: 'Switch to heavy-duty EVs and cut costs by 40%.' },
                                    { id: 'ops', title: 'Operational Partnership', icon: <Zap size={24} />, desc: 'Lease our transformation stack for your logistics.' },
                                    { id: 'invest', title: 'Investor Relations', icon: <BarChart3 size={24} />, desc: 'Explore investment opportunities in the future of freight.' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleInterestSelect(item.id)}
                                        className="glass"
                                        style={{
                                            padding: '1.5rem',
                                            textAlign: 'left',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            transition: 'var(--transition-smooth)',
                                            border: formData.interests.includes(item.id) ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.05)',
                                            background: formData.interests.includes(item.id) ? 'rgba(76, 163, 255, 0.1)' : 'rgba(10, 12, 14, 0.4)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!formData.interests.includes(item.id)) {
                                                e.currentTarget.style.background = 'rgba(76, 163, 255, 0.05)';
                                            }
                                            e.currentTarget.style.transform = 'translateX(10px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!formData.interests.includes(item.id)) {
                                                e.currentTarget.style.background = 'rgba(10, 12, 14, 0.4)';
                                            }
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <div style={{
                                            background: formData.interests.includes(item.id) ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.1)',
                                            color: formData.interests.includes(item.id) ? 'var(--color-primary)' : 'var(--color-accent)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            transition: 'var(--transition-smooth)'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '800', color: 'var(--color-white)' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--color-grey-light)' }}>{item.desc}</div>
                                        </div>
                                        {formData.interests.includes(item.id) && (
                                            <CheckCircle2 size={20} style={{ marginLeft: 'auto', color: 'var(--color-accent)' }} />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={formData.interests.length === 0}
                                className="button-primary"
                                style={{
                                    width: '100%',
                                    marginTop: '2rem',
                                    opacity: formData.interests.length > 0 ? 1 : 0.5,
                                    cursor: formData.interests.length > 0 ? 'pointer' : 'not-allowed'
                                }}
                            >
                                Continue <ChevronRight size={18} />
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            custom={1}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                                Tell us about your <span style={{ color: 'var(--color-accent)' }}>operation.</span>
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                                This helps us calculate your potential savings instantly.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                                    Current Fleet Size
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                                    {['1-10', '10-50', '50+'].map(size => (
                                        <button
                                            key={size}
                                            onClick={() => handleFleetSelect(size)}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                background: formData.fleetSize === size ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                                                color: formData.fleetSize === size ? 'var(--color-primary)' : 'var(--color-white)',
                                                fontWeight: '700',
                                                transition: 'var(--transition-smooth)'
                                            }}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                                    Primary Route Focus
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {[
                                        { id: 'Short Haul', label: 'Short Haul', icon: <Building2 size={18} /> },
                                        { id: 'Long Haul', label: 'Long Haul', icon: <Factory size={18} /> }
                                    ].map(route => (
                                        <button
                                            key={route.id}
                                            onClick={() => setFormData({ ...formData, routeType: route.id })}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                background: formData.routeType === route.id ? 'var(--color-accent)' : 'rgba(255,255,255,0.05)',
                                                color: formData.routeType === route.id ? 'var(--color-primary)' : 'var(--color-white)',
                                                fontWeight: '700',
                                                transition: 'var(--transition-smooth)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            {route.icon}
                                            {route.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(3)}
                                disabled={!formData.fleetSize || !formData.routeType}
                                className="button-primary"
                                style={{
                                    width: '100%',
                                    marginTop: '1rem',
                                    opacity: (!formData.fleetSize || !formData.routeType) ? 0.5 : 1,
                                    cursor: (!formData.fleetSize || !formData.routeType) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Continue <ChevronRight size={18} />
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            custom={1}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                                Almost <span style={{ color: 'var(--color-accent)' }}>there.</span>
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                                Where should we send your personalized transition roadmap?
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="input-group">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: errors.name ? 'var(--color-error)' : 'var(--color-grey-light)' }}>
                                            <User size={14} /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            placeholder="John Doe"
                                            style={getInputStyle('name')}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: errors.company ? 'var(--color-error)' : 'var(--color-grey-light)' }}>
                                            <Building2 size={14} /> Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            placeholder="Logistics Inc"
                                            style={getInputStyle('company')}
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: errors.email ? 'var(--color-error)' : 'var(--color-grey-light)' }}>
                                        <Mail size={14} /> Work Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="john@company.com"
                                        style={getInputStyle('email')}
                                    />
                                </div>

                                <div className="input-group">
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: errors.phone ? 'var(--color-error)' : 'var(--color-grey-light)' }}>
                                        <Phone size={14} /> Phone Number
                                    </label>
                                    <div style={{ ...getInputStyle('phone'), display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
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
                                            value={formData.phone}
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                e.target.value = val;
                                                handleInputChange(e);
                                            }}
                                            placeholder="XXXXX XXXXX"
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

                                <button
                                    type="submit"
                                    className="button-primary"
                                    style={{ width: '100%', marginTop: '1rem' }}
                                >
                                    Get My Free Roadmap
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            custom={1}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            style={{ textAlign: 'center', padding: '2rem 0' }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    background: 'var(--color-accent)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 2rem',
                                    boxShadow: '0 0 30px var(--color-accent)'
                                }}
                            >
                                <CheckCircle2 size={50} color="var(--color-primary)" />
                            </motion.div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-white)' }}>
                                All Systems <span style={{ color: 'var(--color-accent)' }}>GO!</span>
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                                Thank you, {formData.name.split(' ')[0]}. Our team is preparing your custom roadmap for {formData.company}. We'll reach out within 24 hours.
                            </p>

                            <button
                                onClick={onClose}
                                className="glass"
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '8px',
                                    fontWeight: '800',
                                    color: 'var(--color-white)',
                                    textTransform: 'uppercase',
                                    transition: 'var(--transition-smooth)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                            >
                                Close Dashboard
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: 'var(--color-white)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition-smooth)'
};

// Add focus styles via a global effect or keep it simple
// For the sake of this component, we can use inline onFocus if needed but standard CSS is better

export default LeadModal;
