import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import ImpactCalculator from '../components/ImpactCalculator';
import TransformationStack from '../components/TransformationStack';
import CorridorMap from '../components/CorridorMap';
import Credibility from '../components/Credibility';

const Home = () => {
    const { openModal } = useOutletContext();

    return (
        <>
            <Hero onAction={openModal} />
            <ImpactCalculator onAction={openModal} />
            <TransformationStack onAction={openModal} />
            <CorridorMap />
            <Credibility />
        </>
    );
};

export default Home;
