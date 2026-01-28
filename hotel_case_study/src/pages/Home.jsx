import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// AURELIA - CASE STUDY EXHIBITION HOME
// ============================================================================

const tokens = {
  colors: {
    obsidian: '#0a0d12',
    midnight: '#12171f',
    charcoal: '#1a2029',
    slate: '#2a323f',
    gold: '#d4a574',
    goldBright: '#e8c49a',
    teal: '#1a4a4f',
    coral: '#e07a5f',
    cream: '#f5f0e8',
    creamMuted: '#d4cfc7',
    textMuted: '#8b9298',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', -apple-system, system-ui, sans-serif",
  },
  motion: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    dramatic: 'cubic-bezier(0.16, 1, 0.3, 1)',
  }
};

// Icons
const Icons = {
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Layers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Layout: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9" strokeLinecap="round"/>
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

// Project Card Component
const ProjectCard = ({ to, icon: Icon, title, description, tags, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: isHovered ? tokens.colors.charcoal : tokens.colors.midnight,
        border: `1px solid ${isHovered ? tokens.colors.gold : tokens.colors.slate}`,
        borderRadius: '8px',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden',
        transition: `all 0.4s ${tokens.motion.smooth}`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.4)' : 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        background: `linear-gradient(135deg, transparent 0%, ${index === 0 ? tokens.colors.teal : tokens.colors.coral}15 100%)`,
        opacity: isHovered ? 1 : 0,
        transition: `opacity 0.4s ${tokens.motion.smooth}`,
      }} />

      {/* Number */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        fontFamily: tokens.fonts.display,
        fontSize: '72px',
        fontWeight: '400',
        color: tokens.colors.slate,
        opacity: 0.3,
        lineHeight: 1,
      }}>
        0{index + 1}
      </div>

      {/* Icon */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        border: `1px solid ${isHovered ? tokens.colors.gold : tokens.colors.slate}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHovered ? tokens.colors.gold : tokens.colors.textMuted,
        marginBottom: '32px',
        transition: `all 0.3s ${tokens.motion.smooth}`,
      }}>
        <Icon />
      </div>

      {/* Content */}
      <h3 style={{
        fontFamily: tokens.fonts.display,
        fontSize: '28px',
        fontWeight: '500',
        color: tokens.colors.cream,
        marginBottom: '12px',
        position: 'relative',
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: tokens.fonts.body,
        fontSize: '15px',
        color: tokens.colors.textMuted,
        lineHeight: 1.6,
        marginBottom: '32px',
        maxWidth: '400px',
        position: 'relative',
      }}>
        {description}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '32px',
        position: 'relative',
      }}>
        {tags.map((tag) => (
          <span key={tag} style={{
            padding: '6px 12px',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: tokens.colors.creamMuted,
            background: tokens.colors.slate + '60',
            borderRadius: '2px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* View link */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isHovered ? '12px' : '8px',
        fontFamily: tokens.fonts.body,
        fontSize: '14px',
        fontWeight: '500',
        color: tokens.colors.gold,
        transition: `all 0.3s ${tokens.motion.smooth}`,
        position: 'relative',
      }}>
        View Project <Icons.ArrowRight />
      </div>
    </Link>
  );
};

// Main Home Component
const AureliaHome = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: tokens.colors.obsidian,
      fontFamily: tokens.fonts.body,
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* ===== GOLD BLUR BACKGROUND PATTERNS ===== */}
      
      {/* Large gold glow - top right */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        right: '-5%',
        width: '700px',
        height: '700px',
        background: `radial-gradient(circle, ${tokens.colors.gold}18 0%, ${tokens.colors.gold}08 40%, transparent 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Medium gold glow - left side */}
      <div style={{
        position: 'fixed',
        top: '30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${tokens.colors.gold}12 0%, ${tokens.colors.gold}05 50%, transparent 70%)`,
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Small gold accent - bottom right */}
      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '20%',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, ${tokens.colors.gold}15 0%, ${tokens.colors.gold}06 45%, transparent 70%)`,
        filter: 'blur(90px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Subtle gold streak - center */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '40%',
        width: '600px',
        height: '300px',
        background: `radial-gradient(ellipse, ${tokens.colors.gold}08 0%, transparent 60%)`,
        filter: 'blur(120px)',
        transform: 'rotate(-15deg)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Warm gold glow - bottom left */}
      <div style={{
        position: 'fixed',
        bottom: '-5%',
        left: '10%',
        width: '450px',
        height: '450px',
        background: `radial-gradient(circle, ${tokens.colors.goldBright}10 0%, ${tokens.colors.gold}05 50%, transparent 70%)`,
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Hero Section */}
      <header style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: `${tokens.colors.charcoal}cc`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${tokens.colors.slate}`,
          borderRadius: '4px',
          marginBottom: '32px',
          width: 'fit-content',
        }}>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
          }}>UX Case Study</span>
        </div>

        {/* Logo / Title */}
        <h1 style={{
          fontFamily: tokens.fonts.display,
          fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: '400',
          color: tokens.colors.cream,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '32px',
        }}>
          <span style={{ color: tokens.colors.gold }}>A</span>urelia
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: tokens.fonts.display,
          fontSize: 'clamp(20px, 3vw, 28px)',
          fontWeight: '400',
          fontStyle: 'italic',
          color: tokens.colors.creamMuted,
          maxWidth: '600px',
          lineHeight: 1.5,
          marginBottom: '24px',
        }}>
          A luxury hotel experience designed with the "Sensory Arrival" philosophy—where every interaction feels like crossing a threshold into somewhere extraordinary.
        </p>

        {/* Stars */}
        <div style={{
          display: 'flex',
          gap: '6px',
          color: tokens.colors.gold,
          marginBottom: '48px',
        }}>
          {[...Array(5)].map((_, i) => <Icons.Star key={i} />)}
        </div>

        {/* Meta info */}
        <div style={{
          display: 'flex',
          gap: '48px',
        }}>
          {[
            { label: 'Role', value: 'UX/UI Design' },
            { label: 'Duration', value: '2025' },
            { label: 'Tools', value: 'React, CSS-in-JS' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: tokens.colors.textMuted,
                marginBottom: '6px',
              }}>{item.label}</div>
              <div style={{
                fontFamily: tokens.fonts.body,
                fontSize: '15px',
                fontWeight: '500',
                color: tokens.colors.cream,
              }}>{item.value}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Project Cards Section */}
      <section style={{
        padding: '80px 48px 120px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: '12px',
          fontWeight: '500',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: tokens.colors.gold,
          marginBottom: '48px',
        }}>
          Explore the Project
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}>
          <ProjectCard
            to="/landing"
            icon={Icons.Layout}
            title="Landing Page"
            description="The main marketing page featuring dramatic hero sections, asymmetric layouts, scroll-driven animations, and the full dark luxe visual treatment."
            tags={['Dark Mode', 'Parallax', 'Scroll Reveals', 'Asymmetric Grid']}
            index={0}
          />
          
          <ProjectCard
            to="/design-language"
            icon={Icons.Layers}
            title="Design Language"
            description="A comprehensive documentation of the Aurelia design system—colors, typography, materials, motion, components, and the philosophy behind every choice."
            tags={['Design Tokens', 'Typography', 'Motion', 'Components']}
            index={1}
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{
        padding: '120px 48px',
        background: `linear-gradient(180deg, ${tokens.colors.charcoal}ee 0%, ${tokens.colors.midnight}ee 100%)`,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '32px',
          }}>
            Design Philosophy
          </div>

          <blockquote style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: tokens.colors.cream,
            lineHeight: 1.5,
            marginBottom: '32px',
          }}>
            "A hotel isn't a transaction—it's an entrance into another world. Our design doesn't whisper; it envelops."
          </blockquote>

          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '14px',
            fontWeight: '600',
            color: tokens.colors.gold,
            letterSpacing: '0.1em',
          }}>
            — SENSORY ARRIVAL
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 48px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: `1px solid ${tokens.colors.slate}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontSize: '24px',
            fontWeight: '400',
            color: tokens.colors.cream,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            <span style={{ color: tokens.colors.gold }}>A</span>urelia
          </div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            color: tokens.colors.textMuted,
          }}>
            A UX Case Study
          </div>
        </div>

        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: '12px',
          color: tokens.colors.textMuted,
        }}>
          © 2025
        </div>
      </footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        ::selection {
          background: rgba(212, 165, 116, 0.4);
          color: #f5f0e8;
        }
      `}</style>
    </div>
  );
};

export default AureliaHome;
