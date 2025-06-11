
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BarChart, Globe, Bot, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Machine Learning Solutions",
      description: "End-to-end ML project development from data preprocessing to model deployment.",
      icon: <Brain className="text-primary" size={32} />,
      color: "bg-primary"
    },
    {
      title: "Data Visualization",
      description: "Creating interactive dashboards and compelling visualizations.",
      icon: <BarChart className="text-foreground" size={32} />,
      color: "bg-secondary"
    },
    {
      title: "Web App Integration",
      description: "Developing robust web applications with ML integration.",
      icon: <Globe className="text-foreground" size={32} />,
      color: "bg-muted"
    },
    {
      title: "Educational Bots",
      description: "Building intelligent bots and automation systems.",
      icon: <Bot className="text-foreground" size={32} />,
      color: "bg-secondary"
    },
    {
      title: "Technical Writing",
      description: "Creating comprehensive technical content and tutorials.",
      icon: <PenTool className="text-foreground" size={32} />,
      color: "bg-muted"
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-6">
              — SERVICES
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                What I Do
              </h2>
              <p className="text-lg text-muted-foreground">
                Delivering comprehensive solutions at the intersection of engineering and technology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
