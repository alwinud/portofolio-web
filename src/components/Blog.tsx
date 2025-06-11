
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Machine Learning in Industrial Maintenance: A Practical Approach",
      summary: "Exploring how predictive maintenance systems can revolutionize industrial operations through real-time sensor data analysis and machine learning algorithms.",
      date: "March 2024",
      readTime: "8 min read",
      tags: ["Machine Learning", "Industrial IoT", "Predictive Analytics"]
    },
    {
      title: "Building Intelligent Telegram Bots: From Concept to Deployment",
      summary: "A comprehensive guide to developing feature-rich Telegram bots with user tracking, analytics, and seamless database integration.",
      date: "February 2024", 
      readTime: "12 min read",
      tags: ["Bot Development", "Python", "Telegram API"]
    },
    {
      title: "Flask + ML: Creating Smart Web Applications",
      summary: "Learn how to integrate machine learning models into web applications using Flask, creating real-time prediction systems with elegant user interfaces.",
      date: "January 2024",
      readTime: "10 min read", 
      tags: ["Flask", "Web Development", "ML Deployment"]
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-400" size={24} />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and knowledge through technical writing and tutorials
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="glass hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="mr-2 text-blue-400" />
                  {post.date} • {post.readTime}
                </div>
                <CardTitle className="text-xl font-semibold leading-tight hover:text-blue-400 transition-colors duration-200 text-foreground">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {post.summary}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs glass text-muted-foreground rounded-full border border-blue-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between group mt-auto glass hover:bg-blue-500/10">
                  <span className="text-blue-400">Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 text-blue-400" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://medium.com/@alwinud', '_blank')}
            className="text-lg px-8 py-3 glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={20} className="mr-2" />
            Read More on Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
