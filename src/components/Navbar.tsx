import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left placeholder or logo (optional) */}
          <div className="flex-1 md:hidden" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end flex-1">
            <button
              className="text-foreground p-2 rounded-lg glass"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-6 border border-border space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-1 text-muted-foreground hover:text-foreground transition-colors duration-200 border-b border-border last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
