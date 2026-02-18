'use client';

import * as React from 'react'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'
// import Img from '../assets/Project/IoT.png'
// import Img2 from '../assets/Project/IoT.jpeg'
// import Img3 from '../assets/Project/GYM1.png'
// import Img4 from '../assets/Project/GYM2.png'
// import Img5 from '../assets/Project/GYM3.png'
// import Img6 from '../assets/Project/GYM4.png'
// import Img7 from '../assets/Project/GYM5.png'
// import Img8 from '../assets/Project/kindegarten1.png'
// import Img9 from '../assets/Project/kindegarten2.png'
// import Img10 from '../assets/Project/tarumenyan.png'
// import Img11 from '../assets/Project/tarumenyan2.png'
// import Img12 from '../assets/Project/Sonnet1.png'
// import Img13 from '../assets/Project/Sonnet2.png'
// import Img14 from '../assets/Project/Sonnet3.png'
// import Img15 from '../assets/Project/portofolio1.png'
// import Img16 from '../assets/Project/portofolio2.png'
// import Img17 from '../assets/Project/portofolio3.png'


const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href

const projects = [
  {
    id: 1,
    title: 'IoT Orange Sorting System — Engineering Project',
    description: 'IoT-based conveyor system designed to automatically sort oranges by weight using embedded sensors with real-time monitoring and data reporting.',
    image: asset('IoT.png'),
    images: [asset('IoT.png'), asset('IoT.jpeg')],
    tech:['React', 'Firebase', 'Express.js', 'ESP8266', 'C++','Tailwind CSS'],
    problemSolution: 'Developed embedded logic in C++ using ESP8266 and load cell sensors, streamed measurement data to Firebase, built a React monitoring dashboard, and implemented an Express.js service to export sorting data into CSV reports.',
    githubLink: 'https://github.com/Ry4nsookieboo/iot-conveyor-sorting-system-esp8266',
  },
  {
    id: 2,
    title: 'Sonnet Weather — Weather and Diary Mobile App',
    description: 'A personal mobile application combining weather forecasting with journaling to capture daily reflections alongside environmental conditions.',
    image: asset('Sonnet1.png'),
    images: [asset('Sonnet1.png'), asset('Sonnet2.png'), asset('Sonnet3.png')],
    tech: ['React Native', 'Supabase', 'Open Meteo API','JavaScript','CSS'],
    problemSolution: 'Implemented location-based weather data from Open Meteo API, dynamic weather icons adapting to time and conditions, and persistent diary storage using Supabase.',
    githubLink: 'https://github.com/Ry4nsookieboo/Sonnet-Weather_Ry4n',
  },
  {
    id: 3,
    title: 'Personal Trainer Consulting — Mobile App',
    description: 'Mobile personal trainer application featuring trainer-member communication and AI-assisted chatbot focused on health and workout discussions',
    image: asset('GYM1.png'),
    images: [asset('GYM1.png'), asset('GYM2.png'), asset('GYM3.png'), asset('GYM4.png'), asset('GYM5.png')],
    tech: ['React Native', '.NET', 'Supabase', 'WebSocket', 'OpenAI API' ],
    problemSolution: 'Built real-time messaging using WebSocket, implemented environment-based configuration (.env), integrated ChatGPT API with controlled domain context, and handled backend communication.',
    githubLink: 'https://github.com/Ry4nsookieboo/personal-trainer-app',
  },
  {
    id: 4,
    title: 'Tarumenyan — Photography Bussiness Website',
    description: 'Custom portfolio and booking website developed for a photography business to manage galleries and client inquiries.',
    image: asset('tarumenyan2.png'),
    images: [asset('tarumenyan2.png'), asset('tarumenyan2.png')],
    tech: ['React (Vite)', 'MySQL', 'Node.js', 'Tailwind CSS'],
    problemSolution: 'Developed responsive UI and backend logic for content management and booking workflow.',
    githubLink: 'https://github.com/Ry4nsookieboo/Website-Tarumenyan',
  },
  {
    id: 5,
    title: 'Kindergarten Website (UI Contribution) — Bussiness Website',
    description: 'Collaborative web project contributing to UI development and data-driven content structure for a kindergarten website.',
    image: asset('kindegarten1.png'),
    images: [asset('kindegarten1.png'), asset('kindegarten2.png')],
    tech: ['Eleventy', 'HTML', 'CSS', 'JSON'],
    problemSolution: 'Designed interface components and structured teacher data using JSON-based content management.',
    githubLink: 'https://github.com/Ry4nsookieboo/kindergarten-website',
  },
  {
    id: 6,
    title: 'Personal Portfolio — Portofolio Website',
    description: 'Interactive portfolio website built to present projects, technical skills, and development journey.',
    image: asset('portofolio3.png'),
    images: [asset('portofolio3.png'), asset('portofolio3.png'), asset('portofolio3.png')],
    tech: ['React (Vite)', 'Tailwind CSS'],
    problemSolution: 'Developed a responsive portfolio interface with a clear layout and performance-focused design.',
    githubLink: 'https://github.com/Ry4nsookieboo/Portofolio',
  },
] 

