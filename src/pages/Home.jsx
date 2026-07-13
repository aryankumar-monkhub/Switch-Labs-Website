import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import TransformationStack from '../components/TransformationStack';
import CorridorMap from '../components/CorridorMap';
import Credibility from '../components/Credibility';

const Home = () => {
    const { openModal } = useOutletContext();

    return (
        <>
            <Hero onAction={openModal} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <TransformationStack onAction={openModal} />
                <CorridorMap />
                <Credibility />
            </div>
        </>
    );
};

export default Home;
