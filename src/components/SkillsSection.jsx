'use client';

export default function SkillsSection() {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C++','SQL'],
      icon: '💻',
    },
    {
      category: 'Frontend',
      skills: ['React', 'React Native', 'Tailwind CSS', 'Responsive UI Design', 'REST APIs'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', '.NET', 'Authentication & Role-based Access'],
      icon: '⚙️',
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'Firebase', 'Supabase'],
      icon: '🗄️',
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'WebSocket','API Integration', 'Linux', 'Environment Configuration'],
      icon: '🛠️',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
      icon: '🤝',
    },
  ]

  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title animate-slide-up" style={{
          fontSize: '3rem',
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Technical Skills
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {skillsData.map((category, index) => (
            <div key={category.category} className="card animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{category.icon}</div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '16px',
                color: 'var(--primary)',
                fontWeight: '700',
              }}>
                {category.category}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
              }}>
                {category.skills.map((skill) => (
                  <span key={skill} style={{
                    display: 'inline-block',
                    padding: '6px 14px',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    color: 'var(--accent)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    transition: 'all 0.3s ease',
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.2)'
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
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
