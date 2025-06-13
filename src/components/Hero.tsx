import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Download, Code, Linkedin, MessageCircleMore, PenTool } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <img src="https://i.postimg.cc/sfQKcz23/275009206-452716056596933-7160278159959486546-n.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-2xl"/>

            
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent leading-tight">
            Udara Devapriya
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6 text-xl md:text-2xl text-muted-foreground font-medium">
            <span className="flex items-center gap-2">
              <Code size={24} className="text-accent" />
              Machine Learning Developer
            </span>
            <span className="hidden md:inline text-accent">•</span>
            <span>Mechanical Engineer</span>
            <span className="hidden md:inline text-accent">•</span>
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
              className="text-lg px-8 py-6 gradient-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/25"
            >
              <Code className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:scale-105 glass"
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
            {/* Email */}
            <a
              href="mailto:udaradevapriya7@gmail.com"
              className="p-4 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/alwinud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            {/* Medium */}
            <a
              href="https://medium.com/@udaradevapriya7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <PenTool size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/udaradevapriya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/94765532236"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
            >
              <MessageCircleMore size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
