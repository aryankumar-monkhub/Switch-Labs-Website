import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const FloatingCTA = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px var(--color-accent-glow)',
                zIndex: 100,
                border: 'none',
                cursor: 'pointer'
            }}
        >
            <MessageSquare size={28} strokeWidth={2.5} />

            {/* Pulsing Ring */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid var(--color-accent)',
                    pointerEvents: 'none'
                }}
            />
        </motion.button>
    );
};

export default FloatingCTA;
