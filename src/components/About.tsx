import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about leveraging technology to solve real-world problems
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16 slide-up">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <p className="text-foreground text-lg leading-relaxed">
                  Creative and motivated B.Tech student with hands-on experience in web development, 
                  AI, and programming. Strong problem-solving skills, a passion for technology, and 
                  the ability to work collaboratively in a team-oriented environment. Experienced 
                  with HTML, CSS, Python, and Java. Seeking opportunities to contribute technical 
                  expertise while gaining further exposure to cutting-edge technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="slide-up">
              <Card className="glass-card hover-lift h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-space font-bold text-foreground">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-foreground">B.Tech in Computer Science</h4>
                      <p className="text-primary font-medium">Vishnu Institute of Technology</p>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Graduating 2026
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        Focused on AI/ML, Data Science, and Software Development
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience */}
            <div className="slide-up">
              <Card className="glass-card hover-lift h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-space font-bold text-foreground">Experience</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="text-lg font-semibold text-foreground">AI-ML Virtual Intern</h4>
                      <p className="text-primary font-medium">AICTE–EduSkills × AWS Academy</p>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Apr–Jun 2025
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        Advanced machine learning and cloud computing with AWS
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="text-lg font-semibold text-foreground">AI Internship Program</h4>
                      <p className="text-primary font-medium">Swecha Telangana Government</p>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        May–Jun 2024
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        Government AI initiative focusing on practical applications
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;