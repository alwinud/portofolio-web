
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Wrench, User, Camera, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="text-accent" size={28} />,
      skills: [
        "Python", "SQL", "scikit-learn", "pandas", "Flask", 
        "GitHub", "MySQL", "Arduino", "TensorFlow", "NumPy"
      ],
      gradient: "from-accent/20 to-yellow-400/20"
    },
    {
      title: "Areas of Expertise", 
      icon: <Brain className="text-orange-400" size={28} />,
      skills: [
        "Predictive Maintenance & Industrial Data Analysis",
        "End-to-End ML Projects",
        "Telegram Bot Development", 
        "ML Web App Deployment"
      ],
      gradient: "from-orange-400/20 to-red-400/20"
    },
    {
      title: "Engineering Tools",
      icon: <Wrench className="text-emerald-400" size={28} />,
      skills: [
        "CAD Software", "MATLAB", "Sensor Integration",
        "Data Acquisition Systems", "Industrial Automation"
      ],
      gradient: "from-emerald-400/20 to-green-400/20"
    },
    {
      title: "Soft Skills",
      icon: <User className="text-blue-400" size={28} />,
      skills: [
        "Problem-solving", "Self-learning", "Teamwork", 
        "Communication", "Project Management", "Leadership"
      ],
      gradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      title: "Creative Tools",
      icon: <Camera className="text-pink-400" size={28} />,
      skills: [
        "Adobe Photoshop", "Premiere Pro", "Photography",
        "Visual Storytelling", "Content Creation"
      ],
      gradient: "from-pink-400/20 to-purple-400/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <Sparkles className="text-yellow-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning engineering, data science, and creative technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 text-sm glass text-muted-foreground rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
