import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingDown, PiggyBank, Award, CheckCircle, Calculator } from 'lucide-react';

const FinancingOptions = () => {
    const [calculatorInputs, setCalculatorInputs] = useState({
        distance: 70,
        tripsPerDay: 3,
        daysPerMonth: 26,
        dieselPrice: 100,
        dieselMileage: 3,
        electricityRate: 8,
        evEfficiency: 1.2
    });

    const [showResults, setShowResults] = useState(false);

    const calculateROI = () => {
        const monthlyKm = calculatorInputs.distance * 2 * calculatorInputs.tripsPerDay * calculatorInputs.daysPerMonth;

        // Diesel costs
        const dieselLiters = monthlyKm / calculatorInputs.dieselMileage;
        const dieselCost = dieselLiters * calculatorInputs.dieselPrice;
        const dieselMaintenance = monthlyKm * 2; // ₹2/km maintenance
        const totalDieselCost = dieselCost + dieselMaintenance;

        // EV costs
        const evEnergy = monthlyKm * calculatorInputs.evEfficiency;
        const evCost = evEnergy * calculatorInputs.electricityRate;
        const evMaintenance = monthlyKm * 1.2; // ₹1.2/km maintenance (40% lower)
        const totalEVCost = evCost + evMaintenance;

        // Savings
        const monthlySavings = totalDieselCost - totalEVCost;
        const annualSavings = monthlySavings * 12;
        const savingsPercentage = ((monthlySavings / totalDieselCost) * 100).toFixed(1);

        // Environmental
        const co2Saved = (monthlyKm / 1000) * 12; // Approx 1 kg CO₂ per km
        const treesEquivalent = Math.round(co2Saved / 21.77);

        return {
            monthlyKm,
            dieselCost: Math.round(dieselCost),
            dieselMaintenance: Math.round(dieselMaintenance),
            totalDieselCost: Math.round(totalDieselCost),
            evCost: Math.round(evCost),
            evMaintenance: Math.round(evMaintenance),
            totalEVCost: Math.round(totalEVCost),
            monthlySavings: Math.round(monthlySavings),
            annualSavings: Math.round(annualSavings),
            savingsPercentage,
            co2Saved: Math.round(co2Saved),
            treesEquivalent
        };
    };

    const results = showResults ? calculateROI() : null;

    const financingModels = [
        {
            icon: <TrendingDown size={40} />,
            name: 'Pay-Per-Kilometer',
            tagline: 'Zero Upfront Investment',
            description: 'Pay only for kilometers driven with all-inclusive service',
            features: [
                'No capital expenditure',
                'Vehicle, charging, maintenance included',
                'Flexible scaling',
                'Immediate cost savings'
            ],
            ideal: 'Variable demand, pilot programs',
            pricing: '₹15-18/km (all-inclusive)'
        },
        {
            icon: <DollarSign size={40} />,
            name: 'Monthly Subscription',
            tagline: 'Predictable Budgeting',
            description: 'Fixed monthly fee for unlimited kilometers within agreed range',
            features: [
                'Predictable expenses',
                'Long-term planning',
                'Volume discounts',
                'Priority support'
            ],
            ideal: 'Steady operations, established routes',
            pricing: '₹2.5-3.5 lakhs/month per truck'
        },
        {
            icon: <PiggyBank size={40} />,
            name: 'Lease-to-Own',
            tagline: 'Path to Ownership',
            description: 'Lower monthly payments with option to purchase after lease term',
            features: [
                'Lower monthly payments',
                'Purchase option',
                'Tax benefits',
                'Asset on balance sheet'
            ],
            ideal: 'Companies wanting eventual ownership',
            pricing: 'Custom terms (3-5 year lease)'
        },
        {
            icon: <Award size={40} />,
            name: 'Custom Enterprise',
            tagline: 'Tailored Solutions',
            description: 'Bespoke financial models for large-scale operations',
            features: [
                'Dedicated fleet',
                'Custom SLAs',
                'Flexible payment terms',
                'Strategic partnership'
            ],
            ideal: 'Large enterprises, multi-route operations',
            pricing: 'Contact for custom quote'
        }
    ];

    const benefits = [
        {
            title: 'Operating Cost Savings',
            value: '5-10%',
            description: 'Lower energy costs vs. diesel'
        },
        {
            title: 'Maintenance Savings',
            value: '30-40%',
            description: 'Fewer moving parts, less wear'
        },

        {
            title: 'CO\u2082 Reduction',
            value: '60-70 Tons',
            description: 'CO\u2082 reduced per year per truck'
        }
    ];


    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'var(--color-primary)',
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        EV Truck as a Service
                    </h1>
                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                    }}>
                        Multiple financial models designed to maximize ROI and minimize upfront investment.
                    </p>
                </div>

                {/* ROI Calculator */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                        }}>
                            <Calculator size={32} color="var(--color-accent)" />
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '900',
                                color: 'var(--color-white)',
                                margin: 0,
                            }}>
                                ROI Calculator
                            </h2>
                        </div>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                        }}>
                            Calculate your potential savings with Switch Labs EV operations
                        </p>
                    </div>

                    <div className="glass" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '2rem',
                        }}>
                            <div>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    One-way Distance (km)
                                </label>
                                <input
                                    type="number"
                                    value={calculatorInputs.distance}
                                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, distance: parseFloat(e.target.value) })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0, 255, 136, 0.05)',
                                        border: '1px solid rgba(0, 255, 136, 0.2)',
                                        borderRadius: '4px',
                                        color: 'var(--color-white)',
                                        fontSize: '1rem',
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    Trips per Day
                                </label>
                                <input
                                    type="number"
                                    value={calculatorInputs.tripsPerDay}
                                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, tripsPerDay: parseFloat(e.target.value) })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0, 255, 136, 0.05)',
                                        border: '1px solid rgba(0, 255, 136, 0.2)',
                                        borderRadius: '4px',
                                        color: 'var(--color-white)',
                                        fontSize: '1rem',
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    Operating Days/Month
                                </label>
                                <input
                                    type="number"
                                    value={calculatorInputs.daysPerMonth}
                                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, daysPerMonth: parseFloat(e.target.value) })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0, 255, 136, 0.05)',
                                        border: '1px solid rgba(0, 255, 136, 0.2)',
                                        borderRadius: '4px',
                                        color: 'var(--color-white)',
                                        fontSize: '1rem',
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{
                                    display: 'block',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.9rem',
                                }}>
                                    Diesel Price (₹/L)
                                </label>
                                <input
                                    type="number"
                                    value={calculatorInputs.dieselPrice}
                                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, dieselPrice: parseFloat(e.target.value) })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(0, 255, 136, 0.05)',
                                        border: '1px solid rgba(0, 255, 136, 0.2)',
                                        borderRadius: '4px',
                                        color: 'var(--color-white)',
                                        fontSize: '1rem',
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setShowResults(true)}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 0 30px var(--color-accent-glow)',
                                transition: 'var(--transition-smooth)',
                            }}
                        >
                            Calculate Savings
                        </button>

                        {showResults && results && (
                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '800',
                                    color: 'var(--color-white)',
                                    marginBottom: '1.5rem',
                                    textAlign: 'center',
                                }}>
                                    Your Potential Savings
                                </h3>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '1rem',
                                    marginBottom: '2rem',
                                }}>
                                    <div style={{
                                        padding: '1.5rem',
                                        background: 'rgba(255, 0, 0, 0.1)',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255, 0, 0, 0.2)',
                                    }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            Diesel Cost/Month
                                        </div>
                                        <div style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ff6b6b' }}>
                                            ₹{results.totalDieselCost.toLocaleString()}
                                        </div>
                                    </div>

                                    <div style={{
                                        padding: '1.5rem',
                                        background: 'rgba(0, 255, 136, 0.1)',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(0, 255, 136, 0.2)',
                                    }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            EV Cost/Month
                                        </div>
                                        <div style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--color-accent)' }}>
                                            ₹{results.totalEVCost.toLocaleString()}
                                        </div>
                                    </div>

                                    <div style={{
                                        padding: '1.5rem',
                                        background: 'rgba(0, 255, 136, 0.15)',
                                        borderRadius: '8px',
                                        border: '2px solid var(--color-accent)',
                                    }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            Monthly Savings
                                        </div>
                                        <div style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--color-accent)' }}>
                                            ₹{results.monthlySavings.toLocaleString()}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: '700', marginTop: '0.25rem' }}>
                                            ({results.savingsPercentage}% savings)
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '1rem',
                                    padding: '1.5rem',
                                    background: 'rgba(0, 255, 136, 0.05)',
                                    borderRadius: '8px',
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            Annual Savings
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-white)' }}>
                                            ₹{(results.annualSavings / 100000).toFixed(2)}L
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            CO₂ Saved/Year
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-white)' }}>
                                            {results.co2Saved} tons
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                            Trees Equivalent
                                        </div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-white)' }}>
                                            {results.treesEquivalent} trees
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Financing Models */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Truck as a Service
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            Choose the model that best fits your operational and financial requirements
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}>
                        {financingModels.map((model, index) => (
                            <div
                                key={index}
                                className="glass border-heavy"
                                style={{
                                    padding: '2.5rem',
                                    transition: 'var(--transition-smooth)',
                                }}
                            >
                                <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                    {model.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '800',
                                    color: 'var(--color-white)',
                                    marginBottom: '0.5rem',
                                }}>
                                    {model.name}
                                </h3>
                                <div style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--color-accent)',
                                    fontWeight: '700',
                                    marginBottom: '1rem',
                                }}>
                                    {model.tagline}
                                </div>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem',
                                }}>
                                    {model.description}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                                    {model.features.map((feature, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.75rem',
                                            color: 'var(--color-text-secondary)',
                                            fontSize: '0.9rem',
                                        }}>
                                            <CheckCircle size={16} color="var(--color-accent)" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                }}>
                                    <div style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: '0.5rem',
                                    }}>
                                        Ideal for:
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--color-white)',
                                        fontWeight: '600',
                                    }}>
                                        {model.ideal}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Financial Benefits */}
                <div style={{ marginBottom: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: '900',
                            color: 'var(--color-white)',
                            marginBottom: '1rem',
                        }}>
                            Financial Benefits
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                    }}>
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{
                                    padding: '2.5rem',
                                    textAlign: 'center',
                                    transition: 'var(--transition-smooth)',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '900',
                                    background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '1rem',
                                }}>
                                    {benefit.value}
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '800',
                                    color: 'var(--color-white)',
                                    marginBottom: '0.75rem',
                                }}>
                                    {benefit.title}
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '0.95rem',
                                }}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CTA Section */}
                <div
                    className="glass"
                    style={{
                        padding: '4rem 3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
                    }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'var(--color-white)',
                        marginBottom: '1rem',
                    }}>
                        Ready to Explore EV Truck as a Service?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2.5rem',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}>
                        Let's discuss the best financial model for your EV transition.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/contact"
                            className="cta-button"
                            style={{
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 0 30px var(--color-accent-glow)',
                            }}
                        >
                            Schedule Consultation
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancingOptions;
