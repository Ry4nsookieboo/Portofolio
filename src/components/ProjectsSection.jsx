'use client';

import * as React from 'react'
import { createPortal } from 'react-dom'
import { AlertTriangle, ChevronLeft, ChevronRight, Github, LockKeyhole, Maximize2, X } from 'lucide-react'

const asset = (name) => new URL(`../assets/${name}`, import.meta.url).href
const projectAsset = (directory, name) => `${import.meta.env.BASE_URL}projects/${directory}/${encodeURIComponent(name)}`

const projects = [
  {
    id: 'noelle',
    title: 'NOELLEOS',
    type: 'Private AI Companion',
    description: 'An evolving desktop AI companion that brings conversational intelligence, long-term memory, voice interaction, and a Live3D avatar together in a coherent local-first system.',
    images: [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15].map((number) => projectAsset('noelle', `noelleos (${number}).png`)),
      projectAsset('noelle', 'Voice training.jpeg'),
    ],
    tech: ['Python', 'System Architecture', 'Text-to-Speech (TTS)', 'Generative AI', 'API Integration'],
    private: true,
  },
  {
    id: 'iot',
    title: 'IoT Orange Sorting System',
    type: 'Engineering Project',
    description: 'An IoT-based conveyor system that sorts oranges by weight with embedded sensors, real-time monitoring, and data reporting.',
    images: [asset('IoT.png'), asset('IoT.jpeg')],
    tech: ['React.js', 'Firebase', 'Express.js', 'Embedded Systems', 'C++', 'Tailwind CSS'],
    githubLink: 'https://github.com/Ry4nsookieboo/iot-conveyor-sorting-system-esp8266',
  },
  {
    id: 'sonnet',
    title: 'Sonnet Weather',
    type: 'Weather & Diary Mobile App',
    description: 'A personal mobile app that combines weather forecasting with journaling, helping users capture daily reflections alongside local conditions.',
    images: Array.from({ length: 18 }, (_, index) => projectAsset('sonnet', `sonnet (${index + 1}).png`)),
    tech: ['React Native', 'Supabase (PostgreSQL)', 'REST APIs', 'JavaScript'],
    githubLink: 'https://github.com/Ry4nsookieboo/Sonnet-Weather_Ry4n',
  },
  {
    id: 'trainer',
    title: 'Personal Trainer Consulting',
    type: 'Mobile Application',
    description: 'A personal-training application for trainer-member communication and focused AI-assisted health and workout discussions.',
    images: Array.from({ length: 8 }, (_, index) => projectAsset('mmm', `mmm (${index + 1}).png`)),
    tech: ['React Native', '.NET', 'Supabase (PostgreSQL)', 'API Integration'],
    githubLink: 'https://github.com/Ry4nsookieboo/personal-trainer-app',
  },
  {
    id: 'tarumenyan',
    title: 'Tarumenyan',
    type: 'Photography Business Website',
    description: 'A custom photography portfolio and booking website for presenting galleries and guiding client inquiries.',
    images: Array.from({ length: 11 }, (_, index) => projectAsset('tarumenyan', `trm (${index + 1}).png`)),
    tech: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/Ry4nsookieboo/Website-Tarumenyan',
  },
  {
    id: 'kindergarten',
    title: 'Kindergarten Website',
    type: 'UI Contribution',
    description: 'A collaborative website project with UI development and structured, data-driven content for a kindergarten.',
    images: [projectAsset('kindegarten', 'uls (1).png'), projectAsset('kindegarten', 'uls (2).png')],
    tech: ['JavaScript', 'HTML', 'CSS', 'Data Visualization'],
    githubLink: 'https://github.com/Ry4nsookieboo/kindergarten-website',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    type: 'Portfolio Website',
    description: 'An interactive portfolio that presents selected projects, technical skills, and an ongoing development journey.',
    images: [asset('portofolio1.png'), asset('portofolio2.png'), asset('portofolio3.png')],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/Ry4nsookieboo/Portofolio',
  },
]

