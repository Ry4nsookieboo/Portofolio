'use client';

import { Braces, Cpu, Database, GitBranch, Layers3, ServerCog, Sparkles } from 'lucide-react'

const skillsData = [
  {
    category: 'Application & AI',
    Icon: Sparkles,
    skills: ['Mobile Application Development', 'TTS', 'Generative AI'],
  },
  {
    category: 'Engineering',
    Icon: Layers3,
    skills: ['System Architecture', 'Debugging', 'Object-Oriented Programming (OOP)'],
  },
  {
    category: 'Frontend',
    Icon: Braces,
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Data Visualization'],
  },
  {
    category: 'Backend & APIs',
    Icon: ServerCog,
    skills: ['Python', 'REST APIs', 'Full-Stack Development', 'Node.js', 'Express.js', '.NET', 'API Integration'],
  },
  {
    category: 'Data',
    Icon: Database,
    skills: ['SQL', 'Firebase', 'Supabase (PostgreSQL)', 'MySQL'],
  },
  {
    category: 'Embedded Systems',
    Icon: Cpu,
    skills: ['C++', 'Internet of Things (IoT)', 'Embedded Systems'],
  },
  {
    category: 'Workflow',
    Icon: GitBranch,
    skills: ['Git'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section presentation-section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Technical toolkit</p>
          <h2>Skills for product-minded engineering.</h2>
        </div>

        <div className="skills-layout">
          {skillsData.map(({ category, Icon, skills }, index) => (
            <article key={category} className="skill-group" data-reveal style={{ '--reveal-delay': `${Math.min(index * 70, 280)}ms` }}>
              <div className="skill-group__heading">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                <h3>{category}</h3>
              </div>
              <div className="skill-group__items">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
