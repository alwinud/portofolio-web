import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaWhatsapp,
  FaCode,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile image */}
          <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-xl">
            <img
              src="/profile.jpg"
              alt="Udara Devapriya"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent leading-tight">
            Udara Devapriya
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6 text-base sm:text-xl md:text-2xl text-muted-foreground font-medium px-2">
            <span className="flex items-center gap-2">
              <FaCode size={20} className="text-accent" />
              Machine Learning Developer
            </span>
            <span className="hidden sm:inline text-accent">•</span>
            <span>Mechanical Engineer</span>
            <span className="hidden sm:inline text-accent">•</span>
            <span>Data Enthusiast</span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            Solving real-world problems through machine learning and intelligent systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14 px-2">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6 gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              <FaCode className="mr-2" size={20} />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:scale-105 glass"
            >
              <FaEnvelope className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-6 px-2">
            <a
              href="mailto:udaradevapriya7@gmail.com"
              className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <FaEnvelope size={24} className="text-muted-foreground group-hover:text-accent" />
            </a>
            <a
              href="https://github.com/alwinud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <FaGithub size={24} className="text-muted-foreground group-hover:text-accent" />
            </a>
            <a
              href="https://www.linkedin.com/in/ud95/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <FaLinkedin size={24} className="text-muted-foreground group-hover:text-accent" />
            </a>
            <a
              href="https://medium.com/@alwinud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <FaMedium size={24} className="text-muted-foreground group-hover:text-accent" />
            </a>
            <a
              href="https://wa.me/601118860183"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <FaWhatsapp size={24} className="text-muted-foreground group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
