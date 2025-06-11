
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Wrench, User, Camera } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="text-blue-500" size={28} />,
      skills: [
        "Python", "SQL", "scikit-learn", "pandas", "Flask", 
        "GitHub", "MySQL", "Arduino", "TensorFlow", "NumPy"
      ]
    },
    {
      title: "Areas of Expertise", 
      icon: <Brain className="text-purple-500" size={28} />,
      skills: [
        "Predictive Maintenance & Industrial Data Analysis",
        "End-to-End ML Projects",
        "Telegram Bot Development", 
        "ML Web App Deployment"
      ]
    },
    {
      title: "Engineering Tools",
      icon: <Wrench className="text-green-500" size={28} />,
      skills: [
        "CAD Software", "MATLAB", "Sensor Integration",
        "Data Acquisition Systems", "Industrial Automation"
      ]
    },
    {
      title: "Soft Skills",
      icon: <User className="text-orange-500" size={28} />,
      skills: [
        "Problem-solving", "Self-learning", "Teamwork", 
        "Communication", "Project Management", "Leadership"
      ]
    },
    {
      title: "Creative Tools",
      icon: <Camera className="text-pink-500" size={28} />,
      skills: [
        "Adobe Photoshop", "Premiere Pro", "Photography",
        "Visual Storytelling", "Content Creation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning engineering, data science, and creative technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-blue-500">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
