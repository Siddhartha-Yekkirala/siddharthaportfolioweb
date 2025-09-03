import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/siddhartha-profile-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-white/20 to-primary-light/30 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-tr from-primary-light/20 to-white/10 rounded-full blur-2xl animate-bounce hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000 hidden lg:block"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-20 animate-float hidden lg:block">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Code2 className="h-6 w-6 text-white/80" />
          </div>
        </div>
        <div className="absolute bottom-40 right-32 animate-float-delayed hidden lg:block">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Brain className="h-6 w-6 text-white/80" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8 fade-in">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Available for opportunities
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-white/70 text-lg font-medium tracking-wide uppercase text-sm">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight">
                  <span className="text-white">Siddhartha</span>
                  <span className="block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent animate-pulse">
                    Yekkirala
                  </span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl text-white/90 font-semibold">
                  Aspiring AI/ML Engineer &
                  <span className="block text-white/80">Web Developer</span>
                </p>
                
                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
                    Full Stack
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm">
                    Data Science
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-xl leading-relaxed max-w-xl font-light">
              Creative and motivated B.Tech final-year student passionate about building 
              innovative solutions with AI, machine learning, and cutting-edge web technologies.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-2xl hover-lift border-0"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 text-lg hover-lift"
              >
                Get in Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-white/60 text-sm font-medium">Follow me</span>
              <div className="flex space-x-4">
                <a 
                  href="mailto:siddhartha.00si@gmail.com" 
                  className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover-lift"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-white group-hover:text-white/90" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/siddhartha-yekkirala-b3a667267/" 
                  className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover-lift"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover:text-white/90" />
                </a>
                <a 
                  href="https://github.com/siddhartha" 
                  className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover-lift"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-white group-hover:text-white/90" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-light via-primary to-primary-dark p-1 animate-pulse">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm">
                    <img
                      src={profileImage}
                      alt="Siddhartha Yekkirala - AI/ML Engineer & Web Developer"
                      className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-success rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-success rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Available for Work</p>
                    <p className="text-xs text-muted-foreground">Graduating 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 hover-lift hidden lg:block">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">90%</p>
                  <p className="text-xs text-muted-foreground">ML Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;