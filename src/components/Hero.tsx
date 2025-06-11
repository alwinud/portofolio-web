
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Download, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full rounded-full gradient-primary flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              UD
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Udara Devapriya
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6 text-xl md:text-2xl text-muted-foreground font-medium">
            <span className="flex items-center gap-2">
              <Code size={24} className="text-blue-400" />
              Machine Learning Developer
            </span>
            <span className="hidden md:inline text-blue-400">•</span>
            <span>Mechanical Engineer</span>
            <span className="hidden md:inline text-blue-400">•</span>
            <span>Data Enthusiast</span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Solving real-world problems through machine learning and intelligent systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6 gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background transition-all duration-300 hover:scale-105 glass"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-lg px-8 py-6 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="mailto:udaradevapriya7@gmail.com"
              className="p-4 rounded-full glass hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com/alwinud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full glass">
            <ArrowDown className="text-muted-foreground" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
