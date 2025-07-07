import React from 'react';
import Hero from './Hero';
import styles from '../styles/styles.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Hero />
      <div className={styles.linksContainer}>
        <a
          href="https://github.com/okankeles"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkBox}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/okankeles/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkBox}
        >
          LinkedIn
        </a>
        <a
          href="mailto:kelesokann@gmail.com"
          className={styles.linkBox}
        >
          E-mail
        </a>
      </div>
    </header>
  );
};

export default Header;