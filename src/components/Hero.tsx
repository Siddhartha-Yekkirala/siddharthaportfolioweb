import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/siddhartha-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-bounce hidden lg:block"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <p className="text-white/90 text-lg font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-space font-bold text-white leading-tight">
                Siddhartha 
                <span className="block text-yellow-300">Yekkirala</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Aspiring AI/ML Engineer & Web Developer
              </p>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Creative and motivated B.Tech final-year student passionate about building 
              innovative solutions with AI, machine learning, and cutting-edge web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 hover-lift"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="mailto:siddhartha@example.com" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover-lift"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/siddhartha" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/siddhartha" 
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hover-lift"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2 hover-lift">
                <img
                  src={profileImage}
                  alt="Siddhartha Yekkirala"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Available for Work</p>
                    <p className="text-xs text-muted-foreground">Graduating 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;