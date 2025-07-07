import React from 'react';
import styles from '../styles/styles.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#hero">Ana Sayfa</a>
      <a href="#projects">Projeler</a>
      <a href="#experience">Deneyim</a>
      <a href="#skills">Yetkinlikler</a>
    </nav>
  );
};

export default Navbar;