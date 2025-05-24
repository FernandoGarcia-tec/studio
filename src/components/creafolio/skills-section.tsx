import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Palette, ServerCog, Cloud, GitFork, Zap, Settings2, TerminalSquare, Workflow } from 'lucide-react'; // Added more icons

const skillsData = [
  { name: 'JavaScript', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Frontend" },
  { name: 'React', icon: <Settings2 className="w-8 h-8 text-primary" />, category: "Frontend" },
  { name: 'Next.js', icon: <Zap className="w-8 h-8 text-primary" />, category: "Frontend" },
  { name: 'HTML5 & CSS3', icon: <Palette className="w-8 h-8 text-primary" />, category: "Frontend" },
  { name: 'Tailwind CSS', icon: <Workflow className="w-8 h-8 text-primary" />, category: "Frontend" },
  { name: 'Node.js', icon: <ServerCog className="w-8 h-8 text-primary" />, category: "Backend" },
  { name: 'Python', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Backend" },
  { name: 'Express.js', icon: <ServerCog className="w-8 h-8 text-primary" />, category: "Backend" },
  { name: 'SQL (PostgreSQL)', icon: <Database className="w-8 h-8 text-primary" />, category: "Databases" },
  { name: 'MongoDB', icon: <Database className="w-8 h-8 text-primary" />, category: "Databases" },
  { name: 'AWS', icon: <Cloud className="w-8 h-8 text-primary" />, category: "DevOps & Cloud" },
  { name: 'Docker', icon: <TerminalSquare className="w-8 h-8 text-primary" />, category: "DevOps & Cloud" },
  { name: 'Git & GitHub', icon: <GitFork className="w-8 h-8 text-primary" />, category: "Tools" },
];

const skillCategories = ["Frontend", "Backend", "Databases", "DevOps & Cloud", "Tools"];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Technical Skills
        </h2>
        
        {skillCategories.map(category => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center md:text-left">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillsData.filter(skill => skill.category === category).map((skill) => (
                <Card key={skill.name} className="text-center p-4 hover:shadow-lg transition-shadow duration-300 bg-background/70 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-full mb-2">
                      {skill.icon}
                    </div>
                    <p className="text-lg font-medium text-foreground">{skill.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
