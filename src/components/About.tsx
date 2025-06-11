
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl gradient-card glass flex items-center justify-center text-6xl font-bold text-foreground mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <span className="relative z-10">UD</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Mechanical Engineering graduate with a strong interest in machine learning, data science, and intelligent automation. My journey has taken me from understanding physical systems to developing data-driven, AI-powered solutions that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What excites me most is the intersection of engineering principles and cutting-edge technology. Whether it's building predictive maintenance systems, creating intelligent bots, or developing web applications that leverage machine learning, I'm passionate about creating solutions that make a tangible impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm also passionate about visual storytelling, technical blogging, and hands-on learning. My curiosity drives me to continuously explore new technologies and share my knowledge with the community through writing and open-source contributions.
            </p>

            {/* Education & Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="glass border-l-4 border-l-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-blue-400 mr-3" size={24} />
                    <h3 className="font-semibold text-lg text-foreground">Education</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    BSc in Mechanical Engineering
                  </p>
                  <p className="text-sm font-medium text-blue-400">University of Peradeniya (2023)</p>
                </CardContent>
              </Card>

              <Card className="glass border-l-4 border-l-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="text-purple-400 mr-3" size={24} />
                    <h3 className="font-semibold text-lg text-foreground">Current Studies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    MBA in Project Management
                  </p>
                  <p className="text-sm font-medium text-purple-400">Limkokwing University (2024–Present)</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-l-4 border-l-green-400 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Heart className="text-green-400 mr-3" size={24} />
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
