import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadModal from './LeadModal';
import FloatingCTA from './FloatingCTA';

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Scroll to top on route change mostly, but for hash links we might need specific handling
    // React Router usually handles hash links if we use <Link hash="...">? No, <Link to="/#hash">

    return (
        <div className="app">
            <Navbar onGetStarted={openModal} />
            <div className="content">
                <Outlet context={{ openModal }} />
            </div>
            <Footer onAction={openModal} />
            <FloatingCTA onClick={openModal} />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Layout;
