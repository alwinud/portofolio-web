import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, FileText } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Predictive Maintenance System",
      description: "Developed a predictive maintenance solution using real-world sensor data from piezoelectric sensors and Arduino. Built and deployed ML models achieving 80%+ accuracy in predicting failures.",
      icon: <FileText className="text-blue-400" size={32} />,
      technologies: ["Python", "Arduino", "scikit-learn", "Sensor Data", "ML"],
      status: "Completed",
      github: "https://github.com/yourname/predictive-maintenance",
      caseStudy: "/case-studies/predictive-maintenance",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "MCQ Telegram Bot",
      description: "An intelligent quiz bot for Telegram with timed quizzes, user tracking, and analytics. Uses MySQL for persistence and Telegram Bot API for real-time interaction.",
      icon: <FileText className="text-green-400" size={32} />,
      technologies: ["Python", "Telegram API", "MySQL", "Bot Development"],
      status: "In Progress",
      github: "https://github.com/yourname/mcq-telegram-bot",
      liveDemo: "https://t.me/yourbot",
      caseStudy: "/case-studies/mcq-telegram-bot",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Crop Recommendation System",
      description: "A Flask-based web app that provides crop recommendations using ML. It analyzes soil conditions, weather patterns, and agricultural data. Deployed on Render.",
      icon: <FileText className="text-purple-400" size={32} />,
      technologies: ["Flask", "Python", "ML", "Web Development", "Render"],
      status: "Deployed",
      github: "https://github.com/yourname/crop-recommendation",
      liveDemo: "https://crop-app.onrender.com",
      caseStudy: "/case-studies/crop-recommendation",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
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
            Showcasing real-world applications of machine learning and automation
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
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

                <div className="flex flex-col gap-2 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10 w-full"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  )}

                  {project.liveDemo && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                      className="gradient-primary hover:scale-105 transition-transform w-full"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Try it
                    </Button>
                  )}

                  {project.caseStudy && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(project.caseStudy)}
                      className="glass border-purple-400/30 text-purple-400 hover:bg-purple-400/10 w-full"
                    >
                      <FileText size={16} className="mr-2" />
                      View Case Study
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/projects')}
            className="text-lg px-8 py-3 glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
