import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Cpu, Zap, GitFork, Brain, Laptop, Network, HardDrive, TerminalSquare, Settings } from 'lucide-react';

const skillsData = [
  // Lenguajes de Programación
  { name: 'Python', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'C/C++', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'Java', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'JavaScript', icon: <Code2 className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  { name: 'SQL', icon: <Database className="w-8 h-8 text-primary" />, category: "Lenguajes de Programación" },
  
  // Desarrollo Web y Frontend
  { name: 'HTML5 & CSS3', icon: <Laptop className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'React', icon: <Zap className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Next.js', icon: <Zap className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Tailwind CSS', icon: <Settings className="w-8 h-8 text-primary" />, category: "Desarrollo Web" },
  { name: 'Node.js', icon: <Settings className="w-8 h-8 text-primary" />, category: "Desarrollo Web" }, 
  
  // Hardware y Sistemas Embebidos
  { name: 'Arduino', icon: <Cpu className="w-8 h-8 text-primary" />, category: "Hardware y Sistemas Embebidos" },
  { name: 'Raspberry Pi', icon: <Cpu className="w-8 h-8 text-primary" />, category: "Hardware y Sistemas Embebidos" },
  { name: 'Microcontroladores', icon: <Cpu className="w-8 h-8 text-primary" />, category: "Hardware y Sistemas Embebidos" },
  { name: 'VHDL/Verilog', icon: <Cpu className="w-8 h-8 text-primary" />, category: "Hardware y Sistemas Embebidos" },

  // IA y Machine Learning
  { name: 'Machine Learning', icon: <Brain className="w-8 h-8 text-primary" />, category: "IA y Machine Learning" },
  { name: 'TensorFlow/Keras', icon: <Brain className="w-8 h-8 text-primary" />, category: "IA y Machine Learning" },
  
  // Sistemas Operativos y Redes
  { name: 'Linux', icon: <TerminalSquare className="w-8 h-8 text-primary" />, category: "Sistemas Operativos y Redes" },
  { name: 'Redes TCP/IP', icon: <Network className="w-8 h-8 text-primary" />, category: "Sistemas Operativos y Redes" },
  { name: 'Sistemas Operativos', icon: <HardDrive className="w-8 h-8 text-primary" />, category: "Sistemas Operativos y Redes" },

  // Herramientas y DevOps
  { name: 'Git & GitHub', icon: <GitFork className="w-8 h-8 text-primary" />, category: "Herramientas y DevOps" },
  { name: 'Docker', icon: <TerminalSquare className="w-8 h-8 text-primary" />, category: "Herramientas y DevOps" },
];

const skillCategories = [
  "Lenguajes de Programación", 
  "Desarrollo Web",
  "Hardware y Sistemas Embebidos", 
  "IA y Machine Learning",
  "Sistemas Operativos y Redes",
  "Herramientas y DevOps"
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Habilidades Técnicas
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
