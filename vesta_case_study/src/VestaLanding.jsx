import React, { useRef } from 'react';

const VestaLanding = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aboutRef = useRef(null);
  const designLanguageRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const keyframes = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap');
    
    @keyframes float1 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(2deg); }
    }

    @keyframes float3 {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-6px) scale(1.02); }
    }

    @keyframes orbFloat {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
      50% { transform: translate(15px, -20px) scale(1.1); opacity: 0.8; }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes drawLine {
      from { stroke-dashoffset: 200; }
      to { stroke-dashoffset: 0; }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes progressFill {
      from { width: 0%; }
      to { width: 100%; }
    }

    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    @keyframes ripple {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(2.4); opacity: 0; }
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 30px rgba(212, 118, 60, 0.3), inset 0 0 30px rgba(212, 118, 60, 0.1); }
      50% { box-shadow: 0 0 50px rgba(212, 118, 60, 0.5), inset 0 0 40px rgba(212, 118, 60, 0.15); }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: #FFFFFF;
      overflow-x: hidden;
    }

    /* Nav link hover effect */
    .nav-link {
      font-size: 14px;
      color: #2D2A26;
      cursor: pointer;
      padding: 10px 16px;
      border-radius: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: transparent;
      border: none;
      font-family: inherit;
    }

    .nav-link:hover {
      background: #1a1a1a;
      color: #FFFFFF;
      transform: translateY(-2px);
    }

    .sign-in-btn {
      padding: 10px 20px;
      border: 1px solid #2D2A26;
      border-radius: 24px;
      color: #2D2A26;
      font-weight: 500;
      font-size: 14px;
      background: transparent;
      cursor: pointer;
      margin-left: auto;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: inherit;
    }

    .sign-in-btn:hover {
      background: #1a1a1a;
      color: #FFFFFF;
      border-color: #1a1a1a;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .btn-primary {
      padding: 14px 24px;
      border-radius: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      background: #1a1a1a;
      color: #FFFFFF;
      border: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: inherit;
      position: relative;
      overflow: hidden;
    }

    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .btn-primary:hover::before {
      left: 100%;
    }

    .btn-secondary {
      padding: 14px 24px;
      border-radius: 24px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      background: transparent;
      color: #1a1a1a;
      border: 1px solid #E0E0E0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      font-family: inherit;
    }

    .btn-secondary:hover {
      border-color: #1a1a1a;
      background: #1a1a1a;
      color: #FFFFFF;
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    }

    .testimonial-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 18px;
      padding: 20px;
      box-shadow: 0 4px 24px rgba(180, 100, 50, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: default;
    }

    .testimonial-card:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 16px 40px rgba(212, 118, 60, 0.2);
      background: rgba(255, 255, 255, 0.95);
    }

    .testimonial-card:hover .avatar-svg {
      transform: scale(1.1);
    }

    .avatar-svg {
      transition: transform 0.3s ease;
    }

    .status-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 14px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(180, 100, 50, 0.1);
      align-self: flex-start;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .status-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 28px rgba(212, 118, 60, 0.18);
    }

    .highlight {
      color: #D4763C;
      font-weight: 500;
      position: relative;
    }

    .highlight::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: #D4763C;
      transition: width 0.3s ease;
    }

    .testimonial-card:hover .highlight::after {
      width: 100%;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: #2D2A26;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logo-container:hover {
      transform: scale(1.05);
    }

    .trust-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #6B6B6B;
      margin-bottom: 24px;
      padding: 8px 12px;
      border-radius: 20px;
      transition: all 0.3s ease;
      cursor: default;
    }

    .trust-badge:hover {
      background: rgba(212, 118, 60, 0.1);
      color: #D4763C;
    }

    .trust-badge:hover svg {
      transform: rotate(15deg) scale(1.2);
    }

    .trust-badge svg {
      transition: all 0.3s ease;
    }

    /* Feature cards */
    .feature-card {
      background: #FAFAFA;
      border-radius: 24px;
      padding: 32px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: default;
      border: 1px solid transparent;
    }

    .feature-card:hover {
      background: #FFFFFF;
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      border-color: rgba(212, 118, 60, 0.2);
    }

    .feature-card:hover .feature-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 8px 24px rgba(212, 118, 60, 0.3);
    }

    .feature-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #E89850, #D4763C);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Step cards */
    .step-card {
      background: #FFFFFF;
      border-radius: 24px;
      padding: 40px;
      position: relative;
      transition: all 0.4s ease;
      border: 1px solid #F0F0F0;
    }

    .step-card:hover {
      transform: scale(1.02);
      box-shadow: 0 24px 64px rgba(0,0,0,0.08);
    }

    .step-card:hover .step-number {
      transform: scale(1.1);
      background: linear-gradient(135deg, #E89850, #D4763C);
      color: white;
    }

    .step-number {
      width: 48px;
      height: 48px;
      background: #F5F5F5;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Fraunces', serif;
      font-size: 20px;
      font-weight: 600;
      color: #D4763C;
      margin-bottom: 24px;
      transition: all 0.4s ease;
    }

    /* Animated graphic elements */
    .animated-folder {
      transition: all 0.3s ease;
    }

    .animated-folder:hover {
      transform: translateY(-4px) rotate(-2deg);
    }

    .file-item {
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .file-item:hover {
      transform: translateX(8px);
      background: rgba(212, 118, 60, 0.1);
    }

    /* Scroll indicator */
    .scroll-indicator {
      animation: float1 2s ease-in-out infinite;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .scroll-indicator:hover {
      transform: scale(1.2);
    }

    /* Section transitions */
    .section {
      opacity: 1;
      transition: opacity 0.6s ease;
    }

    /* Interactive demo */
    .demo-window {
      background: #1a1a1a;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.2);
      transition: all 0.4s ease;
    }

    .demo-window:hover {
      transform: translateY(-8px);
      box-shadow: 0 32px 100px rgba(0,0,0,0.25);
    }

    .window-dots {
      display: flex;
      gap: 8px;
      padding: 16px;
      background: #2a2a2a;
    }

    .window-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .demo-window:hover .window-dot:nth-child(1) { background: #FF5F56; }
    .demo-window:hover .window-dot:nth-child(2) { background: #FFBD2E; }
    .demo-window:hover .window-dot:nth-child(3) { background: #27CA40; }
  `;

  const VaseLogo = () => (
    <svg viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '38px', height: '46px' }}>
      <defs>
        <linearGradient id="vaseGradient" x1="16" y1="0" x2="16" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D2A26"/>
          <stop offset="100%" stopColor="#1a1815"/>
        </linearGradient>
      </defs>
      <path d="M13 4 H19 L19 6 C19 6 21 7 22 9 C23.5 12 24 15 24 18 C24 22 24.5 26 23 30 C22 33 20 35 16 35 C12 35 10 33 9 30 C7.5 26 8 22 8 18 C8 15 8.5 12 10 9 C11 7 13 6 13 6 Z" fill="url(#vaseGradient)"/>
      <path d="M10 9 C6 10 5 14 5 17 C5 20 6 23 9 24" stroke="url(#vaseGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M22 9 C26 10 27 14 27 17 C27 20 26 23 23 24" stroke="url(#vaseGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="16" cy="4" rx="5" ry="1.5" fill="url(#vaseGradient)"/>
      <path d="M12 35 L11 37 H21 L20 35" fill="url(#vaseGradient)"/>
      <ellipse cx="16" cy="37" rx="6" ry="1" fill="url(#vaseGradient)"/>
      <rect x="12" y="7" width="8" height="2" rx="0.5" fill="#E8723C"/>
      <line x1="10" y1="14" x2="22" y2="14" stroke="#E8723C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10 21 h2 v1.5 h-1 v1 h3 v-1 h-1 v-1.5 h2 v1.5 h-1 v1 h3 v-1 h-1 v-1.5 h2 v1.5 h-1 v1 h3 v-2.5" stroke="#E8723C" strokeWidth="0.8" fill="none"/>
      <line x1="10.5" y1="29" x2="21.5" y2="29" stroke="#E8723C" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  const StarIcon = () => (
    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: '#D4763C' }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  const MaleAvatar = () => (
    <svg viewBox="0 0 40 40" className="avatar-svg" style={{ width: '40px', height: '40px' }}>
      <circle cx="20" cy="20" r="20" fill="#E8F4FC"/>
      <circle cx="20" cy="15" r="7" fill="#5B9BD5"/>
      <path d="M8 36 C8 28 14 24 20 24 C26 24 32 28 32 36" fill="#5B9BD5"/>
    </svg>
  );

  const FemaleAvatar = () => (
    <svg viewBox="0 0 40 40" className="avatar-svg" style={{ width: '40px', height: '40px' }}>
      <circle cx="20" cy="20" r="20" fill="#FCE8F0"/>
      <circle cx="20" cy="15" r="7" fill="#D5669E"/>
      <path d="M8 36 C8 28 14 24 20 24 C26 24 32 28 32 36" fill="#D5669E"/>
    </svg>
  );

  // Feature icons
  const CloudIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );

  const ZapIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const FolderIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const SyncIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );

  const ArrowDownIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19 12 12 19 5 12"/>
    </svg>
  );

  return (
    <>
      <style>{keyframes}</style>
      <div style={{ background: '#FFFFFF' }}>
        
        {/* ============ HERO SECTION ============ */}
        <section ref={heroRef} className="section" style={{
          display: 'flex',
          minHeight: '100vh',
          padding: '20px',
        }}>
          {/* Left Panel */}
          <div style={{
            flex: '1',
            padding: '24px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            {/* Nav */}
            <nav style={{ display: 'flex', alignItems: 'center' }}>
              <div className="logo-container" onClick={() => scrollTo(heroRef)}>
                <VaseLogo />
                Vesta
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '48px' }}>
                <button className="nav-link" onClick={() => scrollTo(featuresRef)}>Features</button>
                <button className="nav-link" onClick={() => scrollTo(howItWorksRef)}>Pricing</button>
                <button className="nav-link" onClick={() => scrollTo(aboutRef)}>About</button>
              </div>
              <button className="sign-in-btn">Sign in</button>
            </nav>

            {/* Hero Content */}
            <div style={{ maxWidth: '440px' }}>
              <div className="trust-badge">
                <StarIcon />
                Trusted by 50,000+ people who stopped worrying
              </div>
              <h1 style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '54px',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#1a1a1a',
                marginBottom: '24px',
              }}>
                Your files, always here.
              </h1>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#6B6B6B',
                marginBottom: '36px',
                maxWidth: '400px',
              }}>
                The cloud storage that feels like home. No walls, no infidelity—just a quiet place where your important things belong.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-primary" onClick={() => scrollTo(featuresRef)}>Start for free</button>
                <button className="btn-secondary" onClick={() => scrollTo(howItWorksRef)}>See how it works</button>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '13px', color: '#6B6B6B' }}>
                No credit card required · 15GB free forever
              </p>
              <div className="scroll-indicator" onClick={() => scrollTo(featuresRef)} style={{ color: '#D4763C' }}>
                <ArrowDownIcon />
              </div>
            </div>
          </div>

          {/* Right Panel - Glass */}
          <div className="glass-panel" style={{
            width: '480px',
            minWidth: '480px',
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            background: 'linear-gradient(165deg, #F5D4A8 0%, #F0B878 20%, #E89850 45%, #DC8040 70%, #E8A060 100%)',
          }}>
            {/* Gradient overlays */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 80% at 20% 100%, rgba(220,128,64,0.6) 0%, transparent 50%)' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 90% 10%, rgba(255,220,180,0.5) 0%, transparent 50%)' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(248,200,150,0.3) 0%, transparent 60%)' }}/>

            {/* Orbs */}
            <div className="orb" style={{ position: 'absolute', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,200,150,0.2))', top: '5%', right: '10%', animation: 'orbFloat 10s ease-in-out infinite' }}/>
            <div className="orb" style={{ position: 'absolute', width: '50px', height: '50px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,180,130,0.2))', bottom: '15%', left: '5%', animation: 'orbFloat 14s ease-in-out infinite reverse' }}/>
            <div className="orb" style={{ position: 'absolute', width: '35px', height: '35px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,190,140,0.15))', top: '40%', left: '8%', animation: 'orbFloat 12s ease-in-out infinite' }}/>

            {/* Testimonial Cards */}
            <div style={{ position: 'relative', zIndex: 10, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}>
              <div className="testimonial-card" style={{ animation: 'float1 6s ease-in-out infinite' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FemaleAvatar />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Sarah Chen</p>
                    <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>Photographer, Portland</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#1a1a1a', margin: 0 }}>
                  "I used to obsess over backups. Now I just <span className="highlight">create</span>. Everything's there when I need it."
                </p>
              </div>

              <div className="testimonial-card" style={{ animation: 'float1 7s ease-in-out infinite', animationDelay: '-2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <MaleAvatar />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Marcus Rivera</p>
                    <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>Writer, Austin</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#1a1a1a', margin: 0 }}>
                  "Other apps made me feel locked out. Vesta just feels <span className="highlight">present</span>."
                </p>
              </div>

              <div className="testimonial-card" style={{ animation: 'float1 8s ease-in-out infinite', animationDelay: '-4s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FemaleAvatar />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Emma Lindqvist</p>
                    <p style={{ fontSize: '12px', color: '#6B6B6B', margin: 0 }}>Designer, Stockholm</p>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#1a1a1a', margin: 0 }}>
                  "Quiet, reliable, and <span className="highlight">just works</span>. I forget it's even there."
                </p>
              </div>

              <div className="status-card">
                <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #D4763C, #EAA060)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckIcon />
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Everything synced</p>
                  <p style={{ fontSize: '11px', color: '#6B6B6B', margin: 0 }}>Last update: just now</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES SECTION ============ */}
        <section ref={featuresRef} className="section" style={{
          minHeight: '100vh',
          padding: '120px 80px',
          background: '#FFFFFF',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ marginBottom: '60px' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#D4763C', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Features</p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: 400, color: '#1a1a1a', marginBottom: '20px' }}>
                Everything you need,<br/>nothing you don't
              </h2>
            </div>

            {/* Bento Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 180px)',
              gap: '20px',
            }}>
              
              {/* Large card - Instant Upload (spans 2 cols, 2 rows) */}
              <div 
                className="bento-card"
                style={{
                  gridColumn: 'span 2',
                  gridRow: 'span 2',
                  background: 'linear-gradient(145deg, #FDF5ED 0%, #FAE8D8 100%)',
                  borderRadius: '28px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(212, 118, 60, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Fraunces', serif" }}>Instant Upload</h3>
                  <p style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: 1.6, maxWidth: '280px' }}>Drag, drop, done. Files appear across all your devices before you can blink.</p>
                </div>
                {/* Animated upload graphic */}
                <svg viewBox="0 0 200 140" style={{ width: '100%', maxWidth: '280px', alignSelf: 'flex-end' }}>
                  {/* Cloud */}
                  <path d="M160 90 C180 90 190 75 185 60 C180 45 160 40 145 50 C140 30 115 25 95 40 C75 30 50 40 50 65 C30 65 25 90 45 95 L160 95" fill="none" stroke="#D4763C" strokeWidth="3" strokeLinecap="round"/>
                  {/* Upload arrow */}
                  <g>
                    <line x1="105" y1="130" x2="105" y2="75" stroke="#D4763C" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="y2" values="85;65;85" dur="1.5s" repeatCount="indefinite"/>
                    </line>
                    <polyline points="90,85 105,65 120,85" fill="none" stroke="#D4763C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="points" values="90,95 105,75 120,95;90,75 105,55 120,75;90,95 105,75 120,95" dur="1.5s" repeatCount="indefinite"/>
                    </polyline>
                  </g>
                  {/* Small files floating up */}
                  <rect x="60" y="110" width="16" height="20" rx="3" fill="#EAA060" opacity="0.7">
                    <animate attributeName="y" values="120;60;120" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="140" y="115" width="14" height="18" rx="3" fill="#D4763C" opacity="0.6">
                    <animate attributeName="y" values="125;55;125" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" repeatCount="indefinite"/>
                  </rect>
                </svg>
              </div>

              {/* Quiet Security - tall card */}
              <div 
                style={{
                  gridColumn: 'span 1',
                  gridRow: 'span 2',
                  background: '#1a1a1a',
                  borderRadius: '28px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Shield graphic */}
                <svg viewBox="0 0 80 90" style={{ width: '70px', height: '80px', marginBottom: '20px' }}>
                  <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4763C"/>
                      <stop offset="100%" stopColor="#EAA060"/>
                    </linearGradient>
                  </defs>
                  <path d="M40 5 L75 20 L75 45 C75 65 55 82 40 88 C25 82 5 65 5 45 L5 20 Z" fill="url(#shieldGrad)" opacity="0.2"/>
                  <path d="M40 5 L75 20 L75 45 C75 65 55 82 40 88 C25 82 5 65 5 45 L5 20 Z" fill="none" stroke="#D4763C" strokeWidth="2"/>
                  {/* Checkmark */}
                  <polyline points="25,45 35,55 55,35" fill="none" stroke="#D4763C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke-dasharray" values="0,100;50,100" dur="1s" fill="freeze"/>
                  </polyline>
                </svg>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '10px', fontFamily: "'Fraunces', serif" }}>Quiet Security</h3>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6 }}>End-to-end encryption that protects without paranoia.</p>
                </div>
              </div>

              {/* Lightning Fast - small horizontal */}
              <div 
                style={{
                  gridColumn: 'span 1',
                  gridRow: 'span 1',
                  background: 'linear-gradient(135deg, #D4763C 0%, #EAA060 100%)',
                  borderRadius: '28px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 118, 60, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg viewBox="0 0 40 50" style={{ width: '32px', height: '40px', marginBottom: '12px' }}>
                  <polygon points="22,0 8,22 18,22 14,50 32,18 20,18" fill="white"/>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#fff', fontFamily: "'Fraunces', serif" }}>Lightning Fast</h3>
              </div>

              {/* Easy Sharing - small */}
              <div 
                style={{
                  gridColumn: 'span 1',
                  gridRow: 'span 1',
                  background: '#F5F5F5',
                  borderRadius: '28px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.background = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = '#F5F5F5';
                }}
              >
                {/* Share icon with people */}
                <svg viewBox="0 0 50 40" style={{ width: '45px', height: '36px', marginBottom: '12px' }}>
                  <circle cx="10" cy="20" r="8" fill="#D4763C"/>
                  <circle cx="40" cy="10" r="6" fill="#EAA060"/>
                  <circle cx="40" cy="30" r="6" fill="#EAA060"/>
                  <line x1="18" y1="17" x2="32" y2="12" stroke="#D4763C" strokeWidth="2"/>
                  <line x1="18" y1="23" x2="32" y2="28" stroke="#D4763C" strokeWidth="2"/>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#1a1a1a', fontFamily: "'Fraunces', serif" }}>Easy Sharing</h3>
              </div>

              {/* Smart Organization - wide card */}
              <div 
                style={{
                  gridColumn: 'span 2',
                  gridRow: 'span 1',
                  background: 'linear-gradient(90deg, #FDF9F5 0%, #F5EDE5 100%)',
                  borderRadius: '28px',
                  padding: '32px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 118, 60, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px', fontFamily: "'Fraunces', serif" }}>Smart Organization</h3>
                  <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.5 }}>AI-powered folders that learn how you work.</p>
                </div>
                {/* Folder tree graphic */}
                <svg viewBox="0 0 140 80" style={{ width: '140px', height: '80px' }}>
                  {/* Main folder */}
                  <rect x="50" y="10" width="40" height="30" rx="4" fill="#D4763C"/>
                  <rect x="50" y="5" width="18" height="8" rx="2" fill="#D4763C"/>
                  {/* Lines to sub-folders */}
                  <line x1="70" y1="40" x2="70" y2="55" stroke="#D4763C" strokeWidth="2"/>
                  <line x1="30" y1="55" x2="110" y2="55" stroke="#D4763C" strokeWidth="2"/>
                  <line x1="30" y1="55" x2="30" y2="65" stroke="#D4763C" strokeWidth="2"/>
                  <line x1="70" y1="55" x2="70" y2="65" stroke="#D4763C" strokeWidth="2"/>
                  <line x1="110" y1="55" x2="110" y2="65" stroke="#D4763C" strokeWidth="2"/>
                  {/* Sub folders */}
                  <rect x="18" y="65" width="24" height="18" rx="3" fill="#EAA060" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="58" y="65" width="24" height="18" rx="3" fill="#EAA060" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.3s"/>
                  </rect>
                  <rect x="98" y="65" width="24" height="18" rx="3" fill="#EAA060" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.6s"/>
                  </rect>
                </svg>
              </div>

              {/* Always in Sync - medium */}
              <div 
                style={{
                  gridColumn: 'span 2',
                  gridRow: 'span 1',
                  background: '#1a1a1a',
                  borderRadius: '28px',
                  padding: '32px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#fff', marginBottom: '8px', fontFamily: "'Fraunces', serif" }}>Always in Sync</h3>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.5 }}>Real-time sync across unlimited devices.</p>
                </div>
                {/* Devices syncing graphic */}
                <svg viewBox="0 0 160 70" style={{ width: '160px', height: '70px' }}>
                  {/* Phone */}
                  <rect x="10" y="15" width="30" height="50" rx="5" fill="none" stroke="#D4763C" strokeWidth="2"/>
                  <circle cx="25" cy="58" r="3" fill="#D4763C"/>
                  {/* Laptop */}
                  <rect x="60" y="25" width="50" height="32" rx="3" fill="none" stroke="#D4763C" strokeWidth="2"/>
                  <path d="M55 57 L115 57 L120 65 L50 65 Z" fill="none" stroke="#D4763C" strokeWidth="2"/>
                  {/* Tablet */}
                  <rect x="130" y="20" width="25" height="38" rx="3" fill="none" stroke="#D4763C" strokeWidth="2"/>
                  {/* Sync arrows */}
                  <g>
                    <path d="M42 35 Q52 30 58 35" fill="none" stroke="#EAA060" strokeWidth="2" strokeLinecap="round">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                    </path>
                    <path d="M112 40 Q120 35 128 40" fill="none" stroke="#EAA060" strokeWidth="2" strokeLinecap="round">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
                    </path>
                  </g>
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS SECTION ============ */}
        <section ref={howItWorksRef} className="section" style={{
          minHeight: '100vh',
          padding: '120px 80px',
          background: 'linear-gradient(180deg, #FDF9F5 0%, #FFFFFF 100%)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#D4763C', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>How it works</p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: 400, color: '#1a1a1a', marginBottom: '20px' }}>
                Three steps to peace of mind
              </h2>
            </div>

            {/* Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '80px' }}>
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Fraunces', serif" }}>Drop your files</h3>
                <p style={{ fontSize: '15px', color: '#6B6B6B', lineHeight: 1.6 }}>Drag anything into Vesta. Photos, documents, videos—we handle it all.</p>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Fraunces', serif" }}>We keep it safe</h3>
                <p style={{ fontSize: '15px', color: '#6B6B6B', lineHeight: 1.6 }}>Encrypted, replicated, protected. Your files exist safely in multiple places.</p>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px', fontFamily: "'Fraunces', serif" }}>Access anywhere</h3>
                <p style={{ fontSize: '15px', color: '#6B6B6B', lineHeight: 1.6 }}>Phone, laptop, tablet. Your files follow you, always just a tap away.</p>
              </div>
            </div>

            {/* Demo Window */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="demo-window" style={{ width: '100%', maxWidth: '800px' }}>
                <div className="window-dots">
                  <div className="window-dot" style={{ background: '#3a3a3a' }}/>
                  <div className="window-dot" style={{ background: '#3a3a3a' }}/>
                  <div className="window-dot" style={{ background: '#3a3a3a' }}/>
                </div>
                <div style={{ padding: '32px', background: '#1a1a1a' }}>
                  {/* Fake file browser */}
                  <div style={{ display: 'flex', gap: '24px' }}>
                    {/* Sidebar */}
                    <div style={{ width: '180px' }}>
                      <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Access</p>
                      {['My Files', 'Shared', 'Recent', 'Favorites'].map((item, i) => (
                        <div key={i} className="file-item" style={{ padding: '10px 12px', borderRadius: '8px', marginBottom: '4px', color: i === 0 ? '#D4763C' : '#888', fontSize: '14px' }}>
                          {item}
                        </div>
                      ))}
                    </div>
                    {/* Main content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                        {[
                          { name: 'Photos', color: '#D4763C' },
                          { name: 'Documents', color: '#5B9BD5' },
                          { name: 'Projects', color: '#70C4A8' },
                          { name: 'Archive', color: '#9B8CD4' },
                        ].map((folder, i) => (
                          <div key={i} className="animated-folder" style={{
                            background: '#2a2a2a',
                            borderRadius: '12px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}>
                            <div style={{
                              width: '48px',
                              height: '40px',
                              background: folder.color,
                              borderRadius: '8px 8px 4px 4px',
                              margin: '0 auto 12px',
                              position: 'relative',
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '-6px',
                                left: '0',
                                width: '20px',
                                height: '8px',
                                background: folder.color,
                                borderRadius: '4px 4px 0 0',
                              }}/>
                            </div>
                            <p style={{ color: '#ccc', fontSize: '13px' }}>{folder.name}</p>
                          </div>
                        ))}
                      </div>
                      {/* Upload indicator */}
                      <div style={{ marginTop: '24px', background: '#2a2a2a', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #D4763C, #EAA060)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <CloudIcon />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ color: '#fff', fontSize: '14px', marginBottom: '8px' }}>Uploading vacation-photos.zip</p>
                          <div style={{ background: '#3a3a3a', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                            <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #D4763C, #EAA060)', borderRadius: '4px', animation: 'progressFill 2s ease-out forwards' }}/>
                          </div>
                        </div>
                        <p style={{ color: '#D4763C', fontSize: '14px', fontWeight: 500 }}>75%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABOUT/CTA SECTION ============ */}
        <section ref={aboutRef} className="section" style={{
          minHeight: '100vh',
          padding: '120px 80px',
          background: 'linear-gradient(165deg, #1a1a1a 0%, #2d2a26 100%)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              {/* Left - Text */}
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#D4763C', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Vesta</p>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: 400, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1 }}>
                  Built for people who have better things to do
                </h2>
                <p style={{ fontSize: '18px', color: '#999', lineHeight: 1.7, marginBottom: '20px' }}>
                  We believe storage should be invisible. Not another app demanding attention, but a quiet foundation that lets you focus on what matters.
                </p>
                <p style={{ fontSize: '18px', color: '#999', lineHeight: 1.7 }}>
                  Named after the Roman goddess of the hearth, Vesta keeps your digital home warm and safe—without the drama.
                </p>
              </div>

              {/* Right - Infographics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Globe with pins - Countries */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                className="stat-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 118, 60, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(212, 118, 60, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <svg viewBox="0 0 120 120" style={{ width: '100px', height: '100px', marginBottom: '16px' }}>
                    {/* Globe */}
                    <circle cx="60" cy="60" r="45" fill="none" stroke="#D4763C" strokeWidth="2" opacity="0.3"/>
                    <ellipse cx="60" cy="60" rx="45" ry="18" fill="none" stroke="#D4763C" strokeWidth="1.5" opacity="0.4"/>
                    <ellipse cx="60" cy="60" rx="18" ry="45" fill="none" stroke="#D4763C" strokeWidth="1.5" opacity="0.4"/>
                    <path d="M15 60 Q60 45 105 60" fill="none" stroke="#D4763C" strokeWidth="1" opacity="0.3"/>
                    <path d="M15 60 Q60 75 105 60" fill="none" stroke="#D4763C" strokeWidth="1" opacity="0.3"/>
                    {/* Pins */}
                    <circle cx="35" cy="45" r="4" fill="#D4763C">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="75" cy="40" r="4" fill="#EAA060">
                      <animate attributeName="r" values="4;6;4" dur="2.3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="85" cy="65" r="4" fill="#D4763C">
                      <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="45" cy="75" r="4" fill="#EAA060">
                      <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="60" cy="55" r="4" fill="#D4763C">
                      <animate attributeName="r" values="4;6;4" dur="2.1s" repeatCount="indefinite"/>
                    </circle>
                    {/* Pulse rings */}
                    <circle cx="35" cy="45" r="4" fill="none" stroke="#D4763C" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="85" cy="65" r="4" fill="none" stroke="#D4763C" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                      <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </circle>
                  </svg>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 500, color: '#D4763C', marginBottom: '4px' }}>150+</p>
                  <p style={{ fontSize: '14px', color: '#888' }}>Countries</p>
                </div>

                {/* Server uptime - gauge */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 118, 60, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(212, 118, 60, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <svg viewBox="0 0 120 120" style={{ width: '100px', height: '100px', marginBottom: '16px' }}>
                    {/* Gauge background */}
                    <path d="M20 80 A45 45 0 1 1 100 80" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round"/>
                    {/* Gauge fill */}
                    <path d="M20 80 A45 45 0 1 1 100 80" fill="none" stroke="url(#gaugeGradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180" strokeDashoffset="2">
                      <animate attributeName="stroke-dashoffset" from="180" to="2" dur="2s" fill="freeze"/>
                    </path>
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EAA060"/>
                        <stop offset="100%" stopColor="#D4763C"/>
                      </linearGradient>
                    </defs>
                    {/* Center dot */}
                    <circle cx="60" cy="70" r="6" fill="#D4763C"/>
                    {/* Tick marks */}
                    <line x1="28" y1="45" x2="33" y2="50" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="60" y1="28" x2="60" y2="35" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="92" y1="45" x2="87" y2="50" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 500, color: '#D4763C', marginBottom: '4px' }}>99.9%</p>
                  <p style={{ fontSize: '14px', color: '#888' }}>Uptime</p>
                </div>

                {/* Users - people icons */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 118, 60, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(212, 118, 60, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <svg viewBox="0 0 120 100" style={{ width: '100px', height: '85px', marginBottom: '16px' }}>
                    {/* Row 1 - 3 people */}
                    <g opacity="0.4">
                      <circle cx="30" cy="20" r="8" fill="#D4763C"/>
                      <path d="M18 45 Q30 35 42 45" fill="#D4763C"/>
                    </g>
                    <g opacity="0.6">
                      <circle cx="60" cy="20" r="8" fill="#D4763C"/>
                      <path d="M48 45 Q60 35 72 45" fill="#D4763C"/>
                    </g>
                    <g opacity="0.4">
                      <circle cx="90" cy="20" r="8" fill="#D4763C"/>
                      <path d="M78 45 Q90 35 102 45" fill="#D4763C"/>
                    </g>
                    {/* Row 2 - 2 people */}
                    <g opacity="0.8">
                      <circle cx="45" cy="55" r="10" fill="#EAA060"/>
                      <path d="M30 85 Q45 72 60 85" fill="#EAA060"/>
                    </g>
                    <g opacity="1">
                      <circle cx="75" cy="55" r="10" fill="#D4763C"/>
                      <path d="M60 85 Q75 72 90 85" fill="#D4763C"/>
                    </g>
                    {/* Animated plus signs for growing */}
                    <text x="105" y="25" fill="#D4763C" fontSize="16" fontWeight="bold">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
                      +
                    </text>
                  </svg>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 500, color: '#D4763C', marginBottom: '4px' }}>50K+</p>
                  <p style={{ fontSize: '14px', color: '#888' }}>Happy users</p>
                </div>

                {/* Files - stacking documents */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 118, 60, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(212, 118, 60, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <svg viewBox="0 0 120 100" style={{ width: '100px', height: '85px', marginBottom: '16px' }}>
                    {/* Stacked files with animation */}
                    <g>
                      <rect x="25" y="50" width="50" height="40" rx="4" fill="#333" stroke="#D4763C" strokeWidth="1.5" opacity="0.5"/>
                      <line x1="32" y1="62" x2="55" y2="62" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="32" y1="72" x2="50" y2="72" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    <g>
                      <rect x="35" y="40" width="50" height="40" rx="4" fill="#2a2a2a" stroke="#D4763C" strokeWidth="1.5" opacity="0.7"/>
                      <line x1="42" y1="52" x2="65" y2="52" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="42" y1="62" x2="60" y2="62" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    <g>
                      <rect x="45" y="30" width="50" height="40" rx="4" fill="#1a1a1a" stroke="#D4763C" strokeWidth="2"/>
                      <line x1="52" y1="42" x2="75" y2="42" stroke="#EAA060" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="52" y1="52" x2="70" y2="52" stroke="#D4763C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="52" y1="62" x2="80" y2="62" stroke="#EAA060" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                    </g>
                    {/* Floating new file */}
                    <g>
                      <rect x="70" y="10" width="35" height="28" rx="3" fill="#D4763C" opacity="0.9">
                        <animate attributeName="y" values="10;20;10" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      <line x1="76" y1="18" x2="92" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7">
                        <animate attributeName="y1" values="18;28;18" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="18;28;18" dur="3s" repeatCount="indefinite"/>
                      </line>
                      <line x1="76" y1="26" x2="88" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5">
                        <animate attributeName="y1" values="26;36;26" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="26;36;26" dur="3s" repeatCount="indefinite"/>
                      </line>
                    </g>
                  </svg>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 500, color: '#D4763C', marginBottom: '4px' }}>2B+</p>
                  <p style={{ fontSize: '14px', color: '#888' }}>Files stored</p>
                </div>
              </div>
            </div>

            {/* ============ PRICING TIERS ============ */}
            <div style={{ marginTop: '100px' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#D4763C', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Simple Pricing</p>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '36px', fontWeight: 400, color: '#fff' }}>Choose your plan</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
                
                {/* Free Tier */}
                <div 
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon */}
                  <svg viewBox="0 0 50 50" style={{ width: '48px', height: '48px', marginBottom: '24px' }}>
                    <circle cx="25" cy="25" r="22" fill="none" stroke="#666" strokeWidth="2"/>
                    <path d="M25 12 L25 25 L34 30" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <h4 style={{ fontSize: '24px', fontWeight: 500, color: '#fff', marginBottom: '8px', fontFamily: "'Fraunces', serif" }}>Starter</h4>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>For personal projects</p>
                  <div style={{ marginBottom: '32px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 600, color: '#fff' }}>$0</span>
                    <span style={{ fontSize: '16px', color: '#666' }}>/month</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['15 GB storage', '2 devices', 'Basic sharing', 'Community support'].map((feature, i) => (
                      <li key={i} style={{ fontSize: '15px', color: '#888', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg viewBox="0 0 20 20" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                          <polyline points="4,10 8,14 16,6" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pro Tier - Highlighted */}
                <div 
                  style={{
                    background: 'linear-gradient(165deg, rgba(212,118,60,0.25) 0%, rgba(234,160,96,0.15) 100%)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    border: '2px solid rgba(212,118,60,0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    position: 'relative',
                    transform: 'scale(1.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(212,118,60,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Popular badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #D4763C, #EAA060)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '6px 16px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>Most Popular</div>
                  {/* Icon */}
                  <svg viewBox="0 0 50 50" style={{ width: '48px', height: '48px', marginBottom: '24px' }}>
                    <polygon points="25,5 30,18 44,18 33,27 37,41 25,32 13,41 17,27 6,18 20,18" fill="none" stroke="#D4763C" strokeWidth="2"/>
                    <polygon points="25,12 28,20 37,20 30,26 32,35 25,29 18,35 20,26 13,20 22,20" fill="#D4763C" opacity="0.3"/>
                  </svg>
                  <h4 style={{ fontSize: '24px', fontWeight: 500, color: '#fff', marginBottom: '8px', fontFamily: "'Fraunces', serif" }}>Pro</h4>
                  <p style={{ fontSize: '14px', color: '#999', marginBottom: '24px' }}>For power users</p>
                  <div style={{ marginBottom: '32px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 600, color: '#D4763C' }}>$9</span>
                    <span style={{ fontSize: '16px', color: '#888' }}>/month</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['500 GB storage', 'Unlimited devices', 'Advanced sharing', 'Priority support', '30-day version history'].map((feature, i) => (
                      <li key={i} style={{ fontSize: '15px', color: '#ccc', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg viewBox="0 0 20 20" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                          <polyline points="4,10 8,14 16,6" fill="none" stroke="#D4763C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team Tier */}
                <div 
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Icon */}
                  <svg viewBox="0 0 50 50" style={{ width: '48px', height: '48px', marginBottom: '24px' }}>
                    <circle cx="16" cy="16" r="8" fill="none" stroke="#666" strokeWidth="2"/>
                    <circle cx="34" cy="16" r="8" fill="none" stroke="#666" strokeWidth="2"/>
                    <circle cx="25" cy="34" r="8" fill="none" stroke="#888" strokeWidth="2"/>
                    <line x1="16" y1="24" x2="21" y2="28" stroke="#666" strokeWidth="1.5"/>
                    <line x1="34" y1="24" x2="29" y2="28" stroke="#666" strokeWidth="1.5"/>
                  </svg>
                  <h4 style={{ fontSize: '24px', fontWeight: 500, color: '#fff', marginBottom: '8px', fontFamily: "'Fraunces', serif" }}>Team</h4>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>For growing teams</p>
                  <div style={{ marginBottom: '32px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 600, color: '#fff' }}>$19</span>
                    <span style={{ fontSize: '16px', color: '#666' }}>/user/mo</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['2 TB storage', 'Team workspaces', 'Admin controls', 'SSO & audit logs', 'Dedicated support'].map((feature, i) => (
                      <li key={i} style={{ fontSize: '15px', color: '#888', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg viewBox="0 0 20 20" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                          <polyline points="4,10 8,14 16,6" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Final CTA */}
              <div style={{ textAlign: 'center' }}>
                <button 
                  className="btn-primary" 
                  style={{ 
                    background: 'linear-gradient(135deg, #D4763C, #EAA060)', 
                    padding: '18px 48px', 
                    fontSize: '16px',
                    boxShadow: '0 8px 32px rgba(212,118,60,0.3)',
                  }} 
                  onClick={() => scrollTo(heroRef)}
                >
                  Get started for free
                </button>
                <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>No credit card required</p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="logo-container" style={{ color: '#fff' }} onClick={() => scrollTo(heroRef)}>
                <VaseLogo />
                Vesta
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>© 2026 Vesta. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <span style={{ fontSize: '14px', color: '#888', cursor: 'pointer' }}>Privacy</span>
                <span style={{ fontSize: '14px', color: '#888', cursor: 'pointer' }}>Terms</span>
                <span style={{ fontSize: '14px', color: '#888', cursor: 'pointer' }}>Contact</span>
              </div>
            </div>

            {/* Design Language CTA */}
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <button
                onClick={() => scrollTo(designLanguageRef)}
                style={{
                  background: 'transparent',
                  border: '2px solid #D4763C',
                  borderRadius: '40px',
                  padding: '20px 40px',
                  color: '#D4763C',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: "'Fraunces', serif",
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 0 30px rgba(212, 118, 60, 0.3), inset 0 0 30px rgba(212, 118, 60, 0.1)',
                  animation: 'pulseGlow 3s ease-in-out infinite',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #D4763C, #EAA060)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 118, 60, 0.5), 0 20px 40px rgba(212, 118, 60, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#D4763C';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 118, 60, 0.3), inset 0 0 30px rgba(212, 118, 60, 0.1)';
                }}
              >
                ✦ Explore the Design Language of this Case Study
              </button>
            </div>
          </div>
        </section>

        {/* ============ DESIGN LANGUAGE SECTION ============ */}
        <section ref={designLanguageRef} className="section" style={{
          minHeight: '100vh',
          padding: '120px 80px',
          background: 'linear-gradient(180deg, #FFFBF7 0%, #FFF8F2 50%, #FFFFFF 100%)',
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, rgba(212,118,60,0.1), rgba(234,160,96,0.1))',
                padding: '12px 24px',
                borderRadius: '30px',
                marginBottom: '24px',
              }}>
                <span style={{ fontSize: '14px', color: '#D4763C', fontWeight: 500, letterSpacing: '0.05em' }}>CASE STUDY</span>
              </div>
              <h2 style={{ 
                fontFamily: "'Fraunces', serif", 
                fontSize: '52px', 
                fontWeight: 400, 
                color: '#1a1a1a', 
                marginBottom: '20px',
                lineHeight: 1.1,
              }}>
                Design Language
              </h2>
              <p style={{ fontSize: '18px', color: '#6B6B6B', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                The philosophy, decisions, and visual system behind Vesta's warm, approachable identity.
              </p>
            </div>

            {/* Designer Testimonial */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '32px',
              padding: '48px',
              marginBottom: '60px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              border: '1px solid rgba(212,118,60,0.1)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '48px',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #D4763C, #EAA060)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: '#fff' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p style={{ 
                fontSize: '20px', 
                color: '#1a1a1a', 
                lineHeight: 1.8, 
                marginBottom: '32px',
                fontStyle: 'italic',
              }}>
                "Every storage app defaults to the same visual language—dark interfaces, vault imagery, lock icons, 'military-grade encryption' copy. It's all <span style={{ color: '#D4763C', fontWeight: 500 }}>anxiety-based design</span>, constantly reminding users their files <em>could</em> be at risk. I wanted to flip that entirely. What if storage felt like <span style={{ color: '#D4763C', fontWeight: 500 }}>home</span>? Not a fortress, but a quiet place where your things simply <em>belong</em>. The most secure feeling isn't a locked vault—it's the comfort of knowing everything is exactly where you left it, without having to think about it."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #D4763C, #EAA060)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: '#fff',
                  fontFamily: "'Fraunces', serif",
                }}>I</div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Issa Mohamed</p>
                  <p style={{ fontSize: '14px', color: '#6B6B6B', margin: 0 }}>UX Designer & Developer</p>
                </div>
              </div>
            </div>

            {/* Philosophy Points */}
            <div style={{ display: 'grid', gap: '24px', marginBottom: '80px' }}>
              
              {/* Philosophy 1 - Already Safe */}
              <div 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,118,60,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04)';
                }}
              >
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: 'rgba(212,118,60,0.1)', 
                    padding: '8px 16px', 
                    borderRadius: '20px', 
                    marginBottom: '16px',
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#D4763C', letterSpacing: '0.05em' }}>CORE PHILOSOPHY</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px' }}>
                    "Already Safe"
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: 1.7 }}>
                    The guiding principle behind Vesta. Rather than constantly reminding users about security threats, we communicate safety through <strong>absence of anxiety</strong>. Your files aren't "protected"—they're simply <em>here</em>. Always.
                  </p>
                </div>
                <div style={{ 
                  background: 'linear-gradient(145deg, #FDF5ED, #FAE8D8)', 
                  borderRadius: '20px', 
                  padding: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg viewBox="0 0 120 120" style={{ width: '120px', height: '120px' }}>
                    {/* Soft home shape */}
                    <path d="M60 20 L100 50 L100 95 L20 95 L20 50 Z" fill="none" stroke="#D4763C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M45 95 L45 70 L75 70 L75 95" fill="none" stroke="#D4763C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Heart inside */}
                    <path d="M60 55 C55 45 42 45 42 58 C42 70 60 80 60 80 C60 80 78 70 78 58 C78 45 65 45 60 55" fill="#D4763C" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                </div>
              </div>

              {/* Philosophy 2 - Warm Orange */}
              <div 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,118,60,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ 
                  background: 'linear-gradient(165deg, #F5D4A8 0%, #E89850 50%, #DC8040 100%)', 
                  borderRadius: '20px', 
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#D4763C', borderRadius: '12px' }}/>
                    <div style={{ width: '48px', height: '48px', background: '#EAA060', borderRadius: '12px' }}/>
                    <div style={{ width: '48px', height: '48px', background: '#F5D4A8', borderRadius: '12px' }}/>
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', textAlign: 'center' }}>Vesta Orange · Peach · Cream</p>
                </div>
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: 'rgba(212,118,60,0.1)', 
                    padding: '8px 16px', 
                    borderRadius: '20px', 
                    marginBottom: '16px',
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#D4763C', letterSpacing: '0.05em' }}>SIGNATURE COLOR</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px' }}>
                    Ambient Warmth
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: 1.7 }}>
                    We deliberately avoided the blues, greens, and dark palettes typical of storage apps. Warm orange evokes <strong>golden hour light</strong>—the feeling of afternoon sun in a comfortable room. Storage as <em>domestic comfort</em>, not corporate infrastructure.
                  </p>
                </div>
              </div>

              {/* Philosophy 3 - Glassmorphism & Floating UI */}
              <div 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '40px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,118,60,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04)';
                }}
              >
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: 'rgba(212,118,60,0.1)', 
                    padding: '8px 16px', 
                    borderRadius: '20px', 
                    marginBottom: '16px',
                  }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#D4763C', letterSpacing: '0.05em' }}>VISUAL LANGUAGE</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px' }}>
                    Floating & Breathing
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B6B6B', lineHeight: 1.7 }}>
                    The UI elements hover weightlessly over warm gradients—no hard edges, no rigid grids. Testimonials and status cards <strong>float and breathe</strong> with subtle animations, creating a sense of <em>living space</em> rather than static interface. Everything feels approachable, touchable, human.
                  </p>
                </div>
                <div style={{ 
                  background: 'linear-gradient(165deg, #F5D4A8 0%, #E89850 50%, #DC8040 100%)', 
                  borderRadius: '20px', 
                  padding: '32px',
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                }}>
                  {/* Floating orbs */}
                  <div style={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,200,150,0.2))',
                    top: '15%',
                    right: '20%',
                    animation: 'float1 4s ease-in-out infinite',
                  }}/>
                  <div style={{
                    position: 'absolute',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,180,130,0.2))',
                    bottom: '25%',
                    left: '15%',
                    animation: 'float2 5s ease-in-out infinite',
                  }}/>
                  {/* Mini floating card */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    boxShadow: '0 8px 32px rgba(180,100,50,0.2)',
                    animation: 'float1 3s ease-in-out infinite',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #D4763C, #EAA060)', borderRadius: '8px' }}/>
                      <div>
                        <p style={{ fontSize: '12px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>Everything synced</p>
                        <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>Just now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy 4 - Contrast to Industry */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a, #2d2a26)',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ 
                  display: 'inline-block',
                  background: 'rgba(212,118,60,0.2)', 
                  padding: '8px 16px', 
                  borderRadius: '20px', 
                  marginBottom: '24px',
                }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#D4763C', letterSpacing: '0.05em' }}>INDUSTRY CONTRAST</span>
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 400, color: '#fff', marginBottom: '24px' }}>
                  Subverting the Category
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  <div>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Traditional Storage</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Dark, serious interfaces',
                        'Lock & shield iconography',
                        '"Secure" "Protected" "Encrypted"',
                        'Cold competence',
                        'Anxiety-based trust signals',
                      ].map((item, i) => (
                        <li key={i} style={{ fontSize: '15px', color: '#888', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: '#666' }}>✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#D4763C', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vesta's Approach</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Light, warm, airy',
                        'Organic shapes, soft containers',
                        '"Always there" "Right where you left it"',
                        'Quiet confidence',
                        'Human trust through warmth',
                      ].map((item, i) => (
                        <li key={i} style={{ fontSize: '15px', color: '#ccc', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: '#D4763C' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Back to Top */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => scrollTo(heroRef)}
                style={{
                  background: 'linear-gradient(135deg, #D4763C, #EAA060)',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '16px 32px',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(212,118,60,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(212,118,60,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,118,60,0.3)';
                }}
              >
                ↑ Back to Vesta
              </button>
              <p style={{ marginTop: '24px', fontSize: '14px', color: '#999' }}>
                Designed & developed by <span style={{ color: '#D4763C' }}>Issa Mohamed</span> · 2026
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default VestaLanding;
