import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: '1. What is SwitchLabs Automobiles Pvt Ltd?',
            answer: (
                <span>
                    SwitchLabs Automobiles Pvt Ltd is an Indian EV startup focused on building intelligent and sustainable heavy-duty electric mobility ecosystems for:<br /><br />
                    • Industrial transportation<br />
                    • Freight logistics<br />
                    • Commercial fleet electrification
                </span>
            )
        },
        {
            question: '2. What does SwitchLabs specialize in?',
            answer: (
                <span>
                    SwitchLabs focuses on:<br /><br />
                    • Heavy-duty EV trucks<br />
                    • Industrial mobility solutions<br />
                    • Fleet electrification<br />
                    • EV-as-a-Service (EVaaS)<br />
                    • Smart charging ecosystems<br />
                    • AI-driven fleet intelligence<br />
                    • Battery analytics systems<br />
                    • Sustainable freight transportation
                </span>
            )
        },
        {
            question: '3. Why are heavy-duty EV trucks important?',
            answer: (
                <span>
                    Heavy-duty EV trucks help reduce:<br /><br />
                    • Carbon emissions<br />
                    • Diesel dependency<br />
                    • Fuel costs<br />
                    • Industrial pollution<br /><br />
                    They also improve:<br /><br />
                    • Energy efficiency<br />
                    • Fleet sustainability<br />
                    • Long-term transportation economics
                </span>
            )
        },
        {
            question: '4. What industries can benefit from EV freight solutions?',
            answer: (
                <span>
                    Industries that can benefit include:<br /><br />
                    • Logistics and supply chain<br />
                    • Manufacturing<br />
                    • Mining<br />
                    • Construction<br />
                    • Infrastructure<br />
                    • Warehousing<br />
                    • Industrial transportation
                </span>
            )
        },
        {
            question: '5. What is fleet electrification?',
            answer: (
                <span>
                    Fleet electrification refers to replacing conventional diesel-powered transportation fleets with electric commercial vehicles supported by smart charging and intelligent operational systems.<br /><br />
                    Key aspects include:<br /><br />
                    • Transition from diesel to electric vehicles<br />
                    • Deployment of charging infrastructure<br />
                    • Integration with fleet management software<br />
                    • Reduction of operational carbon footprint<br />
                    • Lower total cost of ownership over time
                </span>
            )
        },
        {
            question: '6. What is EV-as-a-Service (EVaaS)?',
            answer: (
                <span>
                    EV-as-a-Service is a mobility model that combines:<br /><br />
                    • Electric vehicles<br />
                    • Charging infrastructure<br />
                    • Fleet operations<br />
                    • Maintenance systems<br />
                    • AI-driven fleet management<br /><br />
                    Into an integrated transportation ecosystem.
                </span>
            )
        },
        {
            question: '7. How does SwitchLabs support sustainable mobility?',
            answer: (
                <span>
                    SwitchLabs focuses on:<br /><br />
                    • Reducing transportation emissions<br />
                    • Supporting industrial decarbonization<br />
                    • Enabling energy-efficient freight mobility<br />
                    • Developing intelligent transportation ecosystems
                </span>
            )
        },
        {
            question: '8. What role does AI play in EV fleet operations?',
            answer: (
                <span>
                    AI helps improve:<br /><br />
                    • Route optimization<br />
                    • Fleet utilization<br />
                    • Charging coordination<br />
                    • Predictive maintenance<br />
                    • Operational analytics<br />
                    • Energy optimization<br /><br />
                    AI-driven systems improve overall fleet efficiency and operational reliability.
                </span>
            )
        },
        {
            question: '9. What are smart charging systems?',
            answer: (
                <span>
                    Smart charging systems are intelligent charging platforms that optimize:<br /><br />
                    • Charging schedules<br />
                    • Fleet charging coordination<br />
                    • Energy utilization<br />
                    • Electricity demand balancing<br /><br />
                    These systems help improve fleet uptime and operational efficiency.
                </span>
            )
        },
        {
            question: '10. What is battery analytics?',
            answer: (
                <span>
                    Battery analytics involves monitoring and analyzing:<br /><br />
                    • State of Charge (SOC)<br />
                    • State of Health (SOH)<br />
                    • Battery performance<br />
                    • Charging behavior<br />
                    • Thermal conditions<br /><br />
                    Battery intelligence helps improve battery lifespan and fleet reliability.
                </span>
            )
        },
        {
            question: '11. Why is logistics electrification important?',
            answer: (
                <span>
                    Logistics electrification helps:<br /><br />
                    • Reduce industrial carbon emissions<br />
                    • Improve transportation sustainability<br />
                    • Lower operating costs<br />
                    • Support clean energy transition goals<br /><br />
                    Heavy-duty EV transportation is becoming essential for future industrial logistics systems.
                </span>
            )
        },
        {
            question: '12. How can EV fleets reduce operating costs?',
            answer: (
                <span>
                    Electric fleets can reduce:<br /><br />
                    • Fuel expenses<br />
                    • Maintenance requirements<br />
                    • Downtime<br />
                    • Energy inefficiencies<br /><br />
                    EV drivetrains also have fewer moving parts compared to traditional diesel systems.
                </span>
            )
        },
        {
            question: '13. What challenges exist in heavy-duty EV adoption?',
            answer: (
                <span>
                    Key challenges include:<br /><br />
                    • Charging infrastructure deployment<br />
                    • Battery management<br />
                    • Fleet integration<br />
                    • Grid capacity<br />
                    • Operational scalability<br /><br />
                    SwitchLabs focuses on intelligent ecosystem-based solutions to address these challenges.
                </span>
            )
        },
        {
            question: '14. What is predictive maintenance?',
            answer: (
                <span>
                    Predictive maintenance uses AI and analytics to identify potential operational issues before failures occur, helping reduce downtime and improve fleet reliability.<br /><br />
                    Benefits include:<br /><br />
                    • Early fault detection<br />
                    • Reduced unplanned downtime<br />
                    • Lower maintenance costs<br />
                    • Extended vehicle lifespan<br />
                    • Improved operational safety
                </span>
            )
        },
        {
            question: '15. What is industrial decarbonization?',
            answer: (
                <span>
                    Industrial decarbonization refers to reducing carbon emissions from industrial operations using cleaner technologies such as electric transportation and sustainable energy systems.<br /><br />
                    Key approaches include:<br /><br />
                    • Electrification of industrial fleets<br />
                    • Adoption of renewable energy sources<br />
                    • Energy-efficient operational practices<br />
                    • Carbon footprint monitoring and reporting<br />
                    • Sustainable supply chain management
                </span>
            )
        },
        {
            question: '16. How does SwitchLabs view the future of freight mobility?',
            answer: (
                <span>
                    SwitchLabs believes future freight transportation will be:<br /><br />
                    • Electric<br />
                    • Intelligent<br />
                    • Connected<br />
                    • Sustainable<br />
                    • AI-driven
                </span>
            )
        },
        {
            question: '17. What are connected mobility ecosystems?',
            answer: (
                <span>
                    Connected mobility ecosystems combine:<br /><br />
                    • Electric vehicles<br />
                    • Smart charging infrastructure<br />
                    • Fleet intelligence systems<br />
                    • Operational analytics<br />
                    • Energy management platforms<br /><br />
                    Into integrated transportation networks.
                </span>
            )
        },
        {
            question: '18. Why are smart logistics systems important?',
            answer: (
                <span>
                    Smart logistics systems improve:<br /><br />
                    • Transportation efficiency<br />
                    • Fleet coordination<br />
                    • Energy optimization<br />
                    • Operational visibility<br />
                    • Delivery performance
                </span>
            )
        },
        {
            question: '19. How do EV fleets support climate goals?',
            answer: (
                <span>
                    Heavy-duty EV transportation helps:<br /><br />
                    • Reduce greenhouse gas emissions<br />
                    • Lower fossil fuel consumption<br />
                    • Improve sustainability performance<br />
                    • Support net-zero transportation strategies
                </span>
            )
        },
        {
            question: '20. What is SwitchLabs\' long-term vision?',
            answer: (
                <span>
                    SwitchLabs Automobiles Pvt Ltd aims to help build scalable and intelligent electric freight ecosystems capable of supporting sustainable industrial transportation and future-ready logistics infrastructure.<br /><br />
                    Key focus areas include:<br /><br />
                    • Scaling heavy-duty EV deployment across India<br />
                    • Building AI-driven fleet intelligence platforms<br />
                    • Developing comprehensive charging networks<br />
                    • Driving industrial decarbonization at scale<br />
                    • Enabling a fully electric, connected freight future
                </span>
            )
        },
    ];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '8rem' }}>
            <section className="container">
                <div className="section-header">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                    }}>
                        FREQUENTLY ASKED QUESTIONS (FAQS)
                    </h1>
                    <p style={{ color: 'var(--color-grey-light)', fontSize: '1.2rem' }}>
                        Find answers to common questions about SwitchLabs and our services.
                    </p>
                </div>

                <div style={{ maxWidth: '800px' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass info-card-bg-blue" style={{
                            marginBottom: '1.5rem',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid var(--subtle-border)',
                            transition: 'var(--transition-smooth)',
                        }}>
                            <button
                                onClick={() => toggle(i)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem 2rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    color: 'var(--color-blue-icon)',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                <span>{faq.question}</span>
                                <span style={{
                                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'var(--transition-smooth)',
                                    fontSize: '1.2rem',
                                    color: 'var(--color-accent)',
                                    flexShrink: 0,
                                    marginLeft: '0.75rem',
                                }}>
                                    ▼
                                </span>
                            </button>
                            {openIndex === i && (
                                <div style={{
                                    height: '1px',
                                    background: 'var(--color-vision-icon)',
                                    opacity: 0.5,
                                }} />
                            )}
                            <div style={{
                                maxHeight: openIndex === i ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease',
                            }}>
                                <div style={{
                                    padding: '0 2rem 1.5rem 2rem',
                                    color: 'var(--color-white)',
                                    fontSize: '1rem',
                                    lineHeight: '1.8',
                                }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQ;
