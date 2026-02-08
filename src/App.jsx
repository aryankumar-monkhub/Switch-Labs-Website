import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCalculator from './components/ImpactCalculator';
import CorridorMap from './components/CorridorMap';
import TransformationStack from './components/TransformationStack';
import Credibility from './components/Credibility';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar onGetStarted={openModal} />
      <Hero onAction={openModal} />
      <ImpactCalculator onAction={openModal} />
      <TransformationStack onAction={openModal} />
      <CorridorMap />
      <Credibility />
      <Footer onAction={openModal} />

      <FloatingCTA onClick={openModal} />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
