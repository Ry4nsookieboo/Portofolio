import { Award } from 'lucide-react'

export default function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: 'Information Technology Specialist — JavaScript',
      issuer: 'Certiport / Pearson VUE',
      date: 'September 2025',
      description: 'International certification validating core JavaScript programming skills including problem solving, logic implementation, DOM manipulation, and application development fundamentals.',
    },
    {
      id: 2,
      title: 'Software Development - Junior Mobile Programmer',
      issuer: 'Indonesian Professional Certification Authority',
      date: 'August 2025',
      description: 'Demonstrated competency in developing mobile applications including UI implementation, backend and API integration, and real-time feature development.',
    },
    {
      id: 3,
      title: 'Primakara English Language Proficiency Test',
      issuer: 'Primakara University Language Center in collaboration with APBIPA Bali',
      date: 'September 2025',
      description: 'Demonstrated English proficiency for professional communication, technical collaboration, and international work environments.',
    }
  ]

  return (
    <section id="certifications" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title animate-slide-up" style={{
          fontSize: '3rem',
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Certifications & Learning
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {certifications.map((cert, index) => (
            <div key={cert.id} className="card animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '12px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginTop: '10px'
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1  rem',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    marginBottom: '2px',
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p style={{
                fontSize: '0.8rem',
                color: 'var(--accent)',
                marginBottom: '12px',
                fontWeight: '600',
              }}>
                {cert.date}
              </p>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '0',
              }}>
                {cert.description}
              </p>
            </div>
          ))}
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
