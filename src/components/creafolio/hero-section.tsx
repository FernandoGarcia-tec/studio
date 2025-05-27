import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import fotoPerfil from '@/app/perfil.jpeg';
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-b from-background to-secondary/30 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="container mx-auto text-center py-16 md:py-24">
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-primary">
          <Image
            src={fotoPerfil}
            alt="Estudiante de Ingeniería Informática"
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="student technology"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Hola, soy Fernando Garcia
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
          Un apasionado estudiante de Ingeniería Informática. Me interesa seguir creciendo en áreas como la programación, ciencia de datos y desarrollo de videojuegos
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://github.com/FernandoGarcia-tec" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub">
            <Github className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/fernandogarciaq" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn">
            <Linkedin className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:garciaquintero00@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Twitter">
            <Mail className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        </div>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg shadow-md transition-transform hover:scale-105">
            <Link href="#projects">Ver Mis Proyectos</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-3 text-lg shadow-md transition-transform hover:scale-105">
            <Link href="#contact">Contacta Conmigo</Link>
          </Button>
        </div>
        <div className="mt-16 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-8 h-8 mx-auto text-primary/70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
