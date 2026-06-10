import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import SectionWrapper from '@/components/layout/SectionWrapper'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import profileImg from '@/Images/5.png'
import '@/styles/pages/NotFound.scss'

const NotFound = () => {
  const { t } = useLanguage()

  return (
    <>
      <SEO title={t.notFound.seoTitle} description={t.notFound.seoDescription} />
      <SectionWrapper id="notfound">
        <div className="not-found-page">
          <div>
            <span>404</span>
            <h2>{t.notFound.title}</h2>
            <p>{t.notFound.text}</p>
            <NavLink to="/" className="back-home">
              <FaArrowLeft /> {t.notFound.back}
            </NavLink>
          </div>
          <img src={profileImg} alt="Portfolio profile media" />
        </div>
      </SectionWrapper>
    </>
  )
}

export default NotFound
