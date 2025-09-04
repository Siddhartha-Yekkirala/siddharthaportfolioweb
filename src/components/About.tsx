import React from 'react';
import { GraduationCap, Briefcase, Calendar, Award, Target, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const stats = [{
    label: "Projects Completed",
    value: "15+",
    icon: Target
  }, {
    label: "ML Model Accuracy",
    value: "94%",
    icon: Award
  }, {
    label: "Years of Learning",
    value: "3+",
    icon: BookOpen
  }];
  return <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Get to know me
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate about leveraging technology to solve real-world problems and create 
              meaningful digital experiences
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => <Card key={stat.label} className="glass-card hover-lift fade-in text-center" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-space font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>)}
          </div>

          {/* Bio Section */}
          <div className="mb-16 slide-up">
            <Card className="glass-card hover-lift border-0 shadow-2xl">
              <CardContent className="p-10">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-space font-bold text-foreground mb-6 text-center">
                    My Journey in Technology
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground text-lg leading-relaxed mb-6">
                      I'm a <span className="font-semibold text-primary">creative and motivated B.Tech student</span> with 
                      hands-on experience in web development, AI, and programming. My journey in technology has been 
                      driven by a passion for solving complex problems and building innovative solutions that make a difference.
                    </p>
                    <p className="text-foreground text-lg leading-relaxed">
                      With <span className="font-semibold text-primary">strong problem-solving skills</span> and the ability 
                      to work collaboratively in team-oriented environments, I bring both technical expertise and creative 
                      thinking to every project. I'm experienced with modern technologies and always seeking opportunities 
                      to contribute while gaining exposure to cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="slide-up">
              <Card className="glass-card hover-lift h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-space font-bold text-foreground">Education</h3>
                      <p className="text-primary font-medium">Academic Excellence</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-4 border-gradient-to-b from-primary to-purple-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h4 className="text-xl font-space font-semibold text-foreground mb-2">B.Tech in CSE - Artificial Intelligence and Machine Learning</h4>
                      <p className="text-primary font-semibold text-lg mb-2">Vishnu Institute of Technology</p>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">Graduating 2026</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-foreground font-medium mb-2">Specializations:</p>
                        <div className="flex flex-wrap gap-2">
                          {["AI/ML", "Data Science", "Software Development", "Cloud Computing"].map(spec => <span key={spec} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {spec}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience */}
            <div className="slide-up">
              <Card className="glass-card hover-lift h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-space font-bold text-foreground">Experience</h3>
                      <p className="text-primary font-medium">Professional Growth</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-4 border-gradient-to-b from-primary to-purple-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h4 className="text-lg font-space font-semibold text-foreground mb-1">
                        AI-ML Virtual Intern
                      </h4>
                      <p className="text-primary font-semibold mb-2">AICTE–EduSkills × AWS Academy</p>
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        Apr–Jun 2025
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Advanced machine learning and cloud computing with AWS, focusing on 
                        scalable AI solutions and industry best practices.
                      </p>
                    </div>

                    <div className="relative pl-6 border-l-4 border-gradient-to-b from-purple-400 to-pink-400">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <h4 className="text-lg font-space font-semibold text-foreground mb-1">
                        AI Internship Program
                      </h4>
                      <p className="text-primary font-semibold mb-2">Swecha Telangana Government</p>
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        May–Jun 2024
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Government AI initiative focusing on practical applications and 
                        social impact through technology innovation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;