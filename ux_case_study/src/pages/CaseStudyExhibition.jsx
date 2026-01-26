import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================================================
// VAULT. UX CASE STUDY EXHIBITION
// A portfolio piece showcasing fintech design exploration
// ============================================================================

// Animated Number Counter
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <>{prefix}{count.toLocaleString()}{suffix}</>;
};

// Custom Icons
const Icons = {
  Arrow: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Figma: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"/>
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"/>
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z"/>
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"/>
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/>
    </svg>
  ),
  React: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
    </svg>
  ),
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16,18 22,12 16,6" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="8,6 2,12 8,18" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Project Card Component
const ProjectCard = ({ title, description, tags, image, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Staggered animation delay
  const delay = index * 150;
  
  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: isHovered 
          ? '0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 120, 212, 0.1)'
          : '0 8px 32px rgba(0, 0, 0, 0.06)',
        transform: isHovered 
          ? 'translateY(-12px) scale(1.02)'
          : 'translateY(0) scale(1)',
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: `fadeSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms both`
      }}
    >
      {/* Image Preview Area */}
      <div style={{
        height: '280px',
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #e8eef4 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Animated Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(0, 120, 212, 0.03) 40px,
              rgba(0, 120, 212, 0.03) 41px
            )
          `,
          transform: isHovered ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform 0.6s ease'
        }} />
        
        {/* Floating Mockup Preview */}
        <div style={{
          width: '85%',
          height: '85%',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
          transform: isHovered 
            ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(20px)'
            : 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Browser Chrome */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '32px',
            background: 'rgba(248, 250, 252, 0.95)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: '6px'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c940' }} />
            <div style={{ 
              flex: 1, 
              height: '18px', 
              background: 'rgba(0, 0, 0, 0.04)', 
              borderRadius: '4px', 
              marginLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '8px'
            }}>
              <span style={{ fontSize: '9px', color: '#8b95a1', fontFamily: 'monospace' }}>vault.app</span>
            </div>
          </div>
          
          {/* Content Preview */}
          <div style={{
            marginTop: '32px',
            fontSize: '64px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #0078d4 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.04em'
          }}>
            {image}
          </div>
        </div>
        
        {/* Hover Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#0078d4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 8px 24px rgba(0, 120, 212, 0.4)',
          transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-90deg)',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: isHovered ? 1 : 0
        }}>
          <Icons.Arrow />
        </div>
      </div>
      
      {/* Content */}
      <div style={{ padding: '28px 32px 32px' }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#1a1a2e',
          marginBottom: '10px',
          letterSpacing: '-0.02em',
          transition: 'color 0.3s ease',
          color: isHovered ? '#0078d4' : '#1a1a2e'
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: 1.6,
          color: '#5c6370',
          marginBottom: '20px'
        }}>
          {description}
        </p>
        
        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#0078d4',
              background: 'rgba(0, 120, 212, 0.08)',
              padding: '6px 12px',
              borderRadius: '6px',
              letterSpacing: '0.02em'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ number, label, prefix = '', suffix = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div style={{
      textAlign: 'center',
      padding: '32px 24px',
      background: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.7)'
    }}>
      <div style={{
        fontSize: '48px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #0078d4 0%, #8b5cf6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.03em',
        marginBottom: '8px'
      }}>
        {isVisible ? <AnimatedCounter end={number} prefix={prefix} suffix={suffix} /> : `${prefix}0${suffix}`}
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#5c6370',
        letterSpacing: '0.02em'
      }}>
        {label}
      </div>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        gap: '24px',
        padding: '28px',
        background: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateX(8px)' : 'translateX(0)'
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: isHovered ? '#0078d4' : 'rgba(0, 120, 212, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: '700',
        color: isHovered ? '#fff' : '#0078d4',
        flexShrink: 0,
        transition: 'all 0.3s ease'
      }}>
        {number}
      </div>
      <div>
        <h4 style={{
          fontSize: '17px',
          fontWeight: '600',
          color: '#1a1a2e',
          marginBottom: '6px'
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: '14px',
          lineHeight: 1.6,
          color: '#5c6370'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

// Mini Credit Card for Hero
const MiniCreditCard = ({ style }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '320px',
        height: '200px',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.9) 100%)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255,255,255,0.9)',
        boxShadow: isHovered 
          ? '0 40px 80px rgba(0, 0, 0, 0.18), 0 16px 32px rgba(0, 0, 0, 0.1)'
          : '0 20px 50px rgba(0, 0, 0, 0.1)',
        transform: isHovered 
          ? 'perspective(1000px) rotateY(-15deg) rotateX(5deg) translateZ(30px)'
          : 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Shine effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: isHovered ? '150%' : '-100%',
        width: '60%',
        height: '200%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        transform: 'skewX(-20deg)',
        transition: 'left 0.7s ease',
        pointerEvents: 'none'
      }} />
      
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)',
        borderRadius: 'inherit',
        pointerEvents: 'none'
      }} />
      
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#0078d4' }}>
          vault<span style={{ color: '#1a1a2e' }}>.</span>
        </div>
        {/* Chip */}
        <div style={{
          width: '40px',
          height: '30px',
          borderRadius: '6px',
          background: 'linear-gradient(145deg, #e8c547 0%, #d4a84b 50%, #c9a227 100%)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
        }} />
      </div>
      
      {/* Card Number */}
      <div style={{
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '0.15em',
        color: '#1a1a2e',
        fontFamily: 'monospace',
        position: 'relative',
        zIndex: 1
      }}>
        •••• •••• •••• 4829
      </div>
      
      {/* Card Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
        <div>
          <div style={{ fontSize: '9px', color: '#8b95a1', letterSpacing: '0.08em', marginBottom: '2px' }}>CARD HOLDER</div>
          <div style={{ fontSize: '12px', fontWeight: '600', color: '#1a1a2e', letterSpacing: '0.04em' }}>ALEX MORGAN</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 120, 212, 0.85)' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.7)', marginLeft: '-8px' }} />
        </div>
      </div>
    </div>
  );
};

// Main Exhibition Component
const CaseStudyExhibition = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    {
      title: 'Landing Page',
      description: 'Bold hero section with 3D animated credit card, glassmorphic feature cards, and confident copywriting that puts money first.',
      tags: ['Hero Design', '3D Animation', 'Glassmorphism'],
      image: '01',
      link: 'landing'
    },
    {
      title: 'Dashboard',
      description: 'Robinhood-inspired portfolio visualization with real-time charts, transaction history, and spending analytics.',
      tags: ['Data Viz', 'Interactive Charts', 'Financial UI'],
      image: '02',
      link: 'dashboard'
    },
    {
      title: 'Design Language',
      description: 'Complete design system documentation: color tokens, typography scale, elevation system, motion principles, and component library.',
      tags: ['Design System', 'Documentation', 'Components'],
      image: '03',
      link: 'design-language'
    }
  ];
  
  const handleProjectClick = (link) => {
    navigate(`/${link}`);
  };
  
  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at 20% 10%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.10) 0%, transparent 45%),
        radial-gradient(ellipse at 40% 90%, rgba(236, 72, 153, 0.06) 0%, transparent 40%),
        linear-gradient(180deg, #f8fafc 0%, #f0f4f8 50%, #e8eef4 100%)
      `,
      fontFamily: "'Segoe UI Variable', 'SF Pro Display', -apple-system, system-ui, sans-serif",
      overflowX: 'hidden'
    }}>
      {/* Keyframe Animation Styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-20px) rotate(-8deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 48px',
        background: scrollY > 50 ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(40px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrollY > 50 ? 'blur(40px) saturate(180%)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid transparent',
        transition: 'all 0.4s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#0078d4',
            letterSpacing: '-0.02em'
          }}>
            vault<span style={{ color: '#1a1a2e' }}>.</span>
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#8b95a1',
              marginLeft: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Case Study
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#projects" style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#5c6370',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}>
              Projects
            </a>
            <a href="#process" style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#5c6370',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}>
              Process
            </a>
            <a href="#about" style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#5c6370',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}>
              About
            </a>
            <a 
              href="https://github.com/issamohamed/ux_case_study" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#fff',
                background: '#0078d4',
                border: 'none',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 120, 212, 0.3)',
                transition: 'all 0.2s ease'
              }}
            >
              View Code <Icons.ExternalLink />
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px', 
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Content */}
          <div style={{ animation: 'fadeSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(0, 120, 212, 0.08)',
              borderRadius: '100px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                animation: 'pulse 2s infinite'
              }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#0078d4',
                letterSpacing: '0.02em'
              }}>
                UX Case Study
              </span>
            </div>
            
            <h1 style={{
              fontSize: '64px',
              fontWeight: '700',
              color: '#1a1a2e',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '24px'
            }}>
              Banking Design
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #0078d4 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Case Study
              </span>
            </h1>
            
            <p style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#5c6370',
              marginBottom: '40px',
              maxWidth: '480px'
            }}>
              A fusion of Microsoft's Fluent Design System and Cash App's bold philosophy. 
              Exploring how refined glassmorphic aesthetics meet confident, money-forward fintech design.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <a href="#projects" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#fff',
                background: '#0078d4',
                border: 'none',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 120, 212, 0.35)',
                transition: 'all 0.2s ease'
              }}>
                View Projects <Icons.Arrow />
              </a>
              <a href="#process" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a2e',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}>
                <Icons.Play /> See Process
              </a>
            </div>
            
            {/* Tech Stack */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#8b95a1', letterSpacing: '0.08em' }}>BUILT WITH</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: Icons.React, label: 'React' },
                  { icon: Icons.Code, label: 'CSS-in-JS' }
                ].map((tech, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#5c6370'
                  }}>
                    <tech.icon /> {tech.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right - Floating Card */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            animation: 'fadeSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both'
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 120, 212, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }} />
            
            <MiniCreditCard style={{ animation: 'float 6s ease-in-out infinite' }} />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section style={{
        padding: '40px 48px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}>
          <StatCard number={3} label="Interactive Prototypes" />
          <StatCard number={50} suffix="+" label="Components Designed" />
          <StatCard number={2} label="Design Systems Fused" />
          <StatCard number={100} suffix="%" label="Code-Based Design" />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" style={{
        padding: '80px 48px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0078d4',
            marginBottom: '12px'
          }}>
            Projects
          </h2>
          <p style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            maxWidth: '600px'
          }}>
            Three perspectives on the same vision
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
              onClick={() => handleProjectClick(project.link)}
            />
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process" style={{
        padding: '100px 48px',
        background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.02) 0%, transparent 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '400px 1fr', 
            gap: '80px',
            alignItems: 'start'
          }}>
            {/* Left - Title */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <h2 style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0078d4',
                marginBottom: '12px'
              }}>
                Process
              </h2>
              <p style={{
                fontSize: '32px',
                fontWeight: '600',
                color: '#1a1a2e',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '24px'
              }}>
                Design through code, not around it
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#5c6370'
              }}>
                As a developer transitioning to UX/UI, I chose to leverage my coding skills 
                to create interactive prototypes directly—skipping static mockups for living, 
                breathing interfaces.
              </p>
            </div>
            
            {/* Right - Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <ProcessStep 
                number="01"
                title="Research & Analysis"
                description="Deep dive into Microsoft's Fluent Design documentation and Cash App's design philosophy. Identified key principles from each system."
              />
              <ProcessStep 
                number="02"
                title="Design Fusion"
                description="Created a unified design language that marries Fluent's refined glassmorphism with Cash App's bold, money-forward confidence."
              />
              <ProcessStep 
                number="03"
                title="Component Architecture"
                description="Built reusable React components with CSS-in-JS, ensuring consistent tokens for color, typography, elevation, and motion."
              />
              <ProcessStep 
                number="04"
                title="Interactive Prototyping"
                description="Developed fully functional prototypes with real interactions—hover states, animations, and responsive behavior."
              />
              <ProcessStep 
                number="05"
                title="Documentation"
                description="Created a comprehensive design language showcase documenting every decision for future reference and portfolio presentation."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Philosophy Section */}
      <section style={{
        padding: '100px 48px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '56px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0078d4',
            marginBottom: '12px'
          }}>
            Design Philosophy
          </h2>
          <p style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Where Microsoft meets Cash App
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px'
        }}>
          {/* Microsoft Influence */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: '#0078d4',
              marginBottom: '20px'
            }}>
              FROM FLUENT DESIGN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Mica materials & layered glass',
                'Sophisticated elevation system',
                'Segoe UI Variable typography',
                'Purposeful motion curves',
                'Light, airy color palette'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: 'rgba(0, 120, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0078d4'
                  }}>
                    <Icons.Check />
                  </div>
                  <span style={{ fontSize: '15px', color: '#1a1a2e' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cash App Influence */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: '#8b5cf6',
              marginBottom: '20px'
            }}>
              FROM CASH APP
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Money as hero — big, bold numbers',
                'Confident, direct copywriting',
                'Financial empowerment messaging',
                'Celebration of transactions',
                'Personality without frivolity'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6'
                  }}>
                    <Icons.Check />
                  </div>
                  <span style={{ fontSize: '15px', color: '#1a1a2e' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" style={{
        padding: '100px 48px',
        background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.02) 0%, transparent 100%)'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#0078d4',
            marginBottom: '12px'
          }}>
            About This Project
          </h2>
          <p style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            lineHeight: 1.4,
            marginBottom: '24px'
          }}>
            A UX case study built to demonstrate design thinking through code
          </p>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#5c6370',
            marginBottom: '40px'
          }}>
            This project represents my transition from web development into UX/UI design. 
            Rather than learning traditional design tools, I leveraged my development 
            background to create interactive prototypes directly in React. Every component, 
            animation, and interaction was crafted through code—demonstrating that great 
            design can emerge from any creative process.
          </p>
          
          <div style={{
            display: 'inline-flex',
            gap: '16px'
          }}>
            <a 
              href="https://github.com/issamohamed/ux_case_study" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: '600',
                color: '#fff',
                background: '#0078d4',
                border: 'none',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 120, 212, 0.3)'
              }}
            >
              View on GitHub <Icons.ExternalLink />
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{
        padding: '48px',
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#0078d4',
              marginBottom: '6px'
            }}>
              vault<span style={{ color: '#1a1a2e' }}>.</span>
            </div>
            <div style={{
              fontSize: '13px',
              color: '#8b95a1'
            }}>
              A UX Case Study by Issa
            </div>
          </div>
          <div style={{
            fontSize: '12px',
            color: '#8b95a1',
            textAlign: 'right'
          }}>
            Built with React & CSS-in-JS
            <br />
            2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyExhibition;
