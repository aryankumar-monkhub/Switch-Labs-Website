import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import FloatingCTA from '../FloatingCTA';

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app">
            <Navbar onGetStarted={openModal} />
            <main>
                <Outlet context={{ openModal }} />
            </main>
            <Footer onAction={openModal} />
            <FloatingCTA onClick={openModal} />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Layout;
