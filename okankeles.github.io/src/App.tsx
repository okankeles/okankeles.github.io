import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Experience from './components/Experience';
import Footer from './components/Footer';
import styles from './styles/styles.module.css';
import background from './assets/background.jpg';

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.container}>
        <Header />
        <Main />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default App;