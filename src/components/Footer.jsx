'use client';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid var(--border)',
      backgroundColor: 'rgba(10, 14, 39, 0.5)',
      paddingTop: '40px',
      paddingBottom: '40px',
      marginTop: '60px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
            }}>
              Portfolio
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.9rem',
            }}>
              Full Stack Developer focused on building clean, functional, and meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: '16px',
              color: 'var(--text-primary)',
              fontWeight: '600',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#about" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  About Me
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#projects" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  Projects
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#skills" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: '16px',
              color: 'var(--text-primary)',
              fontWeight: '600',
            }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'GitHub', url: 'https://github.com/Ry4nsookieboo', Icon: Github },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ryan-karyndra-251674246/', Icon: Linkedin },
                // { label: 'WhatsApp', url: 'https://wa.me/628', Icon: MessageCircle },
                // { label: 'Instagram', url: 'https://instagram.com/yourprofile', Icon: Instagram },
              ].map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--bg-darker)'
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            color: 'var(--text-tertiary)',
            fontSize: '0.85rem',
          }}>
            © {currentYear} Ry4n. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#/privacy" style={{
              color: 'var(--text-tertiary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}>
              Privacy Policy
            </a>
            <a href="#/terms" style={{
              color: 'var(--text-tertiary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding-top: 30px;
            padding-bottom: 30px;
            margin-top: 40px;
          }
        }
      `}</style>
    </footer>
  )
}
