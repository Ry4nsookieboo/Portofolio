export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title animate-slide-up" style={{
          fontSize: '3rem',
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          About Me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div className="animate-slide-in-left">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>My Journey</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
              My journey in technology started from curiosity, but quickly evolved into building real applications and systems.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
              I enjoy turning ideas into working products — from web platforms and mobile apps to IoT-based projects developed through hands-on experimentation.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '16px' }}>
              Along the way, I learned that good software is not only about writing code, but about designing solutions that are reliable, maintainable, and practical in real-world use.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Currently, I focus on developing systems that balance performance, simplicity, and user experience while continuously improving my engineering approach.
            </p>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="card" style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--accent)' }}>🎯 Focus Areas</h4>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '8px', paddingLeft: '0' }}>• Full-Stack Web Development</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '8px', paddingLeft: '0' }}>• Mobile Application Development (React Native / Expo)</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '8px', paddingLeft: '0' }}>• Backend Systems & API Development (Node.js / Express)</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '8px', paddingLeft: '0' }}>• IoT Prototyping & Integration</li>
                <li style={{ color: 'var(--text-secondary)', paddingLeft: '0' }}>• Database Design & Optimization</li>
              </ul>
            </div>

            <div className="card">
              <h4 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--accent)' }}>📊 Experience</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong style={{ color: 'var(--text-primary)' }}> </strong> Developed multiple personal and academic projects across web, mobile, and IoT platforms
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Built full-stack applications including authentication systems, media management, and API integrations
              </p>
               <p style={{ color: 'var(--text-secondary)' }}>
                Designed and implemented an IoT-based sorting system as part of an engineering project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
