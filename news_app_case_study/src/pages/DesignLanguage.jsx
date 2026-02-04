import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// THE PENGUIN PRESS DESIGN LANGUAGE SHOWCASE
// ============================================================================
// "Editorial Density" - Information-rich, typographically driven design
// Inspired by Bloomberg's data-forward journalism aesthetic
// ============================================================================

// Design Tokens
const tokens = {
  colors: {
    // Primary Forest Green Palette
    forestDark: '#1a2f23',
    forestMid: '#243d2e',
    forestLight: '#2d4a3a',
    forestAccent: '#2d8a4e',
    
    // Warm Amber Accents
    amber: '#d4a029',
    amberLight: '#e8b84a',
    amberMuted: '#b8923d',
    
    // Neutrals
    white: '#ffffff',
    offWhite: '#f7f7f7',
    grayLight: '#e0e0e0',
    grayMid: '#888888',
    grayDark: '#666666',
    textPrimary: '#000000',
    textSecondary: '#444444',
    textMuted: '#888888',
    
    // Semantic
    negative: '#c62828',
    negativeLight: '#ffcdd2',
    positive: '#2e7d32',
    positiveLight: '#c8e6c9',
  },
  fonts: {
    serif: "Georgia, 'Times New Roman', serif",
    sans: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  radius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
  },
  shadow: {
    subtle: '0 1px 3px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
    elevated: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
  motion: {
    fast: '0.15s ease',
    standard: '0.2s ease',
    smooth: '0.3s ease-in-out',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  }
};

// Section Component
const Section = ({ id, title, subtitle, children, alternate = false }) => (
  <section id={id} style={{
    padding: '100px 48px',
    background: alternate ? tokens.colors.offWhite : tokens.colors.white,
    borderBottom: `1px solid ${tokens.colors.grayLight}`,
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          fontFamily: tokens.fonts.sans,
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: tokens.colors.forestAccent,
          marginBottom: '12px',
        }}>{title}</div>
        {subtitle && (
          <p style={{
            fontFamily: tokens.fonts.serif,
            fontSize: '28px',
            fontWeight: '400',
            color: tokens.colors.textPrimary,
            letterSpacing: '-0.5px',
            lineHeight: 1.3,
            maxWidth: '650px',
          }}>{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

// Panel Component
const Panel = ({ children, style = {} }) => (
  <div style={{
    background: tokens.colors.white,
    border: `1px solid ${tokens.colors.grayLight}`,
    borderRadius: tokens.radius.sm,
    padding: '24px',
    ...style
  }}>
    {children}
  </div>
);

// Dark Panel Component
const DarkPanel = ({ children, style = {} }) => (
  <div style={{
    background: tokens.colors.forestDark,
    border: `1px solid ${tokens.colors.forestLight}`,
    borderRadius: tokens.radius.sm,
    padding: '24px',
    ...style
  }}>
    {children}
  </div>
);

// Color Swatch Component
const ColorSwatch = ({ color, name, hex, role, isDark = false }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{
      width: '100%',
      height: '80px',
      background: color,
      borderRadius: tokens.radius.sm,
      border: `1px solid ${tokens.colors.grayLight}`,
    }} />
    <div>
      <div style={{ 
        fontSize: '13px', 
        fontWeight: '600', 
        color: isDark ? tokens.colors.white : tokens.colors.textPrimary 
      }}>{name}</div>
      <div style={{ 
        fontSize: '11px', 
        fontFamily: 'monospace', 
        color: isDark ? tokens.colors.grayMid : tokens.colors.textMuted 
      }}>{hex}</div>
      <div style={{ 
        fontSize: '11px', 
        color: isDark ? tokens.colors.grayMid : tokens.colors.textMuted, 
        marginTop: '2px' 
      }}>{role}</div>
    </div>
  </div>
);

// Typography Row Component
const TypographyRow = ({ name, size, weight, family, sample, tracking = 'normal' }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '140px 80px 80px 100px 1fr',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: `1px solid ${tokens.colors.grayLight}`,
  }}>
    <div style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textPrimary }}>{name}</div>
    <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{size}</div>
    <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{weight}</div>
    <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{family}</div>
    <div style={{ 
      fontSize: size, 
      fontWeight: weight, 
      fontFamily: family === 'Serif' ? tokens.fonts.serif : tokens.fonts.sans,
      letterSpacing: tracking,
      color: tokens.colors.textPrimary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}>{sample}</div>
  </div>
);

// Market Pill Demo
const MarketPillDemo = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  const pills = [
    { name: 'S&P 500', value: '6,940.64', change: -0.55, down: true },
    { name: 'Nasdaq', value: '23,529.04', change: -1.38, down: true },
    { name: 'Crude Oil', value: '65.31', change: 3.32, down: false },
  ];
  
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {pills.map(function(pill, idx) {
        const isHovered = hoveredIdx === idx;
        return (
          <div 
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              background: isHovered 
                ? (pill.down ? '#ffebee' : '#e8f5e9') 
                : (pill.down ? tokens.colors.negativeLight : tokens.colors.positiveLight),
              borderRadius: tokens.radius.sm,
              cursor: 'pointer',
              transition: `all ${tokens.motion.fast}`,
              transform: isHovered ? 'translateY(-2px)' : 'none',
              boxShadow: isHovered ? tokens.shadow.medium : 'none',
            }}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <span style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.textPrimary }}>{pill.name}</span>
            <span style={{ fontSize: '12px', color: tokens.colors.grayDark }}>{pill.value}</span>
            <span style={{ 
              fontSize: '12px', 
              fontWeight: '700',
              color: pill.down ? tokens.colors.negative : tokens.colors.positive 
            }}>
              {pill.down ? '▼' : '▲'}{Math.abs(pill.change).toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Button Showcase Component
const ButtonShowcase = () => {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [outlineHover, setOutlineHover] = useState(false);
  const [ghostHover, setGhostHover] = useState(false);
  
  return (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '600',
            color: tokens.colors.white,
            background: primaryHover ? tokens.colors.forestMid : tokens.colors.forestDark,
            border: 'none',
            borderRadius: tokens.radius.xs,
            cursor: 'pointer',
            transition: `all ${tokens.motion.fast}`,
          }}
          onMouseEnter={() => setPrimaryHover(true)}
          onMouseLeave={() => setPrimaryHover(false)}
        >
          Subscribe today →
        </button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Primary CTA</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '500',
            color: tokens.colors.textPrimary,
            background: outlineHover ? tokens.colors.offWhite : tokens.colors.white,
            border: `1px solid ${tokens.colors.grayLight}`,
            borderRadius: tokens.radius.xs,
            cursor: 'pointer',
            transition: `all ${tokens.motion.fast}`,
          }}
          onMouseEnter={() => setOutlineHover(true)}
          onMouseLeave={() => setOutlineHover(false)}
        >
          Follow
        </button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Secondary</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '500',
            color: ghostHover ? tokens.colors.textPrimary : tokens.colors.grayDark,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: `all ${tokens.motion.fast}`,
            textDecoration: ghostHover ? 'underline' : 'none',
          }}
          onMouseEnter={() => setGhostHover(true)}
          onMouseLeave={() => setGhostHover(false)}
        >
          See all latest →
        </button>
        <span style={{ fontSize: '11px', color: tokens.colors.textMuted }}>Text Link</span>
      </div>
    </div>
  );
};

