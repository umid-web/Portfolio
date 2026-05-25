import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import SEO from '@/components/common/SEO';
import { ProjectContext } from '@/context/ProjectContext';
import '@/styles/pages/Projects.scss';

const Projects = () => {
  const { t } = useTranslation();
  const { projects } = useContext(ProjectContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="projects-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title={`${t('nav.projects')} | Umidjon`} description="Portfolio projects" />
      
      <div className="page-header">
        <h1>{t('projects.title')}</h1>
        <div className="heading-line"></div>
      </div>

      {projects.length > 0 ? (
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder"><FaFolder /></div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title={t('projects.demo')}>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.sourceLink && (
                      <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" title={t('projects.code')}>
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="empty-projects">
          <p>{t('projects.empty')}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
