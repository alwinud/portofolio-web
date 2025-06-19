
import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-border/50 py-12 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Udara Devapriya
            </h3>
            <p className="text-muted-foreground">
              Machine Learning Developer & Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            
            <p className="text-sm text-muted-foreground">
              © 2024 Udara Devapriya. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-blue-400" size={16} />
            <p className="text-muted-foreground text-sm">
              Passionate about solving real-world problems through technology and innovation.
            </p>
            <Sparkles className="text-purple-400" size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
