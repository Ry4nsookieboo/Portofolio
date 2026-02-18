import React from 'react'

export default function PrivacyPolicy() {
  return (
    <section className="section" id="privacy-policy" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h1 className="section-title" style={{
          fontSize: '2.5rem',
          marginBottom: '32px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 700,
        }}>
          Privacy Policy
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Introduction</h2>
            <p>This website is a personal portfolio created to showcase projects, skills, and professional information. By using this website, you agree to the practices described in this Privacy Policy.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Information Collected</h2>
            <p>This website may collect limited personal information when you voluntarily provide it, such as:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Message content submitted through the contact form</li>
            </ul>
            <p>In addition, basic technical information such as browser type, device information, or anonymous usage data may be collected for analytics and website improvement purposes.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>How Information Is Used</h2>
            <p>Any information collected is used solely for:</p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Responding to inquiries or communication requests</li>
              <li>Professional contact purposes</li>
              <li>Improving website performance and user experience</li>
            </ul>
            <p>Personal data will never be sold, rented, or shared with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Data Protection</h2>
            <p>Reasonable measures are taken to protect submitted information. However, no method of transmission over the internet can be guaranteed to be completely secure.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Third-Party Services</h2>
            <p>This website may use third-party services such as hosting providers or analytics tools that may collect anonymous usage data according to their own privacy policies.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Changes to This Policy</h2>
            <p>This Privacy Policy may be updated from time to time. Any updates will be reflected on this page.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Contact</h2>
            <p>If you have any questions regarding this Privacy Policy, you may contact me at :</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=puturyann.k@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>puturyann.k@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
