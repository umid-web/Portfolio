import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaDownload, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import LanguageToggle from '@/components/common/LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'
import '@/styles/components/Navbar.scss'
import resumePdf from '@/Images/Tojimatov_Umidjon_Resume.pdf'

const navItems = [
  { to: '#about', key: 'about' },
  { to: '#projects', key: 'projects' },
  { to: '#services', key: 'services' },
  { to: '#contact', key: 'contact' },
]

const Navbar = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Scroll 50px dan oshganda fon o'zgaradi
      setIsScrolled(window.scrollY > 50)

      // Active section detection
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.classList.toggle('nav-modal-open', isOpen)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('nav-modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <nav
      className={`navbar ${isScrolled || isOpen ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={(e) => handleScrollTo(e, '#home')}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="logo-text">
              Umid<span>WEB</span>
            </h2>
          </motion.div>
        </a>

        <div className="navbar-actions-mobile">
          <LanguageToggle />
          <button
            className="burger"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <button
          className={`nav-backdrop ${isOpen ? 'open' : ''}`}
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
        />

        <ul id="nav-menu" className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                className={activeSection === item.key ? 'active' : undefined}
                onClick={(e) => handleScrollTo(e, item.to)}
              >
                {t.nav[item.key]}
              </a>
            </li>
          ))}

          <li className="nav-extra">
            <a
              href={resumePdf}
              download
              className="resume-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload /> {t.nav.resume}
            </a>
          </li>

          <li className="nav-desktop-actions">
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar