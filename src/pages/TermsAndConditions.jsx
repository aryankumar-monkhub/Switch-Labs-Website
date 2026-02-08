import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms and Conditions</h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-grey-light)', marginBottom: '2rem' }}>
                Last updated: February 2026
            </p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
                <p style={{ color: 'var(--color-grey-light)' }}>
                    By accessing and using the Switch Labs website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use of Service</h2>
                <p style={{ color: 'var(--color-grey-light)' }}>
                    You agree to use our services only for lawful purposes. You are prohibited from using our site to transmit or post any material which is defamatory, offensive, or of an obscene or menacing character.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Intellectual Property</h2>
                <p style={{ color: 'var(--color-grey-light)' }}>
                    All content included on this site, such as text, graphics, logos, images, and software, is the property of Switch Labs or its content suppliers and protected by international copyright laws.
                </p>
            </section>

            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Limitation of Liability</h2>
                <p style={{ color: 'var(--color-grey-light)' }}>
                    Switch Labs shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, our services.
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
