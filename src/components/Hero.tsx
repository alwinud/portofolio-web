import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  — ENGINEERING & AI
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Udara
                  <br />
                  <span className="text-gradient">Devapriya.</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Machine Learning Developer and Engineer, based in Sri Lanka.
                </h2>
                <p className="text-lg text-muted-foreground/80 max-w-lg leading-relaxed">
                  Get an innovative data scientist with a solid engineering background to 
                  create intelligent systems that solve real-world problems.
                </p>
              </div>

              <Button size="lg" onClick={() => scrollToSection('about')} className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold">About Me</Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
                — CONNECT
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">Any Type Of Query & Discussion.</p>
                <a href="mailto:udaradevapriya7@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  hi@carlos.com →
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-400/20 flex items-center justify-center text-6xl font-bold text-primary border border-primary/20">
                UD
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <p className="text-muted-foreground mb-4">
                You can't use up creativity, the more you use, more you have in your significant mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">3+</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Years of<br />Experience.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Satisfied<br />Clients.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ML<br />DEV</span>
              </div>
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-bold text-sm">DATA<br />SCI</span>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-bold text-sm">WEB<br />DEV</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>;
};
export default Hero;