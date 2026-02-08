import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const ImpactCalculator = ({ onAction }) => {
    const [trucks, setTrucks] = useState(20);
    const [km, setKm] = useState(5000);
    const [energySource, setEnergySource] = useState('grid'); // 'grid', 'renewable', 'diesel'

    const [metrics, setMetrics] = useState({
        carbonSaved: 0,
        costSavings: 0,
        treesEquiv: 0,
        dieselBase: 0,
        evImpact: 0
    });

    const springCarbon = useSpring(0, { stiffness: 80, damping: 20 });
    const springCost = useSpring(0, { stiffness: 80, damping: 20 });

    const displayCarbon = useTransform(springCarbon, (val) => Math.round(val).toLocaleString());
    const displayCost = useTransform(springCost, (val) => Math.round(val).toLocaleString());

    useEffect(() => {
        // --- CONSTANTS (India Focused) ---
        const DIESEL_CO2_PER_KM = 1.5; // kg CO2/km
        const GRID_CO2_PER_KWH = 0.82; // India National Average (kg CO2/kWh)
        const RENEWABLE_CO2_PER_KWH = 0.05; // Lifecycle emissions
        const EV_EFFICIENCY = 1.4; // kWh/km for heavy trucks (25-55T)

        const DIESEL_COST_PER_KM = 32; // ₹32/km (avg efficiency 2.8km/L at ₹90/L)
        const GRID_COST_PER_KWH = 9;   // ₹9/kWh Industrial
        const RENEWABLE_COST_PER_KWH = 5; // ₹5/kWh Solar Open Access/On-site
        const EV_MAINT_SAVING_PER_KM = 4; // ₹4/km saved in maintenance

        // --- CALCULATIONS ---
        const totalKm = trucks * km;

        // Carbon Logic (Tonnes)
        const dieselEmissions = (totalKm * DIESEL_CO2_PER_KM) / 1000;
        const evEmissionFactor = energySource === 'renewable' ? RENEWABLE_CO2_PER_KWH : GRID_CO2_PER_KWH;
        const evEmissions = (totalKm * EV_EFFICIENCY * evEmissionFactor) / 1000;

        const carbonSaved = dieselEmissions - evEmissions;
        const trees = carbonSaved * 45; // Approx 45 trees per tonne of CO2 per year

        // Cost Logic (Lakhs INR)
        const dieselMonthlyCost = (totalKm * DIESEL_COST_PER_KM);
        const evEnergyCostFactor = energySource === 'renewable' ? RENEWABLE_COST_PER_KWH : GRID_COST_PER_KWH;
        const evMonthlyCost = (totalKm * EV_EFFICIENCY * evEnergyCostFactor) - (totalKm * EV_MAINT_SAVING_PER_KM);

        const costSavings = (dieselMonthlyCost - evMonthlyCost) / 100000; // In Lakhs

        setMetrics({
            carbonSaved,
            costSavings,
            treesEquiv: trees,
            dieselBase: dieselEmissions,
            evImpact: evEmissions
        });

        springCarbon.set(carbonSaved);
        springCost.set(costSavings);
    }, [trucks, km, energySource]);

    return (
        <section id="impact" className="noise-overlay">
            <div className="container">
                <div className="glass border-heavy" style={{
                    padding: '4rem',
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
                        <div className="section-header">
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800' }}>
                                Simulate Your <span style={{ color: 'var(--color-accent)' }}>Transition</span>
                            </h2>
                            <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                                Calculated for Indian industrial conditions. See the massive impact of moving to Switch EV stacks.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(350px, 1fr) 1.2fr',
                            gap: '6rem',
                            alignItems: 'start'
                        }}>
                            {/* INPUTS PANEL */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                                <div className="input-group">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'baseline' }}>
                                        <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', fontSize: '1.1rem' }}>Fleet Size</label>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem', fontWeight: '900' }}>{trucks} <small style={{ fontSize: '0.8rem', color: 'var(--color-grey-dark)' }}>TRUCKS</small></span>
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
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'baseline' }}>
                                        <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', fontSize: '1.1rem' }}>Monthly Run / Truck</label>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem', fontWeight: '900' }}>{km.toLocaleString()} <small style={{ fontSize: '0.8rem', color: 'var(--color-grey-dark)' }}>KM</small></span>
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
                                    <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', display: 'block', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                        Power Source Configuration
                                    </label>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {['grid', 'renewable'].map((source) => (
                                            <button
                                                key={source}
                                                onClick={() => setEnergySource(source)}
                                                style={{
                                                    flex: 1,
                                                    padding: '1.2rem',
                                                    border: '1px solid',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    background: energySource === source ? 'var(--color-accent-glow)' : 'rgba(255,255,255,0.02)',
                                                    color: energySource === source ? 'var(--color-accent)' : 'var(--color-grey-light)',
                                                    borderColor: energySource === source ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}
                                            >
                                                {source}
                                            </button>
                                        ))}
                                    </div>
                                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-grey-dark)' }}>
                                        {energySource === 'grid' ? 'Using standard industrial grid mix (~800g/kWh)' : 'Using 100% Solar/Wind open-access (~50g/kWh)'}
                                    </p>
                                </div>
                            </div>

                            {/* RESULTS DISPLAY */}
                            <div style={{
                                background: 'linear-gradient(145deg, rgba(10,12,14,0.8) 0%, rgba(5,7,9,0.9) 100%)',
                                border: '1px solid var(--color-accent-glow)',
                                borderRadius: '24px',
                                padding: '3.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '3rem',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}>
                                <div>
                                    <h4 style={{ color: 'var(--color-grey-light)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                                        Environmental Impact
                                    </h4>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                                        <motion.div style={{ fontSize: '5rem', fontWeight: '900', color: 'var(--color-accent)', lineHeight: '1' }}>
                                            <motion.span>{displayCarbon}</motion.span>
                                        </motion.div>
                                        <div style={{ fontSize: '1.2rem', color: 'var(--color-grey-light)' }}>
                                            Tonnes CO₂ Saved <br /> <small style={{ color: 'var(--color-grey-dark)' }}>per month</small>
                                        </div>
                                    </div>

                                    {/* Comparison Visualization */}
                                    <div style={{ marginTop: '2.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                                            <span>Diesel Baseline</span>
                                            <span>{Math.round(metrics.dieselBase)}t</span>
                                        </div>
                                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                style={{ height: '100%', background: '#ff4b2b' }}
                                            />
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                                            <span>Switch EV Impact</span>
                                            <span>{Math.round(metrics.evImpact)}t</span>
                                        </div>
                                        <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(metrics.evImpact / metrics.dieselBase) * 100}%` }}
                                                style={{ height: '100%', background: 'var(--color-accent)' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div style={{ borderLeft: '2px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                                        <p style={{ color: 'var(--color-grey-light)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Monthly Cost Savings</p>
                                        <div style={{ fontSize: '2rem', fontWeight: '800' }}>
                                            ₹<motion.span>{displayCost}</motion.span>L+
                                        </div>
                                    </div>
                                    <div style={{ borderLeft: '2px solid #2ecc71', paddingLeft: '1.5rem' }}>
                                        <p style={{ color: 'var(--color-grey-light)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Trees Equivalent</p>
                                        <div style={{ fontSize: '2rem', fontWeight: '800', color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontSize: '1.5rem' }}>🌳</span>
                                            {Math.round(metrics.treesEquiv).toLocaleString()}
                                        </div>
                                        <p style={{ fontSize: '0.65rem', color: 'var(--color-grey-dark)', marginTop: '0.2rem' }}>Yearly absorption equivalent</p>
                                    </div>
                                </div>

                                <button
                                    onClick={onAction}
                                    className="button-primary"
                                    style={{ width: '100%' }}
                                >
                                    Get Detailed ROI Report
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
