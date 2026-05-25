import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

import SEO from '@/components/common/SEO'
import profileImg from '@/Images/5.png'

import '@/styles/pages/About.scss'

const About = () => {
  const { t } = useTranslation()

  const skills = [
    { name: 'React.js', level: 80 },
    { name: 'JavaScript (ES6+)', level: 80 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Sass / SCSS', level: 95 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Vite & Webpack', level: 80 },
  ]

  return (
    <motion.div
      className="about-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title={`${t('nav.about')} | Umidjon`}
        description={t('about.description')}
      />

      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>{t('about.title')}</h1>
        <div className="heading-line"></div>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        {/* IMAGE */}
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

        {/* TEXT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Men kimman?</h2>

          <p className="lead">{t('about.description')}</p>

          <p>
            Zamonaviy veb texnologiyalardan foydalanib, tez, xavfsiz va
            foydalanuvchilar uchun qulay bo‘lgan ilovalar yarataman. Men asosan
            Frontend yo‘nalishida ishlayman va chiroyli interfeyslarni
            jonlantirishni yoqtiraman.
          </p>

          {/* BUTTONS */}
          <div className="about-actions">
            <a href="/resume.pdf" download className="btn btn--primary">
              <FaDownload />
              {t('nav.resume')}
            </a>
          </div>

          {/* SKILLS */}
          <div className="skills-section mt-4">
            <h3>Mening Ko‘nikmalarim</h3>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-bar-bg">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2,
                      }}
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
