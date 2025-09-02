import React from 'react';
import { Palette, Globe, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and modern design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Web Design",
      icon: Globe,
      description: "Building responsive, fast, and accessible websites using modern web technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Graphic Design",
      icon: Layers,
      description: "Crafting visual content that communicates your message effectively with compelling designs and branding.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Assets"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-foreground mb-4">
              Services I Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforming ideas into digital experiences with creativity and technical excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={service.title} className="glass-card hover-lift slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-space font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center slide-up">
            <Card className="glass-card max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Let's collaborate to bring your vision to life with innovative design and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white px-8"
                  >
                    Let's Work Together
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById('portfolio');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View My Work
                  </Button>
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