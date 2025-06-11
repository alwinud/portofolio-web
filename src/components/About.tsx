
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                — ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                I'm a <span className="text-gradient">passionate</span> engineer who loves to create intelligent solutions.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Mechanical Engineering graduate with a strong interest in machine learning, data science, and intelligent automation. My journey has taken me from understanding physical systems to developing data-driven, AI-powered solutions that solve real-world problems.
              </p>

              <p>
                What excites me most is the intersection of engineering principles and cutting-edge technology. Whether it's building predictive maintenance systems, creating intelligent bots, or developing web applications that leverage machine learning, I'm passionate about creating solutions that make a tangible impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">Education</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    BSc in Mechanical Engineering
                  </p>
                  <p className="text-sm font-medium">University of Peradeniya (2023)</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                      <Award className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg">Current Studies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    MBA in Project Management
                  </p>
                  <p className="text-sm font-medium">Limkokwing University (2024–Present)</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-[500px] rounded-2xl bg-gradient-to-br from-primary/10 to-orange-400/10 flex items-center justify-center text-8xl font-bold text-primary/50 border border-primary/20">
                UD
              </div>
              {/* Decorative grid */}
              <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-2">
                <div className="w-16 h-16 bg-primary rounded-lg"></div>
                <div className="w-16 h-16 bg-secondary rounded-lg"></div>
                <div className="w-16 h-16 bg-muted rounded-lg"></div>
                <div className="w-16 h-16 bg-primary/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
