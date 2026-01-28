import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ============================================================================
// AURELIA HOTEL - "SENSORY ARRIVAL" DESIGN LANGUAGE
// ============================================================================
// Philosophy: Dark chromatic depth, theatrical reveals, asymmetric drama
// ============================================================================

// Design Tokens
const tokens = {
  colors: {
    // Dark foundation
    obsidian: '#0a0d12',
    midnight: '#12171f',
    charcoal: '#1a2029',
    slate: '#2a323f',
    
    // Warm luxe accents
    gold: '#d4a574',
    goldMuted: '#b8956a',
    goldBright: '#e8c49a',
    
    // Cool sophistication
    teal: '#1a4a4f',
    tealLight: '#2a6a70',
    
    // Warmth & action
    coral: '#e07a5f',
    coralMuted: '#c96b52',
    
    // Text hierarchy
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
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    dramatic: 'cubic-bezier(0.16, 1, 0.3, 1)',
  }
};

// Custom Icons
const Icons = {
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ArrowDown: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Wifi: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round"/>
    </svg>
  ),
  Coffee: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" strokeLinecap="round"/>
    </svg>
  ),
  Spa: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c-4-2.5-7-5.5-7-10.5 0-3 2-5.5 5-6.5 1.5-.5 2-.5 2-.5s.5 0 2 .5c3 1 5 3.5 5 6.5 0 5-3 8-7 10.5z"/>
      <path d="M12 22V11M9 7c0-2 1-3 3-4 2 1 3 2 3 4" strokeLinecap="round"/>
    </svg>
  ),
  Concierge: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V11h3v2H7v-2h3V9.5A4 4 0 018 6a4 4 0 014-4zM4 22v-2a4 4 0 014-4h8a4 4 0 014 4v2" strokeLinecap="round"/>
    </svg>
  ),
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
    </svg>
  ),
  Play: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  ),
};

// Animated entrance hook
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
};

// Room Card Component
const RoomCard = ({ image, name, size, price, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.8s ${tokens.motion.dramatic} ${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div style={{
        aspectRatio: '4/3',
        background: `linear-gradient(135deg, ${tokens.colors.charcoal} 0%, ${tokens.colors.slate} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Simulated luxury room image with gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, transparent 40%, ${tokens.colors.obsidian}ee 100%),
            linear-gradient(${isHovered ? '45deg' : '135deg'}, 
              ${tokens.colors.teal}40 0%, 
              ${tokens.colors.charcoal} 50%, 
              ${tokens.colors.gold}20 100%)
          `,
          transition: `all 0.6s ${tokens.motion.smooth}`,
        }} />
        
        {/* Room visual elements */}
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '10%',
          width: '80%',
          height: '40%',
          background: `linear-gradient(90deg, ${tokens.colors.cream}08, ${tokens.colors.cream}15, ${tokens.colors.cream}08)`,
          borderRadius: '2px',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: `transform 0.6s ${tokens.motion.smooth}`,
        }} />
        
        {/* Price tag */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: tokens.colors.obsidian + 'dd',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
          borderRadius: '2px',
        }}>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            color: tokens.colors.textMuted,
            letterSpacing: '0.05em',
          }}>FROM </span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '18px',
            color: tokens.colors.gold,
            fontWeight: '600',
          }}>${price}</span>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '11px',
            color: tokens.colors.textMuted,
          }}>/night</span>
        </div>
      </div>

      {/* Content */}
      <div style={{
        padding: '24px 0 8px',
        background: 'transparent',
      }}>
        <h3 style={{
          fontFamily: tokens.fonts.display,
          fontSize: '22px',
          fontWeight: '500',
          color: tokens.colors.cream,
          marginBottom: '8px',
          letterSpacing: '-0.01em',
        }}>{name}</h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            color: tokens.colors.textMuted,
            letterSpacing: '0.03em',
          }}>{size}</span>
          
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            fontWeight: '500',
            color: tokens.colors.gold,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}>
            Explore <Icons.ArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

