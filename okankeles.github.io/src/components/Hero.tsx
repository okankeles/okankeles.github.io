"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const texts = [
  "I'm Okan Keleş.",
  "I build robust backend systems.",
  "I love working with Python & .Net.",
  "Let's create something amazing."
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroText}>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={styles.heroAnimation}
        >
          <code className={styles.heroCode}>{texts[index]}</code>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;