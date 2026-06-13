import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import '@/styles/pages/Projects.scss'

// Local images
import movieImg from '@/Images/9b7449a1-6a78-4464-86ab-47e6238e17c7.png'
import weatherImg from '@/Images/50aa51b8-2b7e-407e-9682-1dc4ed9cc5b8.png'
import LearningcenterImg from '@/Images/CourceImg.png'

const projects = [
  {
    id: 1,
    category: 'frontend',
    image: LearningcenterImg,
    tech: ['React', 'MongoDB', 'Stripe'],
    github: 'https://github.com/umid-web/LearningCenter',
    live: 'https://learning-center-amber.vercel.app/',
  },
  {
    id: 2,
    category: 'frontend',
    image: movieImg,
    tech: ['React', 'Vite', 'SCSS', 'Framer Motion'],
    github: 'https://github.com/umid-web/Movie',
    live: 'https://youtube-clone1-flame.vercel.app/',
  },
  {
    id: 3,
    category: 'frontend',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop',
    tech: ['React', 'Redux', 'Firebase'],
    github: 'https://github.com/umid-web',
    live: 'https://example.com',
  },
  {
    id: 4,
    category: 'frontend',
    image: weatherImg,
    tech: ['React', 'API', 'Chart.js'],
    github: 'https://github.com/umid-web/Weather',
    live: 'https://weather-omega-three-87.vercel.app/',
  },
  {
    id: 5,
    category: 'fullstack',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/umid-web',
    live: 'https://example.com',
  },
  {
    id: 6,
    category: 'ui/ux',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&auto=format&fit=crop',
    tech: ['Figma', 'React Native'],
    github: 'https://github.com/umid-web',
    live: 'https://example.com',
  },
]

const filters = [
  { id: 'all', key: 'all' },
  { id: 'frontend', key: 'frontend' },
  { id: 'fullstack', key: 'fullstack' },
  { id: 'ui/ux', key: 'uiux' },
]

const Projects = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <motion.div
      className="projects-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title={t.projects.seoTitle}
        description={t.projects.seoDescription}
      />

      <div className="page-header">
        <h1>{t.projects.title}</h1>
        <p>{t.projects.subtitle}</p>
        <div className="heading-line"></div>
      </div>

      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-tab ${
              activeFilter === filter.id ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {t.projects.filters[filter.key]}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={t.projects.items[project.id - 1][0]}
              />

              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${t.projects.items[project.id - 1][0]} GitHub`}
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${
                      t.projects.items[project.id - 1][0]
                    } Live Preview`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{t.projects.items[project.id - 1][0]}</h3>

              <p className="project-description">
                {t.projects.items[project.id - 1][1]}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
