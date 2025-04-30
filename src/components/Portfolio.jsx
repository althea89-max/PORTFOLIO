// src/components/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';

const projects = [
  {
    name: "Responsive Web Page",
    link: "https://github.com/althea89-max/Responsive-Web-Page.git"
  },
  {
    name: "FINAL PROJECT",
    link: "https://github.com/althea89-max/FINAL-PROJECT.gitrname/todo-app"
  },
  {
    name: "My App",
    link: "https://github.com/althea89-max/PELEC201_FALNICAN.git"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>{project.name}</h3>
            <p>View on GitHub →</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
