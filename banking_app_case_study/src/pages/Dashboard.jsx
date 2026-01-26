import React, { useState, useEffect } from 'react';

// Simulated portfolio data for the graph
const portfolioData = [
  { date: 'Jan 1', value: 12400, label: 'Jan' },
  { date: 'Jan 8', value: 12650 },
  { date: 'Jan 15', value: 12300 },
  { date: 'Jan 22', value: 13100 },
  { date: 'Feb 1', value: 12800, label: 'Feb' },
  { date: 'Feb 8', value: 13400 },
  { date: 'Feb 15', value: 14200 },
  { date: 'Feb 22', value: 13900 },
  { date: 'Mar 1', value: 14600, label: 'Mar' },
  { date: 'Mar 8', value: 15100 },
  { date: 'Mar 15', value: 14800 },
  { date: 'Mar 22', value: 15400 },
  { date: 'Apr 1', value: 15800, label: 'Apr' },
  { date: 'Apr 8', value: 16200 },
  { date: 'Apr 15', value: 15900 },
  { date: 'Apr 22', value: 16800 },
  { date: 'May 1', value: 17200, label: 'May' },
  { date: 'May 8', value: 16900 },
  { date: 'May 15', value: 17600 },
  { date: 'May 22', value: 18100 },
  { date: 'Jun 1', value: 17800, label: 'Jun' },
  { date: 'Jun 8', value: 18400 },
  { date: 'Jun 15', value: 19200 },
  { date: 'Jun 22', value: 18847.32 },
];

const transactions = [
  { id: 1, name: 'Apple Store', category: 'Shopping', amount: -149.99, date: 'Today', iconType: 'apple' },
  { id: 2, name: 'Salary Deposit', category: 'Income', amount: 4200.00, date: 'Yesterday', iconType: 'income' },
  { id: 3, name: 'Netflix', category: 'Entertainment', amount: -15.99, date: 'Jun 20', iconType: 'entertainment' },
  { id: 4, name: 'Whole Foods', category: 'Groceries', amount: -87.34, date: 'Jun 19', iconType: 'groceries' },
  { id: 5, name: 'Uber', category: 'Transport', amount: -24.50, date: 'Jun 18', iconType: 'transport' },
  { id: 6, name: 'Bitcoin Purchase', category: 'Crypto', amount: -500.00, date: 'Jun 17', iconType: 'crypto' },
];

const spendingCategories = [
  { name: 'Shopping', amount: 1240, color: '#0078d4', percent: 32 },
  { name: 'Food & Dining', amount: 680, color: '#8b5cf6', percent: 18 },
  { name: 'Transport', amount: 420, color: '#ec4899', percent: 11 },
  { name: 'Entertainment', amount: 320, color: '#10b981', percent: 8 },
  { name: 'Subscriptions', amount: 180, color: '#f59e0b', percent: 5 },
  { name: 'Other', amount: 1010, color: '#6b7280', percent: 26 },
];

// Transaction Icons - Custom SVG for each category
const TransactionIcons = {
  apple: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C9.5 2 8 4 8 4s-1 1.5-1 4c0 3.5 2 6 5 6s5-2.5 5-6c0-2.5-1-4-1-4s-1.5-2-4-2z" />
      <path d="M12 2c0 0 1-1 2-1" strokeLinecap="round" />
      <path d="M8 14c-2 1-3 3-3 5s1 3 3 3c1.5 0 2.5-.5 4-1.5 1.5 1 2.5 1.5 4 1.5 2 0 3-1 3-3s-1-4-3-5" />
    </svg>
  ),
  income: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <circle cx="12" cy="14" r="2" />
      <path d="M7 14h.01M17 14h.01" strokeLinecap="round" />
    </svg>
  ),
  entertainment: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polygon points="10,8 10,16 16,12" fill="currentColor" opacity="0.3" stroke="none" />
      <polygon points="10,8 10,16 16,12" fill="none" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  ),
  groceries: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  transport: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 17a2 2 0 104 0 2 2 0 10-4 0M15 17a2 2 0 104 0 2 2 0 10-4 0" />
      <path d="M5 17H3v-4l2-5h9l4 5h3v4h-2" />
      <path d="M9 17h6" />
      <path d="M14 8V5" />
    </svg>
  ),
  crypto: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v2m0 8v2" strokeLinecap="round" />
      <path d="M9 10c0-1.5 1.3-2 3-2s3 .5 3 2c0 1.5-1.5 2-3 2s-3 .5-3 2c0 1.5 1.3 2 3 2s3-.5 3-2" strokeLinecap="round" />
    </svg>
  ),
  shopping: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
};

