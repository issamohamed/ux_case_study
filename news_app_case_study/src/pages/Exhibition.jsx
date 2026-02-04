import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ============================================================================
// THE PENGUIN PRESS — CASE STUDY HOME
// ============================================================================
// A UX Case Study by Issa Mohamed
// Editorial Design System inspired by Bloomberg
// ============================================================================

const PenguinPressCaseStudy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const caseStudyPages = [
    {
      id: 'landing',
      title: 'Landing Page',
      subtitle: 'The Homepage Experience',
      description: 'A dense, information-rich news homepage featuring live TV banners, market tickers, multi-column layouts, opinion sections, and interactive data visualizations.',
      link: '/landing',
      component: 'penguin-press.jsx',
      features: ['Market Data Tickers', '3-Column Grid Layout', 'Live TV Banner', 'Collapsible Sections', 'Bar Chart Visualization'],
      color: tokens.colors.forestDark,
    },
    {
      id: 'article',
      title: 'Article Page',
      subtitle: 'Long-form Reading',
      description: 'A focused article reading experience with proper typographic hierarchy, pull quotes, social sharing, author attribution, and related content.',
      link: '/article',
      component: 'penguin-press-article.jsx',
      features: ['Topic Breadcrumbs', 'Social Share Buttons', 'Pull Quotes', 'Author Bylines', 'Related Articles'],
      color: tokens.colors.forestAccent,
    },
    {
      id: 'design-language',
      title: 'Design Language',
      subtitle: 'System Documentation',
      description: 'Complete documentation of the Editorial Density design philosophy including color tokens, typography scales, layout grids, components, and motion specifications.',
      link: '/design-language',
      component: 'penguin-press-design-language.jsx',
      features: ['Color System', 'Typography Scale', 'Component Library', 'Motion Tokens', 'Layout Principles'],
      color: tokens.colors.amber,
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: tokens.colors.white,
      fontFamily: tokens.fonts.sans,
    }}>
      
      {/* Hero Section */}
      <header style={{
        background: tokens.colors.forestDark,
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${tokens.colors.forestLight}15 1px, transparent 1px),
            linear-gradient(90deg, ${tokens.colors.forestLight}15 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
        
        {/* Top bar */}
        <div style={{
          padding: '16px 48px',
          borderBottom: `1px solid ${tokens.colors.forestLight}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}>
          <div style={{
            fontSize: '12px',
            color: tokens.colors.amber,
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            UX Case Study
          </div>
          <div style={{
            fontSize: '12px',
            color: tokens.colors.grayMid,
          }}>
            by Issa Mohamed
          </div>
        </div>

        {/* Main hero content */}
        <div style={{
          padding: '100px 48px 120px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '60px',
            right: '0',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, ${tokens.colors.forestAccent}15 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />
          
          <div style={{
            fontSize: '14px',
            color: tokens.colors.amber,
            fontWeight: '500',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{
              width: '40px',
              height: '1px',
              background: tokens.colors.amber,
            }} />
            Editorial News Platform
          </div>
          
          <h1 style={{
            fontFamily: tokens.fonts.serif,
            fontSize: '72px',
            fontWeight: '400',
            color: tokens.colors.white,
            letterSpacing: '-2px',
            lineHeight: 1.1,
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            The Penguin Press
          </h1>
          
          <p style={{
            fontSize: '20px',
            lineHeight: 1.7,
            color: tokens.colors.white,
            opacity: 0.85,
            maxWidth: '600px',
            marginBottom: '48px',
          }}>
            A comprehensive UX case study exploring editorial design of various digests 
            and outlets. Inspired by data-forward journalism like Bloomberg and the Star 
            Tribune, reimagined with a different color palette.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '48px',
          }}>
            <Stat value="3" label="Pages Designed" />
            <Stat value="11" label="Color Tokens" />
            <Stat value="9" label="Type Styles" />
            <Stat value="∞" label="Information Density" />
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div style={{
          height: '4px',
          background: `linear-gradient(90deg, ${tokens.colors.amber} 0%, ${tokens.colors.forestAccent} 50%, ${tokens.colors.amber} 100%)`,
        }} />
      </header>

      {/* Philosophy Section */}
      <section style={{
        padding: '80px 48px',
        background: tokens.colors.offWhite,
        borderBottom: `1px solid ${tokens.colors.grayLight}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: tokens.colors.forestAccent,
                marginBottom: '16px',
              }}>
                Design Philosophy
              </div>
              <h2 style={{
                fontFamily: tokens.fonts.serif,
                fontSize: '36px',
                fontWeight: '400',
                color: tokens.colors.textPrimary,
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                marginBottom: '24px',
              }}>
                Editorial Density
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: tokens.colors.textSecondary,
                marginBottom: '24px',
              }}>
                Unlike minimal interfaces that prioritize whitespace, editorial design embraces 
                information density. The challenge is structure, not reduction — organizing 
                complex data through typography, grid systems, and restrained color so that 
                more content creates clarity, not chaos.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: tokens.colors.textSecondary,
              }}>
                This case study demonstrates how Bloomberg's approach to financial journalism 
                can be adapted into a cohesive design system with distinctive character.
              </p>
            </div>
            
            <div style={{
              background: tokens.colors.forestDark,
              borderRadius: '8px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Mini preview mockup */}
              <div style={{
                background: tokens.colors.forestMid,
                borderRadius: '4px',
                padding: '16px',
                marginBottom: '16px',
              }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ width: '60px', height: '8px', background: tokens.colors.white, borderRadius: '2px', opacity: 0.9 }} />
                  <div style={{ flex: 1 }} />
                  <div style={{ width: '40px', height: '8px', background: tokens.colors.amber, borderRadius: '2px', opacity: 0.7 }} />
                </div>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ 
                      padding: '4px 8px', 
                      background: i % 2 === 0 ? tokens.colors.positiveLight : tokens.colors.negativeLight, 
                      borderRadius: '2px',
                      fontSize: '8px',
                    }} />
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.7fr', gap: '8px' }}>
                  <div style={{ background: tokens.colors.forestLight, height: '60px', borderRadius: '2px' }} />
                  <div style={{ background: tokens.colors.forestLight, height: '60px', borderRadius: '2px' }} />
                  <div style={{ background: tokens.colors.forestLight, height: '60px', borderRadius: '2px' }} />
                </div>
              </div>
              <div style={{
                fontSize: '11px',
                color: tokens.colors.grayMid,
                textAlign: 'center',
              }}>
                Information-dense layout structure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pages Section */}
      <section style={{
        padding: '100px 48px',
        background: tokens.colors.white,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.forestAccent,
              marginBottom: '16px',
            }}>
              Explore the Case Study
            </div>
            <h2 style={{
              fontFamily: tokens.fonts.serif,
              fontSize: '36px',
              fontWeight: '400',
              color: tokens.colors.textPrimary,
              letterSpacing: '-0.5px',
            }}>
              Three Pages, One System
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {caseStudyPages.map(function(page, idx) {
              const isHovered = hoveredCard === page.id;
              return (
                <div
                  key={page.id}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredCard(page.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => navigate(page.link)}
                >
                  <div style={{
                    background: tokens.colors.white,
                    border: `1px solid ${isHovered ? page.color : tokens.colors.grayLight}`,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: `all ${tokens.motion.standard}`,
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: isHovered ? tokens.shadow.elevated : tokens.shadow.subtle,
                  }}>
                    {/* Card header */}
                    <div style={{
                      background: page.color,
                      padding: '32px 24px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {/* Number badge */}
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700',
                        color: tokens.colors.white,
                      }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      <div style={{
                        fontSize: '12px',
                        color: tokens.colors.white,
                        opacity: 0.8,
                        marginBottom: '8px',
                        fontWeight: '500',
                      }}>
                        {page.subtitle}
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: tokens.colors.white,
                        margin: 0,
                      }}>
                        {page.title}
                      </h3>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: '24px' }}>
                      <p style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: tokens.colors.textSecondary,
                        marginBottom: '20px',
                      }}>
                        {page.description}
                      </p>

                      {/* Features list */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '24px',
                      }}>
                        {page.features.map(function(feature, fidx) {
                          return (
                            <span
                              key={fidx}
                              style={{
                                fontSize: '11px',
                                padding: '4px 10px',
                                background: tokens.colors.offWhite,
                                borderRadius: '4px',
                                color: tokens.colors.textMuted,
                              }}
                            >
                              {feature}
                            </span>
                          );
                        })}
                      </div>

                      {/* View link */}
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: page.color,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        View Page
                        <span style={{
                          transition: `transform ${tokens.motion.fast}`,
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        }}>
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Highlights Section */}
      <section style={{
        padding: '80px 48px',
        background: tokens.colors.forestDark,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.amber,
              marginBottom: '16px',
            }}>
              Key Design Decisions
            </div>
            <h2 style={{
              fontFamily: tokens.fonts.serif,
              fontSize: '32px',
              fontWeight: '400',
              color: tokens.colors.white,
              letterSpacing: '-0.5px',
            }}>
              What Makes It Work
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}>
            <HighlightCard
              icon={<ColorIcon />}
              title="Forest & Amber"
              description="A departure from Bloomberg's black/red. Forest green feels editorial and grounded; amber signals urgency without alarm."
            />
            <HighlightCard
              icon={<TypeIcon />}
              title="Dual Typography"
              description="Georgia for masthead authority, Helvetica for data clarity. Two families covering every hierarchy need."
            />
            <HighlightCard
              icon={<GridIcon />}
              title="Dense Grids"
              description="Three-column layouts that pack information without overwhelming. Structure creates calm within complexity."
            />
            <HighlightCard
              icon={<MotionIcon />}
              title="Subtle Motion"
              description="Underlines on hover, slight lifts, smooth collapses. Animation serves feedback, never decoration."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{
        padding: '64px 48px',
        background: tokens.colors.offWhite,
        borderBottom: `1px solid ${tokens.colors.grayLight}`,
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.forestAccent,
              marginBottom: '8px',
            }}>
              Built With
            </div>
            <div style={{
              fontSize: '16px',
              color: tokens.colors.textSecondary,
            }}>
              React • CSS-in-JS • Custom SVG Icons
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}>
            <TechBadge label="React" />
            <TechBadge label="JavaScript" />
            <TechBadge label="SVG" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: tokens.colors.forestDark,
        padding: '48px',
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
            <div style={{
              fontSize: '13px',
              color: tokens.colors.grayMid,
            }}>
              A UX Case Study in Editorial Design
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '14px',
              color: tokens.colors.white,
              marginBottom: '4px',
            }}>
              Designed & Built by
            </div>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              color: tokens.colors.amber,
            }}>
              Issa Mohamed
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Design Tokens
const tokens = {
  colors: {
    forestDark: '#1a2f23',
    forestMid: '#243d2e',
    forestLight: '#2d4a3a',
    forestAccent: '#2d8a4e',
    amber: '#d4a029',
    white: '#ffffff',
    offWhite: '#f7f7f7',
    grayLight: '#e0e0e0',
    grayMid: '#888888',
    textPrimary: '#000000',
    textSecondary: '#444444',
    textMuted: '#888888',
    positiveLight: '#c8e6c9',
    negativeLight: '#ffcdd2',
  },
  fonts: {
    serif: "Georgia, 'Times New Roman', serif",
    sans: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  shadow: {
    subtle: '0 2px 8px rgba(0, 0, 0, 0.06)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
    elevated: '0 12px 32px rgba(0, 0, 0, 0.15)',
  },
  motion: {
    fast: '0.15s ease',
    standard: '0.25s ease',
  },
};

// Stat Component
const Stat = ({ value, label }) => (
  <div>
    <div style={{
      fontSize: '36px',
      fontWeight: '700',
      color: tokens.colors.amber,
      marginBottom: '4px',
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '13px',
      color: tokens.colors.grayMid,
    }}>
      {label}
    </div>
  </div>
);

// Highlight Card Component
const HighlightCard = ({ icon, title, description }) => (
  <div style={{
    background: tokens.colors.forestMid,
    borderRadius: '8px',
    padding: '24px',
    border: `1px solid ${tokens.colors.forestLight}`,
  }}>
    <div style={{ marginBottom: '16px' }}>
      {icon}
    </div>
    <h4 style={{
      fontSize: '16px',
      fontWeight: '600',
      color: tokens.colors.white,
      marginBottom: '8px',
    }}>
      {title}
    </h4>
    <p style={{
      fontSize: '13px',
      lineHeight: 1.6,
      color: tokens.colors.grayMid,
      margin: 0,
    }}>
      {description}
    </p>
  </div>
);

// Tech Badge Component
const TechBadge = ({ label }) => (
  <div style={{
    padding: '8px 16px',
    background: tokens.colors.white,
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: '500',
    color: tokens.colors.textPrimary,
  }}>
    {label}
  </div>
);

// Icon Components
const ColorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="12" cy="16" r="8" fill={tokens.colors.forestAccent} />
    <circle cx="20" cy="16" r="8" fill={tokens.colors.amber} opacity="0.8" />
  </svg>
);

const TypeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <text x="4" y="24" fontFamily="Georgia" fontSize="24" fill={tokens.colors.white}>Aa</text>
  </svg>
);

const GridIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="2" fill={tokens.colors.forestAccent} />
    <rect x="18" y="2" width="12" height="12" rx="2" fill={tokens.colors.amber} opacity="0.6" />
    <rect x="2" y="18" width="12" height="12" rx="2" fill={tokens.colors.amber} opacity="0.6" />
    <rect x="18" y="18" width="12" height="12" rx="2" fill={tokens.colors.forestAccent} />
  </svg>
);

const MotionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 16H28" stroke={tokens.colors.amber} strokeWidth="2" strokeLinecap="round" />
    <path d="M20 8L28 16L20 24" stroke={tokens.colors.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="16" r="3" fill={tokens.colors.forestAccent} />
  </svg>
);

// Back Button Component
const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
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
      cursor: 'pointer',
      boxShadow: tokens.shadow.medium,
      transition: 'all 0.15s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.background = tokens.colors.forestMid;
    }}
    onMouseLeave={(e) => {
      e.target.style.background = tokens.colors.forestDark;
    }}
  >
    ← Back to Case Study
  </button>
);

export default PenguinPressCaseStudy;
