import React from 'react';
import styles from './SocialLinks.module.css';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <p>Follow Me</p>
      <div className={styles.icons}>
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
    
  );
};

export default SocialLinks;