// Navigation Icons
const Icons = {
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
    </svg>
  ),
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  Card: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <path d="M1 10h22" />
    </svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
    </svg>
  ),
  Send: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  TrendUp: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 6l-9.5 9.5-5-5L1 18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  TrendDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 18l-9.5-9.5-5 5L1 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 18h6v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Plus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  Crypto: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v2m0 8v2" strokeLinecap="round" />
      <path d="M9 10c0-1.5 1.5-2 3-2s3 .5 3 2c0 1.5-1.5 2-3 2s-3 .5-3 2c0 1.5 1.5 2 3 2s3-.5 3-2" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// Portfolio Chart Component
const PortfolioChart = ({ data, hoveredIndex, setHoveredIndex }) => {
  const width = 700;
  const height = 280;
  const padding = { top: 40, right: 20, bottom: 40, left: 20 };
  
  const values = data.map(d => d.value);
  const minValue = Math.min(...values) * 0.98;
  const maxValue = Math.max(...values) * 1.02;
  
  const xScale = (i) => padding.left + (i / (data.length - 1)) * (width - padding.left - padding.right);
  const yScale = (v) => height - padding.bottom - ((v - minValue) / (maxValue - minValue)) * (height - padding.top - padding.bottom);
  
  const createPath = () => {
    let path = `M ${xScale(0)} ${yScale(data[0].value)}`;
    for (let i = 1; i < data.length; i++) {
      const x0 = xScale(i - 1);
      const y0 = yScale(data[i - 1].value);
      const x1 = xScale(i);
      const y1 = yScale(data[i].value);
      const cpx = (x0 + x1) / 2;
      path += ` C ${cpx} ${y0}, ${cpx} ${y1}, ${x1} ${y1}`;
    }
    return path;
  };
  
  const createAreaPath = () => {
    let path = createPath();
    path += ` L ${xScale(data.length - 1)} ${height - padding.bottom}`;
    path += ` L ${xScale(0)} ${height - padding.bottom} Z`;
    return path;
  };
  
  const isPositive = data[data.length - 1].value > data[0].value;
  const lineColor = isPositive ? '#10b981' : '#ef4444';
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }} onMouseLeave={() => setHoveredIndex(null)}>
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path d={createAreaPath()} fill="url(#chartGradient)" />
        <path d={createPath()} fill="none" stroke={lineColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
        {data.map((point, i) => (
          <rect key={i} x={xScale(i) - (width / data.length) / 2} y={padding.top} width={width / data.length} height={height - padding.top - padding.bottom} fill="transparent" onMouseEnter={() => setHoveredIndex(i)} style={{ cursor: 'crosshair' }} />
        ))}
        {hoveredIndex !== null && (
          <g>
            <line x1={xScale(hoveredIndex)} y1={padding.top} x2={xScale(hoveredIndex)} y2={height - padding.bottom} stroke={lineColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            <circle cx={xScale(hoveredIndex)} cy={yScale(data[hoveredIndex].value)} r="8" fill={lineColor} opacity="0.2" />
            <circle cx={xScale(hoveredIndex)} cy={yScale(data[hoveredIndex].value)} r="5" fill="#fff" stroke={lineColor} strokeWidth="2" />
          </g>
        )}
        {data.filter(d => d.label).map((point, i) => {
          const index = data.findIndex(d => d === point);
          return <text key={i} x={xScale(index)} y={height - 10} textAnchor="middle" fill="#8b95a1" fontSize="12" fontWeight="500">{point.label}</text>;
        })}
      </svg>
    </div>
  );
};

// Sidebar Navigation Item
const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', background: active ? 'rgba(0, 120, 212, 0.1)' : 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s ease', color: active ? '#0078d4' : '#5c6370', fontSize: '14px', fontWeight: active ? '600' : '500' }}>
    <Icon />
    <span>{label}</span>
  </button>
);

// Stat Card Component
const StatCard = ({ title, value, change, positive, icon: Icon }) => (
  <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '16px', padding: '20px', flex: 1, minWidth: '180px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
      <span style={{ fontSize: '13px', color: '#8b95a1', fontWeight: '500' }}>{title}</span>
      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0, 120, 212, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0078d4' }}><Icon /></div>
    </div>
    <div style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: '4px' }}>{value}</div>
    {change && (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: positive ? '#10b981' : '#ef4444', fontWeight: '500' }}>
        {positive ? <Icons.TrendUp /> : <Icons.TrendDown />}
        <span>{change}</span>
        <span style={{ color: '#8b95a1', marginLeft: '4px' }}>vs last month</span>
      </div>
    )}
  </div>
);