// Grid Demo Component
const GridDemo = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 420px 280px',
    gap: '1px',
    background: tokens.colors.grayLight,
    border: `1px solid ${tokens.colors.grayLight}`,
    borderRadius: tokens.radius.sm,
    overflow: 'hidden',
  }}>
    <div style={{ background: tokens.colors.white, padding: '24px' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', color: tokens.colors.forestAccent, marginBottom: '8px' }}>PRIMARY CONTENT</div>
      <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Main stories, featured articles with images</div>
    </div>
    <div style={{ background: tokens.colors.white, padding: '24px' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', color: tokens.colors.forestAccent, marginBottom: '8px' }}>DATA VISUALIZATION</div>
      <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Charts, graphs, market data</div>
    </div>
    <div style={{ background: tokens.colors.white, padding: '24px' }}>
      <div style={{ fontSize: '11px', fontWeight: '600', color: tokens.colors.forestAccent, marginBottom: '8px' }}>FEED / SIDEBAR</div>
      <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>Latest news, timestamps</div>
    </div>
  </div>
);

// Bar Chart Demo
const BarChartDemo = () => (
  <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '160px',
    padding: '20px',
    background: tokens.colors.white,
    border: `1px solid ${tokens.colors.grayLight}`,
    borderRadius: tokens.radius.sm,
  }}>
    {[
      { label: 'NVDA', height: 55, highlighted: false },
      { label: 'MSFT', height: 85, highlighted: true },
      { label: 'AAPL', height: 50, highlighted: false },
      { label: 'NVDA', height: 48, highlighted: false },
      { label: 'NVDA', height: 42, highlighted: false },
    ].map(function(bar, idx) {
      return (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '40px',
            height: bar.height + '%',
            background: bar.highlighted ? tokens.colors.forestAccent : tokens.colors.forestDark,
            borderRadius: '2px 2px 0 0',
          }} />
          <span style={{ fontSize: '10px', fontWeight: '500', color: tokens.colors.textMuted }}>{bar.label}</span>
        </div>
      );
    })}
  </div>
);

