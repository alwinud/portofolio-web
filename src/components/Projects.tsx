
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Settings, Bot, Cpu, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Predictive Maintenance System",
      description: "Developed a comprehensive predictive maintenance solution using real-world sensor data from piezoelectric sensors and Arduino. Built and deployed machine learning models achieving 80%+ accuracy in predicting equipment failures, helping reduce maintenance costs and downtime.",
      icon: <Settings className="text-blue-400" size={32} />,
      technologies: ["Python", "Arduino", "scikit-learn", "Sensor Data", "ML"],
      status: "Completed",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "MCQ Telegram Bot",
      description: "Currently developing an intelligent quiz bot for Telegram featuring timed quizzes, comprehensive user tracking, and detailed analytics. The system uses MySQL for data persistence and integrates seamlessly with the Telegram Bot API for real-time interactions.",
      icon: <Bot className="text-green-400" size={32} />,
      technologies: ["Python", "Telegram API", "MySQL", "Bot Development"],
      status: "In Progress",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Crop Recommendation System", 
      description: "Built a Flask-based web application that provides real-time crop recommendations using machine learning algorithms. The system analyzes soil conditions, weather patterns, and other agricultural factors to suggest optimal crops. Successfully deployed on Render for public access.",
      icon: <Cpu className="text-purple-400" size={32} />,
      technologies: ["Flask", "Python", "ML", "Web Development", "Render"],
      status: "Deployed",
      liveDemo: "#",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications of machine learning and intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  {project.icon}
                </div>
                <CardTitle className="text-xl font-semibold mb-2 text-foreground">{project.title}</CardTitle>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium glass ${
                  project.status === 'Completed' ? 'text-green-400 border border-green-400/30' :
                  project.status === 'Deployed' ? 'text-blue-400 border border-blue-400/30' :
                  'text-yellow-400 border border-yellow-400/30'
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
                        className="px-3 py-1 text-xs glass text-muted-foreground rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.liveDemo && (
                    <Button size="sm" className="flex-1 gradient-primary hover:scale-105 transition-transform">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
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
            className="text-lg px-8 py-3 glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
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
