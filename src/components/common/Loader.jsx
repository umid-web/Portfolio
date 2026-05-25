import React from 'react';
import { motion } from 'framer-motion';
import './Loader.scss';

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      />
    </motion.div>
  );
}
