import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  GraduationCap,
  Award,
  Heart,
  Sparkles,
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="text-accent" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          {/* About Description */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Mechanical Engineering graduate with a strong interest in machine learning, data science, and intelligent automation. My journey has taken me from understanding physical systems to developing data-driven, AI-powered solutions that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What excites me most is the intersection of engineering principles and cutting-edge technology. Whether it's building predictive maintenance systems, creating intelligent bots, or developing web applications that leverage machine learning, I'm passionate about creating solutions that make a tangible impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm also passionate about visual storytelling, technical blogging, and hands-on learning. My curiosity drives me to continuously explore new technologies and share my knowledge with the community through writing and open-source contributions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <Card className="glass border-l-4 border-l-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-accent mr-3" size={24} />
                  <h3 className="font-semibold text-lg text-foreground">Education</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  BSc in Mechanical Engineering
                </p>
                <p className="text-sm font-medium text-accent">
                  University of Peradeniya (2023)
                </p>
              </CardContent>
            </Card>

            {/* Current Studies */}
            <Card className="glass border-l-4 border-l-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="text-yellow-400 mr-3" size={24} />
                  <h3 className="font-semibold text-lg text-foreground">Current Studies</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  MBA in Project Management
                </p>
                <p className="text-sm font-medium text-yellow-400">
                  Limkokwing University (2024–Present)
                </p>
              </CardContent>
            </Card>

            {/* Passions */}
            <Card className="glass border-l-4 border-l-orange-400 hover:shadow-xl hover:shadow-orange-400/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Heart className="text-orange-400 mr-3" size={24} />
                  <h3 className="font-semibold text-lg text-foreground">Passions</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Blending design with data, technical writing, photography, and sharing knowledge with the community through open-source contributions and blogging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