// Transaction Item Component
const TransactionItem = ({ transaction }) => {
  const IconComponent = TransactionIcons[transaction.iconType] || TransactionIcons.shopping;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0078d4' }}><IconComponent /></div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e', marginBottom: '2px' }}>{transaction.name}</div>
          <div style={{ fontSize: '12px', color: '#8b95a1' }}>{transaction.category} • {transaction.date}</div>
        </div>
      </div>
      <div style={{ fontSize: '15px', fontWeight: '600', color: transaction.amount > 0 ? '#10b981' : '#1a1a2e' }}>{transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
    </div>
  );
};

// Spending Category Bar
const SpendingBar = ({ category, maxAmount }) => (
  <div style={{ marginBottom: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
      <span style={{ fontSize: '13px', fontWeight: '500', color: '#1a1a2e' }}>{category.name}</span>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#5c6370' }}>${category.amount.toLocaleString()}</span>
    </div>
    <div style={{ height: '8px', background: 'rgba(0, 0, 0, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${(category.amount / maxAmount) * 100}%`, background: category.color, borderRadius: '4px', transition: 'width 0.5s ease' }} />
    </div>
  </div>
);

// Quick Action Button
const QuickAction = ({ icon: Icon, label }) => (
  <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '16px', background: 'transparent', border: 'none', borderRadius: '12px', cursor: 'pointer', flex: 1 }}>
    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #0078d4 0%, #106ebe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 14px rgba(0, 120, 212, 0.3)' }}><Icon /></div>
    <span style={{ fontSize: '12px', fontWeight: '500', color: '#5c6370' }}>{label}</span>
  </button>
);

// Main Dashboard Component
const VaultDashboard = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('6M');
  const [animatedValue, setAnimatedValue] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const currentValue = hoveredIndex !== null ? portfolioData[hoveredIndex].value : portfolioData[portfolioData.length - 1].value;
  const currentDate = hoveredIndex !== null ? portfolioData[hoveredIndex].date : 'Today';
  const percentChange = ((portfolioData[portfolioData.length - 1].value - portfolioData[0].value) / portfolioData[0].value * 100).toFixed(2);
  const dollarChange = (portfolioData[portfolioData.length - 1].value - portfolioData[0].value).toFixed(2);
  
  useEffect(() => {
    const duration = 500;
    const startValue = animatedValue;
    const endValue = currentValue;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(startValue + (endValue - startValue) * easeOut);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [currentValue]);

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'];
  const maxSpending = Math.max(...spendingCategories.map(c => c.amount));

  return (
    <div style={{ minHeight: '100vh', background: `radial-gradient(ellipse at 15% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 85% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 45%), radial-gradient(ellipse at 50% 90%, rgba(236, 72, 153, 0.05) 0%, transparent 40%), linear-gradient(180deg, #f0f4f8 0%, #e8eef4 100%)`, fontFamily: "'Segoe UI Variable', 'SF Pro Display', -apple-system, system-ui, sans-serif", display: 'flex' }}>
      
      {/* Overlay */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(4px)', zIndex: 90 }} />}
      
      {/* Sidebar */}
      <aside style={{ width: '240px', height: '100vh', position: 'fixed', left: sidebarOpen ? 0 : -240, top: 0, padding: '24px 16px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', borderRight: '1px solid rgba(255, 255, 255, 0.5)', display: 'flex', flexDirection: 'column', zIndex: 100, transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: sidebarOpen ? '4px 0 24px rgba(0, 0, 0, 0.1)' : 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', marginBottom: '32px' }}>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#0078d4', letterSpacing: '-0.02em' }}>vault<span style={{ color: '#1a1a2e' }}>.</span></div>
          <button onClick={() => setSidebarOpen(false)} style={{ width: '32px', height: '32px', borderRadius: '8px', border: 'none', background: 'rgba(0, 0, 0, 0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5c6370' }}><Icons.ChevronLeft /></button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          <NavItem icon={Icons.Home} label="Dashboard" active={activeNav === 'home'} onClick={() => setActiveNav('home')} />
          <NavItem icon={Icons.Card} label="Cards" active={activeNav === 'cards'} onClick={() => setActiveNav('cards')} />
          <NavItem icon={Icons.Chart} label="Analytics" active={activeNav === 'analytics'} onClick={() => setActiveNav('analytics')} />
          <NavItem icon={Icons.Crypto} label="Crypto" active={activeNav === 'crypto'} onClick={() => setActiveNav('crypto')} />
          <NavItem icon={Icons.Send} label="Transfers" active={activeNav === 'transfers'} onClick={() => setActiveNav('transfers')} />
          <div style={{ flex: 1 }} />
          <NavItem icon={Icons.Settings} label="Settings" active={activeNav === 'settings'} onClick={() => setActiveNav('settings')} />
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', marginTop: '16px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '14px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #0078d4 0%, #8b5cf6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '600', fontSize: '14px' }}>AM</div>
          <div><div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e' }}>Alex Morgan</div><div style={{ fontSize: '12px', color: '#8b95a1' }}>Premium</div></div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '24px 40px', minHeight: '100vh' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setSidebarOpen(true)} style={{ width: '44px', height: '44px', borderRadius: '12px', border: 'none', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}><Icons.Menu /></button>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: '4px' }}>Good morning, Alex</h1>
              <p style={{ fontSize: '14px', color: '#8b95a1' }}>Here's what's happening with your finances today.</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ width: '44px', height: '44px', borderRadius: '12px', border: 'none', background: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5c6370', position: 'relative' }}><Icons.Bell /><div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} /></button>
            <button onClick={() => setSidebarOpen(true)} style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #0078d4 0%, #8b5cf6 100%)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '600', fontSize: '14px' }}>AM</button>
          </div>
        </header>
        
        {/* Stats Cards */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <StatCard title="Total Balance" value={`$${animatedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} change={`+${percentChange}%`} positive={true} icon={Icons.Chart} />
          <StatCard title="Cash" value="$8,234.56" change="+$1,240" positive={true} icon={Icons.Card} />
          <StatCard title="Crypto" value="$10,612.76" change="+12.4%" positive={true} icon={Icons.Crypto} />
          <StatCard title="Monthly Spending" value="$3,850.00" change="-8.2%" positive={true} icon={Icons.TrendDown} />
        </div>
        
        {/* Main Chart Section */}
        <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#8b95a1', fontWeight: '500', marginBottom: '4px' }}>Portfolio Value • {currentDate}</div>
              <div style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a2e', letterSpacing: '-0.03em', lineHeight: 1 }}>${animatedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', color: '#10b981', fontSize: '14px', fontWeight: '600' }}><Icons.TrendUp />+{percentChange}%</span>
                <span style={{ color: '#8b95a1', fontSize: '14px' }}>+${Number(dollarChange).toLocaleString()} this period</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px', padding: '4px' }}>
              {timeframes.map(tf => (
                <button key={tf} onClick={() => setSelectedTimeframe(tf)} style={{ padding: '8px 14px', fontSize: '13px', fontWeight: '600', color: selectedTimeframe === tf ? '#fff' : '#5c6370', background: selectedTimeframe === tf ? '#0078d4' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>{tf}</button>
              ))}
            </div>
          </div>
          <PortfolioChart data={portfolioData} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        </div>
        
        {/* Bottom Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px' }}>
          {/* Transactions */}
          <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Recent Transactions</h2>
              <button style={{ fontSize: '13px', fontWeight: '600', color: '#0078d4', background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
            </div>
            <div>{transactions.map(tx => <TransactionItem key={tx.id} transaction={tx} />)}</div>
          </div>
          
          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Quick Actions */}
            <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '16px' }}>Quick Actions</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <QuickAction icon={Icons.Send} label="Send" />
                <QuickAction icon={Icons.Plus} label="Add Money" />
                <QuickAction icon={Icons.Crypto} label="Buy Crypto" />
                <QuickAction icon={Icons.Card} label="New Card" />
              </div>
            </div>
            
            {/* Spending */}
            <div style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '24px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>Spending Breakdown</h2>
                <span style={{ fontSize: '13px', color: '#8b95a1' }}>June 2025</span>
              </div>
              {spendingCategories.map((cat, i) => <SpendingBar key={i} category={cat} maxAmount={maxSpending} />)}
              <div style={{ marginTop: '20px', padding: '16px', background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.06) 0%, rgba(139, 92, 246, 0.06) 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div><div style={{ fontSize: '13px', color: '#5c6370', marginBottom: '2px' }}>Total spent this month</div><div style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a2e' }}>$3,850.00</div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10b981', fontSize: '13px', fontWeight: '600' }}><Icons.TrendDown />8.2% less than last month</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VaultDashboard;