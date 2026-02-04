import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PenguinPressArticle = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const relatedTopics = [
    { label: 'Content Moderation', link: '#' },
    { label: 'Why AI Falls Short', link: '#' },
    { label: 'New Platform Rules', link: '#', isActive: true },
    { label: 'The Human Cost', link: '#' },
    { label: 'Anonymous Power', link: '#' },
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
        <span style={{ borderLeft: '1px solid #2d4a3a', paddingLeft: '16px', cursor: 'pointer' }}>Terminal Demo Request</span>
        <span style={{ borderLeft: '1px solid #2d4a3a', paddingLeft: '16px', color: '#d4a029', cursor: 'pointer' }}>
          Penguin Anywhere Remote Login
        </span>
        <span style={{ borderLeft: '1px solid #2d4a3a', paddingLeft: '16px', cursor: 'pointer' }}>Customer Support</span>
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
          <a href="#" style={{
            fontFamily: "Georgia, Times New Roman, serif",
            fontSize: '36px',
            fontWeight: '400',
            letterSpacing: '-1px',
            color: '#ffffff',
            textDecoration: 'none',
          }}>
            The Penguin Press
          </a>

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
          <span style={{ fontSize: '14px', color: '#fff' }}>Tech</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Politics</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Businessweek</span>
          <span style={{ fontSize: '14px', color: '#888' }}>Opinion</span>
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#888' }}>US Edition</span>
        </div>
      </nav>

      {/* TOPIC BREADCRUMB BAR */}
      <div style={{
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: '600',
          color: '#1a2f23',
        }}>
          Content Moderation:
        </span>
        {relatedTopics.map(function(topic, idx) {
          return (
            <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a 
                href={topic.link}
                style={{
                  fontSize: '13px',
                  color: topic.isActive ? '#1a2f23' : '#666',
                  textDecoration: topic.isActive ? 'underline' : 'none',
                  fontWeight: topic.isActive ? '500' : '400',
                }}
              >
                {topic.label}
              </a>
              {idx < relatedTopics.length - 1 && (
                <span style={{ color: '#ccc' }}>|</span>
              )}
            </span>
          );
        })}
      </div>

      {/* ARTICLE CONTENT */}
      <article style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '48px',
      }}>
        
        {/* LEFT SIDEBAR */}
        <aside>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a2f23',
            marginBottom: '24px',
          }}>
            Technology
          </div>
        </aside>

        {/* MAIN ARTICLE */}
        <div style={{ maxWidth: '720px' }}>
          {/* Headline */}
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            lineHeight: '1.15',
            letterSpacing: '-1px',
            marginBottom: '32px',
            color: '#000',
          }}>
            The Moderation Paradox: Anonymity, and the Limits of Automated Oversight
          </h1>

          {/* Featured Image */}
          <figure style={{ margin: '0 0 24px 0' }}>
            <div style={{
              width: '100%',
              height: '420px',
              background: 'linear-gradient(135deg, #2d4a3a 0%, #1a2f23 100%)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Abstract illustration representing content moderation */}
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
                {/* Screen/monitor shape */}
                <rect x="75" y="30" width="150" height="100" rx="8" fill="#243d2e" stroke="#2d8a4e" strokeWidth="2" />
                <rect x="85" y="40" width="130" height="80" rx="4" fill="#1a2f23" />
                
                {/* Content blocks being filtered */}
                <rect x="95" y="50" width="40" height="8" rx="2" fill="#2d8a4e" opacity="0.6" />
                <rect x="95" y="62" width="55" height="8" rx="2" fill="#2d8a4e" opacity="0.6" />
                <rect x="95" y="74" width="35" height="8" rx="2" fill="#d4a029" opacity="0.8" />
                <rect x="95" y="86" width="50" height="8" rx="2" fill="#2d8a4e" opacity="0.6" />
                <rect x="95" y="98" width="45" height="8" rx="2" fill="#c94a4a" opacity="0.6" />
                
                {/* Checkmarks and X marks */}
                <circle cx="170" cy="54" r="8" fill="#2d8a4e" />
                <path d="M166 54L169 57L174 51" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                
                <circle cx="170" cy="78" r="8" fill="#d4a029" />
                <path d="M167 75L173 81M173 75L167 81" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                
                <circle cx="170" cy="102" r="8" fill="#c94a4a" />
                <path d="M167 99L173 105M173 99L167 105" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                
                {/* Human figure */}
                <circle cx="240" cy="70" r="15" fill="#d4a029" opacity="0.3" />
                <circle cx="240" cy="65" r="8" fill="#d4a029" />
                <path d="M240 75V95M230 85H250M235 110L240 95L245 110" stroke="#d4a029" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* AI/Robot figure */}
                <rect x="45" y="55" width="25" height="30" rx="4" fill="#2d8a4e" opacity="0.3" />
                <rect x="50" y="60" width="15" height="10" rx="2" fill="#2d8a4e" />
                <circle cx="54" cy="65" r="2" fill="#d4a029" />
                <circle cx="61" cy="65" r="2" fill="#d4a029" />
                <rect x="52" y="75" width="11" height="3" rx="1" fill="#2d8a4e" />
                
                {/* Connecting lines */}
                <path d="M70 70H85" stroke="#2d8a4e" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" />
                <path d="M215 70H225" stroke="#d4a029" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" />
                
                {/* Stand */}
                <rect x="140" y="130" width="20" height="15" fill="#243d2e" />
                <rect x="120" y="145" width="60" height="8" rx="2" fill="#243d2e" />
                
                {/* Question marks floating */}
                <text x="35" y="45" fill="#d4a029" fontSize="16" fontWeight="bold" opacity="0.6">?</text>
                <text x="260" y="45" fill="#d4a029" fontSize="16" fontWeight="bold" opacity="0.6">?</text>
                <text x="150" y="175" fill="#2d8a4e" fontSize="14" fontWeight="bold" opacity="0.4">?</text>
              </svg>
            </div>
            <figcaption style={{
              marginTop: '12px',
              fontSize: '13px',
              color: '#666',
              lineHeight: '1.5',
            }}>
              The challenge of content moderation: balancing automated systems with human oversight.
              <span style={{ fontStyle: 'italic', color: '#888' }}> Illustration: The Penguin Press</span>
            </figcaption>
          </figure>

          {/* Share buttons + Author info */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px',
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid #e0e0e0',
          }}>
            {/* Social share buttons */}
            <div style={{
              display: 'flex',
              gap: '8px',
            }}>
              <ShareButton icon="facebook" />
              <ShareButton icon="x" />
              <ShareButton icon="linkedin" />
              <ShareButton icon="email" />
              <ShareButton icon="link" />
            </div>

            {/* Author info */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', marginBottom: '4px' }}>
                By <a href="#" style={{ color: '#2d8a4e', textDecoration: 'none', fontWeight: '500' }}>Issa Mohamed</a>
              </div>
              <div style={{ fontSize: '13px', color: '#666' }}>
                December 2, 2025 at 2:30 PM CST
              </div>
              <div style={{ fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                Updated on December 2, 2025 at 4:15 PM CST
              </div>
            </div>

            {/* Gift article button */}
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '8px 16px',
              fontSize: '13px',
              cursor: 'pointer',
              color: '#333',
            }}>
              <GiftIcon />
              Gift this article
            </button>
          </div>

          {/* Article Body */}
          <div style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#333',
          }}>
            <p style={{ marginBottom: '24px' }}>
              Today I want to touch base on something that's been on my mind lately, a topic I keep returning to whenever I think about the state of online spaces and the invisible labor that keeps them functional, this question of content moderation and why, no matter how sophisticated our AI systems become, no matter how many billions we pour into machine learning models designed to detect hate speech and violence and the darkest corners of human expression, we still haven't managed to relieve the burden from what some have called "the janitors of the internet," those human moderators who spend their days, often for barely livable wages, sifting through the digital sewage of humanity so that the rest of us can scroll through our feeds without stumbling upon something that would haunt us for weeks.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The moral calculus here troubles me deeply, because we've essentially created a system where protecting the mental health of millions requires sacrificing the mental health of thousands, where the price of a sanitized internet experience is paid by real people who develop PTSD, depression, and lasting psychological damage from their daily exposure to child exploitation material, graphic violence, and the concentrated hatred that humans are capable of producing when given anonymity and a keyboard. And yet, despite this human cost, we can't simply hand the job over to algorithms, because automated moderation fails in ways that are both predictable and profoundly difficult to solve, it lacks what I can only describe as cultural fluency, that intuitive understanding of when something crosses from edgy humor into genuine harm, when a phrase that looks innocuous is actually a dog whistle understood only by those it's meant to reach.
            </p>

            {/* Pull quote */}
            <blockquote style={{
              margin: '40px 0',
              padding: '24px 32px',
              borderLeft: '4px solid #2d8a4e',
              background: '#f8faf8',
              fontSize: '22px',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#1a2f23',
            }}>
              "We've essentially created a system where protecting the mental health of millions requires sacrificing the mental health of thousands."
            </blockquote>

            <p style={{ marginBottom: '24px' }}>
              Social media platforms have discovered, often through spectacular public failures, that context is everything and context is precisely what AI struggles to grasp. The same words can be reclamation or slur depending on who's speaking, the same image can be documentation or glorification depending on intent, and the ever-evolving lexicon of hate, where communities develop shorthand, inside jokes, and coded language specifically designed to evade detection, means that any trained model is perpetually playing catch-up against human creativity deployed toward malicious ends. Reddit's approach of community-specific moderators acknowledges this reality, recognizing that someone embedded in a community can read the room in ways an algorithm simply cannot, but this solution introduces its own troubling questions: if moderators are anonymous participants in the communities they police, what prevents the fox from guarding the henhouse, what stops someone who shares a community's hateful beliefs from selectively enforcing rules to protect their ideological allies while punishing outsiders?
            </p>

            <p style={{ marginBottom: '24px' }}>
              And this is where I find myself stuck in a loop of uncomfortable questions, because the alternative to trusting anonymous community moderators is to swing back toward automated systems that, when deployed too aggressively, end up punishing users who had no hateful intent whatsoever, people who used a word in a context the algorithm couldn't parse, who made a dark joke that landed wrong in the training data, who quoted something offensive in order to critique it and found themselves banned for the very content they were condemning. The brutality of automated moderation isn't just in what it misses but in how it overcorrects, how it flattens the rich, messy, context-dependent nature of human communication into a binary of "violation" or "not violation" without any of the nuance that a human reviewer, for all their psychological toll, would bring to the table.
            </p>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginTop: '40px',
              marginBottom: '20px',
              color: '#1a2f23',
            }}>
              The Impossible Question
            </h2>

            <p style={{ marginBottom: '24px' }}>
              What strikes me most when I sit with all of this is that we're essentially asking an impossible question: what does faithful and moral moderation even look like when the communities we're trying to moderate are as diverse and contradictory as communities in the physical world, where norms and culture and acceptable speech vary not just from country to country but from neighborhood to neighborhood, from friend group to friend group, from one corner of a subreddit to another? We want universal rules applied with contextual sensitivity, we want speed and scale without sacrificing accuracy, we want to protect users from harm without censoring legitimate expression, and we want all of this without destroying the mental health of the people tasked with making these judgment calls thousands of times a day.
            </p>

            <p style={{ marginBottom: '24px' }}>
              I don't have a neat resolution to offer here, and I think anyone who claims to have one is either selling something or hasn't thought about it hard enough. What I do think is that we need to stop treating content moderation as a problem that can be "solved" with the right algorithm or the right policy update and start treating it as an ongoing, inherently imperfect negotiation between competing values that will never fully resolve. Maybe the best we can do is build systems that fail gracefully, that err on the side of human review for edge cases, that compensate moderators fairly and provide genuine mental health support, that give communities some autonomy while maintaining accountability structures that prevent the worst abuses of power. It's not satisfying, it's not elegant, and it certainly doesn't make for a good press release, but it might be the most honest way to approach a problem that, like the internet itself, is fundamentally a reflection of who we are as people, in all our creativity and cruelty and everything in between.
            </p>
          </div>

          {/* Tags */}
          <div style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid #e0e0e0',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#888',
              marginBottom: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Tags
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Content Moderation', 'AI', 'Social Media', 'Platform Governance', 'Mental Health', 'Technology Ethics'].map(function(tag, idx) {
                return (
                  <a 
                    key={idx}
                    href="#"
                    style={{
                      padding: '6px 12px',
                      background: '#f5f5f5',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '12px',
                      color: '#333',
                      textDecoration: 'none',
                    }}
                  >
                    {tag}
                  </a>
                );
              })}
            </div>
          </div>

          {/* More Articles */}
          <div style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid #e0e0e0',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#1a2f23',
            }}>
              More in Technology
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <RelatedArticle 
                title="Microsoft Heads for Worst Market Loss Since DeepSeek Hit Nvidia"
                time="2 hours ago"
              />
              <RelatedArticle 
                title="Apple Buys Israeli AI Startup That Interprets Facial Movements"
                time="4 hours ago"
              />
              <RelatedArticle 
                title="How Tesla Is Betting on Robotaxis and Robots as EV Sales Slump"
                time="5 hours ago"
              />
            </div>
          </div>
        </div>
      </article>

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
    </div>
  );
};

