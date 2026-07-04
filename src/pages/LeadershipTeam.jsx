import React from 'react';

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
          {[
            { name: 'ajay_pratap', role: "Co-Founder & CEO", linkedin: "https://www.linkedin.com/in/ajay-pratap" },
            { name: 'anish_kumar', role: 'Co-Founder', linkedin: "https://www.linkedin.com/in/anishconnects" },
            { name: 'gazal_kalra', role: 'Advisor', linkedin: "https://www.linkedin.com/in/gazalkalra" },
          ].map((member, i) => (
            <div
              key={i}
              className="glass border-heavy white-card-border"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--subtle-border)',
                position: 'relative',
                paddingBottom: '130%',
              }}
            >
              <img
                src={`/assets/${member.name}.png`}
                alt={member.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                padding: '3rem 1.5rem 1.5rem',
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}>
                  {member.name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </h3>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-accent-sky)',
                  marginBottom: '0.5rem',
                }}>
                  {member.role}
                </div>
                <a
                  href={member.linkedin || "https://www.linkedin.com/company/switchlabs-ev/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none', color: '#ffffff', fontSize: '0.85rem' }}
                >
                  Linked
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LeadershipTeam;
