import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import '@/styles/components/Navbar.scss'
import image from '../../Images/5.png'
import resumePdf from '@/Images/Tojimatov_Umidjon_Resume.pdf'
const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Handle scroll effect & mobile menu state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar-container">
        <NavLink to="/" className="logo" style={{ textDecoration: 'none' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="logo-text">Umid<span>WEB</span></h2>
          </motion.div>
        </NavLink>
        <div className="navbar-actions-mobile">
          {isMobile && <ThemeToggle />}
          {isMobile && <LanguageSwitcher />}
          {isMobile && (
            <button
              className="burger"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="nav-menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        <ul
          id="nav-menu"
          className={`nav-links ${isMobile ? (isOpen ? 'open' : 'closed') : ''}`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.projects')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
          </li>
          <li className="nav-extra">
            <a
              href={resumePdf}
              download
              className="resume-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload /> {t('nav.resume')}
            </a>
          </li>
          {!isMobile && (
            <li className="nav-desktop-actions">
              <LanguageSwitcher />
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
