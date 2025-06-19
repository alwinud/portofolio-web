import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Skills from '../components/Skills'; // Optional
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Skills /> {/* <-- Optional, you can remove this line if not needed */}
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
