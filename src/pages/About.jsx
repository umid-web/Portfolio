import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import profileImg from '@/Images/5.png'
import resumePdf from '@/Images/Tojimatov_Umidjon_Resume.pdf'
import '@/styles/pages/About.scss'

const skills = [
  { name: 'React.js', level: 80 },
  { name: 'JavaScript (ES6+)', level: 80 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'Sass / SCSS', level: 95 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Vite & Webpack', level: 80 },
]

const About = () => {
  const { t } = useLanguage()

  return (
    <motion.div
      className="about-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title={t.about.seoTitle}
        description={t.about.seoDescription}
      />

      <div className="page-header">
        <h1>{t.about.title}</h1>
        <p>{t.about.subtitle}</p>
        <div className="heading-line"></div>
      </div>

      <div className="about-content">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper glass-card">
            <img src={profileImg} alt="Umidjon" className="about-profile-img" />
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>{t.about.heading}</h2>

          <p className="lead">{t.about.lead}</p>

          <p>{t.about.body}</p>

          <div className="about-actions">
            <a href={resumePdf} download className="btn btn--primary">
              <FaDownload />
              {t.about.download}
            </a>
          </div>

          <div className="skills-section mt-4">
            <h3>{t.about.skills}</h3>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-bar-bg">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
