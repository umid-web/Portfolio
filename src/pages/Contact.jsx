import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiArrowUpRight, FiGlobe, FiLoader, FiMail, FiMessageSquare, FiUser } from 'react-icons/fi'
import SEO from '@/components/common/SEO'
import { useLanguage } from '@/context/LanguageContext'
import profileImg from '@/Images/5.png'
import '@/styles/pages/Contact.scss'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // .env faylda malumotlar borligini tekshirish
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS sozlamalari topilmadi. .env faylni tekshiring.')
      setIsLoading(false)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      toast.success(t.contact.success || 'Xabar muvaffaqiyatli yuborildi!')
      setFormData({ name: '', email: '', message: '' })
      // Formani tozalash (ixtiyoriy)
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error(t.contact.error || 'Xatolik yuz berdi. Qaytadan urinib ko‘ring.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="contact-premium-page">
      <SEO title={t.contact.seoTitle} description={t.contact.seoDescription} />
      <div className="bg-grid-lines"></div>

      <div className="contact-wrapper">
        {/* Left side - unchanged */}
        <motion.div
          className="info-section"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="tagline"><span>//</span> {t.contact.tagline}</div>
          <h1 className="main-title">
            {t.contact.titleOne} <br />
            {t.contact.titleTwo} <span>{t.contact.titleAccent}</span>.
          </h1>
          <p className="description-text">{t.contact.description}</p>
          <div className="premium-card">
            <div className="card-badge">{t.contact.direct}</div>
            <span className="card-label">{t.contact.emailMe}</span>
            <a href="mailto:umidjontojimatov742@gmail.com" className="card-link">
              umidjontojimatov742@gmail.com
              <FiArrowUpRight className="arrow-icon" />
            </a>
          </div>
          <div className="contact-media">
            <img src={profileImg} alt="Umidjon contact profile" />
            <div>
              <FiGlobe />
              <span>{t.contact.remote}</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="form-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="brutal-form">
            <div className={`input-block ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
              <div className="field-icon"><FiUser /></div>
              <div className="input-wrapper">
                <label htmlFor="name">{t.contact.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder=""  // placeholder olib tashlandi yoki bo'sh
                />
              </div>
            </div>

            <div className={`input-block ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
              <div className="field-icon"><FiMail /></div>
              <div className="input-wrapper">
                <label htmlFor="email">{t.contact.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder=""
                />
              </div>
            </div>

            <div className={`input-block textarea-block ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
              <div className="field-icon"><FiMessageSquare /></div>
              <div className="input-wrapper">
                <label htmlFor="message">{t.contact.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder=""
                ></textarea>
              </div>
            </div>

            <button type="submit" className="brutal-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="btn-content"><FiLoader className="spin" /> {t.contact.sending}</span>
              ) : (
                <span className="btn-content">
                  {t.contact.send} <FiArrowUpRight className="btn-arrow" />
                </span>
              )}
              <div className="btn-shadow"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact