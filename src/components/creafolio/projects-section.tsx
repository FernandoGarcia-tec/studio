import { ProjectCard, type Project } from './project-card';
import { AiDescriptionGenerator } from './ai-description-generator';

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'CreaFolio - This Portfolio',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    description: 'A personal portfolio website built with Next.js, Tailwind CSS, and ShadCN UI, featuring AI-powered project description generation.',
    keywords: ['nextjs', 'tailwindcss', 'portfolio', 'ai'],
    liveLink: '#', // Link to itself or a demo if deployed
    repoLink: 'https://github.com/your-username/creafolio', // Placeholder
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Genkit AI'],
  },
  {
    id: '2',
    title: 'E-commerce Analytics Dashboard',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard charts',
    description: 'A dynamic analytics dashboard for an e-commerce platform, providing insights into sales, customer behavior, and inventory management. Features interactive charts and real-time data updates.',
    keywords: ['react', 'charts', 'data-visualization', 'api'],
    liveLink: '#',
    repoLink: '#',
    techStack: ['React', 'Recharts', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: '3',
    title: 'Task Management App',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task list mobile',
    description: 'A collaborative task management application designed to help teams organize, track, and manage their work efficiently. Features include drag-and-drop interface, notifications, and user roles.',
    keywords: ['vuejs', 'firebase', 'collaboration', 'productivity'],
    liveLink: '#',
    repoLink: '#',
    techStack: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Featured Projects
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
