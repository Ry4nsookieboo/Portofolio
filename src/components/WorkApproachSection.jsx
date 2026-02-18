'use client';

export default function WorkApproachSection() {
  return (
    <section id="work-approach" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div
        className="container animate-slide-up"
        style={{
          maxWidth: '900px',
          textAlign: 'center',
        }}
      >
        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3rem)',
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          How I Work / Development Philosophy
        </h2>

        <p
          style={{
            margin: '0 auto 20px',
            maxWidth: '720px',
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            letterSpacing: '0.2px',
            fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
          }}
        >
          I focus on building real, working solutions rather than over-engineering early.
          My approach starts from understanding the problem, creating a functional prototype,
          and iterating based on real usage.
        </p>

        <p
          style={{
            margin: '0 auto',
            maxWidth: '720px',
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            letterSpacing: '0.2px',
            fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
          }}
        >
          I enjoy working across the stack, from UI implementation and API integration to
          backend logic and embedded systems, ensuring each part communicates reliably.
          I prioritize clean structure, maintainability, and user experience while keeping
          performance practical for real-world use.
        </p>
      </div>
    </section>
  )
}
