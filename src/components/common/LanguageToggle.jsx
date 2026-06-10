import { motion } from 'framer-motion'
import { FiGlobe } from 'react-icons/fi'
import { useLanguage } from '@/context/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()
  const nextLanguage = language === 'en' ? 'uz' : 'en'

  return (
    <motion.button
      className="language-toggle"
      onClick={() => setLanguage(nextLanguage)}
      aria-label="Change language"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <FiGlobe />
      <span>{language === 'en' ? 'EN' : "O'Z"}</span>
    </motion.button>
  )
}

export default LanguageToggle