export default function ProjectsSection() {
  const [indices, setIndices] = React.useState(() => {
    const map = {}
    projects.forEach(p => { map[p.id] = 0 })
    return map
  })
  const [modalProjectId, setModalProjectId] = React.useState(null)
  const [modalIndex, setModalIndex] = React.useState(0)
  const [hoveredId, setHoveredId] = React.useState(null)
  const [pressedId, setPressedId] = React.useState(null)
  const [clickRipples, setClickRipples] = React.useState({})
  React.useEffect(() => {
    if (modalProjectId) return
    const t = setInterval(() => {
      setIndices(prev => {
        const next = { ...prev }
        projects.forEach(p => {
          const len = (p.images && p.images.length) || 0
          if (len > 0) next[p.id] = (prev[p.id] + 1) % len
        })
        return next
      })
    }, 2000)
    return () => clearInterval(t)
  }, [modalProjectId])
  const openModal = (project) => {
    setModalProjectId(project.id)
    setModalIndex(indices[project.id] || 0)
  }
  const closeModal = () => {
    if (modalProjectId != null) {
      setIndices(prev => ({ ...prev, [modalProjectId]: modalIndex }))
    }
    setModalProjectId(null)
  }
  const navigateModal = (dir) => {
    const project = projects.find(p => p.id === modalProjectId)
    if (!project || !project.images || project.images.length === 0) return
    const len = project.images.length
    const next = (modalIndex + (dir === 'next' ? 1 : -1) + len) % len
    setModalIndex(next)
  }
  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <h2 className="section-title animate-slide-up" style={{
          fontSize: '3rem',
          marginBottom: '48px',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Featured Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {projects.map((project, index) => (
            <div key={project.id} className="card animate-slide-up" style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animationDelay: `${index * 0.1}s`,
            }}>
              <div
               style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                marginBottom: '16px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-dark)',
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={(project.images && project.images[indices[project.id]]) || project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    filter: hoveredId === project.id ? 'blur(2px)' : 'none',
                    transitionProperty: 'transform, filter',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={(e) => {
                    const rect = e.currentTarget.parentElement.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const key = Date.now()
                    setPressedId(project.id)
                    setClickRipples(prev => ({
                      ...prev,
                      [project.id]: { x, y, active: false, key }
                    }))
                    setTimeout(() => {
                      setClickRipples(prev => ({
                        ...prev,
                        [project.id]: { ...(prev[project.id] || { x, y }), active: true, key }
                      }))
                    }, 0)
                    setTimeout(() => {
                      setPressedId(null)
                      setClickRipples(prev => {
                        const next = { ...prev }
                        delete next[project.id]
                        return next
                      })
                      openModal(project)
                    }, 120)
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  opacity: hoveredId === project.id ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}>
                  <span style={{
                    padding: '8px 12px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    borderRadius: '6px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    transform: pressedId === project.id ? 'scale(0.92)' : (hoveredId === project.id ? 'scale(1.03)' : 'scale(1)'),
                    transition: 'transform 0.2s ease',
                  }}>
                    Click here!
                  </span>
                </div>
                {clickRipples[project.id] && (
                  <span style={{
                    position: 'absolute',
                    left: `${clickRipples[project.id].x}px`,
                    top: `${clickRipples[project.id].y}px`,
                    width: '10px',
                    height: '10px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(0, 217, 255, 0.6)',
                    transform: clickRipples[project.id].active ? 'translate(-50%, -50%) scale(8)' : 'translate(-50%, -50%) scale(0)',
                    opacity: clickRipples[project.id].active ? 0 : 0.6,
                    transition: 'transform 300ms ease-out, opacity 300ms ease-out',
                    pointerEvents: 'none',
                  }} />
                )}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '8px',
                color: 'var(--text-primary)',
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '12px',
                lineHeight: '1.6',
              }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: 'rgba(0, 217, 255, 0.05)', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5',
                }}>
                  <strong style={{ color: 'var(--accent)' }}>Solution:</strong> {project.problemSolution}
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '8px', fontWeight: '600' }}>TECH STACK</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map((tech) => (
                    <span key={tech} style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      backgroundColor: 'rgba(0, 102, 255, 0.1)',
                      color: 'var(--accent)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      border: '1px solid rgba(0, 102, 255, 0.2)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                {/* <a href={project.liveLink} style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-dark)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <ExternalLink size={16} />
                  Demo
                </a> */}
                <a href={project.githubLink} style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  backgroundColor: 'transparent',
                  color: 'var(--accent)',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  border: '1px solid var(--accent)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.1)'
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}>
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProjectId && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={(projects.find(p => p.id === modalProjectId)?.images || [])[modalIndex] || "/placeholder.svg"}
              alt="Preview"
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid var(--accent)',
                backgroundColor: 'var(--bg-dark)',
                display: 'block',
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                borderRadius: '6px',
                padding: '6px',
                cursor: 'pointer',
                backdropFilter: 'blur(2px)',
                zIndex: 3,
              }}
              aria-label="Close preview"
            >
              <X />
            </button>
            <button
              onClick={() => navigateModal('prev')}
              style={{
                position: 'absolute',
                top: '50%',
                left: '8px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                borderRadius: '6px',
                padding: '8px',
                cursor: 'pointer',
                zIndex: 2,
              }}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => navigateModal('next')}
              style={{
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                borderRadius: '6px',
                padding: '8px',
                cursor: 'pointer',
                zIndex: 2,
              }}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}

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
