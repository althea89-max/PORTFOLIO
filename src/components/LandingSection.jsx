import React from 'react';
import styles from './LandingSection.module.css';
import SocialLinks from './SocialLinks';

const LandingSection = () => {
  return (
    <div className={styles.landing}>
      <h1>I'm Althea Falnican, a <span>Web Developer</span></h1>
      <p>Web development builds and enhances websites and applications, shaping how we interact with the digital world.</p>
      <button className={styles.button}>Learn More</button>
      <SocialLinks />
    </div>

  );
};

export default LandingSection;
