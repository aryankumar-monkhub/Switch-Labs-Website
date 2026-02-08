import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ label, items, currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
        >
            <button
                onClick={handleClick}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--color-white)',
                    opacity: 0.8,
                    transition: 'var(--transition-smooth)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem 0'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseOut={(e) => {
                    if (!isOpen) {
                        e.currentTarget.style.opacity = 0.8;
                        e.currentTarget.style.color = 'var(--color-white)';
                    }
                }}
            >
                {label}
                <ChevronDown
                    size={16}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="glass"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginTop: '1rem',
                            minWidth: '280px',
                            padding: '0.75rem 0',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(10, 12, 14, 0.95)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                            zIndex: 1000
                        }}
                    >
                        {items.map((item, index) => {
                            if (item.type === 'divider') {
                                return (
                                    <div
                                        key={`divider-${index}`}
                                        style={{
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.1)',
                                            margin: '0.5rem 0'
                                        }}
                                    />
                                );
                            }

                            if (item.type === 'header') {
                                return (
                                    <div
                                        key={`header-${index}`}
                                        style={{
                                            padding: '0.5rem 1.25rem',
                                            fontSize: '0.7rem',
                                            fontWeight: '800',
                                            textTransform: 'uppercase',
                                            color: 'var(--color-accent)',
                                            letterSpacing: '0.1em'
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                );
                            }

                            const isActive = currentPath === item.path;

                            return (
                                <Link
                                    key={item.path || index}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1.25rem',
                                        textDecoration: 'none',
                                        color: isActive ? 'var(--color-accent)' : 'var(--color-white)',
                                        transition: 'var(--transition-smooth)',
                                        background: isActive ? 'rgba(76, 163, 255, 0.1)' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(76, 163, 255, 0.1)';
                                        e.currentTarget.style.color = 'var(--color-accent)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--color-white)';
                                        }
                                    }}
                                >
                                    {item.icon && (
                                        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
                                            {item.icon}
                                        </span>
                                    )}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.15rem' }}>
                                            {item.label}
                                        </div>
                                        {item.description && (
                                            <div style={{ fontSize: '0.75rem', color: 'var(--color-grey-light)', lineHeight: '1.3' }}>
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
