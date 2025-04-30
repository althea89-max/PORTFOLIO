// src/components/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

const socialLinks = [
  {
    name: 'GitHub',
    link: 'https://github.com/althea89-max',
    icon: '🐙'
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/althea.falnican', 
    icon: '📘'  // or use 📘 for Facebook
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/gaeb_76/', 
    icon: '📸'
  }
];

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Connect With Me</h2>
      <div className={styles.socials}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <span className={styles.icon}>{social.icon}</span>
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
