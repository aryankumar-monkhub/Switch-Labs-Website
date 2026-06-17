import React from 'react';

const Policies = () => {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Policies</h1>
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Privacy Policy</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-grey-light)' }}>
                    At SwitchLabs, we prioritize the protection of your data. This policy outlines how we collect, use, and safeguard your personal information.
                    We collect data to provide better services, improve our platform, and communicate with you. We do not sell your personal data to third parties.
                </p>
            </div>
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Data Security</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-grey-light)' }}>
                    We implement industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.
                </p>
            </div>
            <div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Cookie Policy</h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-grey-light)' }}>
                    We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences in your browser settings.
                </p>
            </div>
        </div>
    );
};

export default Policies;