// News Item Demo
const NewsItemDemo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '12px', 
        padding: '12px 0',
        borderBottom: `1px solid ${tokens.colors.grayLight}`,
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ 
        fontSize: '12px', 
        color: tokens.colors.amber, 
        fontWeight: '600',
        minWidth: '50px',
      }}>
        4 min
      </span>
      <p style={{ 
        fontSize: '14px', 
        fontWeight: '500', 
        lineHeight: '1.4',
        color: tokens.colors.textPrimary,
        textDecoration: isHovered ? 'underline' : 'none',
        margin: 0,
      }}>
        US Spends Millions on Warehouses in Historic Expansion
      </p>
    </div>
  );
};

// Icon Components
const GameIcons = {
  Alphadots: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <circle cx="12" cy="12" r="4" fill={tokens.colors.forestAccent} />
      <circle cx="28" cy="12" r="4" fill={tokens.colors.forestDark} />
      <circle cx="12" cy="28" r="4" fill={tokens.colors.forestDark} />
      <circle cx="28" cy="28" r="4" fill={tokens.colors.forestAccent} />
      <circle cx="20" cy="20" r="5" fill={tokens.colors.amber} />
      <path d="M12 12L20 20M28 12L20 20M12 28L20 20M28 28L20 20" stroke={tokens.colors.forestDark} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  Pointed: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke={tokens.colors.forestDark} strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="9" stroke={tokens.colors.forestAccent} strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="5" fill={tokens.colors.amber} />
      <path d="M20 6V12M20 28V34M6 20H12M28 20H34" stroke={tokens.colors.forestDark} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

// Social Icon Demo
const SocialIconDemo = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    {['FB', 'X', 'in', '✉', '🔗'].map(function(icon, idx) {
      return (
        <div key={idx} style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: `1px solid ${tokens.colors.grayLight}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: tokens.colors.grayDark,
          cursor: 'pointer',
        }}>
          {icon}
        </div>
      );
    })}
  </div>
);

// Main Design Language Component
const PenguinPressDesignLanguage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: tokens.colors.white,
      fontFamily: tokens.fonts.sans,
      color: tokens.colors.textPrimary,
    }}>
      {/* Back Button */}
      <Link to="/" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 16px',
        background: tokens.colors.forestDark,
        color: tokens.colors.white,
        border: 'none',
        borderRadius: '4px',
        fontSize: '13px',
        fontWeight: '600',
        textDecoration: 'none',
        boxShadow: tokens.shadow.medium,
      }}>
        ← Back to Case Study
      </Link>
      
      {/* Hero Header */}
      <header style={{
        background: tokens.colors.forestDark,
        padding: '80px 48px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${tokens.colors.forestLight}22 1px, transparent 1px),
            linear-gradient(90deg, ${tokens.colors.forestLight}22 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontFamily: tokens.fonts.serif,
            fontSize: '48px',
            color: tokens.colors.white,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}>
            The Penguin Press
          </div>
          <div style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: tokens.colors.amber,
            marginBottom: '40px',
          }}>
            Design Language v1.0
          </div>
          
          <div style={{
            maxWidth: '700px',
            fontSize: '20px',
            lineHeight: 1.6,
            color: tokens.colors.white,
            opacity: 0.9,
          }}>
            An editorial design system built for information density, typographic hierarchy, 
            and data-forward journalism. Inspired by the structured clarity of financial news 
            with a distinctive forest green and amber palette.
          </div>
          
          {/* Quick nav */}
          <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}>
            {['Philosophy', 'Color', 'Typography', 'Layout', 'Components', 'Motion'].map(function(item) {
              return (
                <a 
                  key={item}
                  href={'#' + item.toLowerCase()}
                  style={{
                    fontSize: '13px',
                    color: tokens.colors.white,
                    textDecoration: 'none',
                    opacity: 0.7,
                    transition: `opacity ${tokens.motion.fast}`,
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <Section 
        id="philosophy" 
        title="Design Philosophy" 
        subtitle="Editorial Density — where every pixel serves information."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Panel>
            <div style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: tokens.colors.forestAccent,
              marginBottom: '16px',
            }}>01</div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: tokens.colors.textPrimary,
            }}>Information First</h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: 1.6, 
              color: tokens.colors.textSecondary,
            }}>
              Every design decision prioritizes content legibility and data accessibility. 
              Dense layouts are structured, not chaotic. White space is functional, not decorative.
            </p>
          </Panel>
          
          <Panel>
            <div style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: tokens.colors.forestAccent,
              marginBottom: '16px',
            }}>02</div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: tokens.colors.textPrimary,
            }}>Hierarchy Through Type</h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: 1.6, 
              color: tokens.colors.textSecondary,
            }}>
              Typography does the heavy lifting. Size, weight, and color create clear paths 
              through complex information without relying on heavy visual treatments.
            </p>
          </Panel>
          
          <Panel>
            <div style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: tokens.colors.forestAccent,
              marginBottom: '16px',
            }}>03</div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: tokens.colors.textPrimary,
            }}>Restrained Color</h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: 1.6, 
              color: tokens.colors.textSecondary,
            }}>
              A focused palette of forest green and amber creates distinction without distraction. 
              Color signals meaning: amber for time-sensitivity, green for interaction.
            </p>
          </Panel>
        </div>
        
        <div style={{ 
          marginTop: '48px', 
          padding: '32px',
          background: tokens.colors.forestDark,
          borderRadius: tokens.radius.sm,
          color: tokens.colors.white,
        }}>
          <div style={{ 
            fontSize: '13px', 
            fontWeight: '600', 
            color: tokens.colors.amber,
            marginBottom: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Core Principle
          </div>
          <blockquote style={{
            fontSize: '24px',
            fontFamily: tokens.fonts.serif,
            lineHeight: 1.5,
            margin: 0,
            fontStyle: 'italic',
          }}>
            "Density is not clutter. A well-structured grid can present more information 
            with greater clarity than a sparse layout that forces users to hunt."
          </blockquote>
        </div>
      </Section>

      {/* Color Section */}
      <Section 
        id="color" 
        title="Color System" 
        subtitle="Forest green grounds, amber activates."
        alternate
      >
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.textPrimary }}>
            Primary Palette — Forest Green
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <ColorSwatch color={tokens.colors.forestDark} name="Forest Dark" hex="#1a2f23" role="Nav, footers, primary CTAs" />
            <ColorSwatch color={tokens.colors.forestMid} name="Forest Mid" hex="#243d2e" role="Hover states, banners" />
            <ColorSwatch color={tokens.colors.forestLight} name="Forest Light" hex="#2d4a3a" role="Borders, subtle backgrounds" />
            <ColorSwatch color={tokens.colors.forestAccent} name="Forest Accent" hex="#2d8a4e" role="Links, highlights, charts" />
          </div>
        </div>
        
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.textPrimary }}>
            Accent Palette — Warm Amber
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '600px' }}>
            <ColorSwatch color={tokens.colors.amber} name="Amber" hex="#d4a029" role="Live indicators, timestamps" />
            <ColorSwatch color={tokens.colors.amberLight} name="Amber Light" hex="#e8b84a" role="Hover accents" />
            <ColorSwatch color={tokens.colors.amberMuted} name="Amber Muted" hex="#b8923d" role="Secondary accents" />
          </div>
        </div>
        
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.textPrimary }}>
            Semantic Colors — Market Data
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '800px' }}>
            <ColorSwatch color={tokens.colors.negative} name="Negative" hex="#c62828" role="Down/loss indicators" />
            <ColorSwatch color={tokens.colors.negativeLight} name="Negative Light" hex="#ffcdd2" role="Negative pill backgrounds" />
            <ColorSwatch color={tokens.colors.positive} name="Positive" hex="#2e7d32" role="Up/gain indicators" />
            <ColorSwatch color={tokens.colors.positiveLight} name="Positive Light" hex="#c8e6c9" role="Positive pill backgrounds" />
          </div>
        </div>
        
        <Panel>
          <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
            Color in Action — Market Pills
          </h4>
          <MarketPillDemo />
        </Panel>
      </Section>

      {/* Typography Section */}
      <Section 
        id="typography" 
        title="Typography" 
        subtitle="Two families. Infinite hierarchy."
      >
        <Panel style={{ marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '600', color: tokens.colors.forestAccent, marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Display & Headlines
              </div>
              <div style={{ fontFamily: tokens.fonts.serif, fontSize: '36px', color: tokens.colors.textPrimary, marginBottom: '8px' }}>
                Georgia
              </div>
              <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>
                Serif warmth for the masthead and article headlines. Conveys editorial authority and timelessness.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '600', color: tokens.colors.forestAccent, marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                UI & Body
              </div>
              <div style={{ fontFamily: tokens.fonts.sans, fontSize: '36px', fontWeight: '300', color: tokens.colors.textPrimary, marginBottom: '8px' }}>
                Helvetica Neue
              </div>
              <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>
                Clean sans-serif for navigation, data, and body copy. Optimized for dense information display.
              </div>
            </div>
          </div>
        </Panel>
        
        <Panel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '140px 80px 80px 100px 1fr',
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: tokens.colors.textMuted,
            padding: '12px 0',
            borderBottom: `2px solid ${tokens.colors.forestDark}`,
          }}>
            <div>Style</div>
            <div>Size</div>
            <div>Weight</div>
            <div>Family</div>
            <div>Sample</div>
          </div>
          <TypographyRow name="Masthead" size="36px" weight="400" family="Serif" sample="The Penguin Press" tracking="-1px" />
          <TypographyRow name="Article Headline" size="42px" weight="700" family="Sans" sample="Markets in Turmoil" tracking="-1px" />
          <TypographyRow name="Section Headline" size="28px" weight="600" family="Sans" sample="Microsoft Valuation" tracking="-0.5px" />
          <TypographyRow name="Card Title" size="18px" weight="600" family="Sans" sample="Trump, Democrats Close" />
          <TypographyRow name="Body Large" size="18px" weight="400" family="Sans" sample="The moral calculus here troubles me." />
          <TypographyRow name="Body" size="14px" weight="400" family="Sans" sample="US Spends Millions on Warehouses" />
          <TypographyRow name="Caption" size="13px" weight="500" family="Sans" sample="By Issa Mohamed, Columnist" />
          <TypographyRow name="Timestamp" size="12px" weight="600" family="Sans" sample="4 min" />
          <TypographyRow name="Overline" size="11px" weight="700" family="Sans" sample="EXCLUSIVE" tracking="0.15em" />
        </Panel>
      </Section>

      {/* Layout Section */}
      <Section 
        id="layout" 
        title="Layout System" 
        subtitle="Grids that organize complexity."
        alternate
      >
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.textPrimary }}>
            Primary 3-Column Grid
          </h4>
          <GridDemo />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
              Vertical Rhythm
            </h4>
            <div style={{ fontSize: '14px', lineHeight: 1.7, color: tokens.colors.textSecondary }}>
              Consistent spacing tokens (8px base) create visual rhythm. Section padding at 100px, 
              content gaps at 24px, inline spacing at 12px. Borders at 1px provide subtle separation 
              without visual weight.
            </div>
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
              Information Density
            </h4>
            <div style={{ fontSize: '14px', lineHeight: 1.7, color: tokens.colors.textSecondary }}>
              Unlike minimal interfaces, editorial design embraces density. Multiple columns, 
              stacked headlines, inline metadata — all structured by consistent grid and type rules 
              that prevent chaos.
            </div>
          </Panel>
        </div>
      </Section>

      {/* Components Section */}
      <Section 
        id="components" 
        title="Components" 
        subtitle="Building blocks of the editorial experience."
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.forestAccent }}>
              Bar Charts
            </h4>
            <BarChartDemo />
            <div style={{ fontSize: '12px', color: tokens.colors.textMuted, marginTop: '12px' }}>
              Highlighted bar uses accent green. Labels below, values on right axis.
            </div>
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.forestAccent }}>
              News Feed Items
            </h4>
            <NewsItemDemo />
            <NewsItemDemo />
            <NewsItemDemo />
            <div style={{ fontSize: '12px', color: tokens.colors.textMuted, marginTop: '12px' }}>
              Amber timestamps, underline on hover, border separation.
            </div>
          </Panel>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
              Buttons
            </h4>
            <ButtonShowcase />
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
              Social Share Icons
            </h4>
            <SocialIconDemo />
            <div style={{ fontSize: '12px', color: tokens.colors.textMuted, marginTop: '12px' }}>
              Circular, outlined, minimal. Grouped horizontally.
            </div>
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
              Game Icons
            </h4>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <GameIcons.Alphadots />
                <div style={{ fontSize: '11px', color: tokens.colors.textMuted, marginTop: '8px' }}>Alphadots</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <GameIcons.Pointed />
                <div style={{ fontSize: '11px', color: tokens.colors.textMuted, marginTop: '8px' }}>Pointed</div>
              </div>
            </div>
          </Panel>
        </div>
        
        <DarkPanel>
          <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '20px', color: tokens.colors.amber }}>
            Navigation Bar (Dark Context)
          </h4>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            <span style={{ fontFamily: tokens.fonts.serif, fontSize: '24px', color: tokens.colors.white }}>
              The Penguin Press
            </span>
            <span style={{ fontSize: '14px', color: tokens.colors.amber }}>● Live TV</span>
            <span style={{ fontSize: '14px', color: tokens.colors.grayMid }}>Markets</span>
            <span style={{ fontSize: '14px', color: tokens.colors.grayMid }}>Economics</span>
            <span style={{ fontSize: '14px', color: tokens.colors.grayMid }}>Tech</span>
            <span style={{ fontSize: '14px', color: tokens.colors.grayMid }}>Politics</span>
          </div>
        </DarkPanel>
      </Section>

      {/* Motion Section */}
      <Section 
        id="motion" 
        title="Motion & Interaction" 
        subtitle="Subtle, purposeful, never decorative."
        alternate
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Panel>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: tokens.colors.textPrimary }}>
              Hover Feedback
            </h4>
            <div style={{ 
              padding: '16px', 
              background: tokens.colors.offWhite, 
              borderRadius: tokens.radius.sm,
              marginBottom: '12px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: tokens.colors.textSecondary,
            }}>
              text-decoration: underline;<br/>
              transition: 0.15s ease;
            </div>
            <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>
              Headlines underline on hover. Simple, expected, fast.
            </div>
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: tokens.colors.textPrimary }}>
              Pill Lift
            </h4>
            <div style={{ 
              padding: '16px', 
              background: tokens.colors.offWhite, 
              borderRadius: tokens.radius.sm,
              marginBottom: '12px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: tokens.colors.textSecondary,
            }}>
              transform: translateY(-2px);<br/>
              box-shadow: medium;
            </div>
            <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>
              Market pills lift slightly with added shadow on hover.
            </div>
          </Panel>
          
          <Panel>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: tokens.colors.textPrimary }}>
              Collapse Animation
            </h4>
            <div style={{ 
              padding: '16px', 
              background: tokens.colors.offWhite, 
              borderRadius: tokens.radius.sm,
              marginBottom: '12px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: tokens.colors.textSecondary,
            }}>
              max-height: 0 → 1000px;<br/>
              opacity: 0 → 1;<br/>
              transition: 0.4s ease-in-out;
            </div>
            <div style={{ fontSize: '13px', color: tokens.colors.textMuted }}>
              Collapsible sections animate height and fade content.
            </div>
          </Panel>
        </div>
        
        <Panel style={{ marginTop: '32px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '16px', color: tokens.colors.forestAccent }}>
            Timing Tokens
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary }}>Fast</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>150ms ease</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textSecondary, marginTop: '4px' }}>Hovers, color changes</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary }}>Standard</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>200ms ease</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textSecondary, marginTop: '4px' }}>Button states, transforms</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textPrimary }}>Smooth</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>300ms ease-in-out</div>
              <div style={{ fontSize: '12px', color: tokens.colors.textSecondary, marginTop: '4px' }}>Expand/collapse, complex transitions</div>
            </div>
          </div>
        </Panel>
      </Section>

      {/* Footer */}
      <footer style={{
        background: tokens.colors.forestDark,
        padding: '64px 48px',
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ 
              fontFamily: tokens.fonts.serif, 
              fontSize: '24px', 
              color: tokens.colors.white,
              marginBottom: '8px',
            }}>
              The Penguin Press
            </div>
            <div style={{ fontSize: '13px', color: tokens.colors.grayMid }}>
              Design Language v1.0 — Editorial Density
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', color: tokens.colors.amber, marginBottom: '4px' }}>
              A UX Case Study
            </div>
            <div style={{ fontSize: '12px', color: tokens.colors.grayMid }}>
              by Issa Mohamed
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PenguinPressDesignLanguage;