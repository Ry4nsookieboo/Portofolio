'use client';

import { useState } from 'react'
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react'
import cvPdf from '../../CV/CV_Ryan.pdf'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = 'puturyann.k@gmail.com'
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title animate-slide-up" style={{
          fontSize: '3rem',
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Let's Connect
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
        }}>
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}>
              Get In Touch
            </h3>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              lineHeight: '1.8',
              fontSize: '1rem',
            }}>
              Got an idea, project, or opportunity? <br />
              I'm open to discussing collaborations, or interesting tech ideas. Whether it's web development, IoT systems, or building something meaningful — feel free to reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Email */}
              <a /*href="https://mail.google.com/mail/?view=cm&fs=1&to=puturyann.k@gmail.com"*/href="mailto:puturyann.k@gmail.com"
 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--surface-light)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: 'var(--text-primary)',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.backgroundColor = 'rgba(0, 102, 255, 0.05)'
                e.currentTarget.style.transform = 'translateX(8px)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--surface-light)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}>
                <Mail style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '2px' }}>Email</p>
                  <p style={{ fontWeight: '600' }}>puturyann.k</p>
                  
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ryan-karyndra-251674246/" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--surface-light)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: 'var(--text-primary)',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.backgroundColor = 'rgba(0, 102, 255, 0.05)'
                e.currentTarget.style.transform = 'translateX(8px)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--surface-light)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}>
                <Linkedin style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '2px' }}>LinkedIn</p>
                  <p style={{ fontWeight: '600' }}>linkedin.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Ry4nsookieboo" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                backgroundColor: 'var(--surface-light)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: 'var(--text-primary)',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.backgroundColor = 'rgba(0, 102, 255, 0.05)'
                e.currentTarget.style.transform = 'translateX(8px)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.backgroundColor = 'var(--surface-light)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}>
                <Github style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '2px' }}>GitHub</p>
                  <p style={{ fontWeight: '600' }}>Ry4nsookieboo</p>
                </div>
              </a>

              {/* Download CV */}
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = cvPdf
                  link.download = 'CV_Ryan.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-darker)',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-dark)'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-slide-in-right contact-form"
            style={{
              animationDelay: '0.2s',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: 'var(--text-primary)',
              }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.02)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--surface)'
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: 'var(--text-primary)',
              }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.02)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--surface)'
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: 'var(--text-primary)',
              }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.02)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--surface)'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: submitted ? 'var(--success)' : 'var(--primary)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                if (!submitted) {
                  e.currentTarget.style.backgroundColor = 'var(--primary-dark)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={(e) => {
                if (!submitted) {
                  e.currentTarget.style.backgroundColor = 'var(--primary)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              {submitted ? '✓ Sending Email' : <>
                <Send size={18} />
                Send Email
              </>}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-form {
          margin-top: 32px;
          align-self: end;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .contact-form {
            margin-top: 16px;
            align-self: auto;
          }
        }

        input, textarea {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  )
}


