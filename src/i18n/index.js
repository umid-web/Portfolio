import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import uz from './locales/uz.json';

// Retrieve persisted language selection if any
const savedLang = localStorage.getItem('i18nLang');

const resources = {
  en: { translation: en },
  uz: { translation: uz },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang || 'uz', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
