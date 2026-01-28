import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// AURELIA DESIGN LANGUAGE SHOWCASE
// ============================================================================
// "Sensory Arrival" - A complete design system exhibition
// ============================================================================

// Design Tokens
const tokens = {
  colors: {
    obsidian: '#0a0d12',
    midnight: '#12171f',
    charcoal: '#1a2029',
    slate: '#2a323f',
    gold: '#d4a574',
    goldMuted: '#b8956a',
    goldBright: '#e8c49a',
    teal: '#1a4a4f',
    tealLight: '#2a6a70',
    coral: '#e07a5f',
    cream: '#f5f0e8',
    creamMuted: '#d4cfc7',
    textMuted: '#8b9298',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', -apple-system, system-ui, sans-serif",
  },
  radius: { none: '0px', sm: '2px', md: '4px', lg: '8px' },
  shadow: {
    subtle: '0 4px 20px rgba(0, 0, 0, 0.3)',
    medium: '0 8px 40px rgba(0, 0, 0, 0.4)',
    elevated: '0 20px 60px rgba(0, 0, 0, 0.5)',
    glow: '0 0 40px rgba(212, 165, 116, 0.3)',
  },
  motion: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    dramatic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  }
};

// Icons
const Icons = {
  Star: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Wifi: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round"/>
    </svg>
  ),
  Spa: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c-4-2.5-7-5.5-7-10.5 0-3 2-5.5 5-6.5 1.5-.5 2-.5 2-.5s.5 0 2 .5c3 1 5 3.5 5 6.5 0 5-3 8-7 10.5z"/>
      <path d="M12 22V11M9 7c0-2 1-3 3-4 2 1 3 2 3 4" strokeLinecap="round"/>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round"/>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  ),
};

// Section Component
const Section = ({ id, title, subtitle, children, alternate = false }) => (
  <section id={id} style={{
    padding: '120px 48px',
    background: alternate 
      ? `linear-gradient(180deg, ${tokens.colors.charcoal} 0%, ${tokens.colors.midnight} 100%)`
      : tokens.colors.obsidian,
  }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '64px' }}>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: '12px',
          fontWeight: '500',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: tokens.colors.gold,
          marginBottom: '16px',
        }}>{title}</div>
        {subtitle && (
          <p style={{
            fontFamily: tokens.fonts.display,
            fontSize: '32px',
            fontWeight: '400',
            color: tokens.colors.cream,
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
            maxWidth: '600px',
          }}>{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

// Dark Panel Component
const DarkPanel = ({ children, style = {} }) => (
  <div style={{
    background: tokens.colors.charcoal,
    border: `1px solid ${tokens.colors.slate}`,
    borderRadius: tokens.radius.lg,
    padding: '32px',
    ...style
  }}>
    {children}
  </div>
);

// Color Swatch Component
const ColorSwatch = ({ color, name, hex, role }) => {
  const isLight = ['#f5f0e8', '#d4cfc7', '#d4a574', '#e8c49a', '#e07a5f'].includes(color);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{
        width: '100%',
        height: '100px',
        background: color,
        borderRadius: tokens.radius.md,
        border: `1px solid ${tokens.colors.slate}`,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px',
      }}>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          color: isLight ? tokens.colors.obsidian : tokens.colors.cream,
          opacity: 0.7,
        }}>{hex}</span>
      </div>
      <div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: '14px',
          fontWeight: '600',
          color: tokens.colors.cream,
          marginBottom: '2px',
        }}>{name}</div>
        <div style={{
          fontFamily: tokens.fonts.body,
          fontSize: '12px',
          color: tokens.colors.textMuted,
        }}>{role}</div>
      </div>
    </div>
  );
};

// Typography Row Component
const TypographyRow = ({ name, font, size, weight, sample, tracking, style: extraStyle }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '140px 100px 80px 1fr',
    alignItems: 'baseline',
    padding: '20px 0',
    borderBottom: `1px solid ${tokens.colors.slate}`,
  }}>
    <div style={{ fontFamily: tokens.fonts.body, fontSize: '12px', color: tokens.colors.textMuted }}>{name}</div>
    <div style={{ fontFamily: 'monospace', fontSize: '11px', color: tokens.colors.textMuted }}>{size}</div>
    <div style={{ fontFamily: 'monospace', fontSize: '11px', color: tokens.colors.textMuted }}>{weight}</div>
    <div style={{
      fontFamily: font === 'display' ? tokens.fonts.display : tokens.fonts.body,
      fontSize: size,
      fontWeight: weight,
      color: tokens.colors.cream,
      letterSpacing: tracking || 'normal',
      ...extraStyle,
    }}>{sample}</div>
  </div>
);

