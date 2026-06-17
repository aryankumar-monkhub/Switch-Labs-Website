import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About SwitchLabs</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-grey-light)' }}>
        SwitchLabs is dedicated to transforming India's heavy-duty fleet operations through our cutting-edge EV ecosystem.
        We believe in a zero-emission future and are building the infrastructure and technology to make it a reality.
      </p>
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-light)' }}>
          To accelerate the adoption of electric vehicles in the logistics sector by providing reliable, efficient, and scalable charging solutions.
        </p>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-grey-light)' }}>
          A cleaner, greener, and more sustainable India where logistics flows seamlessly without environmental impact.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
