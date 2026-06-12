import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaTelegramPlane } from 'react-icons/fa'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import '@/styles/pages/Home.scss'
import homeBg from '@/Images/homeBg.mp4'

const Home = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title={t.home.seoTitle}
        description={t.home.seoDescription}
      />

      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src={homeBg} type="video/mp4" />
        </video>
      </div>

      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              {t.home.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gradient">Tojimatov Umidjon</span>
              <br />
              <TypeAnimation
                sequence={[
                  t.home.roles[0],
                  2000,
                  t.home.roles[1],
                  2000,
                  t.home.roles[2],
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              {t.home.subtitle}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                className="btn btn--primary"
                onClick={() => navigate('/projects')}
              >
                {t.home.viewProjects} <FaArrowRight />
              </button>

              <button
                className="btn btn--outline"
                onClick={() =>
                  window.open('https://t.me/umid_web', '_blank')
                }
              >
                {t.home.contactMe} <FaTelegramPlane />
              </button>
            </motion.div>
          </div>

          {/* Qolgan kodlaringiz shu yerda davom etadi */}
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </motion.div>
  )
}

export default Home