// Button Showcase Component
const ButtonShowcase = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [outlineHover, setOutlineHover] = useState(false);
  const [ghostHover, setGhostHover] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button
          style={{
            padding: '18px 40px',
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: tokens.colors.obsidian,
            background: primaryHover ? tokens.colors.goldBright : tokens.colors.gold,
            border: 'none',
            cursor: 'pointer',
            transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
            boxShadow: primaryHover ? tokens.shadow.glow : 'none',
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={() => setPrimaryHover(true)}
          onMouseLeave={() => setPrimaryHover(false)}
        >Reserve Now</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream }}>Primary</div>
          <div style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Gold fill, lift + glow on hover</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button
          style={{
            padding: '18px 40px',
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: tokens.colors.cream,
            background: outlineHover ? `${tokens.colors.cream}10` : 'transparent',
            border: `1px solid ${outlineHover ? tokens.colors.cream : tokens.colors.cream}40`,
            cursor: 'pointer',
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={() => setOutlineHover(true)}
          onMouseLeave={() => setOutlineHover(false)}
        >Learn More</button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream }}>Secondary</div>
          <div style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Cream outline, fill on hover</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button
          style={{
            padding: '18px 40px',
            fontFamily: tokens.fonts.body,
            fontSize: '14px',
            fontWeight: '500',
            color: ghostHover ? tokens.colors.gold : tokens.colors.creamMuted,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: ghostHover ? '16px' : '8px',
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={() => setGhostHover(true)}
          onMouseLeave={() => setGhostHover(false)}
        >
          Explore <Icons.ArrowRight />
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream }}>Ghost</div>
          <div style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Text + icon, expand on hover</div>
        </div>
      </div>
    </div>
  );
};

// Motion Demo Component
const MotionDemo = ({ name, curve, duration, description }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div style={{ flex: 1, minWidth: '200px' }}>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontFamily: tokens.fonts.body, fontSize: '14px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '4px' }}>{name}</div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: tokens.colors.textMuted }}>{duration} · {curve}</div>
      </div>
      <div
        style={{
          height: '60px',
          background: tokens.colors.charcoal,
          borderRadius: tokens.radius.md,
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), parseInt(duration) * 2);
        }}
      >
        <div style={{
          position: 'absolute',
          left: isAnimating ? 'calc(100% - 50px)' : '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '42px',
          height: '42px',
          background: `linear-gradient(135deg, ${tokens.colors.gold} 0%, ${tokens.colors.goldMuted} 100%)`,
          borderRadius: tokens.radius.sm,
          transition: `left ${duration}ms ${curve}`,
        }} />
      </div>
      <div style={{ fontFamily: tokens.fonts.body, fontSize: '11px', color: tokens.colors.textMuted, marginTop: '8px' }}>Click to animate · {description}</div>
    </div>
  );
};

