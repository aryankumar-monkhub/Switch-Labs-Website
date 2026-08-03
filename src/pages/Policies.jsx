import React, { useState, useEffect } from 'react';

const Policies = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isSmallPhone = width <= 480;
    const isMobile = width <= 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container" style={{ paddingTop: isMobile ? '6rem' : '10rem', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: isSmallPhone ? '1.8rem' : isMobile ? '2.5rem' : '3rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900' }}>Privacy Policy</h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                SwitchLabs Automobiles Private Limited ("SwitchLabs", "we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our website or interact with our services.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>1. Information We Collect</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem' }}>
                We may collect the following categories of information:
            </p>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gallery-heading)' }}>Personal Information</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Information that you voluntarily provide to us, including:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Any information submitted through contact forms, inquiry forms, or email communications</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gallery-heading)' }}>Technical Information</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                When you visit our website, we may automatically collect:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring website information</li>
                <li>Website usage analytics</li>
            </ul>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gallery-heading)' }}>Cookies and Tracking Technologies</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We may use cookies, pixels, and similar technologies to improve website functionality, analyze traffic, and enhance user experience.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>2. How We Use Your Information</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                We may use your information to:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                <li>Respond to inquiries and requests</li>
                <li>Provide information about our products and services</li>
                <li>Communicate regarding business opportunities, partnerships, or investments</li>
                <li>Improve our website and user experience</li>
                <li>Monitor website performance and analytics</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud, unauthorized access, or misuse</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>3. Sharing of Information</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                We do not sell your personal information.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                We may share information with:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Service providers who assist in operating our website or business</li>
                <li>Professional advisors, auditors, legal consultants, and accountants</li>
                <li>Regulatory authorities when required by law</li>
                <li>Potential investors, acquirers, or business partners in connection with corporate transactions</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                All such parties are expected to maintain appropriate confidentiality and security standards.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>4. Data Retention</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>5. Data Security</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We implement reasonable technical, administrative, and organizational safeguards to protect personal information against unauthorized access, disclosure, alteration, or destruction. However, no internet-based transmission or storage system can be guaranteed to be completely secure.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>6. Third-Party Services</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Our website may contain links to third-party websites or use third-party tools such as:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Google Analytics</li>
                <li>Customer relationship management platforms</li>
                <li>Marketing and communication tools</li>
                <li>Social media platforms</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We are not responsible for the privacy practices of third-party websites or services.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>7. Your Rights</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Subject to applicable laws, you may have the right to:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Object to certain forms of processing</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                To exercise these rights, please contact us using the details below.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>8. Children's Privacy</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Our website and services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>9. International Data Transfers</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                If information is transferred outside your country of residence, we will take reasonable steps to ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>10. Changes to This Privacy Policy</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated effective date.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>11. Contact Us</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                If you have any questions regarding this Privacy Policy or our data practices, please contact:
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                <strong>SwitchLabs Automobiles Private Limited</strong>
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Email: switchlabsautomobiles@gmail.com
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Website: switchlabs.in
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Address: Team Coworks, Prop no - 55 Lane - 2, Westend Marg, New Delhi, Delhi - 110030
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                By using our website, you consent to the collection and use of information as described in this Privacy Policy.
            </p>
        </div>
    );
};

export default Policies;
