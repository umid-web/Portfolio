// src/motion/variants.js
// Basic fadeIn variant for framer-motion

export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
      delay: 0.2,
    },
  },
}
