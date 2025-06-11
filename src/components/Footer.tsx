
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Udara Devapriya</h3>
            <p className="text-primary-foreground/80">
              Machine Learning Developer & Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-2 text-primary-foreground/80 mb-2">
              <span>Built with</span>
              <Heart size={16} className="text-red-400" />
              <span>and</span>
              <Code size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Udara Devapriya. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Passionate about solving real-world problems through technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
