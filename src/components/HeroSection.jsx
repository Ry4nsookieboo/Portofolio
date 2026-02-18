'use client';

import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div className="animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="hero-greeting" style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Welcome to my portfolio
          </div>

          <h1 className="animate-slide-up" style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Hi! I am Ryan
          </h1>

          <h1 className="animate-slide-up" style={{
            fontSize: 'clamp(2.0rem, 6vw, 4.5rem)',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
          | Full-Stack Developer |
          </h1>

          <h1 className="animate-slide-up" style={{
            fontSize: 'clamp(1.5rem, 4vw, 4.5rem)',
            fontWeight: '700',
            marginBottom: '24px',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Web, Mobile & IoT Systems
          </h1>

          <p className="animate-slide-up" style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 32px',
            animationDelay: '0.1s',
          }}>
            Building responsive applications across web, mobile, and IoT platforms.<br />
            Focused on clean architecture, performance, and solving real-world problems through practical solutions.
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary animate-slide-up" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} style={{ animationDelay: '0.2s' }}>
              View My Work
            </button>
            <button className="btn btn-secondary animate-slide-up" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} style={{ animationDelay: '0.3s' }}>
              Get In Touch
            </button>
          </div>

          <div style={{
            marginTop: '60px',
            animation: 'float 3s ease-in-out infinite',
          }}>
            <button onClick={scrollToProjects} style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px',
              margin: '0 auto',
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              <span>Scroll to explore</span>
              <ChevronDown size={20} style={{ animation: 'float 2s ease-in-out infinite' }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-greeting {
            font-size: 12px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  )
}
