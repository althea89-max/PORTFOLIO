import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import About from './components/About';
import Login from './components/Login';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <section id="home" className="section">
          <LandingSection />
        </section>

        <aside id="about" className="section">
          <About />
        
        </aside>
      </main>

    
      <section id="portfolio" className="section placeholder">
       <Portfolio />
      </section>

      <section id="contact" className="section placeholder">
        <h2>Contact</h2>
      </section>
      <Contact />
      <SocialLinks />
      <Login />
    </div>
  );
}

export default App;