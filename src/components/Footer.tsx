import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            {/* Logo/Name */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-space font-bold">Siddhartha Yekkirala</h3>
            </div>
            
            {/* Tagline */}
            <p className="text-background/80 text-lg mb-6">
              Building the future, one line of code at a time
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-background/80 hover:text-background transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-background/80">
                  © {currentYear} Siddhartha Yekkirala. Made with
                </span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span className="text-background/80">and React</span>
              </div>

              {/* Back to Top */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-background/20 text-background hover:bg-background hover:text-foreground transition-colors"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6 pt-6 border-t border-background/10">
            <p className="text-background/60 text-sm">
              Open to new opportunities • Always learning • Based in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;