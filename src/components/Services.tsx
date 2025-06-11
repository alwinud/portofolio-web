
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart, Globe, Bot, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "End-to-end ML project development from data preprocessing to model deployment, specializing in predictive analytics and intelligent automation systems.",
      icon: <Brain className="text-blue-500" size={32} />,
      features: ["Predictive Analytics", "Model Development", "Data Pipeline", "Performance Optimization"]
    },
    {
      title: "Data Visualization & Dashboards", 
      description: "Creating interactive dashboards and compelling visualizations that transform complex data into actionable insights for decision-making.",
      icon: <BarChart className="text-green-500" size={32} />,
      features: ["Interactive Dashboards", "Data Storytelling", "Real-time Analytics", "Custom Visualizations"]
    },
    {
      title: "Web App Integration (Flask + ML)",
      description: "Developing robust web applications that seamlessly integrate machine learning models, enabling real-time predictions and user-friendly interfaces.",
      icon: <Globe className="text-purple-500" size={32} />,
      features: ["Flask Development", "API Integration", "Model Deployment", "Responsive Design"]
    },
    {
      title: "Educational Bots & Automation",
      description: "Building intelligent bots and automation systems for educational purposes, including quiz bots, learning assistants, and interactive tools.",
      icon: <Bot className="text-orange-500" size={32} />,
      features: ["Telegram Bots", "Quiz Systems", "User Analytics", "Automated Responses"]
    },
    {
      title: "Technical Writing & Blogging",
      description: "Creating comprehensive technical content, tutorials, and blog posts that make complex concepts accessible to diverse audiences.",
      icon: <PenTool className="text-pink-500" size={32} />,
      features: ["Technical Tutorials", "Project Documentation", "Blog Content", "Knowledge Sharing"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive solutions at the intersection of engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
