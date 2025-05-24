import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  keywords: string[];
  liveLink?: string;
  repoLink?: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
      <div className="relative w-full h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl lg:text-2xl text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="mb-3">
          {project.techStack.map(tech => (
            <span key={tech} className="inline-block bg-accent/10 text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <CardDescription className="text-foreground/80 font-serif text-base leading-relaxed line-clamp-4">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start space-x-3 pt-0 pb-4">
        {project.liveLink && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoLink && (
          <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-primary hover:bg-primary/10">
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
