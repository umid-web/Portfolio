import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';
import SEO from '@/components/common/SEO';
import '@/styles/pages/Services.scss';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Veb Dasturlash',
      description: 'Zamonaviy texnologiyalar (React, Vite, SCSS) yordamida yuqori tezlikda ishlovchi veb-saytlar va ilovalar yaratish.'
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: 'UI/UX Dizayn',
      description: 'Foydalanuvchilar uchun qulay, interaktiv va chiroyli dizaynlarni hayotga tatbiq etish.'
    },
    {
      id: 3,
      icon: <FaServer />,
      title: 'Backend Integratsiya',
      description: 'API larni ulash va ma\'lumotlar bazasi bilan ishlash, to\'liq full-stack tajribasini ta\'minlash.'
    }
  ];

  return (
    <motion.div 
      className="services-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title={`${t('nav.services')} | Umidjon`} description="Services offered by Umidjon" />
      
      <div className="page-header">
        <h1>{t('nav.services')}</h1>
        <div className="heading-line"></div>
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
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
