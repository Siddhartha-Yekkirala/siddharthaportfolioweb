import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Send, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "siddhartha.00si@gmail.com",
    href: "mailto:siddhartha.00si@gmail.com",
    color: "from-red-500 to-pink-500"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 63038 81297",
    href: "tel:+916303881297",
    color: "from-green-500 to-emerald-500"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/siddhartha-yekkirala-b3a667267/",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/Siddhartha-Yekkirala",
    color: "from-gray-600 to-gray-800"
  }];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }
    try {
      // EmailJS configuration
      const serviceId = 'service_2pt2l1d';
      const templateId = 'template_tgvikyo';
      const publicKey = 'TMty8EaIV8tBKABBP';

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Siddhartha'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-up">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-space font-bold text-foreground mb-6">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." rows={5} className="w-full" />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-white">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 slide-up" style={{
            animationDelay: '0.2s'
          }}>
              {/* Location Card */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-space font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground">Vutukuru, Andhra Pradesh, India 521401.</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Available for all locations remote work and collaborations</p>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => <Card key={contact.label} className="glass-card hover-lift">
                    <CardContent className="p-6">
                      <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mr-3`}>
                            <contact.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm">{contact.label}</h4>
                            <p className="text-muted-foreground text-xs">{contact.value}</p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Social Links */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-space font-semibold text-foreground mb-4">
                    Follow My Journey
                  </h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/siddhartha-yekkirala-b3a667267/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-colors hover-lift">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://github.com/Siddhartha-Yekkirala" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 transition-colors hover-lift">
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://x.com/Mr_Siddhartha_" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-colors hover-lift">
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;