import React, { useState } from 'react';

// ============================================================================
// VAULT. DESIGN LANGUAGE SHOWCASE
// ============================================================================

// Custom SVG Icons (consistent with main app)
const Icons = {
  Card: () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4 16H36" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="22" width="12" height="4" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  Crypto: () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 10V12M20 28V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 17C15 14.5 17 13 20 13C23 13 25 14.5 25 17C25 19 23.5 20 20 20C16.5 20 15 21 15 23C15 25.5 17 27 20 27C23 27 25 25.5 25 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 20H34" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L6 10V18C6 26.8 12 33.4 20 36C28 33.4 34 26.8 34 18V10L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Lightning: () => (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4L10 22H18L16 36L30 18H22L24 4H22Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
  Layers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Design Tokens
const tokens = {
  colors: {
    primary: '#0078d4',
    primaryHover: '#106ebe',
    textPrimary: '#1a1a2e',
    textSecondary: '#5c6370',
    textMuted: '#8b95a1',
    surface: 'rgba(255, 255, 255, 0.75)',
    border: 'rgba(255, 255, 255, 0.8)',
    borderSubtle: 'rgba(255, 255, 255, 0.5)',
  },
  blur: { standard: 'blur(20px)' },
  radius: { sm: '8px', md: '12px', lg: '16px', xl: '20px', xxl: '24px' },
  shadow: {
    subtle: '0 4px 16px rgba(0, 0, 0, 0.04)',
    medium: '0 8px 32px rgba(0, 0, 0, 0.08)',
    elevated: '0 16px 48px rgba(0, 0, 0, 0.12)',
    glow: '0 4px 20px rgba(0, 120, 212, 0.35)',
  },
  motion: { standard: '0.2s ease', smooth: '0.3s cubic-bezier(0.4, 0, 0.2, 1)', bounce: '0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }
};

// Section Component
const Section = ({ id, title, subtitle, children, dark = false }) => (
  <section id={id} style={{
    padding: '100px 48px',
    background: dark ? 'linear-gradient(180deg, rgba(26, 26, 46, 0.03) 0%, transparent 100%)' : 'transparent'
  }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: tokens.colors.primary, marginBottom: '12px' }}>{title}</h2>
        {subtitle && <p style={{ fontSize: '24px', fontWeight: '300', color: tokens.colors.textPrimary, letterSpacing: '-0.01em', lineHeight: 1.4, maxWidth: '600px' }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

// Glass Panel Component
const GlassPanel = ({ children, style = {} }) => (
  <div style={{
    background: tokens.colors.surface,
    backdropFilter: tokens.blur.standard,
    WebkitBackdropFilter: tokens.blur.standard,
    border: `1px solid ${tokens.colors.border}`,
    borderRadius: tokens.radius.xl,
    padding: '32px',
    boxShadow: tokens.shadow.subtle,
    ...style
  }}>
    {children}
  </div>
);

// Color Swatch Component
const ColorSwatch = ({ color, name, hex, role }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{
      width: '100%', height: '80px', background: color, borderRadius: tokens.radius.md,
      border: color.includes('rgba') ? `1px solid ${tokens.colors.borderSubtle}` : 'none',
      boxShadow: tokens.shadow.subtle
    }} />
    <div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary }}>{name}</div>
      <div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.textMuted }}>{hex}</div>
      <div style={{ fontSize: '11px', color: tokens.colors.textMuted, marginTop: '2px' }}>{role}</div>
    </div>
  </div>
);

// Button Showcase Component
const ButtonShowcase = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);
  const [ghostHover, setGhostHover] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <button
          style={{
            padding: '14px 32px', fontSize: '15px', fontWeight: '600', color: '#fff',
            background: primaryHover ? tokens.colors.primaryHover : tokens.colors.primary,
            border: 'none', borderRadius: tokens.radius.md, cursor: 'pointer',
            boxShadow: primaryHover ? '0 8px 28px rgba(0, 120, 212, 0.45)' : tokens.shadow.glow,
            transform: primaryHover ? 'translateY(-2px)' : 'translateY(0)',
            transition: `all ${tokens.motion.standard}`
          }}
          onMouseEnter={() => setPrimaryHover(true)}
          onMouseLeave={() => setPrimaryHover(false)}
        >Primary Action</button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Solid fill, glow shadow</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <button
          style={{
            padding: '14px 32px', fontSize: '15px', fontWeight: '600', color: tokens.colors.primary,
            background: secondaryHover ? 'rgba(0, 120, 212, 0.08)' : 'transparent',
            border: `2px solid ${tokens.colors.primary}`, borderRadius: tokens.radius.md, cursor: 'pointer',
            transform: secondaryHover ? 'translateY(-1px)' : 'translateY(0)',
            transition: `all ${tokens.motion.standard}`
          }}
          onMouseEnter={() => setSecondaryHover(true)}
          onMouseLeave={() => setSecondaryHover(false)}
        >Secondary</button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Outlined, subtle fill on hover</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <button
          style={{
            padding: '14px 32px', fontSize: '15px', fontWeight: '500',
            color: ghostHover ? tokens.colors.textPrimary : tokens.colors.textSecondary,
            background: ghostHover ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
            border: 'none', borderRadius: tokens.radius.md, cursor: 'pointer',
            transition: `all ${tokens.motion.standard}`
          }}
          onMouseEnter={() => setGhostHover(true)}
          onMouseLeave={() => setGhostHover(false)}
        >Ghost Action →</button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Text only, background on hover</span>
      </div>
    </div>
  );
};

