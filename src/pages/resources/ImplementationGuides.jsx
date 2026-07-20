import React, { useState, useEffect } from 'react';

const ImplementationGuides = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isSmallPhone = width <= 480;
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', paddingTop: isMobile ? '6rem' : '8rem' }}>
      <section className="container" style={{ padding: isMobile ? '0 1rem' : undefined }}>
        <div className="section-header">
          <h1 style={{
            fontSize: isSmallPhone ? '1.6rem' : isMobile ? '2rem' : isTablet ? '2.8rem' : '3.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            marginTop: '1.5rem',
            lineHeight: '1.1',
          }}>
            Implementation Guides
          </h1>
          <p style={{
            color: 'var(--color-white)',
            fontSize: isSmallPhone ? '1rem' : isMobile ? '1.3rem' : '1.4rem',
            fontWeight: '500',
            lineHeight: '1.6',
          }}>
            SwitchLabs acts as a bridge between Supply and Demand of EV trucks
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem', gap: '0' }}>
          {/* Card 1 - Route Recce */}
          <div
            className="glass border-heavy info-card-bg-blue"
            style={{
              padding: isSmallPhone ? '2rem 1rem' : isMobile ? '2.5rem 1.5rem' : '4rem 3.5rem',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-30%',
              right: '-20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(76, 163, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Icon badge */}
            <div style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-icon-border)',
              background: 'rgba(0, 255, 136, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}>
              <svg width={isMobile ? '28' : '36'} height={isMobile ? '28' : '36'} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
              </svg>
            </div>

            {/* Step label */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(76, 163, 255, 0.12)',
              border: '1px solid rgba(76, 163, 255, 0.3)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Step 01
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: isSmallPhone ? '1.5rem' : '2rem',
              fontWeight: '800',
              color: 'var(--color-white)',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
            }}>
              Route Recce
            </h2>

            {/* Divider */}
            <div style={{
              width: '60px',
              height: '3px',
              background: 'var(--color-accent)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 12px rgba(76, 163, 255, 0.4)',
            }} />

            {/* Description */}
            <p style={{
              fontSize: isSmallPhone ? '0.95rem' : '1.15rem',
              color: 'var(--color-grey-light)',
              lineHeight: '1.8',
              fontWeight: '400',
            }}>
              Identifying demand in industries on fixed route operation
            </p>
          </div>

          {/* Connecting line & arrow */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem 0',
          }}>
            <div style={{
              width: '3px',
              height: '40px',
              background: 'linear-gradient(180deg, var(--color-accent), rgba(76, 163, 255, 0.3))',
              borderRadius: '2px',
            }} />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginTop: '-2px' }}>
              <path d="M12 4L12 18M12 18L6 12M12 18L18 12" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2 - Truck Procurement */}
          <div
            className="glass border-heavy info-card-bg-green"
            style={{
              padding: isSmallPhone ? '2rem 1rem' : isMobile ? '2.5rem 1.5rem' : '4rem 3.5rem',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-30%',
              left: '-20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Icon badge */}
            <div style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-icon-border)',
              background: 'rgba(0, 255, 136, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}>
              <svg width={isMobile ? '28' : '36'} height={isMobile ? '28' : '36'} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 3h15v13H1z"/>
                <path d="M16 8h4l3 3v5h-7V8z"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>

            {/* Step label */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--color-vision-icon)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Step 02
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: isSmallPhone ? '1.5rem' : '2rem',
              fontWeight: '800',
              color: 'var(--color-white)',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
            }}>
              Truck Procurement
            </h2>

            {/* Divider */}
            <div style={{
              width: '60px',
              height: '3px',
              background: 'var(--color-vision-icon)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 12px rgba(0, 255, 136, 0.4)',
            }} />

            {/* Description */}
            <p style={{
              fontSize: isSmallPhone ? '0.95rem' : '1.15rem',
              color: 'var(--color-grey-light)',
              lineHeight: '1.8',
              fontWeight: '400',
            }}>
              Converting High Capex into meaningful OPEX through smart financing options
            </p>
          </div>

          {/* Connecting line & arrow */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem 0',
          }}>
            <div style={{
              width: '3px',
              height: '40px',
              background: 'linear-gradient(180deg, var(--color-vision-icon), rgba(0, 255, 136, 0.3))',
              borderRadius: '2px',
            }} />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginTop: '-2px' }}>
              <path d="M12 4L12 18M12 18L6 12M12 18L18 12" stroke="var(--color-vision-icon)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 3 - Charging Infra creation */}
          <div
            className="glass border-heavy info-card-bg-blue"
            style={{
              padding: isSmallPhone ? '2rem 1rem' : isMobile ? '2.5rem 1.5rem' : '4rem 3.5rem',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-30%',
              right: '-20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(76, 163, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Icon badge */}
            <div style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-blue-icon-border)',
              background: 'rgba(76, 163, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}>
              <svg width={isMobile ? '28' : '36'} height={isMobile ? '28' : '36'} viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>

            {/* Step label */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(76, 163, 255, 0.12)',
              border: '1px solid rgba(76, 163, 255, 0.3)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Step 03
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: isSmallPhone ? '1.5rem' : '2rem',
              fontWeight: '800',
              color: 'var(--color-white)',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
            }}>
              Charging Infra creation
            </h2>

            {/* Divider */}
            <div style={{
              width: '60px',
              height: '3px',
              background: 'var(--color-accent)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 12px rgba(76, 163, 255, 0.4)',
            }} />

            {/* Description */}
            <p style={{
              fontSize: isSmallPhone ? '0.95rem' : '1.15rem',
              color: 'var(--color-grey-light)',
              lineHeight: '1.8',
              fontWeight: '400',
            }}>
              Creating charging infrastructure and bringing renewable power connections
            </p>
          </div>

          {/* Connecting line & arrow */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0.5rem 0',
          }}>
            <div style={{
              width: '3px',
              height: '40px',
              background: 'linear-gradient(180deg, var(--color-accent), rgba(76, 163, 255, 0.3))',
              borderRadius: '2px',
            }} />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginTop: '-2px' }}>
              <path d="M12 4L12 18M12 18L6 12M12 18L18 12" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 4 - Operation & Management */}
          <div
            className="glass border-heavy info-card-bg-green"
            style={{
              padding: isSmallPhone ? '2rem 1rem' : isMobile ? '2.5rem 1.5rem' : '4rem 3.5rem',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition-smooth)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-30%',
              left: '-20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(0, 255, 136, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Icon badge */}
            <div style={{
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              border: '2px solid var(--color-icon-border)',
              background: 'rgba(0, 255, 136, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              position: 'relative',
            }}>
              <svg width={isMobile ? '28' : '36'} height={isMobile ? '28' : '36'} viewBox="0 0 24 24" fill="none" stroke="var(--color-vision-icon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>

            {/* Step label */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--color-vision-icon)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                Step 04
              </span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: isSmallPhone ? '1.5rem' : '2rem',
              fontWeight: '800',
              color: 'var(--color-white)',
              marginBottom: '1.2rem',
              lineHeight: '1.2',
            }}>
              Operation & Management
            </h2>

            {/* Divider */}
            <div style={{
              width: '60px',
              height: '3px',
              background: 'var(--color-vision-icon)',
              borderRadius: '2px',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 12px rgba(0, 255, 136, 0.4)',
            }} />

            {/* Description */}
            <p style={{
              fontSize: isSmallPhone ? '0.95rem' : '1.15rem',
              color: 'var(--color-grey-light)',
              lineHeight: '1.8',
              fontWeight: '400',
            }}>
              Optimizing the operations through monitoring and tracking
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImplementationGuides;
