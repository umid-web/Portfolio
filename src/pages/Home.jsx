import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'
import SEO from '@/components/common/SEO'
import '@/styles/pages/Home.scss'
import homeBg from '@/Images/homeBg.mp4'

const Home = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title={`${t('nav.home')} | Umidjon Portfolio`}
        description={t('home.subtitle')}
      />

      {/* 🎥 FULLSCREEN VIDEO BACKGROUND */}
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src={homeBg} type="video/mp4" />
        </video>
      </div>

      {/* CONTENT */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              {t('home.greeting')}
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
                  'Frontend Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Web Designer',
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
              {t('home.subtitle')}
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
                {t('home.cta_projects')} <FaArrowRight />
              </button>

              <button
                className="btn btn--outline"
                onClick={() => navigate('/contact')}
              >
                {t('home.cta_contact')} <FaEnvelope />
              </button>

            </motion.div>
          </div>

          {/* RIGHT SIDE */}
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
                    {'  '}<span className="c-purple">role:</span> <span className="c-green">'Frontend Dev'</span>,{'\n'}
                    {'  '}<span className="c-purple">skills:</span> [<span className="c-green">'React'</span>, <span className="c-green">'SCSS'</span>, <span className="c-green">'Vite'</span>]{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