// Elevation Layer Component
const ElevationLayer = ({ level, blur, opacity, description }) => (
  <div style={{
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: blur, WebkitBackdropFilter: blur,
    border: `1px solid rgba(255, 255, 255, ${opacity + 0.1})`,
    borderRadius: tokens.radius.lg, padding: '20px', minWidth: '160px'
  }}>
    <div style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textPrimary, marginBottom: '6px' }}>Level {level}</div>
    <div style={{ fontSize: '11px', color: tokens.colors.textSecondary, marginBottom: '4px' }}>{blur}</div>
    <div style={{ fontSize: '10px', color: tokens.colors.textMuted }}>{description}</div>
  </div>
);

// Interactive Card Demo
const InteractiveCardDemo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: '320px', height: '190px',
        background: isHovered 
          ? 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.95) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,255,0.85) 100%)',
        backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255,255,255,0.9)', borderRadius: '20px', padding: '24px',
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        boxShadow: isHovered 
          ? '0 24px 48px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1)'
          : '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)',
        transform: isHovered 
          ? 'perspective(1000px) translateY(-12px) rotateX(4deg) rotateY(-2deg) scale(1.02)'
          : 'perspective(1000px) translateY(0) rotateX(0) rotateY(0) scale(1)',
        transformStyle: 'preserve-3d',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'absolute', top: '-50%', left: isHovered ? '150%' : '-100%',
        width: '60%', height: '200%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        transform: 'skewX(-20deg)', transition: 'left 0.6s ease', pointerEvents: 'none'
      }} />
      <div style={{ fontSize: '18px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '4px' }}>
        vault<span style={{ color: tokens.colors.textPrimary }}>.</span>
      </div>
      <div style={{
        width: '36px', height: '28px',
        background: 'linear-gradient(135deg, #e8c547 0%, #d4a942 100%)',
        borderRadius: '4px', marginTop: '20px',
        boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)'
      }} />
      <div style={{
        fontSize: '15px', fontWeight: '500', letterSpacing: '0.18em',
        color: tokens.colors.textPrimary, marginTop: '18px', fontVariantNumeric: 'tabular-nums'
      }}>4829 •••• •••• 3847</div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex' }}>
        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0, 120, 212, 0.85)' }} />
        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.7)', marginLeft: '-8px' }} />
      </div>
    </div>
  );
};

// Motion Demo Component
const MotionDemo = ({ name, curve, duration }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div style={{ flex: 1, minWidth: '180px' }}>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textPrimary }}>{name}</div>
        <div style={{ fontSize: '11px', fontFamily: 'monospace', color: tokens.colors.textMuted }}>{curve}</div>
      </div>
      <div
        style={{
          height: '50px', background: 'rgba(0, 120, 212, 0.05)', borderRadius: tokens.radius.md,
          position: 'relative', cursor: 'pointer', overflow: 'hidden'
        }}
        onClick={() => { setIsAnimating(true); setTimeout(() => setIsAnimating(false), parseInt(duration) * 2); }}
      >
        <div style={{
          position: 'absolute', left: isAnimating ? 'calc(100% - 42px)' : '6px',
          top: '50%', transform: 'translateY(-50%)',
          width: '36px', height: '36px', background: tokens.colors.primary, borderRadius: tokens.radius.sm,
          transition: `left ${duration}ms ${curve}`
        }} />
      </div>
      <div style={{ fontSize: '10px', color: tokens.colors.textMuted, marginTop: '6px' }}>Click to animate • {duration}ms</div>
    </div>
  );
};

