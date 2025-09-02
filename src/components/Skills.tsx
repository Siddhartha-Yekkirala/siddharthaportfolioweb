import React from 'react';
import { Code, Database, Wrench, Brain, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "HTML", "CSS", "DBMS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Tableau", "Git", "GitHub", "VSCode", "Replit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["Flask", "NumPy", "Pandas", "Matplotlib", "TensorFlow"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MongoDB", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Teamwork", "Communication"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Interests",
      icon: Brain,
      skills: ["Machine Learning", "Data Science", "Deep Learning", "NLP"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="glass-card hover-lift slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-space font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-background rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center slide-up">
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-space font-semibold text-foreground">
                    Continuous Learning
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Always eager to explore new technologies and expand my skillset. 
                  Currently diving deeper into advanced AI/ML concepts and cloud computing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;