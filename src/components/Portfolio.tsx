import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Image, Smartphone, Filter, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Comment Sentiment Analyzer",
      description: "Advanced ML model that detects negative YouTube comments using Flask, sklearn, and YouTube API with 90% accuracy.",
      icon: Brain,
      image: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      technologies: ["Python", "Flask", "sklearn", "YouTube API", "NLP"],
      features: ["Real-time Analysis", "90% Accuracy", "Web Interface", "API Integration"],
      metrics: { accuracy: "90%", dataset: "10K+ comments", performance: "Real-time" },
      category: "AI/ML",
      liveLink: "#",
      githubLink: "#",
      status: "Completed"
    },
    {
      title: "Image Classification Model",
      description: "Deep Learning model using VGG16 architecture, retrained on 5,000 images achieving 94.68% accuracy for image classification.",
      icon: Image,
      image: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      technologies: ["Python", "TensorFlow", "VGG16", "Deep Learning", "CNN"],
      features: ["94.68% Accuracy", "5K+ Images", "Transfer Learning", "Model Optimization"],
      metrics: { accuracy: "94.68%", dataset: "5K+ images", performance: "Optimized" },
      category: "AI/ML",
      liveLink: "#",
      githubLink: "#",
      status: "Completed"
    },
    {
      title: "Student Pocket Money App",
      description: "Platform enabling students to earn through micro-tasks with intuitive UI, task tracking, and financial independence focus.",
      icon: Smartphone,
      image: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"],
      features: ["Task Management", "Payment System", "User Dashboard", "Mobile Responsive"],
      metrics: { users: "500+ students", tasks: "1K+ completed", rating: "4.8/5" },
      category: "Web Development",
      liveLink: "#",
      githubLink: "#",
      status: "In Progress"
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              My Work
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions built with cutting-edge technologies and creative problem-solving
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12 slide-up">
            <div className="inline-flex bg-background/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="glass-card hover-lift slide-up overflow-hidden group border-0 shadow-2xl" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className={`h-56 ${project.image} flex flex-col items-center justify-center relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground font-medium">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <project.icon className="h-20 w-20 text-white/90 mb-4 group-hover:scale-110 transition-transform" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-white text-sm font-medium">
                      <span className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {project.metrics.accuracy || project.metrics.rating}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  {/* Title */}
                  <h3 className="text-xl font-space font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs border-muted-foreground/30">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all"
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
          <div className="text-center slide-up">
            <Card className="glass-card max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
              <CardContent className="p-12 relative">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Github className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-space font-bold text-foreground mb-6">
                    More Projects Coming Soon
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    I'm constantly working on new projects and experimenting with emerging technologies. 
                    Follow my journey on GitHub to see the latest updates and contribute to open-source initiatives.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Follow on GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Let's Collaborate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;