// Share Button Component
const ShareButton = function(props) {
  const getIcon = function() {
    switch(props.icon) {
      case 'facebook':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'x':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6L12 13L2 6" />
          </svg>
        );
      case 'link':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '1px solid #e0e0e0',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#666',
      transition: 'all 0.2s ease',
    }}>
      {getIcon()}
    </button>
  );
};

// Gift Icon
const GiftIcon = function() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="8" width="18" height="14" rx="2" />
      <path d="M12 8V22" />
      <path d="M3 12H21" />
      <path d="M12 8C12 8 12 4 8 4C6 4 4 6 6 8" />
      <path d="M12 8C12 8 12 4 16 4C18 4 20 6 18 8" />
    </svg>
  );
};

// Related Article Component
const RelatedArticle = function(props) {
  return (
    <a href="#" style={{
      display: 'flex',
      gap: '16px',
      textDecoration: 'none',
      color: 'inherit',
    }}>
      <div style={{
        width: '80px',
        height: '56px',
        background: 'linear-gradient(135deg, #2d8a4e 0%, #1a2f23 100%)',
        borderRadius: '2px',
        flexShrink: 0,
      }} />
      <div>
        <h4 style={{
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.4',
          marginBottom: '4px',
          color: '#000',
        }}>
          {props.title}
        </h4>
        <span style={{ fontSize: '12px', color: '#888' }}>{props.time}</span>
      </div>
    </a>
  );
};

export default PenguinPressArticle;