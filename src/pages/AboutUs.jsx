import React, { useState } from 'react';
import { Target, Eye, Zap, TrendingUp, Users, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const statCards = [
  { number: '500+', label: 'Tons CO₂ Reduced', color: 'var(--color-blue-icon)' },
  { number: '6+', label: 'Active Routes', color: 'var(--color-vision-icon)' },
  { number: '99.5%', label: 'Fleet Uptime', color: 'var(--color-blue-icon)' },
];

const values = [
  {
    icon: <Zap size={28} />,
    title: 'Innovation',
    desc: 'Pushing the boundaries of EV technology to build smarter, cleaner logistics solutions.',
  },
  {
    icon: <Users size={28} />,
    title: 'Collaboration',
    desc: 'Working hand-in-hand with OEMs, fleet operators, and communities to drive change.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Reliability',
    desc: 'Delivering 99.5% uptime with 24/7 monitoring and a nationwide service network.',
  },
  {
    icon: <Award size={28} />,
    title: 'Sustainability',
    desc: 'Committed to a zero-emission future for India\'s heavy-duty freight industry.',
  },
];

const AboutUs = () => {
  const { theme } = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const isSmallPhone = width <= 480;
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: isMobile ? '100px' : '120px',
      paddingBottom: isMobile ? '40px' : '80px',
      background: 'var(--color-primary)',
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: isSmallPhone ? '0 1rem' : '0 2rem' }}>

        {/* Hero Section */}
        <div
          style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '6rem', paddingTop: '2rem' }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
          }}>
            About SwitchLabs
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: theme === 'light' ? '#000000' : '#ffffff',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            At Switchlabs, we specialize in the comprehensive management of full-stack EV deployment for our clients, ensuring a seamless and efficient transition to electric vehicles
          </p>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: isMobile ? '3rem' : '6rem',
          }}
        >
          {statCards.map((stat, i) => (
            <div
              key={i}
              className={`glass industrial-card ${i === 1 ? 'info-card-bg-green' : 'info-card-bg-blue'}`}
              style={{
                padding: isSmallPhone ? '1.5rem' : '2rem',
                textAlign: 'center',
                borderRadius: '12px',
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
              <div style={{ fontSize: '3rem', fontWeight: '900', color: stat.color, lineHeight: 1, marginBottom: '0.75rem' }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--color-white)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem',
            marginBottom: isMobile ? '3rem' : '6rem',
          }}
        >
          <div
            className="glass border-heavy white-card-border info-card-bg-blue"
            style={{
              padding: isSmallPhone ? '2rem' : isMobile ? '2.5rem' : '3rem',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'var(--transition-smooth)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(76, 163, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              border: '2px solid var(--color-blue-icon-border)',
              background: 'rgba(76, 163, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <Target size={32} color="var(--color-accent)" />
            </div>
            <h3 style={{
              fontSize: isSmallPhone ? '1.2rem' : '1.5rem',
              fontWeight: '800',
              color: 'var(--color-card-heading)',
              marginBottom: '1rem',
            }}>
              Our Mission
            </h3>
            <p style={{
              fontSize: isSmallPhone ? '0.9rem' : '1rem',
              lineHeight: '1.8',
              color: 'var(--color-white)',
            }}>
              To accelerate the adoption of electric vehicles in the logistics sector by providing reliable, efficient, and scalable charging solutions.
            </p>
          </div>

          <div
            className="glass border-heavy white-card-border info-card-bg-green"
            style={{
              padding: isSmallPhone ? '2rem' : isMobile ? '2.5rem' : '3rem',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'var(--transition-smooth)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              border: '2px solid var(--color-icon-border)',
              background: 'rgba(0, 255, 136, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <Eye size={32} color="var(--color-vision-icon)" />
            </div>
            <h3 style={{
              fontSize: isSmallPhone ? '1.2rem' : '1.5rem',
              fontWeight: '800',
              color: 'var(--color-card-heading)',
              marginBottom: '1rem',
            }}>
              Our Vision
            </h3>
            <p style={{
              fontSize: isSmallPhone ? '0.9rem' : '1rem',
              lineHeight: '1.8',
              color: 'var(--color-white)',
            }}>
              A cleaner, greener, and more sustainable India where logistics flows seamlessly without environmental impact.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div
          style={{ marginBottom: isMobile ? '2rem' : '4rem' }}
        >
          <div className="section-header" style={{ marginBottom: isMobile ? '2rem' : '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: 'var(--color-white)',
              marginBottom: '1rem',
            }}>
              Our <span style={{ color: 'var(--color-accent)' }}>Core Values</span>
            </h2>
            <p style={{ color: theme === 'light' ? '#000000' : '#ffffff', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              The principles that guide everything we build
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '1rem' : '2rem',
          }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  padding: isSmallPhone ? '1.5rem 1rem' : isMobile ? '2rem 1.5rem' : '2.5rem 2rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                  background: (i === 0 || i === 2)
                    ? (theme === 'light'
                        ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.08) 100%)'
                        : 'linear-gradient(135deg, rgba(0, 100, 0, 0.4) 0%, rgba(0, 100, 0, 0.2) 100%)')
                    : (i === 1 || i === 3)
                        ? (theme === 'light'
                            ? 'linear-gradient(135deg, rgba(76, 163, 255, 0.15) 0%, rgba(76, 163, 255, 0.08) 100%)'
                            : 'linear-gradient(135deg, rgba(21, 83, 148, 0.4) 0%, rgba(21, 83, 148, 0.2) 100%)')
                        : undefined,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: (i === 0 || i === 2)
                    ? (theme === 'light' ? '#059669' : '#00ff88')
                    : (i === 1 || i === 3)
                        ? (theme === 'light' ? '#155394' : '#4CA3FF')
                        : undefined,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  if (i === 0 || i === 2) e.currentTarget.style.borderColor = theme === 'light' ? '#059669' : '#00ff88';
                  else if (i === 1 || i === 3) e.currentTarget.style.borderColor = theme === 'light' ? '#155394' : '#4CA3FF';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (i === 0 || i === 2) e.currentTarget.style.borderColor = theme === 'light' ? '#059669' : '#00ff88';
                  else if (i === 1 || i === 3) e.currentTarget.style.borderColor = theme === 'light' ? '#155394' : '#4CA3FF';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(76, 163, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: (i === 0 || i === 2) ? (theme === 'light' ? '#059669' : '#00ff88') : (i === 1 || i === 3) ? (theme === 'light' ? '#155394' : '#4CA3FF') : 'var(--color-accent)',
                }}>
                  {v.icon}
                </div>
                <h4 style={{
                  fontSize: isSmallPhone ? '0.95rem' : '1.1rem',
                  fontWeight: '800',
                  color: theme === 'light' ? '#000000' : '#ffffff',
                  marginBottom: '0.75rem',
                }}>
                  {v.title}
                </h4>
                <p style={{
                  fontSize: isSmallPhone ? '0.8rem' : '0.9rem',
                  lineHeight: '1.7',
                color: theme === 'light' ? '#000000' : '#ffffff',
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
