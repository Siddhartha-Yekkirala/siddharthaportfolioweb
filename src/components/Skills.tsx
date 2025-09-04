import React from 'react';
import { Code, Database, Wrench, Brain, Users, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "HTML", "CSS", "JavaScript", "DBMS"],
      color: "from-blue-500 to-cyan-500",
      level: "Advanced"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Tableau", "Git", "GitHub", "VSCode", "Replit", "AWS"],
      color: "from-green-500 to-emerald-500",
      level: "Proficient"
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["Flask", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "React"],
      color: "from-purple-500 to-pink-500",
      level: "Intermediate"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MongoDB", "Firebase"],
      color: "from-orange-500 to-red-500",
      level: "Intermediate"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Teamwork", "Communication", "Leadership"],
      color: "from-indigo-500 to-purple-500",
      level: "Expert"
    },
    {
      title: "AI/ML Interests",
      icon: Brain,
      skills: ["Machine Learning", "Data Science", "Deep Learning", "NLP"],
      color: "from-pink-500 to-rose-500",
      level: "Growing"
    }
  ];

  const achievements = [
    { metric: "90%", label: "Model Accuracy", icon: TrendingUp },
    { metric: "5K+", label: "Images Trained", icon: Brain },
    { metric: "15+", label: "Projects Built", icon: Zap }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building innovative solutions with cutting-edge technologies
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={achievement.label} className="glass-card hover-lift text-center border-0 shadow-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-space font-bold text-foreground mb-2">{achievement.metric}</div>
                  <p className="text-muted-foreground font-medium">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="glass-card hover-lift slide-up border-0 shadow-xl group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-space font-semibold text-foreground">
                          {category.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">{category.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="group/skill flex items-center justify-between px-4 py-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-primary/60 rounded-full group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Journey */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card slide-up border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-foreground">
                      Continuous Learning
                    </h3>
                    <p className="text-primary font-medium">Growth Mindset</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Always eager to explore new technologies and expand my skillset. 
                  Currently diving deeper into advanced AI/ML concepts, cloud computing, 
                  and emerging web technologies.
                </p>
                <div className="space-y-2">
                  {["Advanced Neural Networks", "Cloud Architecture", "DevOps Practices", "Modern Web Frameworks"].map((topic) => (
                    <div key={topic} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card slide-up border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-space font-bold text-foreground">
                      Future Goals
                    </h3>
                    <p className="text-primary font-medium">Vision Forward</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Focused on mastering full-stack development while specializing in AI/ML 
                  applications. Aiming to contribute to impactful projects that solve 
                  real-world challenges.
                </p>
                <div className="space-y-2">
                  {["Full-Stack Mastery", "AI Product Development", "Open Source Contribution", "Technical Leadership"].map((goal) => (
                    <div key={goal} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
                      <span className="text-foreground font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;