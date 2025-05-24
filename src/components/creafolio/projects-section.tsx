import { ProjectCard, type Project } from './project-card';
import { AiDescriptionGenerator } from './ai-description-generator';

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Este Portafolio Web',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio code screen',
    description: 'Portafolio personal desarrollado con Next.js, Tailwind CSS y ShadCN UI, integrando IA para la generación de descripciones de proyectos.',
    keywords: ['nextjs', 'tailwindcss', 'portfolio', 'ai', 'ingenieria informatica'],
    liveLink: '#', 
    repoLink: '#', 
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Genkit AI'],
  },
  {
    id: '2',
    title: 'Controlador IoT para Domótica',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'iot smart home',
    description: 'Sistema embebido basado en ESP32 para controlar luces y sensores en un entorno doméstico, con interfaz web para monitorización y control remoto.',
    keywords: ['iot', 'esp32', 'sistemas embebidos', 'c++', 'mqtt'],
    liveLink: '#', // Enlace a demo si existe
    repoLink: '#', // Enlace a repositorio
    techStack: ['C++', 'ESP-IDF', 'MQTT', 'React', 'Node.js'],
  },
  {
    id: '3',
    title: 'Sistema de Reconocimiento Facial',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai face recognition',
    description: 'Aplicación que utiliza Python y OpenCV para la detección y reconocimiento facial en tiempo real, con entrenamiento de modelos de machine learning.',
    keywords: ['python', 'opencv', 'machine learning', 'ia', 'vision por computador'],
    liveLink: '#', // Enlace a demo si existe
    repoLink: '#', // Enlace a repositorio
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Scikit-learn', 'Flask'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-border">
           <AiDescriptionGenerator />
        </div>
      </div>
    </section>
  );
}
