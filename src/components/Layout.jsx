import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
