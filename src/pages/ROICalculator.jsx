import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const formatCurrency = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
};

const ROICalculator = () => {
    const [truckCost, setTruckCost] = useState(90); // in lakhs
    const [downpaymentPct, setDownpaymentPct] = useState(10);
    const [interestRate, setInterestRate] = useState(12);
    const [loanTenure, setLoanTenure] = useState(6); // years
    const [monthlyRevenue, setMonthlyRevenue] = useState(6); // in lakhs
    const [profitMargin, setProfitMargin] = useState(10);
    const [deploymentYears, setDeploymentYears] = useState(8);

    const results = useMemo(() => {
        const costInRs = truckCost * 100000;
        const downpayment = costInRs * (downpaymentPct / 100);
        const loanAmount = costInRs - downpayment;
        const monthlyRate = interestRate / 100 / 12;
        const months = loanTenure * 12;

        // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
        const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
        const totalRepayment = emi * months;
        const totalInterest = totalRepayment - loanAmount;

        const revenueInRs = monthlyRevenue * 100000;
        const monthlyProfit = revenueInRs * (profitMargin / 100);
        const deploymentMonths = deploymentYears * 12;
        const totalProfit = monthlyProfit * deploymentMonths;

        const equityMultiple = totalProfit / downpayment;
        const roi = ((totalProfit - downpayment) / downpayment) * 100;

        // Approximate IRR using Newton's method
        let irr = 0.25;
        for (let i = 0; i < 50; i++) {
            let npv = -downpayment;
            let dnpv = 0;
            for (let m = 1; m <= deploymentMonths; m++) {
                const factor = Math.pow(1 + irr / 12, m);
                npv += monthlyProfit / factor;
                dnpv -= (m / 12) * monthlyProfit / (factor * (1 + irr / 12));
            }
            const newIrr = irr - npv / dnpv;
            if (Math.abs(newIrr - irr) < 0.0001) break;
            irr = newIrr;
        }

        return {
            downpayment,
            loanAmount,
            emi,
            totalRepayment,
            totalInterest,
            monthlyProfit,
            totalProfit,
            equityMultiple,
            roi,
            irr: irr * 100,
            deploymentMonths,
        };
    }, [truckCost, downpaymentPct, interestRate, loanTenure, monthlyRevenue, profitMargin, deploymentYears]);

    const sliders = [
        { label: 'Truck Cost', value: truckCost, set: setTruckCost, min: 30, max: 200, step: 5, unit: '₹ Lakh', display: `₹${truckCost} Lakh` },
        { label: 'Downpayment', value: downpaymentPct, set: setDownpaymentPct, min: 5, max: 50, step: 1, unit: '%', display: `${downpaymentPct}% (${formatCurrency(results.downpayment)})` },
        { label: 'Interest Rate', value: interestRate, set: setInterestRate, min: 6, max: 18, step: 0.5, unit: '% p.a.', display: `${interestRate}% p.a.` },
        { label: 'Loan Tenure', value: loanTenure, set: setLoanTenure, min: 1, max: 10, step: 1, unit: 'Years', display: `${loanTenure} Years (${loanTenure * 12} months)` },
        { label: 'Monthly Revenue', value: monthlyRevenue, set: setMonthlyRevenue, min: 1, max: 20, step: 0.5, unit: '₹ Lakh', display: `₹${monthlyRevenue} Lakh/month` },
        { label: 'Net Profit Margin', value: profitMargin, set: setProfitMargin, min: 2, max: 30, step: 1, unit: '%', display: `${profitMargin}%` },
        { label: 'Deployment Period', value: deploymentYears, set: setDeploymentYears, min: 3, max: 15, step: 1, unit: 'Years', display: `${deploymentYears} Years` },
    ];

    const summaryRows = [
        { label: 'Truck Cost', value: `₹${truckCost} Lakh` },
        { label: 'Equity Invested', value: formatCurrency(results.downpayment) },
        { label: 'Loan Amount', value: formatCurrency(results.loanAmount) },
        { label: 'EMI', value: `~${formatCurrency(Math.round(results.emi))}/month` },
        { label: 'Monthly Revenue', value: `₹${monthlyRevenue} Lakh` },
        { label: 'Monthly Net Profit', value: formatCurrency(Math.round(results.monthlyProfit)) },
        { label: `Total ${deploymentYears}-Year Profit`, value: formatCurrency(Math.round(results.totalProfit)) },
        { label: 'Equity Multiple', value: `~${results.equityMultiple.toFixed(1)}x` },
        { label: 'Total ROI', value: `~${Math.round(results.roi)}%` },
        { label: 'Estimated Equity IRR', value: `~${Math.round(results.irr)}%` },
    ];

    const cardStyle = {
        background: 'linear-gradient(145deg, rgba(16,18,20,0.7) 0%, rgba(5,7,9,0.95) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '2rem',
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #97CAFF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem',
                        lineHeight: '1.1',
                    }}>
                        EV Truck ROI Calculator
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
                        Model your equity returns on an EV truck investment. Adjust assumptions below to see how leverage, margin, and deployment period affect your ROI.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

                    {/* LEFT — Inputs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ ...cardStyle, position: 'sticky', top: '120px' }}
                    >
                        <h3 style={{
                            fontSize: '1.1rem', fontWeight: '800', textTransform: 'uppercase',
                            letterSpacing: '2px', color: 'var(--color-grey-light)', marginBottom: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem',
                        }}>
                            Assumptions
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            {sliders.map((s) => (
                                <div key={s.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', alignItems: 'baseline' }}>
                                        <label style={{ fontWeight: '600', color: 'var(--color-grey-light)', fontSize: '0.9rem' }}>{s.label}</label>
                                        <span style={{ color: 'var(--color-accent)', fontSize: '1rem', fontWeight: '800' }}>{s.display}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={s.min}
                                        max={s.max}
                                        step={s.step}
                                        value={s.value}
                                        onChange={(e) => s.set(parseFloat(e.target.value))}
                                        className="custom-slider"
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'rgba(160,160,160,0.5)', marginTop: '0.3rem' }}>
                                        <span>{s.min} {s.unit}</span>
                                        <span>{s.max} {s.unit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        {/* Hero metrics */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                            {[
                                { label: 'Total ROI', value: `${Math.round(results.roi)}%`, color: 'var(--color-accent)' },
                                { label: 'Equity Multiple', value: `${results.equityMultiple.toFixed(1)}x`, color: '#97CAFF' },
                                { label: 'Equity IRR', value: `~${Math.round(results.irr)}%`, color: '#2ecc71' },
                                { label: 'Monthly EMI', value: formatCurrency(Math.round(results.emi)), color: '#f39c12' },
                            ].map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    style={{
                                        ...cardStyle,
                                        textAlign: 'center',
                                        padding: '1.5rem 1rem',
                                        borderColor: `${m.color}22`,
                                    }}
                                >
                                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-grey-light)', marginBottom: '0.6rem' }}>
                                        {m.label}
                                    </div>
                                    <motion.div
                                        key={m.value}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        style={{ fontSize: '2rem', fontWeight: '900', color: m.color, lineHeight: 1 }}
                                    >
                                        {m.value}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* EMI Breakdown */}
                        <div style={cardStyle}>
                            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-grey-light)', marginBottom: '1.5rem' }}>
                                1. EMI Breakdown
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                {[
                                    { label: 'Loan Amount', val: formatCurrency(results.loanAmount) },
                                    { label: 'Total Repayment', val: formatCurrency(Math.round(results.totalRepayment)) },
                                    { label: 'Total Interest', val: formatCurrency(Math.round(results.totalInterest)) },
                                ].map((item) => (
                                    <div key={item.label} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>{item.label}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-white)' }}>{item.val}</div>
                                    </div>
                                ))}
                            </div>
                            {/* Visual bar */}
                            <div style={{ marginTop: '1.2rem' }}>
                                <div style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
                                    <motion.div
                                        animate={{ width: `${(results.loanAmount / results.totalRepayment) * 100}%` }}
                                        style={{ height: '100%', background: 'var(--color-accent)', borderRadius: '4px 0 0 4px' }}
                                    />
                                    <motion.div
                                        animate={{ width: `${(results.totalInterest / results.totalRepayment) * 100}%` }}
                                        style={{ height: '100%', background: '#f39c12', borderRadius: '0 4px 4px 0' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', marginTop: '0.4rem', color: 'var(--color-grey-light)' }}>
                                    <span style={{ color: 'var(--color-accent)' }}>● Principal</span>
                                    <span style={{ color: '#f39c12' }}>● Interest</span>
                                </div>
                            </div>
                        </div>

                        {/* Operating Profit */}
                        <div style={cardStyle}>
                            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-grey-light)', marginBottom: '1.5rem' }}>
                                2. Operating Profit
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#2ecc71' }}>
                                    {formatCurrency(Math.round(results.totalProfit))}
                                </div>
                                <div style={{ color: 'var(--color-grey-light)', fontSize: '0.9rem' }}>
                                    over {deploymentYears} years
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1, padding: '0.8rem', background: 'rgba(46,204,113,0.08)', borderRadius: '8px', border: '1px solid rgba(46,204,113,0.15)' }}>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.3rem' }}>Monthly Profit</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2ecc71' }}>{formatCurrency(Math.round(results.monthlyProfit))}</div>
                                </div>
                                <div style={{ flex: 1, padding: '0.8rem', background: 'rgba(76,163,255,0.08)', borderRadius: '8px', border: '1px solid rgba(76,163,255,0.15)' }}>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.3rem' }}>Deployment</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-accent)' }}>{results.deploymentMonths} months</div>
                                </div>
                            </div>
                        </div>

                        {/* Equity Returns */}
                        <div style={{ ...cardStyle, background: 'linear-gradient(145deg, rgba(76,163,255,0.08) 0%, rgba(5,7,9,0.95) 100%)', borderColor: 'rgba(76,163,255,0.15)' }}>
                            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-grey-light)', marginBottom: '1.5rem' }}>
                                3. Equity Returns
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.5rem' }}>Equity In</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--color-white)' }}>{formatCurrency(results.downpayment)}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.5rem' }}>Cash Generated</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#2ecc71' }}>{formatCurrency(Math.round(results.totalProfit))}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.5rem' }}>Multiple</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--color-accent)' }}>{results.equityMultiple.toFixed(1)}x</div>
                                </div>
                            </div>
                            <div style={{
                                padding: '1.2rem', borderRadius: '10px',
                                background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.2)',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-grey-light)', marginBottom: '0.4rem' }}>
                                    Key Insight
                                </div>
                                <p style={{ color: '#2ecc71', fontSize: '0.9rem', fontWeight: '600', lineHeight: 1.5, margin: 0 }}>
                                    With {downpaymentPct}% equity and {100 - downpaymentPct}% debt financing, even a {profitMargin}% operating margin generates a <strong>{results.equityMultiple.toFixed(1)}x</strong> equity return over {deploymentYears} years if utilization remains stable.
                                </p>
                            </div>
                        </div>

                        {/* Summary Table */}
                        <div style={cardStyle}>
                            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-grey-light)', marginBottom: '1.5rem' }}>
                                Final Summary
                            </h4>
                            <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                                {summaryRows.map((row, i) => (
                                    <div
                                        key={row.label}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            padding: '0.9rem 1.2rem',
                                            background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                                            borderBottom: i < summaryRows.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                                        }}
                                    >
                                        <span style={{ color: 'var(--color-grey-light)', fontSize: '0.9rem' }}>{row.label}</span>
                                        <span style={{
                                            fontWeight: '800',
                                            fontSize: '0.95rem',
                                            color: i >= summaryRows.length - 3 ? 'var(--color-accent)' : 'var(--color-white)',
                                        }}>
                                            {row.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link
                                to="/contact"
                                className="button-primary"
                                style={{ flex: 1, textAlign: 'center', padding: '1.1rem' }}
                            >
                                Get Custom Analysis
                            </Link>
                        </div>

                        {/* Disclaimer */}
                        <p style={{ fontSize: '0.7rem', color: 'rgba(160,160,160,0.5)', lineHeight: 1.6, textAlign: 'center' }}>
                            * Estimates based on standard EMI formula. Actual returns depend on utilization, maintenance capex, battery replacement, residual value, taxes, and other operational factors. Contact us for a detailed, customized financial model.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile responsive override */}
            <style>{`
                @media (max-width: 768px) {
                    #roi-calc-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ROICalculator;