// Icon Showcase
const IconShowcase = ({ icon: IconComponent, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '24px',
        background: isHovered ? tokens.colors.charcoal : 'transparent',
        borderRadius: tokens.radius.lg,
        transition: `all 0.3s ${tokens.motion.smooth}`,
        cursor: 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        border: `1px solid ${isHovered ? tokens.colors.gold : tokens.colors.slate}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHovered ? tokens.colors.gold : tokens.colors.textMuted,
        transition: `all 0.3s ${tokens.motion.smooth}`,
      }}>
        <IconComponent />
      </div>
      <span style={{ fontFamily: tokens.fonts.body, fontSize: '12px', color: tokens.colors.textMuted }}>{name}</span>
    </div>
  );
};

// Asymmetric Layout Demo
const AsymmetricDemo = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr', gap: '16px', height: '300px' }}>
    <div style={{
      background: `linear-gradient(135deg, ${tokens.colors.teal} 0%, ${tokens.colors.teal}80 100%)`,
      borderRadius: tokens.radius.md,
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      <span style={{ fontFamily: tokens.fonts.body, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.cream, opacity: 0.7 }}>Hero / Primary</span>
      <span style={{ fontFamily: tokens.fonts.display, fontSize: '24px', color: tokens.colors.cream, marginTop: '8px' }}>1.4fr</span>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{
        flex: 1,
        background: tokens.colors.charcoal,
        borderRadius: tokens.radius.md,
        border: `1px solid ${tokens.colors.slate}`,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: tokens.colors.textMuted }}>SUPPORTING</span>
        <span style={{ fontFamily: tokens.fonts.display, fontSize: '18px', color: tokens.colors.cream }}>1fr</span>
      </div>
      <div style={{
        flex: 1,
        background: `linear-gradient(135deg, ${tokens.colors.coral}40 0%, ${tokens.colors.gold}20 100%)`,
        borderRadius: tokens.radius.md,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: tokens.colors.cream, opacity: 0.7 }}>ACCENT</span>
        <span style={{ fontFamily: tokens.fonts.display, fontSize: '18px', color: tokens.colors.cream }}>1fr</span>
      </div>
    </div>
    
    <div style={{
      background: tokens.colors.midnight,
      borderRadius: tokens.radius.md,
      border: `1px solid ${tokens.colors.gold}30`,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: tokens.colors.gold }}>DETAIL</span>
      <span style={{ fontFamily: tokens.fonts.display, fontSize: '18px', color: tokens.colors.cream }}>0.8fr</span>
    </div>
  </div>
);

// Materials Demo
const MaterialsDemo = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start' }}>
    <div style={{
      position: 'relative',
      height: '380px',
      background: `radial-gradient(ellipse at 30% 30%, ${tokens.colors.teal}30 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, ${tokens.colors.gold}15 0%, transparent 50%)`,
      borderRadius: tokens.radius.lg,
      padding: '40px',
    }}>
      <div style={{
        position: 'absolute', top: '30px', left: '30px', width: '220px', height: '140px',
        background: tokens.colors.obsidian, borderRadius: tokens.radius.md, padding: '20px', border: `1px solid ${tokens.colors.slate}`,
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: tokens.colors.gold, marginBottom: '4px' }}>OBSIDIAN</div>
        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>#0a0d12 · Base layer</div>
      </div>
      
      <div style={{
        position: 'absolute', top: '100px', left: '100px', width: '220px', height: '140px',
        background: tokens.colors.midnight, borderRadius: tokens.radius.md, padding: '20px', border: `1px solid ${tokens.colors.slate}`, boxShadow: tokens.shadow.subtle,
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: tokens.colors.gold, marginBottom: '4px' }}>MIDNIGHT</div>
        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>#12171f · Elevated</div>
      </div>
      
      <div style={{
        position: 'absolute', top: '170px', left: '170px', width: '220px', height: '140px',
        background: tokens.colors.charcoal, borderRadius: tokens.radius.md, padding: '20px', border: `1px solid ${tokens.colors.slate}`, boxShadow: tokens.shadow.medium,
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: tokens.colors.gold, marginBottom: '4px' }}>CHARCOAL</div>
        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>#1a2029 · Interactive</div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DarkPanel style={{ padding: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '8px' }}>Surface Philosophy</div>
        <div style={{ fontSize: '13px', color: tokens.colors.textMuted, lineHeight: 1.6 }}>
          Solid, opaque surfaces create depth through layering rather than transparency. Each elevation step lightens slightly, maintaining readability while suggesting dimension.
        </div>
      </DarkPanel>
      
      <DarkPanel style={{ padding: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '8px' }}>Border Treatment</div>
        <div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.gold, marginBottom: '8px' }}>1px solid #2a323f</div>
        <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Subtle slate borders define edges without creating harsh contrast.</div>
      </DarkPanel>
      
      <DarkPanel style={{ padding: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '8px' }}>Border Radius</div>
        <div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.gold, marginBottom: '8px' }}>0px – 8px</div>
        <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Minimal rounding maintains sharp, architectural feel. Buttons use 0px for authority.</div>
      </DarkPanel>
      
      <DarkPanel style={{ padding: '20px' }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '8px' }}>Shadow System</div>
        <div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.gold, marginBottom: '8px' }}>rgba(0, 0, 0, 0.3–0.5)</div>
        <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Deep, diffuse shadows reinforce the cinematic, theatrical atmosphere.</div>
      </DarkPanel>
    </div>
  </div>
);

// Main Component
const AureliaDesignLanguage = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: tokens.colors.obsidian, fontFamily: tokens.fonts.body }}>
      
      {/* HERO / PHILOSOPHY */}
      <header style={{
        padding: '120px 48px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Link to="/" style={{
          position: 'absolute', top: '48px', left: '48px',
          fontFamily: tokens.fonts.display, fontSize: '28px', fontWeight: '400',
          color: tokens.colors.cream, letterSpacing: '0.15em', textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          <span style={{ color: tokens.colors.gold }}>A</span>urelia
        </Link>

        <div style={{
          position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px',
          background: `radial-gradient(circle, ${tokens.colors.teal}30 0%, transparent 60%)`,
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '10%', width: '300px', height: '300px',
          background: `radial-gradient(circle, ${tokens.colors.gold}15 0%, transparent 60%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <h1 style={{
          fontFamily: tokens.fonts.display,
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: '400',
          color: tokens.colors.cream,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '48px',
        }}>
          Design<br />
          <span style={{ fontStyle: 'italic', color: tokens.colors.gold }}>Language</span>
        </h1>

        <div style={{ maxWidth: '800px', paddingLeft: '32px', borderLeft: `2px solid ${tokens.colors.gold}` }}>
          <p style={{
            fontFamily: tokens.fonts.display, fontSize: '22px', fontWeight: '400', fontStyle: 'italic',
            color: tokens.colors.creamMuted, lineHeight: 1.7, marginBottom: '20px',
          }}>
            "A hotel isn't a transaction—it's an entrance into another world. Our design doesn't whisper; it envelops. Rich color fields create emotional temperature. Dramatic typography announces rather than suggests. Every scroll is a threshold crossed, every section a new room to discover. We design for the feeling of arriving somewhere extraordinary."
          </p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '14px', fontWeight: '600', color: tokens.colors.gold, letterSpacing: '0.1em' }}>— SENSORY ARRIVAL</p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '64px' }}>
          {['Materials', 'Color', 'Typography', 'Layout', 'Motion', 'Buttons', 'Icons'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              padding: '10px 20px', fontFamily: tokens.fonts.body, fontSize: '12px', fontWeight: '500',
              letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.creamMuted,
              background: tokens.colors.charcoal, border: `1px solid ${tokens.colors.slate}`, textDecoration: 'none',
              transition: `all 0.3s ${tokens.motion.smooth}`,
            }}>{item}</a>
          ))}
        </div>
      </header>

      {/* MATERIALS */}
      <Section id="materials" title="Materials" subtitle="Solid surfaces that create depth through layering." alternate>
        <MaterialsDemo />
      </Section>

      {/* COLOR SYSTEM */}
      <Section id="color" title="Color" subtitle="Dark foundations with warm luxe accents.">
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', fontWeight: '600', color: tokens.colors.creamMuted, marginBottom: '24px' }}>Foundation Darks</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <ColorSwatch color="#0a0d12" name="Obsidian" hex="#0a0d12" role="Primary background" />
            <ColorSwatch color="#12171f" name="Midnight" hex="#12171f" role="Elevated surfaces" />
            <ColorSwatch color="#1a2029" name="Charcoal" hex="#1a2029" role="Cards, panels" />
            <ColorSwatch color="#2a323f" name="Slate" hex="#2a323f" role="Borders, dividers" />
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', fontWeight: '600', color: tokens.colors.creamMuted, marginBottom: '24px' }}>Accent Palette</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            <ColorSwatch color="#d4a574" name="Gold" hex="#d4a574" role="Primary accent, CTAs" />
            <ColorSwatch color="#e8c49a" name="Gold Bright" hex="#e8c49a" role="Hover states" />
            <ColorSwatch color="#1a4a4f" name="Teal" hex="#1a4a4f" role="Visual sections" />
            <ColorSwatch color="#2a6a70" name="Teal Light" hex="#2a6a70" role="Gradients" />
            <ColorSwatch color="#e07a5f" name="Coral" hex="#e07a5f" role="Warm accents" />
          </div>
        </div>

        <div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', fontWeight: '600', color: tokens.colors.creamMuted, marginBottom: '24px' }}>Text Hierarchy</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <ColorSwatch color="#f5f0e8" name="Cream" hex="#f5f0e8" role="Headlines, primary text" />
            <ColorSwatch color="#d4cfc7" name="Cream Muted" hex="#d4cfc7" role="Body text" />
            <ColorSwatch color="#8b9298" name="Text Muted" hex="#8b9298" role="Captions, labels" />
          </div>
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section id="typography" title="Typography" subtitle="Serif headlines for drama, sans-serif body for clarity." alternate>
        <DarkPanel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px', paddingBottom: '32px', borderBottom: `1px solid ${tokens.colors.slate}` }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '12px' }}>Display Font</div>
              <div style={{ fontFamily: tokens.fonts.display, fontSize: '32px', color: tokens.colors.cream, marginBottom: '8px' }}>Playfair Display</div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', color: tokens.colors.textMuted }}>Headlines, quotes, dramatic moments</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '12px' }}>Body Font</div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '32px', fontWeight: '500', color: tokens.colors.cream, marginBottom: '8px' }}>DM Sans</div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', color: tokens.colors.textMuted }}>Body text, UI elements, navigation</div>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '140px 100px 80px 1fr',
            fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: tokens.colors.textMuted, padding: '12px 0', borderBottom: `1px solid ${tokens.colors.slate}`,
          }}>
            <div>Style</div><div>Size</div><div>Weight</div><div>Sample</div>
          </div>
          
          <TypographyRow font="display" name="Hero" size="96px" weight="400" sample="Aurelia" tracking="-0.02em" />
          <TypographyRow font="display" name="Display" size="56px" weight="400" sample="Where moments become" style={{ fontStyle: 'italic' }} />
          <TypographyRow font="display" name="Headline 1" size="40px" weight="500" sample="Your Private Sanctuary" />
          <TypographyRow font="display" name="Headline 2" size="28px" weight="500" sample="Overwater Villa" />
          <TypographyRow font="body" name="Body Large" size="17px" weight="400" sample="A sanctuary of understated luxury, where the Indian Ocean meets timeless hospitality." />
          <TypographyRow font="body" name="Body" size="15px" weight="400" sample="Each of our 42 villas offers an intimate retreat." />
          <TypographyRow font="body" name="Caption" size="13px" weight="500" sample="185 m² · Ocean View · Private Pool" />
          <TypographyRow font="body" name="Overline" size="12px" weight="500" sample="ACCOMMODATIONS" tracking="0.3em" />
        </DarkPanel>
      </Section>

      {/* LAYOUT */}
      <Section id="layout" title="Layout" subtitle="Asymmetric grids that create visual tension.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
          <div>
            <AsymmetricDemo />
            <div style={{ marginTop: '24px', fontFamily: tokens.fonts.body, fontSize: '13px', color: tokens.colors.textMuted, lineHeight: 1.6 }}>
              Intentionally unequal column ratios (1.4fr / 1fr / 0.8fr) create visual hierarchy through spatial imbalance—each section feels curated rather than templated.
            </div>
          </div>
          
          <DarkPanel>
            <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '24px' }}>Layout Principles</div>
            
            {[
              { title: 'Edge-to-Edge Sections', desc: 'Full-width color blocks create room-like transitions' },
              { title: 'Overlapping Elements', desc: 'Text and images intersect for depth' },
              { title: 'Varied Column Ratios', desc: '1.4fr + 1fr + 0.8fr instead of equal thirds' },
              { title: 'Generous Negative Space', desc: '120px+ section padding for breathing room' },
              { title: 'Grid-Breaking Headlines', desc: 'Staggered margins create movement' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 0', borderBottom: i < 4 ? `1px solid ${tokens.colors.slate}` : 'none' }}>
                <div style={{ fontFamily: tokens.fonts.body, fontSize: '14px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', color: tokens.colors.textMuted }}>{item.desc}</div>
              </div>
            ))}
          </DarkPanel>
        </div>
      </Section>

      {/* MOTION */}
      <Section id="motion" title="Motion" subtitle="Dramatic reveals that reward exploration." alternate>
        <DarkPanel style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '48px' }}>
            <MotionDemo name="Smooth" curve="cubic-bezier(0.4, 0, 0.2, 1)" duration="300" description="Standard transitions" />
            <MotionDemo name="Dramatic" curve="cubic-bezier(0.16, 1, 0.3, 1)" duration="800" description="Scroll reveals" />
            <MotionDemo name="Bounce" curve="cubic-bezier(0.34, 1.56, 0.64, 1)" duration="400" description="Interactive feedback" />
          </div>
        </DarkPanel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { title: 'Scroll Reveal', code: 'translateY(60px) → translateY(0)', desc: 'Elements fade up as they enter viewport' },
            { title: 'Parallax Layers', code: 'transform: translateY(scrollY * 0.3)', desc: 'Background moves slower than foreground' },
            { title: 'Staggered Entry', code: 'delay: index * 100ms', desc: 'Sequential reveals for lists and grids' },
          ].map((item) => (
            <DarkPanel key={item.title} style={{ padding: '24px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.cream, marginBottom: '8px' }}>{item.title}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '11px', color: tokens.colors.gold, marginBottom: '12px', padding: '8px', background: tokens.colors.midnight, borderRadius: tokens.radius.sm }}>{item.code}</div>
              <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>{item.desc}</div>
            </DarkPanel>
          ))}
        </div>
      </Section>

      {/* BUTTONS */}
      <Section id="buttons" title="Buttons" subtitle="Sharp edges for authority, gold for action.">
        <DarkPanel>
          <ButtonShowcase />
        </DarkPanel>
        
        <div style={{ marginTop: '32px', padding: '24px', background: tokens.colors.charcoal, borderRadius: tokens.radius.lg, border: `1px solid ${tokens.colors.slate}` }}>
          <div style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '16px' }}>Button Specifications</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', fontSize: '13px' }}>
            <div>
              <div style={{ color: tokens.colors.textMuted, marginBottom: '4px' }}>Border Radius</div>
              <div style={{ color: tokens.colors.cream, fontFamily: 'monospace' }}>0px (sharp)</div>
            </div>
            <div>
              <div style={{ color: tokens.colors.textMuted, marginBottom: '4px' }}>Padding</div>
              <div style={{ color: tokens.colors.cream, fontFamily: 'monospace' }}>18px 40px</div>
            </div>
            <div>
              <div style={{ color: tokens.colors.textMuted, marginBottom: '4px' }}>Letter Spacing</div>
              <div style={{ color: tokens.colors.cream, fontFamily: 'monospace' }}>0.15em</div>
            </div>
            <div>
              <div style={{ color: tokens.colors.textMuted, marginBottom: '4px' }}>Text Transform</div>
              <div style={{ color: tokens.colors.cream, fontFamily: 'monospace' }}>uppercase</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ICONS */}
      <Section id="icons" title="Icons" subtitle="Thin strokes, circular containers, gold on interaction." alternate>
        <DarkPanel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}>
            <IconShowcase icon={Icons.Star} name="Star" />
            <IconShowcase icon={Icons.MapPin} name="Location" />
            <IconShowcase icon={Icons.Wifi} name="Amenity" />
            <IconShowcase icon={Icons.Spa} name="Wellness" />
            <IconShowcase icon={Icons.Sun} name="Day" />
            <IconShowcase icon={Icons.Moon} name="Night" />
          </div>
        </DarkPanel>
        
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { spec: 'Stroke Width', value: '1.5px' },
            { spec: 'Container', value: '56px circle' },
            { spec: 'Border', value: '1px solid slate → gold' },
          ].map((item) => (
            <div key={item.spec} style={{ padding: '20px', background: tokens.colors.charcoal, borderRadius: tokens.radius.lg, border: `1px solid ${tokens.colors.slate}` }}>
              <div style={{ fontSize: '12px', color: tokens.colors.textMuted, marginBottom: '4px' }}>{item.spec}</div>
              <div style={{ fontSize: '14px', color: tokens.colors.cream, fontFamily: 'monospace' }}>{item.value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto', borderTop: `1px solid ${tokens.colors.slate}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: tokens.fonts.display, fontSize: '24px', fontWeight: '400', color: tokens.colors.cream, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
              <span style={{ color: tokens.colors.gold }}>A</span>urelia
            </div>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: '13px', color: tokens.colors.textMuted }}>Design Language v1.0</div>
          </div>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '12px', color: tokens.colors.textMuted, textAlign: 'right' }}>A UX Case Study</div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${tokens.colors.gold}40; color: ${tokens.colors.cream}; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${tokens.colors.obsidian}; }
        ::-webkit-scrollbar-thumb { background: ${tokens.colors.slate}; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default AureliaDesignLanguage;
