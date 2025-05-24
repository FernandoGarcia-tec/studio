import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <Twitter className="w-7 h-7 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p className="text-sm text-foreground/70 font-serif">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-xs text-foreground/50 mt-2 font-serif">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
}
