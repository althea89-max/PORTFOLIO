import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Althea <span>X</span></div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;