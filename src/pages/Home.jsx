import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'
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
                onClick={() => navigate('/contact')}
              >
                {t.home.contactMe} <FaEnvelope />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="blob"></div>

            <div className="glass-panel">
              <div className="mac-header">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="code-snippet">
                <pre>
                  <code>
                    <span className="c-blue">const</span> <span className="c-yellow">developer</span> = {'{\n'}
                    {'  '}<span className="c-purple">name:</span> <span className="c-green">'Umidjon'</span>,{'\n'}
                    {'  '}<span className="c-purple">role:</span> <span className="c-green">'{t.home.codeRole}'</span>,{'\n'}
                    {'  '}<span className="c-purple">skills:</span> [<span className="c-green">'React'</span>, <span className="c-green">'SCSS'</span>, <span className="c-green">'Vite'</span>]{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
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
