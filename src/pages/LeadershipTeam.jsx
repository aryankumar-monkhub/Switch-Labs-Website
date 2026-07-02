import React from 'react';
import { Users, Target, Award, Lightbulb, Globe, Heart } from 'lucide-react';

const leaders = [
  {
    icon: <Users size={32} />,
    name: 'Rajesh Mehta',
    role: 'Chief Executive Officer',
    desc: '20+ years in EV and logistics, driving the vision for zero-emission freight.',
  },
  {
    icon: <Target size={32} />,
    name: 'Anita Sharma',
    role: 'Chief Operating Officer',
    desc: 'Expert in fleet operations and scaling sustainable transportation networks.',
  },
  {
    icon: <Lightbulb size={32} />,
    name: 'Vikram Patil',
    role: 'Chief Technology Officer',
    desc: 'Pioneering EV battery tech and intelligent charging infrastructure solutions.',
  },
  {
    icon: <Award size={32} />,
    name: 'Priya Desai',
    role: 'Chief Financial Officer',
    desc: 'Strategic financial leadership driving growth and sustainable investment.',
  },
  {
    icon: <Globe size={32} />,
    name: 'Arun Kapoor',
    role: 'VP of Business Development',
    desc: 'Building strategic partnerships across OEMs, energy, and logistics sectors.',
  },
  {
    icon: <Heart size={32} />,
    name: 'Neha Gupta',
    role: 'VP of People & Culture',
    desc: 'Fostering a culture of innovation, inclusion, and operational excellence.',
  },
];

const LeadershipTeam = () => {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '80px',
      background: 'var(--color-primary)',
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
          }}>
            Leadership Team
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--color-grey-light)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            Meet the people driving India's transition to electric heavy-duty freight.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="glass border-heavy white-card-border info-card-bg"
              style={{
                aspectRatio: '1',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'var(--transition-smooth)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(76, 163, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: 'var(--color-accent)',
              }}>
                {leader.icon}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '800',
                color: 'var(--color-card-heading)',
                marginBottom: '0.35rem',
              }}>
                {leader.name}
              </h3>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '0.75rem',
              }}>
                {leader.role}
              </div>
              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.7',
                color: 'var(--color-white)',
              }}>
                {leader.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LeadershipTeam;
