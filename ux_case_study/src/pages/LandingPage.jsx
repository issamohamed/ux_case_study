import React, { useState } from 'react';

// Custom SVG Icons
const Icons = {
  Card: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4 16H36" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="22" width="12" height="4" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="24" y="22" width="8" height="4" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>
  ),
  Crypto: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 10V12M20 28V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 17C15 14.5 17 13 20 13C23 13 25 14.5 25 17C25 19 23.5 20 20 20C16.5 20 15 21 15 23C15 25.5 17 27 20 27C23 27 25 25.5 25 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Globe: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <ellipse cx="20" cy="20" rx="6" ry="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 20H34" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12H32" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <path d="M8 28H32" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  Shield: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L6 10V18C6 26.8 12 33.4 20 36C28 33.4 34 26.8 34 18V10L20 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Lightning: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4L10 22H18L16 36L30 18H22L24 4H22Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
  Chart: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 26L18 18L24 22L30 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="26" r="2" fill="currentColor"/>
      <circle cx="18" cy="18" r="2" fill="currentColor"/>
      <circle cx="24" cy="22" r="2" fill="currentColor"/>
      <circle cx="30" cy="12" r="2" fill="currentColor"/>
    </svg>
  )
};

// 3D Icon Container Component
const Icon3D = ({ icon: IconComponent, isHovered }) => {
  return (
    <div style={{
      width: '72px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isHovered 
        ? 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)'
        : 'linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(248,250,255,0.7) 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.9)',
      boxShadow: isHovered 
        ? `0 20px 40px rgba(0, 0, 0, 0.12),
           0 8px 16px rgba(0, 0, 0, 0.08),
           inset 0 1px 0 rgba(255, 255, 255, 1)`
        : `0 4px 12px rgba(0, 0, 0, 0.06),
           0 2px 4px rgba(0, 0, 0, 0.04),
           inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
      transform: isHovered 
        ? 'translateY(-8px) rotateX(10deg) rotateY(-5deg) scale(1.05)'
        : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      position: 'relative',
      overflow: 'hidden',
      perspective: '500px',
      color: '#0078d4',
      marginBottom: '20px'
    }}>
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(0, 120, 212, 0.08) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)'
          : 'transparent',
        borderRadius: 'inherit',
        transition: 'all 0.4s ease',
        pointerEvents: 'none'
      }} />
      
      {/* Shine effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: isHovered ? '150%' : '-100%',
        width: '60%',
        height: '200%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
        transform: 'skewX(-20deg)',
        transition: 'left 0.5s ease',
        pointerEvents: 'none'
      }} />
      
      <IconComponent />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: isHovered 
          ? '0 16px 40px rgba(0, 0, 0, 0.1)'
          : '0 4px 16px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon3D icon={icon} isHovered={isHovered} />
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#1a1a2e',
        marginBottom: '10px',
        letterSpacing: '-0.01em'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#5c6370'
      }}>
        {desc}
      </p>
    </div>
  );
};

const CryptoBankMockup = () => {
  const [hoveredCard, setHoveredCard] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{
      background: `
        radial-gradient(ellipse at 25% 15%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 60%, rgba(139, 92, 246, 0.10) 0%, transparent 45%),
        radial-gradient(ellipse at 45% 85%, rgba(236, 72, 153, 0.06) 0%, transparent 40%),
        linear-gradient(180deg, #f0f4f8 0%, #e8eef4 100%)
      `,
      fontFamily: "'Segoe UI Variable', 'SF Pro Display', -apple-system, system-ui, sans-serif"
    }}>
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 48px',
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#0078d4',
            letterSpacing: '-0.02em'
          }}>
            vault<span style={{ color: '#1a1a2e' }}>.</span>
          </div>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Features', 'Cards', 'Security', 'Pricing'].map((item) => (
              <a key={item} href="#" style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#5c6370',
                textDecoration: 'none',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1a1a2e'}
              onMouseLeave={(e) => e.target.style.color = '#5c6370'}
              >
                {item}
              </a>
            ))}
            <button style={{
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#fff',
              background: '#0078d4',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 120, 212, 0.25)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#106ebe';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#0078d4';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '80px'
      }}>
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0078d4',
            marginBottom: '16px'
          }}>
            The future of banking
          </div>
          
          <h1 style={{
            fontSize: 'clamp(44px, 6vw, 64px)',
            fontWeight: '700',
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
            color: '#1a1a2e',
            marginBottom: '24px'
          }}>
            Your money,<br />
            <span style={{ color: '#0078d4' }}>beautifully</span> simple.
          </h1>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#5c6370',
            maxWidth: '440px',
            marginBottom: '40px'
          }}>
            One card for crypto, cash, and everything in between. 
            No fees. No friction. Just effortless control over your financial life.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button style={{
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#fff',
              background: '#0078d4',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 120, 212, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#106ebe';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(0, 120, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#0078d4';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px rgba(0, 120, 212, 0.3)';
            }}
            >
              Get Your Card →
            </button>
            
            <button style={{
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#0078d4',
              background: 'transparent',
              border: '1.5px solid #0078d4',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0, 120, 212, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
            >
              See Features
            </button>
          </div>
          
          {/* Trust badges */}
          <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)'
          }}>
            {[
              { value: '2M+', label: 'Active Users' },
              { value: '$4.2B', label: 'Assets Secured' },
              { value: '150+', label: 'Countries' }
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1a1a2e',
                  letterSpacing: '-0.02em'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#8b95a1',
                  marginTop: '2px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Credit Card */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1000px'
        }}>
          <div 
            style={{
              position: 'relative',
              width: '380px',
              height: '240px',
              background: `linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(248, 250, 255, 0.92) 50%,
                rgba(242, 246, 255, 0.95) 100%
              )`,
              backdropFilter: 'blur(40px) saturate(150%)',
              WebkitBackdropFilter: 'blur(40px) saturate(150%)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: hoveredCard 
                ? `0 35px 70px rgba(0, 0, 0, 0.18),
                   0 15px 30px rgba(0, 0, 0, 0.10),
                   0 0 60px rgba(0, 120, 212, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 1)`
                : `0 30px 60px rgba(0, 0, 0, 0.12),
                   0 12px 24px rgba(0, 0, 0, 0.08),
                   inset 0 1px 0 rgba(255, 255, 255, 1),
                   inset 0 -1px 0 rgba(0, 0, 0, 0.02)`,
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: hoveredCard 
                ? 'translateY(-12px) rotateX(8deg) rotateY(-3deg) scale(1.02)' 
                : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
          >
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                135deg,
                rgba(59, 130, 246, 0.06) 0%,
                transparent 40%,
                rgba(139, 92, 246, 0.04) 100%
              )`,
              borderRadius: 'inherit',
              pointerEvents: 'none'
            }} />
            
            {/* Shine effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: hoveredCard ? '150%' : '-100%',
              width: '60%',
              height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              transform: 'skewX(-20deg)',
              transition: 'left 0.6s ease',
              pointerEvents: 'none'
            }} />

            {/* Card Logo */}
            <div style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              fontSize: '20px',
              fontWeight: '700',
              color: '#0078d4'
            }}>
              vault.
            </div>

            {/* Chip */}
            <div style={{
              width: '48px',
              height: '36px',
              background: 'linear-gradient(135deg, #e8c547 0%, #d4a942 100%)',
              borderRadius: '6px',
              marginBottom: '32px',
              boxShadow: `
                inset 0 2px 4px rgba(255, 255, 255, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.1)
              `
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '2px',
                padding: '6px',
                opacity: 0.3
              }}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} style={{
                    background: '#a08530',
                    borderRadius: '1px'
                  }} />
                ))}
              </div>
            </div>

            {/* Card Number */}
            <div style={{
              fontSize: '21px',
              fontWeight: '500',
              letterSpacing: '0.18em',
              color: '#1a1a2e',
              marginBottom: '28px',
              fontVariantNumeric: 'tabular-nums'
            }}>
              4829 •••• •••• 3847
            </div>

            {/* Card Details */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}>
              <div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8b95a1',
                  marginBottom: '4px'
                }}>
                  Card Holder
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#1a1a2e'
                }}>
                  Alex Morgan
                </div>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8b95a1',
                  marginBottom: '4px'
                }}>
                  Expires
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#1a1a2e'
                }}>
                  09/28
                </div>
              </div>
              
              {/* Card network logo */}
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(0, 120, 212, 0.85)'
                }} />
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.7)',
                  marginLeft: '-10px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 48px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            Everything you need. Nothing you don't.
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#5c6370',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Powerful features wrapped in elegant simplicity.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}>
          <FeatureCard 
            icon={Icons.Card}
            title="Virtual & Physical Cards"
            desc="Instant virtual cards. Premium metal cards delivered to your door."
          />
          <FeatureCard 
            icon={Icons.Crypto}
            title="Crypto Native"
            desc="Buy, sell, and spend crypto seamlessly. Your keys, your coins."
          />
          <FeatureCard 
            icon={Icons.Globe}
            title="Global Reach"
            desc="Spend in 150+ countries with real exchange rates. Zero hidden fees."
          />
          <FeatureCard 
            icon={Icons.Shield}
            title="Bank-Grade Security"
            desc="Biometric auth, instant freeze, and real-time alerts. Always protected."
          />
          <FeatureCard 
            icon={Icons.Lightning}
            title="Instant Transfers"
            desc="Send money anywhere in seconds. Not days. Seconds."
          />
          <FeatureCard 
            icon={Icons.Chart}
            title="Smart Insights"
            desc="AI-powered spending insights. Know where every dollar goes."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 48px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.80)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          padding: '64px',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
        }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: '700',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            Ready to elevate your finances?
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#5c6370',
            maxWidth: '450px',
            margin: '0 auto 32px'
          }}>
            Join millions who've already made the switch to smarter banking.
          </p>
          <button style={{
            padding: '16px 40px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            background: '#0078d4',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 120, 212, 0.35)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#106ebe';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 28px rgba(0, 120, 212, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#0078d4';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0, 120, 212, 0.35)';
          }}
          >
            Get Started Free →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '14px',
          color: '#8b95a1'
        }}>
          © 2025 vault. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Support'].map((item) => (
            <a key={item} href="#" style={{
              fontSize: '13px',
              color: '#5c6370',
              textDecoration: 'none'
            }}>
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default CryptoBankMockup;