
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            {/* Profile Image Placeholder */}
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-6xl font-bold text-white mb-8">
              UD
            </div>
          </div>

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

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-blue-500 mr-3" size={24} />
                    <h3 className="font-semibold text-lg">Education</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    BSc in Mechanical Engineering
                  </p>
                  <p className="text-sm font-medium">University of Peradeniya (2023)</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="text-teal-500 mr-3" size={24} />
                    <h3 className="font-semibold text-lg">Current Studies</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    MBA in Project Management
                  </p>
                  <p className="text-sm font-medium">Limkokwing University (2024–Present)</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Heart className="text-purple-500 mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Passions</h3>
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
