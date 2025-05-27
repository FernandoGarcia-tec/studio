"use client";
import type { HTMLAttributes } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Cpu, Zap, GitFork, Brain, Laptop, Network, HardDrive, TerminalSquare, Settings } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React from 'react';
import { cn } from '@/lib/utils'; // Ensure cn is imported


// Helper component to forward ref to Card
const AnimatedCard = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & {isVisible: boolean }>( // Removed unused 'delay' prop from type
  ({isVisible, className, ...props}, ref) => <Card
    {...props}
    ref={ref}
    className={cn(
      `text-center p-4 hover:shadow-lg transition-all duration-500 ease-out bg-background/70 backdrop-blur-sm`,
      className,
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      // Removed problematic: delay && `delay-${delay}`. JS delay from useScrollAnimation is sufficient.
    )}
  />
);
AnimatedCard.displayName = 'AnimatedCard';
const skillsData = [
  // Lenguajes de Programación
  { name: 'Python', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'C/C++', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'Flutter', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'Java', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'JavaScript', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'SQL', icon: <Database className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  
  // Desarrollo Web y Frontend
  { name: 'HTML5 & CSS3', icon: <Laptop className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'React', icon: <Zap className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Next.js', icon: <Zap className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Tailwind CSS', icon: <Settings className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Node.js', icon: <Settings className="w-8 h-8 text-primary" />, category: "Desarrollo Web" }, 
  
];

const skillCategories = [
  "Lenguajes de Programación", 
  
  "Desarrollo Web",
  
];


interface SkillCardWrapperProps {
  skill: typeof skillsData[0];
  index: number;
}

const SkillCardWrapper: React.FC<SkillCardWrapperProps> = ({ skill, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: index * 100 });
  return (
    <AnimatedCard ref={cardRef} isVisible={isCardVisible} >
      <CardContent className="flex flex-col items-center justify-center space-y-3">
        <div className="p-3 bg-primary/10 rounded-full mb-2">
          {skill.icon}
        </div>
        <p className="text-lg font-medium text-foreground">{skill.name}</p>
      </CardContent>
    </AnimatedCard>
  );
};


export function SkillsSection() {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });

  return (
    <section id="skills" className="bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={cn(
            `text-3xl md:text-4xl font-bold text-primary mb-12 text-center transition-all duration-700 ease-out`,
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          Habilidades Técnicas
        </h2>

        {skillCategories.map((category, catIndex) => {
          const [categoryTitleRef, isCategoryTitleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.1, delay: catIndex * 150 });
          return (
            <div key={category} className="mb-10">
              <h3
                ref={categoryTitleRef}
                className={cn(
                  `text-2xl font-semibold text-foreground mb-6 text-center md:text-left transition-all duration-500 ease-out`,
                  isCategoryTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                )}
              >
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <SkillCardWrapper key={skill.name} skill={skill} index={skillIndex} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
