import React from 'react'

export default function TermsOfService() {
  return (
    <section className="section" id="terms-of-service" style={{ position: 'relative', zIndex: 2 }}>
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
          Terms of Service
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Website Purpose</h2>
            <p>This website is provided for informational and portfolio purposes only. The content is intended to present personal projects, skills, and professional background.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Intellectual Property</h2>
            <p>All content on this website, including projects, text, visuals, and design elements, belongs to the website owner unless otherwise stated. Unauthorized copying or redistribution is not permitted without permission.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>No Guarantees</h2>
            <p>All information is provided “as is” without warranties of any kind. While efforts are made to keep information accurate and up to date, no guarantee is made regarding completeness or reliability.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>External Links</h2>
            <p>This website may contain links to external websites. The owner is not responsible for the content, policies, or practices of third-party sites.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Limitation of Liability</h2>
            <p>The website owner shall not be held responsible for any damages or losses resulting from the use of this website or reliance on its content.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Changes to Terms</h2>
            <p>These Terms of Service may be updated at any time without prior notice. Continued use of the website indicates acceptance of any changes.</p>
          </div>

          <div>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '8px' }}>Contact</h2>
            <p>For questions regarding these Terms, please contact :</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=puturyann.k@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>puturyann.k@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
