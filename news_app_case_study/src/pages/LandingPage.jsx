import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PenguinPress = () => {
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [tickerOffset, setTickerOffset] = useState(0);
  const [yourNewsExpanded, setYourNewsExpanded] = useState(true);

  const marketData = [
    { name: 'S&P 500', value: '6,940.64', change: -0.55, down: true },
    { name: 'Nasdaq', value: '23,529.04', change: -1.38, down: true },
    { name: 'B500', value: '2,504.90', change: -0.65, down: true },
    { name: 'US 10 Yr', value: '4.22', change: 0.00, down: false },
    { name: 'Crude Oil', value: '65.31', change: 3.32, down: false },
    { name: 'FTSE 100', value: '8,532.04', change: 0.42, down: false },
  ];

  const stockMovers = [
    { ticker: 'NOW', price: '113.94', change: -12.10, name: 'ServiceNow Strong Results Overshadowed by AI Disruption Fear' },
    { ticker: 'MSFT', price: '423.68', change: -12.03, name: 'Microsoft Drops Most Since 2020 Amid Slowing Cloud Growth' },
    { ticker: 'META', price: '589.34', change: 8.45, name: 'Meta Leans on Improved Ad Performance' },
  ];

  const latestNews = [
    { time: '4 min', title: 'US Spends Millions on Warehouses in Historic Expansion of ICE Detention' },
    { time: '8 min', title: 'Newsom Blasts Homan Leadership in Minnesota After ICE Raids' },
    { time: '17 min', title: 'Nubank Gets First Green Light for US Bank, to Launch in 2027' },
    { time: '24 min', title: 'SpaceX In Merger Talks With xAI Ahead of IPO, Reuters Reports' },
    { time: '40 min', title: 'US High-Grade Bond Sales Top $200 Billion in Record Yearly Start' },
    { time: '40 min', title: 'How Tesla Is Betting on Robotaxis and Robots as EV Sales Slump' },
  ];

  const opinions = [
    { title: "Microsoft Has Lost Its AI Sparkle", author: 'Dave Lee', role: 'Columnist' },
    { title: 'Homan Should Give This Mass Deportation Campaign a Hard Reset', author: 'Patricia Lopez', role: 'Columnist' },
    { title: 'Intel Exposes the Hidden Cost of State Capitalism', author: 'Scott Lincicome', role: 'Columnist' },
  ];

  const newsCategories = [
    {
      name: 'AI',
      articles: [
        { title: 'Microsoft Heads for Worst Market Loss Since DeepSeek Hit Nvidia' },
        { title: 'Nvidia Worked to Co-Design DeepSeek Model, US Lawmaker Says' },
        { title: 'Apple Buys Israeli AI Startup That Interprets Facial Movements' },
        { title: 'Copper Billionaires Fortunes Double as Metal Prices Soar' },
        { title: 'Blackstones Gray Sees AI Disrupting Industries as Biggest Risk' },
      ]
    },
    {
      name: 'Energy',
      articles: [
        { title: 'Half of Americans at High Risk of Power Shortfalls Amid AI Boom' },
        { title: 'Meet Coalie the Lethal Mascot for Dirty Energy', isOpinion: true },
        { title: 'Venezuela Revised Oil Bill Would Ease Taxes to Entice Investors' },
        { title: 'Texas Data Centers Crypto Miners Reduced Power Use During Storm' },
        { title: 'Trump Administration Weighs Transparency for Energy Markets' },
      ]
    },
    {
      name: 'Currencies',
      articles: [
        { title: 'CFTC to Craft New Prediction Market Rules Chairman Says' },
        { title: 'Gold Retreats in Sudden Selloff After Breaking Through $5500' },
        { title: 'Dollar Slide a Sign of Global Investor Hedging Federated Says' },
        { title: 'Lured by 38% Rates Carry-Trade Investors Pile Into Mileis Peso' },
        { title: 'Adani Eyes $1.5 Billion Yen Debt in Bid to Diversify Credit Mix' },
      ]
    },
  ];

  const recommendedTopics = ['Private Credit', 'Hedge Funds', 'Deals', 'Investment Banks', 'Private Equity', 'Inflation', 'Trade', 'AI', 'Crypto', 'Startups'];
  const regionTopics = ['China', 'Canada', 'Latin America', 'Europe', 'UK', 'Asia', 'Africa'];

  const breakingHeadlines = [
    { label: 'EXCLUSIVE', title: 'Coterra Devon Are in Advanced Talks on Combination' },
    { label: null, title: 'Lululemon Blames Customers Again After See-Through Tights Fiasco' },
    { label: null, title: 'Super Bowl Ticket Prices Are Second-Highest Ever at $8230 Each' },
    { label: 'The Big Take', title: 'How the Son of Irans Supreme Leader Built a Global Property Empire' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      color: '#000000',
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
        background: '#1a2f23',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '13px',
        fontWeight: '600',
        textDecoration: 'none',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      }}>
        ← Back to Case Study
      </Link>
      
      {/* TOP META NAV */}
      <div style={{
        background: '#1a2f23',
        color: '#ffffff',
        fontSize: '12px',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <span style={{ cursor: 'pointer' }}>Penguin Press Products</span>
        <span style={{ borderLeft: '1px solid #333', paddingLeft: '16px', cursor: 'pointer' }}>Terminal Demo Request</span>
        <span style={{ borderLeft: '1px solid #333', paddingLeft: '16px', color: '#ff6b35', cursor: 'pointer' }}>
          Penguin Anywhere Remote Login
        </span>
        <span style={{ borderLeft: '1px solid #333', paddingLeft: '16px', cursor: 'pointer' }}>Customer Support</span>
      </div>

      {/* MAIN NAV */}
      <nav style={{
        background: '#1a2f23',
        padding: '16px 24px 0',
        borderBottom: '1px solid #2d4a3a',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <div style={{
            fontFamily: "Georgia, Times New Roman, serif",
            fontSize: '36px',
            fontWeight: '400',
            letterSpacing: '-1px',
            color: '#ffffff',
          }}>
            The Penguin Press
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '14px',
              cursor: 'pointer',
            }}>
              Sign In
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid #ffffff',
              color: '#ffffff',
              fontSize: '14px',
              padding: '8px 16px',
              borderRadius: '2px',
              cursor: 'pointer',
            }}>
              Subscribe
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          paddingBottom: '12px',
        }}>
          <span style={{ fontSize: '14px', color: '#d4a029' }}>● Live TV</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Markets</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Economics</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Industries</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Tech</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Politics</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Businessweek</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Opinion</span>
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#888' }}>US Edition</span>
        </div>
      </nav>

      {/* LIVE TV BANNER */}
      <div style={{
        background: '#243d2e',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <div style={{
          width: '120px',
          height: '68px',
          background: 'linear-gradient(135deg, #2d4a3a 0%, #1a2f23 100%)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <span style={{ color: '#fff', fontSize: '24px' }}>▶</span>
          <span style={{
            position: 'absolute',
            bottom: '4px',
            left: '4px',
            background: 'rgba(0,0,0,0.8)',
            color: '#fff',
            fontSize: '10px',
            padding: '2px 4px',
            borderRadius: '2px',
          }}>1:09</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '4px',
          }}>
            <span style={{
              background: '#d4a029',
              color: '#fff',
              fontSize: '10px',
              fontWeight: '700',
              padding: '2px 8px',
              borderRadius: '2px',
            }}>
              ● LIVE NOW
            </span>
          </div>
          <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>
            California Governor Gavin Newsom Speaks at Penguin Newsmakers Event
          </div>
          <div style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>▶ Watch</div>
        </div>
        <button style={{
          background: 'transparent',
          border: 'none',
          color: '#666',
          fontSize: '20px',
          cursor: 'pointer',
        }}>✕</button>
      </div>

      {/* MARKET TICKER */}
      <div style={{
        background: '#f7f7f7',
        borderBottom: '1px solid #e0e0e0',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        overflowX: 'auto',
      }}>
        <div style={{ fontSize: '13px', fontWeight: '500', color: '#333', whiteSpace: 'nowrap' }}>
          Top Securities
        </div>
        {marketData.map(function(item, idx) {
          return (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: item.down ? '#ffcdd2' : '#c8e6c9',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '12px', fontWeight: '500', color: '#333' }}>{item.name}</span>
              <span style={{ fontSize: '12px', color: '#666' }}>{item.value}</span>
              <span style={{ fontSize: '12px', fontWeight: '600', color: item.down ? '#c62828' : '#2e7d32' }}>
                {item.down ? '▼' : '▲'}{Math.abs(item.change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>

      {/* MAIN CONTENT GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px 280px',
        gap: '0',
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid #e0e0e0',
        borderRight: '1px solid #e0e0e0',
      }}>
        
        {/* LEFT COLUMN */}
        <div style={{ padding: '20px 24px', borderRight: '1px solid #e0e0e0' }}>
          <div style={{
            position: 'relative',
            marginBottom: '12px',
            borderRadius: '4px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #2d4a3a 0%, #1a2f23 100%)',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏛️</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Capitol Building</div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '12px',
              }}>▶</div>
              <span style={{
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                padding: '4px 8px',
                fontSize: '12px',
                borderRadius: '2px',
              }}>1:09</span>
            </div>
          </div>
          <p style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
            Watch: Trump Believes Deal to Avoid Shutdown Is Close
          </p>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '8px',
            letterSpacing: '-0.5px',
          }}>
            Trump, Democrats Close to Immigration Deal to Avert Shutdown
          </h2>
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.5' }}>
            The White House negotiates with Democrats to place new limits on immigration raids that have provoked an national outcry.
          </p>

          <div style={{ padding: '16px 0', borderBottom: '1px solid #e0e0e0', marginTop: '16px' }}>
            <a href="#" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}>
              ICE Set to Dial Back Minnesota Presence After Maine Pullback
            </a>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div style={{ padding: '20px 24px', borderRight: '1px solid #e0e0e0' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>
              Microsoft Valuation Destruction
            </h3>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', background: '#000', display: 'inline-block' }}></span>
              One-day market-cap loss
            </div>
            
            {/* Bar Chart */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              height: '200px',
              padding: '0 20px 40px 0',
              position: 'relative',
            }}>
              {/* Y-axis labels on right side */}
              <div style={{
                position: 'absolute',
                right: '0',
                top: '0',
                bottom: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#999',
                textAlign: 'right',
              }}>
                <span>$0B</span>
                <span>-200</span>
                <span>-400</span>
                <span>-600</span>
              </div>
              
              {/* NVDA 1/27/25 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '88px', background: '#1a2f23', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>NVDA</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>(1/27/25)</div>
                </div>
              </div>
              
              {/* MSFT 1/29/26 - Highlighted blue, tallest */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '136px', background: '#2d8a4e', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>MSFT</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>(1/29/26)</div>
                </div>
              </div>
              
              {/* AAPL 4/3/25 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '80px', background: '#1a2f23', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>AAPL</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>(4/3/25)</div>
                </div>
              </div>
              
              {/* NVDA 9/3/24 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '76px', background: '#1a2f23', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>NVDA</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>(9/3/24)</div>
                </div>
              </div>
              
              {/* NVDA 2/27/25 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '48px', height: '68px', background: '#1a2f23', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>NVDA</div>
                  <div style={{ fontSize: '10px', color: '#888' }}>(2/27/25)</div>
                </div>
              </div>
            </div>
          </div>

          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}>
            Microsoft Heads for Worst Market Loss Since DeepSeek Hit Nvidia
          </h2>
          <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.5' }}>
            Microsofts more than $400 billion wipeout in stock market valuation would be the second-largest in history if it holds through the close.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ padding: '20px 16px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#d4a029' }}>Latest</h3>
            <select style={{
              border: '1px solid #ddd',
              borderRadius: '2px',
              padding: '4px 8px',
              fontSize: '12px',
              background: '#fff',
            }}>
              <option>All categories</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {latestNews.map(function(item, idx) {
              return (
                <div key={idx} style={{ display: 'flex', gap: '12px', cursor: 'pointer' }}>
                  <span style={{ fontSize: '12px', color: '#d4a029', fontWeight: '500', whiteSpace: 'nowrap', minWidth: '44px' }}>
                    {item.time}
                  </span>
                  <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.3', color: '#000' }}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <a href="#" style={{ display: 'block', marginTop: '20px', fontSize: '13px', color: '#333', textDecoration: 'none' }}>
            See all latest →
          </a>
        </div>
      </div>

      {/* OPINION SECTION */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0',
        borderLeft: '1px solid #e0e0e0',
        borderRight: '1px solid #e0e0e0',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          borderTop: '1px solid #e0e0e0',
        }}>
          <div style={{ padding: '24px', borderRight: '1px solid #e0e0e0' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '20px', letterSpacing: '0.5px' }}>
              Penguin Opinion
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{
                  width: '180px',
                  height: '140px',
                  borderRadius: '4px',
                  background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '48px' }}>🏭</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    marginBottom: '12px',
                    letterSpacing: '-0.3px',
                  }}>
                    Meet Coalie the Lethal Mascot for Dirty Energy
                  </h3>
                  <p style={{ fontSize: '13px', color: '#2d8a4e' }}>
                    By Mark Gongloff, Columnist
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {opinions.map(function(op, idx) {
                  return (
                    <div key={idx} style={{ display: 'flex', gap: '12px', cursor: 'pointer' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2d8a4e 0%, #1a2f23 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <span style={{ color: '#fff', fontSize: '18px' }}>👤</span>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '13px', fontWeight: '600', lineHeight: '1.3', marginBottom: '4px' }}>
                          {op.title}
                        </h4>
                        <p style={{ fontSize: '11px', color: '#2d8a4e' }}>
                          By {op.author}, {op.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ padding: '24px 16px' }}>
            <div style={{
              position: 'relative',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #1a2f23 0%, #243d2e 100%)',
              height: '160px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer',
              }}>▶</div>
              <span style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(0,0,0,0.8)',
                color: '#fff',
                padding: '2px 8px',
                fontSize: '11px',
                borderRadius: '2px',
              }}>76:09</span>
            </div>
            <p style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>
              Watch the 2026 duPont-Columbia Awards winner.
            </p>
            <h4 style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>
              Cant Look Away: The Case Against Social Media
            </h4>
          </div>
        </div>
      </div>

      {/* GAMES + STOCKS */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderLeft: '1px solid #e0e0e0',
        borderRight: '1px solid #e0e0e0',
        borderTop: '1px solid #e0e0e0',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px' }}>
          <div style={{ padding: '24px', borderRight: '1px solid #e0e0e0' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#333', marginBottom: '16px' }}>Games</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <GameCard name="Alphadots" frequency="Daily" description="Play the word puzzle with a plot twist" icon="alphadots" />
              <GameCard name="Pointed" frequency="Weekly" description="Play the news quiz for risk-takers" icon="pointed" />
            </div>
          </div>

          <div style={{ padding: '24px 16px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Most Active US Stocks</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {stockMovers.map(function(stock, idx) {
                return (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <div style={{
                      background: stock.change < 0 ? '#ffebee' : '#e8f5e9',
                      padding: '8px 10px',
                      borderRadius: '4px',
                      minWidth: '70px',
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>{stock.ticker}</div>
                      <div style={{ fontSize: '11px', color: '#666' }}>{stock.price}</div>
                      <div style={{ fontSize: '11px', fontWeight: '600', color: stock.change < 0 ? '#c62828' : '#2e7d32' }}>
                        {stock.change < 0 ? '▼' : '▲'}{Math.abs(stock.change).toFixed(2)}%
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.3' }}>{stock.name}</p>
                      <button style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: '12px',
                        color: '#666',
                        cursor: 'pointer',
                        padding: '4px 0',
                      }}>+ Follow</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* BREAKING HEADLINES */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px',
        borderLeft: '1px solid #e0e0e0',
        borderRight: '1px solid #e0e0e0',
        borderTop: '1px solid #e0e0e0',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {breakingHeadlines.map(function(headline, idx) {
            return (
              <div key={idx} style={{ cursor: 'pointer' }}>
                {headline.label && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#d4a029',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    {headline.label}
                  </span>
                )}
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  lineHeight: '1.3',
                  marginTop: headline.label ? '4px' : '0',
                }}>
                  {headline.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* YOUR NEWS SECTION */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '32px 24px',
        borderLeft: '1px solid #e0e0e0',
        borderRight: '1px solid #e0e0e0',
        borderTop: '1px solid #e0e0e0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Your News</h2>
          <button 
            onClick={function() { setYourNewsExpanded(!yourNewsExpanded); }}
            style={{
              background: yourNewsExpanded ? '#f5f5f5' : '#1a2f23',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '6px 10px',
              fontSize: '14px',
              cursor: 'pointer',
              color: yourNewsExpanded ? '#333' : '#fff',
              transition: 'all 0.2s ease',
            }}
          >
            {yourNewsExpanded ? '☰' : '☰'}
          </button>
          <span style={{ fontSize: '12px', color: '#888' }}>
            {yourNewsExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
        </div>

        <div style={{
          maxHeight: yourNewsExpanded ? '1000px' : '0px',
          overflow: 'hidden',
          opacity: yourNewsExpanded ? 1 : 0,
          transition: 'all 0.4s ease-in-out',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px' }}>
          <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '20px' }}>
            <div style={{
              color: '#d4a029',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '8px',
            }}>
              ☰ Follow Topics
            </div>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px' }}>
              Choose up to 12 topics to see the latest stories on your homepage.
            </p>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Recommended</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {recommendedTopics.map(function(topic, idx) {
                  return (
                    <button key={idx} style={{
                      background: '#ffffff',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '6px 10px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}>
                      + {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Regions</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {regionTopics.map(function(topic, idx) {
                  return (
                    <button key={idx} style={{
                      background: '#ffffff',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '6px 10px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}>
                      + {topic}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {newsCategories.map(function(cat, idx) {
              return (
                <div key={idx}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    paddingBottom: '8px',
                    borderBottom: '1px solid #e0e0e0',
                  }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{cat.name}</h3>
                    <button style={{
                      background: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      padding: '4px 10px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}>Follow</button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {cat.articles.map(function(article, aidx) {
                      return (
                        <div key={aidx} style={{ display: 'flex', gap: '12px', cursor: 'pointer' }}>
                          <div style={{ flex: 1 }}>
                            {article.isOpinion && (
                              <span style={{ fontSize: '11px', color: '#d4a029', fontWeight: '500' }}>Opinion</span>
                            )}
                            <h4 style={{ fontSize: '13px', fontWeight: '500', lineHeight: '1.3' }}>{article.title}</h4>
                          </div>
                          <div style={{
                            width: '60px',
                            height: '44px',
                            background: 'linear-gradient(135deg, #2d8a4e 0%, #1a2f23 100%)',
                            borderRadius: '2px',
                            flexShrink: 0,
                          }}></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: yourNewsExpanded ? '32px' : '0px',
          opacity: yourNewsExpanded ? 1 : 0,
          transition: 'all 0.3s ease',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ddd' }}></span>
          <div style={{ marginLeft: '16px', display: 'flex', gap: '8px' }}>
            <button style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer',
            }}>‹</button>
            <button style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer',
            }}>›</button>
          </div>
        </div>
      </div>

      {/* STICKY PROMO FOOTER */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#1a2f23',
        color: '#ffffff',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
      }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
            Save up to 60% during our New Year Sale
          </div>
          <div style={{ fontSize: '14px', color: '#aaa' }}>
            Unlock business news, market insights and expert analysis
          </div>
        </div>
        <button style={{
          background: '#ffffff',
          color: '#000000',
          border: 'none',
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: '600',
          borderRadius: '2px',
          cursor: 'pointer',
        }}>
          Subscribe today →
        </button>
      </div>

      <div style={{ height: '80px' }}></div>
    </div>
  );
};

const ChartBar = function(props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    }}>
      <div style={{
        width: '48px',
        height: props.height + '%',
        background: props.highlighted ? '#0066cc' : '#1a1a1a',
        borderRadius: '2px 2px 0 0',
      }}></div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>{props.label}</div>
        <div style={{ fontSize: '10px', color: '#888' }}>{props.sublabel}</div>
      </div>
    </div>
  );
};

const GameIcon = function(props) {
  if (props.type === 'alphadots') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="12" cy="12" r="4" fill="#2d8a4e" />
        <circle cx="28" cy="12" r="4" fill="#1a2f23" />
        <circle cx="12" cy="28" r="4" fill="#1a2f23" />
        <circle cx="28" cy="28" r="4" fill="#2d8a4e" />
        <circle cx="20" cy="20" r="5" fill="#d4a029" />
        <path d="M12 12L20 20M28 12L20 20M12 28L20 20M28 28L20 20" stroke="#1a2f23" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      </svg>
    );
  }
  if (props.type === 'pointed') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#1a2f23" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="11" stroke="#2d8a4e" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="6" fill="#d4a029" />
        <path d="M20 4V10M20 30V36M4 20H10M30 20H36" stroke="#1a2f23" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="#1a2f23" />
      </svg>
    );
  }
  return null;
};

const GameCard = function(props) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      cursor: 'pointer',
    }}>
      <div style={{ width: '40px', height: '40px' }}>
        <GameIcon type={props.icon} />
      </div>
      <div style={{ borderLeft: '1px solid #e0e0e0', paddingLeft: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '2px' }}>{props.name}</div>
        <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>{props.frequency}</div>
      </div>
      <div style={{ borderLeft: '1px solid #e0e0e0', paddingLeft: '16px', fontSize: '13px', color: '#555' }}>
        {props.description}
      </div>
    </div>
  );
};

export default PenguinPress;