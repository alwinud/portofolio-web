
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart, Globe, Bot, PenTool, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "End-to-end ML project development from data preprocessing to model deployment, specializing in predictive analytics and intelligent automation systems.",
      icon: <Brain className="text-blue-400" size={32} />,
      features: ["Predictive Analytics", "Model Development", "Data Pipeline", "Performance Optimization"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Data Visualization & Dashboards", 
      description: "Creating interactive dashboards and compelling visualizations that transform complex data into actionable insights for decision-making.",
      icon: <BarChart className="text-green-400" size={32} />,
      features: ["Interactive Dashboards", "Data Storytelling", "Real-time Analytics", "Custom Visualizations"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Web App Integration (Flask + ML)",
      description: "Developing robust web applications that seamlessly integrate machine learning models, enabling real-time predictions and user-friendly interfaces.",
      icon: <Globe className="text-purple-400" size={32} />,
      features: ["Flask Development", "API Integration", "Model Deployment", "Responsive Design"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Educational Bots & Automation",
      description: "Building intelligent bots and automation systems for educational purposes, including quiz bots, learning assistants, and interactive tools.",
      icon: <Bot className="text-orange-400" size={32} />,
      features: ["Telegram Bots", "Quiz Systems", "User Analytics", "Automated Responses"],
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Technical Writing & Blogging",
      description: "Creating comprehensive technical content, tutorials, and blog posts that make complex concepts accessible to diverse audiences.",
      icon: <PenTool className="text-pink-400" size={32} />,
      features: ["Technical Tutorials", "Project Documentation", "Blog Content", "Knowledge Sharing"],
      gradient: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What I Do
            </h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive solutions at the intersection of engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