// Amenity Item
const AmenityItem = ({ icon: Icon, label, delay }) => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '20px 0',
        borderBottom: `1px solid ${tokens.colors.slate}`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
        transition: `all 0.6s ${tokens.motion.dramatic} ${delay}ms`,
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: `1px solid ${tokens.colors.gold}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: tokens.colors.gold,
      }}>
        <Icon />
      </div>
      <span style={{
        fontFamily: tokens.fonts.body,
        fontSize: '15px',
        color: tokens.colors.creamMuted,
        letterSpacing: '0.02em',
      }}>{label}</span>
    </div>
  );
};

// Testimonial Component
const Testimonial = ({ quote, author, location }) => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `all 1s ${tokens.motion.dramatic}`,
      }}
    >
      <div style={{
        fontFamily: tokens.fonts.display,
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: '400',
        fontStyle: 'italic',
        color: tokens.colors.cream,
        lineHeight: 1.4,
        marginBottom: '40px',
        maxWidth: '700px',
      }}>
        "{quote}"
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Avatar placeholder */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${tokens.colors.teal} 0%, ${tokens.colors.gold}40 100%)`,
          border: `2px solid ${tokens.colors.gold}60`,
        }} />
        <div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '16px',
            fontWeight: '600',
            color: tokens.colors.cream,
            marginBottom: '4px',
          }}>{author}</div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '13px',
            color: tokens.colors.textMuted,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <Icons.MapPin /> {location}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const AureliaHotel = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroRef, heroVisible] = useScrollReveal(0.3);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <div style={{
      minHeight: '100vh',
      background: tokens.colors.obsidian,
      fontFamily: tokens.fonts.body,
      overflowX: 'hidden',
    }}>
      
      {/* ==================== NAVIGATION ==================== */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrollY > 100 
          ? `${tokens.colors.obsidian}f0`
          : 'transparent',
        backdropFilter: scrollY > 100 ? 'blur(20px)' : 'none',
        transition: `all 0.4s ${tokens.motion.smooth}`,
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: tokens.fonts.display,
          fontSize: '28px',
          fontWeight: '400',
          color: tokens.colors.cream,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          <span style={{ color: tokens.colors.gold }}>A</span>urelia
        </Link>

        {/* Nav Links */}
        <div style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
        }}>
          {['Rooms', 'Experience', 'Dining', 'Gallery'].map((item) => (
            <a key={item} href="/#" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '13px',
              fontWeight: '500',
              color: tokens.colors.creamMuted,
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              position: 'relative',
              padding: '8px 0',
            }}>
              {item}
            </a>
          ))}
          
          <button style={{
            padding: '14px 32px',
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: tokens.colors.obsidian,
            background: tokens.colors.gold,
            border: 'none',
            cursor: 'pointer',
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={(e) => {
            e.target.style.background = tokens.colors.goldBright;
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = tokens.colors.gold;
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Reserve
          </button>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        {/* Background layers with parallax */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 30% 20%, ${tokens.colors.teal}30 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, ${tokens.colors.gold}15 0%, transparent 40%),
            linear-gradient(180deg, ${tokens.colors.obsidian} 0%, ${tokens.colors.midnight} 100%)
          `,
          transform: `translateY(${parallaxOffset}px)`,
        }} />
        
        {/* Decorative geometric element */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '-5%',
          width: '50vw',
          height: '70vh',
          background: `linear-gradient(135deg, ${tokens.colors.charcoal} 0%, transparent 60%)`,
          transform: `translateY(${parallaxOffset * 0.5}px) skewY(-6deg)`,
          opacity: 0.6,
        }} />
        
        {/* Gold accent line */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: '1px',
          height: '40vh',
          background: `linear-gradient(180deg, ${tokens.colors.gold}00, ${tokens.colors.gold}60, ${tokens.colors.gold}00)`,
        }} />

        {/* Hero Content */}
        <div 
          ref={heroRef}
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '0 48px 120px',
            maxWidth: '1400px',
            width: '100%',
            margin: '0 auto',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: `all 1.2s ${tokens.motion.dramatic}`,
          }}
        >
          {/* Overline */}
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <span style={{
              width: '48px',
              height: '1px',
              background: tokens.colors.gold,
            }} />
            Maldives · Since 1987
          </div>

          {/* Main headline - asymmetric */}
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(56px, 10vw, 140px)',
            fontWeight: '400',
            color: tokens.colors.cream,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '40px',
          }}>
            Where<br />
            <span style={{
              display: 'inline-block',
              marginLeft: '15%',
              fontStyle: 'italic',
              color: tokens.colors.gold,
            }}>moments</span><br />
            <span style={{ marginLeft: '5%' }}>become</span><br />
            <span style={{
              display: 'inline-block',
              marginLeft: '25%',
              fontWeight: '600',
            }}>forever</span>
          </h1>

          {/* Subtext and CTA row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: '60px',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '16px',
              color: tokens.colors.textMuted,
              maxWidth: '400px',
              lineHeight: 1.7,
            }}>
              A sanctuary of understated luxury, where the Indian Ocean 
              meets timeless hospitality. Every detail curated for those 
              who seek the extraordinary.
            </p>

            {/* Scroll indicator */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              color: tokens.colors.gold,
              animation: 'float 3s ease-in-out infinite',
            }}>
              <span style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>Discover</span>
              <Icons.ArrowDown />
            </div>
          </div>
        </div>

        {/* Five stars */}
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          display: 'flex',
          gap: '8px',
          color: tokens.colors.gold,
          opacity: 0.8,
        }}>
          {[...Array(5)].map((_, i) => <Icons.Star key={i} />)}
        </div>
      </section>

      {/* ==================== SPLIT TESTIMONIAL ==================== */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh',
      }}>
        {/* Left - Image/Visual */}
        <div style={{
          background: `
            linear-gradient(135deg, ${tokens.colors.teal} 0%, ${tokens.colors.teal}80 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative elements simulating a pool/water scene */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '80%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${tokens.colors.cream}30, transparent)`,
          }} />
          <div style={{
            position: 'absolute',
            bottom: '25%',
            left: '15%',
            width: '70%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${tokens.colors.cream}20, transparent)`,
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '20%',
            width: '60%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${tokens.colors.cream}15, transparent)`,
          }} />
          
          {/* Play button for video concept */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: `2px solid ${tokens.colors.cream}60`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: tokens.colors.cream,
            cursor: 'pointer',
            transition: `all 0.4s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = tokens.colors.cream + '20';
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
          }}
          >
            <Icons.Play />
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: tokens.colors.cream,
            opacity: 0.7,
          }}>
            Watch Our Story
          </div>
        </div>

        {/* Right - Testimonial */}
        <div style={{
          background: tokens.colors.midnight,
          padding: '80px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: tokens.fonts.display,
            fontSize: '64px',
            color: tokens.colors.gold,
            opacity: 0.3,
            lineHeight: 1,
            marginBottom: '-20px',
          }}>"</div>
          
          <Testimonial
            quote="Aurelia isn't just a hotel—it's where my soul found its pause button. The kind of place you dream about long after you've left."
            author="Alexandra Chen"
            location="New York City"
          />
        </div>
      </section>

      {/* ==================== ROOMS GALLERY ==================== */}
      <section style={{
        padding: '140px 48px',
        background: tokens.colors.obsidian,
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section header - asymmetric */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          marginBottom: '80px',
          alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '20px',
            }}>
              Accommodations
            </div>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: '400',
              color: tokens.colors.cream,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Your private<br />
              <span style={{ fontStyle: 'italic', color: tokens.colors.gold }}>sanctuary</span>
            </h2>
          </div>
          
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '16px',
            color: tokens.colors.textMuted,
            lineHeight: 1.8,
            maxWidth: '500px',
            paddingBottom: '20px',
          }}>
            Each of our 42 villas and suites offers an intimate retreat 
            designed to harmonize with the natural beauty of the Maldives. 
            Private pools, ocean views, and bespoke service await.
          </p>
        </div>

        {/* Room cards - asymmetric grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '32px',
        }}>
          <RoomCard
            image="overwater"
            name="Overwater Villa"
            size="185 m² · Ocean View · Private Pool"
            price="1,450"
            delay={0}
          />
          <RoomCard
            image="beach"
            name="Beach Residence"
            size="240 m² · Beachfront · Garden"
            price="2,100"
            delay={100}
          />
          <RoomCard
            image="sunset"
            name="Sunset Suite"
            size="320 m² · Panoramic · Butler Service"
            price="3,800"
            delay={200}
          />
        </div>

        {/* View all link */}
        <div style={{
          marginTop: '60px',
          textAlign: 'right',
        }}>
          <a href="/#" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '14px',
            fontWeight: '500',
            color: tokens.colors.gold,
            textDecoration: 'none',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 0',
            borderBottom: `1px solid ${tokens.colors.gold}40`,
            transition: `all 0.3s ${tokens.motion.smooth}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = tokens.colors.gold;
            e.currentTarget.style.gap = '20px';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = tokens.colors.gold + '40';
            e.currentTarget.style.gap = '12px';
          }}
          >
            View All Accommodations <Icons.ArrowRight />
          </a>
        </div>
      </section>

      {/* ==================== EXPERIENCE / AMENITIES ==================== */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        background: tokens.colors.charcoal,
      }}>
        {/* Left - Content */}
        <div style={{
          padding: '120px 80px',
        }}>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '20px',
          }}>
            The Experience
          </div>
          
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '400',
            color: tokens.colors.cream,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '60px',
          }}>
            Beyond<br />
            <span style={{ fontStyle: 'italic', color: tokens.colors.gold }}>expectation</span>
          </h2>

          {/* Amenity list */}
          <div>
            <AmenityItem icon={Icons.Spa} label="Overwater Spa & Wellness Sanctuary" delay={0} />
            <AmenityItem icon={Icons.Coffee} label="Farm-to-Table Dining Experiences" delay={100} />
            <AmenityItem icon={Icons.Wifi} label="Seamless Connectivity Throughout" delay={200} />
            <AmenityItem icon={Icons.Concierge} label="24-Hour Personal Concierge" delay={300} />
          </div>
        </div>

        {/* Right - Visual */}
        <div style={{
          background: `
            linear-gradient(180deg, ${tokens.colors.obsidian}40 0%, ${tokens.colors.coral}30 100%),
            linear-gradient(135deg, ${tokens.colors.midnight} 0%, ${tokens.colors.charcoal} 100%)
          `,
          position: 'relative',
          minHeight: '600px',
        }}>
          {/* Decorative sunset gradient */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: `linear-gradient(180deg, transparent 0%, ${tokens.colors.coral}20 50%, ${tokens.colors.gold}30 100%)`,
            opacity: 0.6,
          }} />
          
          {/* Sun circle */}
          <div style={{
            position: 'absolute',
            bottom: '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${tokens.colors.gold}80 0%, ${tokens.colors.coral}40 100%)`,
            filter: 'blur(2px)',
          }} />
          
          {/* Horizon line */}
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: 0,
            right: 0,
            height: '1px',
            background: tokens.colors.gold + '40',
          }} />
          
          {/* Stats overlay */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '40px',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              padding: '32px',
              background: tokens.colors.obsidian + 'dd',
              backdropFilter: 'blur(20px)',
            }}>
              {[
                { value: '42', label: 'Private Villas' },
                { value: '98%', label: 'Guest Satisfaction' },
                { value: '36+', label: 'Years of Excellence' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: '32px',
                    fontWeight: '500',
                    color: tokens.colors.gold,
                    marginBottom: '4px',
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: tokens.colors.textMuted,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LOCATION / MAP ==================== */}
      <section style={{
        padding: '120px 48px',
        background: tokens.colors.obsidian,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left - Text */}
          <div>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '20px',
            }}>
              Location
            </div>
            
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '400',
              color: tokens.colors.cream,
              lineHeight: 1.2,
              marginBottom: '32px',
            }}>
              In the heart of<br />
              <span style={{ fontStyle: 'italic', color: tokens.colors.gold }}>paradise</span>
            </h2>
            
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '15px',
              color: tokens.colors.textMuted,
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              Nestled in the pristine waters of the South Malé Atoll, 
              Aurelia is a 35-minute speedboat journey from Velana 
              International Airport. Our team arranges seamless transfers, 
              so your journey to serenity begins the moment you land.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '32px',
            }}>
              {[
                { value: '35', unit: 'min', label: 'from airport' },
                { value: '4.5', unit: 'hrs', label: 'from Dubai' },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: '36px',
                    fontWeight: '500',
                    color: tokens.colors.cream,
                  }}>
                    {item.value}
                    <span style={{
                      fontSize: '16px',
                      color: tokens.colors.gold,
                      marginLeft: '4px',
                    }}>{item.unit}</span>
                  </div>
                  <div style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: tokens.colors.textMuted,
                  }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Map visual */}
          <div style={{
            aspectRatio: '16/10',
            background: tokens.colors.midnight,
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Stylized map background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 60% 50%, ${tokens.colors.teal}40 0%, transparent 40%),
                radial-gradient(circle at 30% 30%, ${tokens.colors.teal}20 0%, transparent 30%),
                radial-gradient(circle at 70% 70%, ${tokens.colors.teal}20 0%, transparent 25%)
              `,
            }} />
            
            {/* Grid lines */}
            <div style={{
              position: 'absolute',
              inset: '40px',
              backgroundImage: `
                linear-gradient(${tokens.colors.slate}30 1px, transparent 1px),
                linear-gradient(90deg, ${tokens.colors.slate}30 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }} />
            
            {/* Location marker */}
            <div style={{
              position: 'absolute',
              top: '45%',
              left: '58%',
              transform: 'translate(-50%, -50%)',
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: tokens.colors.gold,
                animation: 'pulse 2s ease-out infinite',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: `2px solid ${tokens.colors.gold}40`,
                  animation: 'pulse 2s ease-out infinite',
                }} />
              </div>
              
              {/* Label */}
              <div style={{
                position: 'absolute',
                top: '-60px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: tokens.colors.obsidian + 'ee',
                padding: '12px 20px',
                whiteSpace: 'nowrap',
              }}>
                <div style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '16px',
                  color: tokens.colors.cream,
                  marginBottom: '2px',
                }}>Aurelia</div>
                <div style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '11px',
                  color: tokens.colors.textMuted,
                  letterSpacing: '0.05em',
                }}>South Malé Atoll, Maldives</div>
              </div>
            </div>
            
            {/* Coordinates */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '24px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: tokens.colors.textMuted,
              letterSpacing: '0.05em',
            }}>
              3.9426° N, 73.4092° E
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(ellipse at 50% 100%, ${tokens.colors.teal}40 0%, transparent 60%),
          linear-gradient(180deg, ${tokens.colors.obsidian} 0%, ${tokens.colors.midnight} 100%)
        `,
        textAlign: 'center',
        padding: '120px 48px',
      }}>
        <div>
          <div style={{
            fontFamily: tokens.fonts.body,
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '32px',
          }}>
            Begin Your Journey
          </div>
          
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: '400',
            color: tokens.colors.cream,
            lineHeight: 1.1,
            marginBottom: '32px',
            maxWidth: '800px',
          }}>
            Your story at Aurelia<br />
            <span style={{ fontStyle: 'italic', color: tokens.colors.gold }}>awaits</span>
          </h2>
          
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '17px',
            color: tokens.colors.textMuted,
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}>
            Secure your private villa today and discover why discerning 
            travelers have chosen Aurelia for over three decades.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
          }}>
            <button style={{
              padding: '20px 48px',
              fontFamily: tokens.fonts.body,
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.obsidian,
              background: tokens.colors.gold,
              border: 'none',
              cursor: 'pointer',
              transition: `all 0.3s ${tokens.motion.smooth}`,
            }}
            onMouseEnter={(e) => {
              e.target.style.background = tokens.colors.goldBright;
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = `0 20px 40px ${tokens.colors.gold}30`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = tokens.colors.gold;
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            >
              Reserve Your Villa
            </button>
            
            <button style={{
              padding: '20px 48px',
              fontFamily: tokens.fonts.body,
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.cream,
              background: 'transparent',
              border: `1px solid ${tokens.colors.cream}40`,
              cursor: 'pointer',
              transition: `all 0.3s ${tokens.motion.smooth}`,
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = tokens.colors.cream;
              e.target.style.background = tokens.colors.cream + '10';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = tokens.colors.cream + '40';
              e.target.style.background = 'transparent';
            }}
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{
        padding: '80px 48px 40px',
        background: tokens.colors.obsidian,
        borderTop: `1px solid ${tokens.colors.slate}`,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Top row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '60px',
            marginBottom: '80px',
          }}>
            {/* Brand */}
            <div>
              <div style={{
                fontFamily: tokens.fonts.display,
                fontSize: '32px',
                fontWeight: '400',
                color: tokens.colors.cream,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                <span style={{ color: tokens.colors.gold }}>A</span>urelia
              </div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '14px',
                color: tokens.colors.textMuted,
                lineHeight: 1.7,
              }}>
                A sanctuary of understated luxury in the Maldives.
              </p>
            </div>

            {/* Links */}
            {[
              { title: 'Experience', links: ['Rooms', 'Dining', 'Spa', 'Activities'] },
              { title: 'Information', links: ['About', 'Location', 'Careers', 'Press'] },
              { title: 'Connect', links: ['Contact', 'Newsletter', 'Instagram', 'Facebook'] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: tokens.colors.gold,
                  marginBottom: '24px',
                }}>{col.title}</div>
                {col.links.map((link) => (
                  <a key={link} href="/#" style={{
                    display: 'block',
                    fontFamily: tokens.fonts.body,
                    fontSize: '14px',
                    color: tokens.colors.textMuted,
                    textDecoration: 'none',
                    padding: '8px 0',
                    transition: `color 0.2s ${tokens.motion.smooth}`,
                  }}
                  onMouseEnter={(e) => e.target.style.color = tokens.colors.cream}
                  onMouseLeave={(e) => e.target.style.color = tokens.colors.textMuted}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '32px',
            borderTop: `1px solid ${tokens.colors.slate}`,
          }}>
            <div style={{
              fontFamily: tokens.fonts.body,
              fontSize: '12px',
              color: tokens.colors.textMuted,
            }}>
              © 2025 Aurelia. All rights reserved.
            </div>
            
            <div style={{
              display: 'flex',
              gap: '32px',
            }}>
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="/#" style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '12px',
                  color: tokens.colors.textMuted,
                  textDecoration: 'none',
                }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(2); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::selection {
          background: ${tokens.colors.gold}40;
          color: ${tokens.colors.cream};
        }
      `}</style>
    </div>
  );
};

export default AureliaHotel;
