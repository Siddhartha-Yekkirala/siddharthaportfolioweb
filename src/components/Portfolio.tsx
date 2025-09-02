import React from 'react';
import { ExternalLink, Github, Brain, Image, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Comment Sentiment Analyzer",
      description: "Advanced ML model that detects negative YouTube comments using Flask, sklearn, and YouTube API with 90% accuracy.",
      icon: Brain,
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      technologies: ["Python", "Flask", "sklearn", "YouTube API", "NLP"],
      features: ["Real-time Analysis", "90% Accuracy", "Web Interface", "API Integration"],
      liveLink: "#",
      githubLink: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image Classification Model",
      description: "Deep Learning model using VGG16 architecture, retrained on 5,000 images achieving 94.68% accuracy for image classification.",
      icon: Image,
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      technologies: ["Python", "TensorFlow", "VGG16", "Deep Learning", "CNN"],
      features: ["94.68% Accuracy", "5K+ Images", "Transfer Learning", "Model Optimization"],
      liveLink: "#",
      githubLink: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Student Pocket Money App",
      description: "Platform enabling students to earn through micro-tasks with intuitive UI, task tracking, and financial independence focus.",
      icon: Smartphone,
      image: "bg-gradient-to-br from-green-400 to-green-600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      features: ["Task Management", "Payment System", "User Dashboard", "Mobile Responsive"],
      liveLink: "#",
      githubLink: "#",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions built with cutting-edge technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="glass-card hover-lift slide-up overflow-hidden group" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Project Image/Icon */}
                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="h-16 w-16 text-white/90" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-space font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 slide-up">
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space font-bold text-foreground mb-4">
                  More Projects Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects and experimenting with emerging technologies. 
                  Follow my journey on GitHub to see the latest updates.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Follow on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;