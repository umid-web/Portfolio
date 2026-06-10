import { NavLink } from 'react-router-dom'
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import './Footer.scss'

const Footer = () => {
  const { t } = useLanguage()

  const scrollToTop = () => {
    // universal scroll
    const scrollTarget = document.scrollingElement || document.documentElement || document.body;

    try {
      scrollTarget.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (e) {
      // agar smooth ishlamasa
      window.scrollTo(0, 0);
    }

    // extra safety
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Umidjon <span>Tojimatov</span>
              <span className="lastname"> Abduraxmonovich</span>
            </h2>
            <p className="footer-description">{t.common.role}</p>
            <div className="footer-socials">
              <a href="https://github.com/umid-web" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/umidjon-tojimatov-1b753935a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://t.me/umid_web" target="_blank" rel="noreferrer"><FaTelegram /></a>
              <a href="https://www.instagram.com/umidjon.0528/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>{t.footer.navigation}</h3>
            <NavLink to="/">{t.footer.home}</NavLink>
            <NavLink to="/about">{t.footer.about}</NavLink>
            <NavLink to="/projects">{t.footer.projects}</NavLink>
            <NavLink to="/services">{t.footer.services}</NavLink>
            <NavLink to="/contact">{t.footer.contact}</NavLink>
          </div>

          <div className="footer-contact">
            <h3>{t.footer.contactTitle}</h3>
            <p>📧 umidjontojimatov742@gmail.com</p>
            <p>📞 +998 90 160 0528</p>
            <p>📍 {t.common.location}: {t.common.uzbekistan}</p>
          </div>

          <div className="footer-action">
            <button onClick={scrollToTop} aria-label="Back to top">
              <FaArrowUp />
            </button>
            <p>{t.footer.backTop || "Back to top"}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Umidjon Tojimatov. {t.footer.allRights || "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer