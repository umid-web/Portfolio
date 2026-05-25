import React from 'react';
import { motion } from 'framer-motion';
import '@/styles/components/SectionWrapper.scss';
import { fadeIn } from '@/motion/variants';

const SectionWrapper = ({ id, children }) => (
  <section id={id} className="section-wrapper">
    <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-content">
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
