import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Mail, Phone, MapPin,
  Linkedin, Github, ExternalLink,
  Sparkles, Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: "Email",
      value: "udaradevapriya7@gmail.com",
      href: "mailto:udaradevapriya7@gmail.com"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "+601118860183",
      href: "tel:+601118860183"
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      label: "Location",
      value: "Malaysia",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ud95"
    },
    {
      icon: <Github className="text-foreground" size={24} />,
      label: "GitHub",
      href: "https://github.com/alwinud"
    },
    {
      icon: <ExternalLink className="text-muted-foreground" size={24} />,
      label: "Medium",
      href: "https://medium.com/@alwinud"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Wrapper for all content */}
      <div className="relative z-10 w-full max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full glass border-border/50 focus:border-blue-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full glass border-border/50 focus:border-blue-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="w-full glass border-border/50 focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary hover:scale-105 transition-all duration-300">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <Card className="glass hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg glass">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-lg font-medium hover:text-blue-400 transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Connect with Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-6 rounded-lg glass border border-border/50 hover:border-blue-400/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium mt-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