export default function ProjectsSection() {
  const [indices, setIndices] = React.useState(() => Object.fromEntries(projects.map((project) => [project.id, 0])))
  const [modal, setModal] = React.useState(null)
  const [privateDialogOpen, setPrivateDialogOpen] = React.useState(false)

  React.useEffect(() => {
    if (modal) return undefined
    const timer = window.setInterval(() => {
      setIndices((current) => Object.fromEntries(projects.map((project) => [
        project.id,
        ((current[project.id] || 0) + 1) % project.images.length,
      ])))
    }, 4200)
    return () => window.clearInterval(timer)
  }, [modal])

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModal(null)
        setPrivateDialogOpen(false)
      }
      if (!modal) return
      if (event.key === 'ArrowLeft') changeModalImage(-1)
      if (event.key === 'ArrowRight') changeModalImage(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modal])

  const changeImage = (project, direction) => {
    setIndices((current) => ({
      ...current,
      [project.id]: (current[project.id] + direction + project.images.length) % project.images.length,
    }))
  }

  const changeModalImage = (direction) => {
    setModal((current) => {
      if (!current) return current
      const nextIndex = (current.index + direction + current.project.images.length) % current.project.images.length
      return { ...current, index: nextIndex }
    })
  }

  const openGallery = (project) => setModal({ project, index: indices[project.id] || 0 })

  return (
    <section id="projects" className="section presentation-section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Projects built around real use.</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const imageIndex = indices[project.id] || 0
            return (
              <article
                key={project.id}
                className={`project-showcase ${index % 2 ? 'project-showcase--reverse' : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(index * 70, 280)}ms` }}
              >
                <div className="project-showcase__copy">
                  <p className="project-showcase__type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-showcase__description">{project.description}</p>

                  <div className="tech-list" aria-label={`${project.title} technologies`}>
                    {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>

                  {project.private ? (
                    <button className="private-project-trigger" type="button" onClick={() => setPrivateDialogOpen(true)}>
                      <LockKeyhole size={16} aria-hidden="true" />
                      Private project development
                    </button>
                  ) : (
                    <a className="project-code-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} aria-hidden="true" />
                      View source
                    </a>
                  )}
                </div>

                <div className="project-showcase__gallery">
                  <button
                    className="project-image-button"
                    type="button"
                    onClick={() => openGallery(project)}
                    aria-label={`Open ${project.title} gallery`}
                  >
                    <img src={project.images[imageIndex]} alt={`${project.title} preview ${imageIndex + 1}`} loading="lazy" />
                    <span className="gallery-expand-label"><Maximize2 size={16} aria-hidden="true" /> View gallery</span>
                  </button>
                  <div className="gallery-controls">
                    <button type="button" onClick={() => changeImage(project, -1)} aria-label={`Previous ${project.title} image`}>
                      <ChevronLeft size={18} />
                    </button>
                    <span aria-live="polite">{String(imageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>
                    <button type="button" onClick={() => changeImage(project, 1)} aria-label={`Next ${project.title} image`}>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {modal && createPortal((
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${modal.project.title} image gallery`} onMouseDown={() => setModal(null)}>
          <div className="lightbox__content" onMouseDown={(event) => event.stopPropagation()}>
            <img src={modal.project.images[modal.index]} alt={`${modal.project.title} enlarged preview ${modal.index + 1}`} />
            <button className="lightbox__close" type="button" onClick={() => setModal(null)} aria-label="Close gallery"><X size={20} /></button>
            <button className="lightbox__previous" type="button" onClick={() => changeModalImage(-1)} aria-label="Previous image"><ChevronLeft size={24} /></button>
            <button className="lightbox__next" type="button" onClick={() => changeModalImage(1)} aria-label="Next image"><ChevronRight size={24} /></button>
          </div>
        </div>
      ), document.body)}

      {privateDialogOpen && createPortal((
        <div className="private-dialog-backdrop" role="presentation" onMouseDown={() => setPrivateDialogOpen(false)}>
          <section className="private-dialog" role="dialog" aria-modal="true" aria-labelledby="private-project-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="private-dialog__close" type="button" onClick={() => setPrivateDialogOpen(false)} aria-label="Close private project notice"><X size={19} /></button>
            <AlertTriangle size={34} strokeWidth={1.6} aria-hidden="true" />
            <h3 id="private-project-title">Private project development</h3>
            <p>Currently, this project is being developed internally, and the source code is not publicly available. However, you can follow the development process through photos and videos documenting its progress.</p>
          </section>
        </div>
      ), document.body)}
    </section>
  )
}
