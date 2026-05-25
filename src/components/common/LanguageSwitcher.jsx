import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'uz' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nLang', newLang);
  };

  return (
    <motion.button
      className="lang-switcher"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px',
        color: '#fff',
        padding: '6px 12px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginLeft: '12px',
        fontFamily: 'inherit',
      }}
    >
      {i18n.language === 'en' ? '🇺🇿 UZ' : '🇬🇧 EN'}
    </motion.button>
  );
};

export default LanguageSwitcher;
