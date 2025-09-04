import React from 'react';
import { Palette, Globe, Layers, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $500",
      highlight: "Most Popular"
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "Building responsive, fast, and accessible websites using modern web technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $800",
      highlight: "Best Value"
    },
    {
      title: "AI/ML Solutions",
      icon: Layers,
      description: "Developing intelligent solutions using machine learning and AI to solve complex business problems.",
      features: ["Model Development", "Data Analysis", "Predictive Analytics", "Custom Algorithms"],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1200",
      highlight: "Premium"
    }
  ];

  const testimonials = [
    { name: "Project Client", rating: 5, text: "Excellent work on sentiment analysis model" },
    { name: "Team Lead", rating: 5, text: "Great collaboration and technical skills" },
    { name: "Mentor", rating: 5, text: "Shows exceptional problem-solving abilities" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 glass-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              What I offer
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground mb-6">
              Services I Provide
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into digital experiences with creativity, innovation, and technical excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="glass-card hover-lift slide-up border-0 shadow-2xl group relative overflow-hidden" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-purple-500 text-white text-xs font-semibold rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                )}

                <CardContent className="p-8 relative">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title & Price */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-space font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">{service.price}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                   <Button
                     onClick={scrollToContact}
                     className="w-full gradient-button font-semibold py-3 shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                   >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-16 slide-up">
            <h3 className="text-2xl font-space font-bold text-foreground text-center mb-8">
              What People Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="glass-card border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-3">"{testimonial.text}"</p>
                    <p className="text-foreground font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center slide-up">
            <Card className="glass-card max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
              <CardContent className="p-12 relative">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-3xl font-space font-bold text-foreground mb-6">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Let's collaborate to bring your vision to life with innovative design, cutting-edge technology, 
                    and a focus on delivering exceptional results that exceed your expectations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button
                       onClick={scrollToContact}
                       size="lg"
                       className="gradient-button px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                     >
                      Let's Work Together
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        const element = document.getElementById('portfolio');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
                    >
                      View My Work
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

export default Services;