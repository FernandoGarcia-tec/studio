import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub">
            <Github className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn">
            <Linkedin className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Twitter">
            <Twitter className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p className="text-sm text-foreground/70 font-serif">
          &copy; {currentYear} [Tu Nombre]. Todos los derechos reservados.
        </p>
        <p className="text-xs text-foreground/50 mt-2 font-serif">
          Desarrollado con Next.js y Tailwind CSS. Alojado en Firebase.
        </p>
      </div>
    </footer>
  );
}
