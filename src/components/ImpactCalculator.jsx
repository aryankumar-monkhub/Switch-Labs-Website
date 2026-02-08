import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const ImpactCalculator = ({ onAction }) => {
    const [trucks, setTrucks] = useState(20);
    const [km, setKm] = useState(5000);
    const [energySource, setEnergySource] = useState('grid'); // 'grid', 'renewable', 'diesel'

    const [metrics, setMetrics] = useState({
        carbonSaved: 0,
        treesEquiv: 0,
        dieselBase: 0,
        evImpact: 0
    });

    const springCarbon = useSpring(0, { stiffness: 80, damping: 20 });

    const displayCarbon = useTransform(springCarbon, (val) => Math.round(val).toLocaleString());

    useEffect(() => {
        // --- CONSTANTS (India Focused) ---
        const DIESEL_CO2_PER_KM = 1.5; // kg CO2/km
        const GRID_CO2_PER_KWH = 0.82; // India National Average (kg CO2/kWh)
        const RENEWABLE_CO2_PER_KWH = 0.05; // Lifecycle emissions
        const EV_EFFICIENCY = 1.4; // kWh/km for heavy trucks (25-55T)

        // --- CALCULATIONS ---
        const totalKm = trucks * km;

        // Carbon Logic (Tonnes)
        const dieselEmissions = (totalKm * DIESEL_CO2_PER_KM) / 1000;
        const evEmissionFactor = energySource === 'renewable' ? RENEWABLE_CO2_PER_KWH : GRID_CO2_PER_KWH;
        const evEmissions = (totalKm * EV_EFFICIENCY * evEmissionFactor) / 1000;

        const carbonSaved = dieselEmissions - evEmissions;
        const trees = carbonSaved * 45; // Approx 45 trees per tonne of CO2 per year

        setMetrics({
            carbonSaved,
            treesEquiv: trees,
            dieselBase: dieselEmissions,
            evImpact: evEmissions
        });

        springCarbon.set(carbonSaved);
    }, [trucks, km, energySource]);

    return (
        <section id="impact" className="noise-overlay">
            <div className="container">
                <div className="glass border-heavy" style={{
                    padding: '3rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background Decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
                        zIndex: 0,
                        opacity: 0.3
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-header" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', fontWeight: '800' }}>
                                Simulate Your <span style={{ color: 'var(--color-accent)' }}>Transition</span>
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                                Calculated for Indian industrial conditions. See the massive impact of moving to Switch EV stacks.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(300px, 1fr) 1fr',
                            gap: '4rem',
                            alignItems: 'stretch'
                        }}>
                            {/* LEFT PANEL: INPUTS & CHART */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {/* Inputs */}
                                <div className="input-group">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'baseline' }}>
                                        <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', fontSize: '1rem' }}>Fleet Size</label>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem', fontWeight: '900' }}>{trucks} <small style={{ fontSize: '0.7rem', color: 'var(--color-grey-dark)' }}>TRUCKS</small></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="200"
                                        value={trucks}
                                        onChange={(e) => setTrucks(parseInt(e.target.value))}
                                        className="custom-slider"
                                    />
                                </div>

                                <div className="input-group">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'baseline' }}>
                                        <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', fontSize: '1rem' }}>Monthly Run / Truck</label>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem', fontWeight: '900' }}>{km.toLocaleString()} <small style={{ fontSize: '0.7rem', color: 'var(--color-grey-dark)' }}>KM</small></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="15000"
                                        step="500"
                                        value={km}
                                        onChange={(e) => setKm(parseInt(e.target.value))}
                                        className="custom-slider"
                                    />
                                </div>

                                <div className="input-group">
                                    <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', display: 'block', marginBottom: '1rem', fontSize: '1rem' }}>
                                        Power Source Configuration
                                    </label>
                                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                                        {['grid', 'renewable'].map((source) => (
                                            <button
                                                key={source}
                                                onClick={() => setEnergySource(source)}
                                                style={{
                                                    flex: 1,
                                                    padding: '1rem',
                                                    border: '1px solid',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    background: energySource === source ? 'var(--color-accent-glow)' : 'rgba(255,255,255,0.02)',
                                                    color: energySource === source ? 'var(--color-accent)' : 'var(--color-grey-light)',
                                                    borderColor: energySource === source ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {source}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Visualization moved to Left */}
                                <div style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', letterSpacing: '0.5px' }}>
                                        <span>Diesel Baseline</span>
                                        <span>{Math.round(metrics.dieselBase)}t CO₂</span>
                                    </div>
                                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            style={{ height: '100%', background: '#ef4444' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', letterSpacing: '0.5px' }}>
                                        <span>Switch EV Impact</span>
                                        <span style={{ color: 'var(--color-accent)' }}>{Math.round(metrics.evImpact)}t CO₂</span>
                                    </div>
                                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(metrics.evImpact / metrics.dieselBase) * 100}%` }}
                                            style={{ height: '100%', background: 'var(--color-accent)' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT PANEL: RESULTS */}
                            <div style={{
                                background: 'linear-gradient(145deg, rgba(16,18,20,0.6) 0%, rgba(5,7,9,0.9) 100%)',
                                border: '1px solid var(--color-accent-glow)',
                                borderRadius: '20px',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                gap: '2rem'
                            }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-grey-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                        Projected Savings
                                    </h4>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                        <motion.div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-accent)', lineHeight: '1' }}>
                                            <motion.span>{displayCarbon}</motion.span>
                                        </motion.div>
                                        <div style={{ fontSize: '1rem', color: 'var(--color-grey-light)', lineHeight: '1.3' }}>
                                            Tonnes CO₂ <br /> <span style={{ color: 'var(--color-white)' }}>Saved Monthly</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '1.5rem', background: 'rgba(46, 204, 113, 0.05)', borderRadius: '12px', border: '1px solid rgba(46, 204, 113, 0.2)' }}>
                                    <p style={{ color: '#2ecc71', fontSize: '0.7rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Equiv. Trees Planted</p>
                                    <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2L12 22" />
                                            <path d="M12 22C12 22 20 16 20 10C20 5 16 2 12 2C8 2 4 5 4 10C4 16 12 22 12 22Z" />
                                            <path d="M12 7L7 12" />
                                            <path d="M12 7L17 12" />
                                        </svg>
                                        {Math.round(metrics.treesEquiv).toLocaleString()}
                                    </div>
                                </div>

                                <button
                                    onClick={onAction}
                                    className="button-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        fontSize: '0.9rem',
                                        marginTop: '1rem'
                                    }}
                                >
                                    Get Detailed Impact Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactCalculator;
