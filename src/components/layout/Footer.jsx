import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa'

import '../layout/Footer.scss'

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      {/* TOP */}
      <div className="container footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Umidjon<span>.</span>
          </h2>

          <p className="footer-description">{t('home.subtitle')}</p>

          <div className="footer-socials">
            <a
              href="https://github.com/umid-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/umidjon-tojimatov-1b753935a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://t.me/umid-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>

            <a
              href="https://www.instagram.com/umidjon.0528/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Navigatsiya</h3>

          <NavLink to="/">Bosh sahifa</NavLink>
          <NavLink to="/about">Men haqimda</NavLink>
          <NavLink to="/projects">Loyihalar</NavLink>
          <NavLink to="/contact">Bog‘lanish</NavLink>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Aloqa</h3>

          <p>Email: umidjontojimatov742@gmail.com</p>
          <p>Location: Uzbekistan</p>
          <p>Frontend Developer</p>
        </div>

        {/* ACTION */}
        <div className="footer-action">
          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>

          <p>Yuqoriga qaytish</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
