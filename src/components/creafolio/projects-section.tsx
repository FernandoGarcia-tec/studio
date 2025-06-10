"use client";
import type { HTMLAttributes } from 'react';
import { ProjectCard, type Project } from './project-card';
import { AiDescriptionGenerator } from './ai-description-generator';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React from 'react';
import { Card } from '@/components/ui/card'; // Assuming AiDescriptionGenerator is wrapped in a Card
import fotoPerfil from '@/app/logo.png'
import pantalla from '@/app/pantallaGlam.png'; // Import your profile image (adjust path and extension as needed)
import portafolio from '@/app/Captura de pantalla 2025-05-27 000631.png';

const AnimatedProjectCard = React.forwardRef<HTMLDivElement, { project: Project, isVisible: boolean, delay: number }>(
  ({ project, isVisible, delay, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms`}}
    >
      <ProjectCard project={project} />
    </div>
  )
);
AnimatedProjectCard.displayName = 'AnimatedProjectCard';

const AnimatedAiGenerator = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & {isVisible: boolean}>(
  ({isVisible, className, ...props}, ref) => (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${className || ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      {...props}
    >
    </div>
  )
);
AnimatedAiGenerator.displayName = 'AnimatedAiGenerator';


const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Este Portafolio Web',
    imageUrl: portafolio.src,
    imageHint: 'portfolio code screen',
    description: 'Portafolio personal desarrollado con Next.js, Tailwind CSS y ShadCN UI, integrando IA para la generación de descripciones de proyectos.',
    keywords: ['nextjs', 'tailwindcss', 'portfolio', 'ai', 'ingenieria informatica'],
    liveLink: 'https://studio-mauve-kappa.vercel.app/', 
    repoLink: 'https://github.com/FernandoGarcia-tec/studio', // Enlace a repositorio
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Genkit AI'],
  },
  {
    id: '2',
    title: 'Jaguar Saltarin',
    imageUrl: fotoPerfil.src,
    imageHint: 'Videojuego de plataformas',
    description: 'Videojuego de plataformas desarrollado con Godot, que combina elementos de aventura y acción en un entorno interactivo.',
    keywords: ['iot', 'esp32', 'sistemas embebidos', 'c++', 'mqtt'],
    liveLink: 'https://play.google.com/store/apps/details?id=org.fernant.JaguarSaltarin', // Enlace a demo si existe
    techStack: ['Godot', 'Gdscript','ibisPaintx','Audacity'],
  },
  {
    id: '3',
    title: 'Pagina web de ecommerce',
    imageUrl: pantalla.src,
    imageHint: 'pagina web commerce ',
    description: 'Pagina web de eccomerce permite visualizar productos, realizar compras y gestionar de manera eficiente.',
    keywords: ['Next.js', 'Tailwind CSS', 'Ecommerce', 'AI', 'Ingeniería Informática'],
    liveLink: 'https://joyeria-web.vercel.app/', // Enlace a demo si existe
    repoLink: 'https://github.com/FernandoGarcia-tec/JoyeriaWeb/', // Enlace a repositorio
    techStack: ['Next.js', 'Tailwind CSS', 'Ecommerce', 'AI'],
  }, {
    id: '4',
    title: 'Aplicacion movil de ventas',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai face recognition',
    description: 'Ecommerce app desarrollada con Flutter, que permite a los usuarios comprar y vender productos de manera sencilla y rápida.',
    keywords: ['python', 'opencv', 'machine learning', 'ia', 'vision por computador'],
    liveLink: '', // Enlace a demo si existe
    repoLink: 'https://github.com/FernandoGarcia-tec/ventasflutter', // Enlace a repositorio
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Scikit-learn', 'Flask'],
  },
];

interface ProjectCardWrapperProps {
  project: Project;
  index: number;
}

const ProjectCardWrapper: React.FC<ProjectCardWrapperProps> = ({ project, index }) => {
  const [cardRef, isCardVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: index * 150 });
  return (
    <AnimatedProjectCard ref={cardRef} project={project} isVisible={isCardVisible} delay={0} />
  );
};


export function ProjectsSection() {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [aiGeneratorRef, isAiGeneratorVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 300 });

  return (
    <section id="projects" className="bg-background overflow-hidden">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-primary mb-12 text-center transition-all duration-700 ease-out ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sampleProjects.map((project, index) => (
            <ProjectCardWrapper key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-border">
           <AnimatedAiGenerator ref={aiGeneratorRef} isVisible={isAiGeneratorVisible} />
        </div>
      </div>
    </section>
  );
}
