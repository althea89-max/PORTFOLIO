import React from 'react';
import styles from './About.module.css';

const About = () => {
  const photoURL = "C:/Users/claire frances/Desktop/bianca/portfolio/my-app/src/photo.jpg"; // <-- Easy to edit here!

  return (
    <section id="about-section" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer who loves building beautiful and efficient websites.
            I enjoy working with modern technologies like ReactJS, CSS Modules, and more.
          </p>
          <p>
            Always aiming to create amazing experiences with clean and scalable code.
          </p>
        </div>
        <div className={styles.image}>
          <img src={'C:/Users/claire frances/Desktop/bianca/portfolio/my-app/src/photo.jpg'} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};

export default About;