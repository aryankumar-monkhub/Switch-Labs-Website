import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onGetStarted }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <img
          src="/switch-labs-logo.png"
          alt="Switch Labs Logo"
          style={{
            height: '40px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="nav-links" style={{
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'center',
      }}>
        {['Solutions', 'Our Corridors', 'Impact', 'About Us', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--color-white)',
              opacity: 0.8,
              transition: 'var(--transition-smooth)',
            }}
            onMouseOver={(e) => (e.target.style.opacity = 1, e.target.style.color = 'var(--color-accent)')}
            onMouseOut={(e) => (e.target.style.opacity = 0.8, e.target.style.color = 'var(--color-white)')}
          >
            {item}
          </a>
        ))}
        <button
          onClick={onGetStarted}
          style={{
            background: 'var(--color-accent)',
            color: 'var(--color-primary)',
            padding: '0.8rem 1.5rem',
            borderRadius: '4px',
            fontWeight: '800',
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            boxShadow: '0 0 20px var(--color-accent-glow)',
            transition: 'var(--transition-smooth)',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 0 30px var(--color-accent-glow)')}
          onMouseOut={(e) => (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = '0 0 20px var(--color-accent-glow)')}
        >
          Get a Quote
        </button>
      </div>

      <div className="mobile-menu" style={{ display: 'none' }}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
