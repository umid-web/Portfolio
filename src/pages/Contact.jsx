import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import SEO from '@/components/common/SEO';
import '@/styles/pages/Contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Xabar yuborildi! Tez orada siz bilan bog\'lanamiz.');
    setFormData({ name: '', email: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="contact-page container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO title={`${t('nav.contact')} | Umidjon`} description="Contact me for collaborations and projects." />

      <div className="contact-header">
        <h1>{t('contact.title')}</h1>
        <div className="heading-line"></div>
      </div>

      <div className="contact-content">
        <motion.div
          className="contact-info-card glass-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Keling, birga ishlaymiz!</h3>
          <p>Yangi loyihalar va hamkorlik uchun ochiqman. Har qanday savollaringiz bo'lsa, tortinmay yozing.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <span>Email</span>
                <a href="mailto:umidjontojimatov742@gmail.com">umidjontojimatov742@gmail.com</a>
              </div>
            </div>
            {/* Add more items here if needed */}
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="form-group">
            <label htmlFor="name"><FaUser /> {t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Sizning ismingiz..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="email"><FaEnvelope /> {t('contact.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Sizning elektron pochtangiz..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Xabaringizni yozing..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn--primary" disabled={isLoading}>
            {isLoading ? 'Yuborilmoqda...' : <><FaPaperPlane /> {t('contact.send')}</>}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