// Icon Showcase
const IconShowcase = ({ icon: IconComponent, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px',
        background: isHovered ? 'rgba(0, 120, 212, 0.04)' : 'transparent',
        borderRadius: tokens.radius.lg, transition: `all ${tokens.motion.standard}`, cursor: 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.8)', backdropFilter: tokens.blur.standard,
        borderRadius: tokens.radius.md, border: '1px solid rgba(255, 255, 255, 0.9)',
        color: isHovered ? tokens.colors.primary : tokens.colors.textSecondary,
        boxShadow: isHovered ? tokens.shadow.medium : tokens.shadow.subtle,
        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        transition: `all ${tokens.motion.bounce}`
      }}>
        <IconComponent />
      </div>
      <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>{name}</span>
    </div>
  );
};

// Typography Row
const TypographyRow = ({ name, size, weight, sample, tracking }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '120px 70px 70px 1fr', alignItems: 'baseline',
    padding: '16px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.04)'
  }}>
    <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{name}</div>
    <div style={{ fontSize: '11px', fontFamily: 'monospace', color: tokens.colors.textMuted }}>{size}</div>
    <div style={{ fontSize: '11px', fontFamily: 'monospace', color: tokens.colors.textMuted }}>{weight}</div>
    <div style={{ fontSize: size, fontWeight: weight, color: tokens.colors.textPrimary, letterSpacing: tracking || '-0.01em' }}>{sample}</div>
  </div>
);

// Main Component
const DesignLanguageShowcase = () => {
  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: `
        radial-gradient(ellipse at 20% 10%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 45%),
        radial-gradient(ellipse at 40% 90%, rgba(236, 72, 153, 0.04) 0%, transparent 40%),
        linear-gradient(180deg, #f8fafc 0%, #f0f4f8 100%)
      `,
      fontFamily: "'Segoe UI Variable', 'SF Pro Display', -apple-system, system-ui, sans-serif"
    }}>
      
      {/* Hero + Philosophy Quote */}
      <header style={{ padding: '120px 48px 80px', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <div style={{ fontSize: '28px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '64px', letterSpacing: '-0.02em' }}>
          vault<span style={{ color: tokens.colors.textPrimary }}>.</span>
        </div>

        <h1 style={{ fontSize: '64px', fontWeight: '200', color: tokens.colors.textPrimary, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '48px', maxWidth: '700px' }}>
          Design<br /><span style={{ fontWeight: '600' }}>Language</span>
        </h1>

        <div style={{ maxWidth: '800px', paddingLeft: '32px', borderLeft: `3px solid ${tokens.colors.primary}` }}>
          <p style={{ fontSize: '20px', fontWeight: '400', color: tokens.colors.textSecondary, lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>
            "vault. lives in the space where integrity meets luxury. Our surfaces are ethereal: frosted glass that breathes, layers that float, light that diffuses softly. But when it's time to act, we're reliable and robust. Unwavering. Your money deserves an interface that feels as substantial as the value it holds. No clutter, no confusion. Just clarity that lets you focus on what matters and makes you feel taken care of at the same time."
          </p>
          <p style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary }}>— My Design Philosophy</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '48px' }}>
          {['Materials', 'Color', 'Typography', 'Elevation', 'Motion', 'Components', 'Buttons', 'Icons'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              padding: '8px 16px', fontSize: '12px', fontWeight: '500', color: tokens.colors.textSecondary,
              background: 'rgba(255, 255, 255, 0.6)', backdropFilter: tokens.blur.standard,
              border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: tokens.radius.sm, textDecoration: 'none'
            }}>{item}</a>
          ))}
        </div>

        <div style={{
          position: 'absolute', top: '80px', right: '48px', width: '350px', height: '350px',
          background: `radial-gradient(circle at 30% 30%, rgba(0, 120, 212, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)`,
          filter: 'blur(60px)', borderRadius: '50%', pointerEvents: 'none'
        }} />
      </header>

      {/* Materials Section */}
      <Section id="materials" title="Materials" subtitle="Frosted glass surfaces that feel luminous yet grounded.">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start' }}>
          <div style={{ position: 'relative', height: '340px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '280px', height: '180px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.6)', borderRadius: tokens.radius.xl, padding: '24px', zIndex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '6px' }}>Light Acrylic</div>
              <div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>blur(12px) • 65% opacity</div>
            </div>
            <div style={{ position: 'absolute', top: '70px', left: '90px', width: '280px', height: '180px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: tokens.radius.xl, padding: '24px', zIndex: 2 }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '6px' }}>Standard Glass</div>
              <div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>blur(20px) • 75% opacity</div>
            </div>
            <div style={{ position: 'absolute', top: '140px', left: '180px', width: '280px', height: '180px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.9)', borderRadius: tokens.radius.xl, padding: '24px', zIndex: 3, boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '6px' }}>Elevated Surface</div>
              <div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>blur(40px) • 85% opacity</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <GlassPanel style={{ padding: '20px' }}><div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textPrimary }}>backdrop-filter</div><div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.primary, marginTop: '4px' }}>blur(20px) saturate(180%)</div></GlassPanel>
            <GlassPanel style={{ padding: '20px' }}><div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textPrimary }}>Background</div><div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.primary, marginTop: '4px' }}>rgba(255, 255, 255, 0.75)</div></GlassPanel>
            <GlassPanel style={{ padding: '20px' }}><div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textPrimary }}>Border</div><div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.primary, marginTop: '4px' }}>1px solid rgba(255, 255, 255, 0.8)</div></GlassPanel>
            <GlassPanel style={{ padding: '20px' }}><div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textPrimary }}>Border Radius</div><div style={{ fontSize: '12px', fontFamily: 'monospace', color: tokens.colors.primary, marginTop: '4px' }}>20px (cards) • 12px (buttons) • 8px (inputs)</div></GlassPanel>
          </div>
        </div>
      </Section>

      {/* Color Section */}
      <Section id="color" title="Color" subtitle="Blue signals action. Everything else fades back." dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', marginBottom: '48px' }}>
          <ColorSwatch color="#0078d4" name="Primary" hex="#0078d4" role="CTAs, links" />
          <ColorSwatch color="#106ebe" name="Hover" hex="#106ebe" role="Hover state" />
          <ColorSwatch color="#005a9e" name="Pressed" hex="#005a9e" role="Active state" />
          <ColorSwatch color="#1a1a2e" name="Text Primary" hex="#1a1a2e" role="Headlines" />
          <ColorSwatch color="#5c6370" name="Text Secondary" hex="#5c6370" role="Body copy" />
          <ColorSwatch color="#8b95a1" name="Text Muted" hex="#8b95a1" role="Captions" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          <ColorSwatch color="rgba(255, 255, 255, 0.75)" name="Surface" hex="rgba(255,255,255,0.75)" role="Card backgrounds" />
          <ColorSwatch color="rgba(255, 255, 255, 0.85)" name="Elevated" hex="rgba(255,255,255,0.85)" role="Modals" />
          <ColorSwatch color="rgba(255, 255, 255, 0.5)" name="Border Subtle" hex="rgba(255,255,255,0.5)" role="Dividers" />
          <ColorSwatch color="rgba(255, 255, 255, 0.8)" name="Border" hex="rgba(255,255,255,0.8)" role="Card edges" />
        </div>
      </Section>

      {/* Typography Section */}
      <Section id="typography" title="Typography" subtitle="Light weights for calm, bold for confidence.">
        <GlassPanel>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', color: tokens.colors.textMuted, marginBottom: '6px' }}>Font Family</div>
            <div style={{ fontSize: '20px', fontWeight: '500', color: tokens.colors.textPrimary }}>Segoe UI Variable, SF Pro Display</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 70px 70px 1fr', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: tokens.colors.textMuted, padding: '10px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <div>Style</div><div>Size</div><div>Weight</div><div>Sample</div>
          </div>
          <TypographyRow name="Display" size="72px" weight="200" sample="$47,832" tracking="-0.03em" />
          <TypographyRow name="Headline 1" size="40px" weight="700" sample="Your Money, Elevated" tracking="-0.02em" />
          <TypographyRow name="Headline 2" size="32px" weight="600" sample="Everything you need" tracking="-0.02em" />
          <TypographyRow name="Headline 3" size="24px" weight="600" sample="Virtual & Physical Cards" tracking="-0.01em" />
          <TypographyRow name="Body Large" size="17px" weight="400" sample="Send money anywhere in seconds." />
          <TypographyRow name="Body" size="15px" weight="400" sample="AI-powered spending insights." />
          <TypographyRow name="Caption" size="13px" weight="500" sample="Last updated 2 hours ago" />
          <TypographyRow name="Overline" size="11px" weight="600" sample="CARD HOLDER" tracking="0.1em" />
        </GlassPanel>
      </Section>

      {/* Elevation Section */}
      <Section id="elevation" title="Elevation" subtitle="Higher layers: more blur, more opacity, deeper shadow." dark>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', marginBottom: '48px', padding: '40px', background: `radial-gradient(ellipse at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)`, borderRadius: tokens.radius.xxl }}>
          <ElevationLayer level={0} blur="none" opacity={0.5} description="Base" />
          <ElevationLayer level={1} blur="blur(12px)" opacity={0.65} description="Cards" />
          <ElevationLayer level={2} blur="blur(20px)" opacity={0.75} description="Panels" />
          <ElevationLayer level={3} blur="blur(40px)" opacity={0.85} description="Modals" />
          <ElevationLayer level={4} blur="blur(60px)" opacity={0.95} description="Critical" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {[
            { name: 'Subtle', value: '0 4px 16px rgba(0,0,0,0.04)', use: 'Resting' },
            { name: 'Medium', value: '0 8px 32px rgba(0,0,0,0.08)', use: 'Hover' },
            { name: 'Elevated', value: '0 16px 48px rgba(0,0,0,0.12)', use: 'Focus' },
            { name: 'Glow', value: '0 4px 20px rgba(0,120,212,0.35)', use: 'Primary' }
          ].map((shadow) => (
            <div key={shadow.name}>
              <div style={{ height: '70px', background: 'white', borderRadius: tokens.radius.md, boxShadow: shadow.value, marginBottom: '10px' }} />
              <div style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textPrimary }}>{shadow.name}</div>
              <div style={{ fontSize: '10px', color: tokens.colors.textMuted, marginTop: '2px' }}>{shadow.use}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Motion Section */}
      <Section id="motion" title="Motion" subtitle="Reactive, direct, context appropriate.">
        <GlassPanel style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <MotionDemo name="Standard" curve="ease" duration="200" />
            <MotionDemo name="Smooth" curve="cubic-bezier(0.4, 0, 0.2, 1)" duration="300" />
            <MotionDemo name="Bounce" curve="cubic-bezier(0.34, 1.56, 0.64, 1)" duration="400" />
          </div>
        </GlassPanel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <GlassPanel style={{ padding: '24px' }}><h4 style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary, marginBottom: '12px' }}>Hover Feedback</h4><div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>translateY(-2px) + shadow increase</div></GlassPanel>
          <GlassPanel style={{ padding: '24px' }}><h4 style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary, marginBottom: '12px' }}>Press Feedback</h4><div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>scale(0.98) + darker background</div></GlassPanel>
          <GlassPanel style={{ padding: '24px' }}><h4 style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary, marginBottom: '12px' }}>3D Card Effects</h4><div style={{ fontSize: '13px', color: tokens.colors.textSecondary }}>Lift + Tilt + Shine sweep</div></GlassPanel>
        </div>
      </Section>

      {/* Components Section */}
      <Section id="components" title="Components" subtitle="Living examples. Hover to interact." dark>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <InteractiveCardDemo />
          <div style={{ flex: 1 }}>
            <GlassPanel style={{ padding: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '16px' }}>Hero Card Features</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px', color: tokens.colors.textSecondary }}>
                <div>• 3D perspective transform</div>
                <div>• Animated shine sweep</div>
                <div>• Dynamic shadow depth</div>
                <div>• Glass background blur</div>
                <div>• Gold chip with inset shadow</div>
                <div>• Network logo composition</div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </Section>

      {/* Button System Section */}
      <Section id="buttons" title="Button System" subtitle="Solid fills for primary actions — clarity over aesthetics when it's time to act.">
        <GlassPanel><ButtonShowcase /></GlassPanel>
      </Section>

      {/* Icon System Section */}
      <Section id="icons" title="Icon System" subtitle="Monoline, minimal, harmonious. 2px stroke, geometric forms." dark>
        <GlassPanel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            <IconShowcase icon={Icons.Card} name="Card" />
            <IconShowcase icon={Icons.Crypto} name="Crypto" />
            <IconShowcase icon={Icons.Globe} name="Globe" />
            <IconShowcase icon={Icons.Shield} name="Shield" />
            <IconShowcase icon={Icons.Lightning} name="Lightning" />
            <IconShowcase icon={Icons.Layers} name="Layers" />
          </div>
        </GlassPanel>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '64px 48px', maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(0, 0, 0, 0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '6px' }}>vault<span style={{ color: tokens.colors.textPrimary }}>.</span></div>
            <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Design Language v1.0</div>
          </div>
          <div style={{ fontSize: '12px', color: tokens.colors.textMuted, textAlign: 'right' }}>A UX Case Study</div>
        </div>
      </footer>
    </div>
  );
};

export default DesignLanguageShowcase;