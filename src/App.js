import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Footer from './components/Footer';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;