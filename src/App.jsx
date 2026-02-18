'use client';

import { useState, useEffect } from 'react'
import StarBackground from './components/StarBackground'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import WorkApproachSection from './components/WorkApproachSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [route, setRoute] = useState(window.location.hash || '')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    const handleHash = () => {
      setRoute(window.location.hash || '')
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHash)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])

  return (
    <>
      <StarBackground />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: scrollY > 50 ? 'rgba(10, 14, 39, 0.8)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid var(--border)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
            }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Portfolio
            </div>

            <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>
          {route === '#/privacy' ? (
            <PrivacyPolicy />
          ) : route === '#/terms' ? (
            <TermsOfService />
          ) : (
            <>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <WorkApproachSection />
              <CertificationsSection />
              <ContactSection />
            </>
          )}
        </main>

        <Footer />
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav {
            gap: 16px !important;
            font-size: 0.85rem !important;
          }

          header {
            height: 50px !important;
          }

          .container {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </>
  )
}

export default App
