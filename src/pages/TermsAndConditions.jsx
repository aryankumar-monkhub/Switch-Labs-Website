import React, { useState, useEffect } from 'react';

const TermsAndConditions = () => {
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
            <h1 style={{ fontSize: isSmallPhone ? '1.8rem' : isMobile ? '2.5rem' : '3rem', marginBottom: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900' }}>Terms and Conditions</h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Welcome to the website of SwitchLabs Automobiles Private Limited ("SwitchLabs", "Company", "we", "our", or "us"). By accessing or using this website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use this website.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>1. About Us</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                This website is owned and operated by:
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                <strong>SwitchLabs Automobiles Private Limited</strong>
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Website: switchlabs.in
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Email: switchlabsautomobiles@gmail.com
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Registered Office: Team Coworks, Prop no - 55 Lane - 2, Westend Marg, New Delhi, Delhi - 110030
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>2. Acceptance of Terms</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to comply with these Terms and all applicable laws and regulations.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>3. Website Content</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                The content on this website, including but not limited to:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Text</li>
                <li>Graphics</li>
                <li>Logos</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Presentations</li>
                <li>Reports</li>
                <li>Case studies</li>
                <li>Software and technology descriptions</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                is provided for general informational purposes only.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                While we strive to keep the information accurate and up to date, we make no warranties or representations regarding the completeness, accuracy, reliability, or suitability of any content.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>4. Intellectual Property Rights</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Unless otherwise stated, all intellectual property rights in this website and its contents are owned by or licensed to SwitchLabs.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                This includes:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Company name and branding</li>
                <li>Logos and trademarks</li>
                <li>Website design</li>
                <li>Content and materials</li>
                <li>Business methodologies</li>
                <li>Software and technology assets</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                You may view, download, or print content solely for personal and non-commercial use.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                You may not:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                <li>Reproduce, distribute, modify, or republish content</li>
                <li>Use our trademarks without written permission</li>
                <li>Create derivative works from our content</li>
                <li>Use website content for commercial purposes without authorization</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>5. User Conduct</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                When using this website, you agree not to:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt unauthorized access to our systems</li>
                <li>Introduce malicious software or harmful code</li>
                <li>Interfere with website functionality</li>
                <li>Use the website for fraudulent or unlawful purposes</li>
                <li>Submit false or misleading information</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We reserve the right to restrict or terminate access for any user who violates these Terms.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>6. Information Submitted by Users</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                If you submit information through contact forms, inquiries, partnership requests, investment inquiries, job applications, or any other communication channels:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>You warrant that the information provided is accurate and lawful.</li>
                <li>You grant us the right to review and process such information for legitimate business purposes.</li>
                <li>Submission of information does not create any contractual relationship unless expressly agreed in writing.</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>7. No Offer or Solicitation</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Information contained on this website is provided for informational purposes only.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Nothing on this website shall be construed as:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>An offer to sell securities</li>
                <li>A solicitation for investment</li>
                <li>Financial advice</li>
                <li>Legal advice</li>
                <li>Professional consulting advice</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Any investment or business engagement with SwitchLabs shall be governed by separate written agreements.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>8. Third-Party Links</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                This website may contain links to third-party websites for convenience and informational purposes.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                SwitchLabs does not control or endorse such websites and is not responsible for their content, privacy practices, or availability.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Accessing third-party websites is at your own risk.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>9. Limitation of Liability</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                To the maximum extent permitted by law, SwitchLabs, its directors, officers, employees, affiliates, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Use or inability to use the website</li>
                <li>Errors or omissions in website content</li>
                <li>Unauthorized access to information</li>
                <li>Website interruptions or technical failures</li>
                <li>Reliance on information available on the website</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Your use of this website is entirely at your own risk.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>10. Disclaimer</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                The website and all information contained herein are provided on an "as is" and "as available" basis.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                SwitchLabs disclaims all warranties, whether express or implied, including but not limited to:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1rem', paddingLeft: '2rem' }}>
                <li>Merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy and completeness of information</li>
            </ul>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                We do not guarantee uninterrupted, secure, or error-free operation of the website.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>11. Privacy</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Your use of this website is also governed by our Privacy Policy.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                By using this website, you consent to the collection and use of information as described in our Privacy Policy.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>12. Indemnification</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                You agree to indemnify and hold harmless SwitchLabs, its directors, officers, employees, and affiliates from any claims, damages, losses, liabilities, costs, or expenses arising from:
            </p>
            <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
                <li>Your use of the website</li>
                <li>Your violation of these Terms</li>
                <li>Your infringement of any rights of a third party</li>
            </ul>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>13. Changes to These Terms</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                We reserve the right to modify these Terms at any time without prior notice.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                Updated versions will be posted on this page with a revised effective date.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Continued use of the website after any changes constitutes acceptance of the revised Terms.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>14. Governing Law and Jurisdiction</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                These Terms shall be governed by and construed in accordance with the laws of India.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                Any disputes arising out of or relating to these Terms or use of the website shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--gallery-heading)' }}>15. Contact Information</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
                For any questions regarding these Terms and Conditions, please contact:
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
                By accessing or using this website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
        </div>
    );
};

export default TermsAndConditions;
