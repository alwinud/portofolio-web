
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Settings, Bot, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Predictive Maintenance System",
      description: "Developed a comprehensive predictive maintenance solution using real-world sensor data from piezoelectric sensors and Arduino. Built and deployed machine learning models achieving 80%+ accuracy in predicting equipment failures, helping reduce maintenance costs and downtime.",
      icon: <Settings className="text-blue-500" size={32} />,
      technologies: ["Python", "Arduino", "scikit-learn", "Sensor Data", "ML"],
      status: "Completed"
    },
    {
      title: "MCQ Telegram Bot",
      description: "Currently developing an intelligent quiz bot for Telegram featuring timed quizzes, comprehensive user tracking, and detailed analytics. The system uses MySQL for data persistence and integrates seamlessly with the Telegram Bot API for real-time interactions.",
      icon: <Bot className="text-green-500" size={32} />,
      technologies: ["Python", "Telegram API", "MySQL", "Bot Development"],
      status: "In Progress"
    },
    {
      title: "Crop Recommendation System", 
      description: "Built a Flask-based web application that provides real-time crop recommendations using machine learning algorithms. The system analyzes soil conditions, weather patterns, and other agricultural factors to suggest optimal crops. Successfully deployed on Render for public access.",
      icon: <Cpu className="text-purple-500" size={32} />,
      technologies: ["Flask", "Python", "ML", "Web Development", "Render"],
      status: "Deployed",
      liveDemo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications of machine learning and intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'Deployed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.liveDemo && (
                    <Button size="sm" className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/alwinud', '_blank')}
            className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
