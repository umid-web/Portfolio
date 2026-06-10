import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaPaintBrush, FaServer } from 'react-icons/fa'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import profileImg from '@/Images/5.png'
import '@/styles/pages/Services.scss'

const services = [
  {
    id: 1,
    icon: <FaCode />,
  },
  {
    id: 2,
    icon: <FaPaintBrush />,
  },
  {
    id: 3,
    icon: <FaServer />,
  },
]

const Services = () => {
  const { t } = useLanguage()

  return (
    <motion.div
      className="services-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title={t.services.seoTitle} description={t.services.seoDescription} />

      <div className="page-header">
        <h1>{t.services.title}</h1>
        <p>{t.services.subtitle}</p>
        <div className="heading-line"></div>
      </div>

      <div className="services-media glass-card">
        <img src={profileImg} alt="Umidjon working profile" />
        <div>
          <span>{t.services.focusLabel}</span>
          <h2>{t.services.focusTitle}</h2>
          <p>{t.services.focusText}</p>
          <FaLaptopCode />
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="service-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{t.services.items[index][0]}</h3>
            <p>{t.services.items[index][1]}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
