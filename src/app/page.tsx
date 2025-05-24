import { Header } from '@/components/creafolio/header';
import { HeroSection } from '@/components/creafolio/hero-section';
import { AboutSection } from '@/components/creafolio/about-section';
import { SkillsSection } from '@/components/creafolio/skills-section';
import { ProjectsSection } from '@/components/creafolio/projects-section';
import { ContactSection } from '@/components/creafolio/contact-section';
import { Footer } from '@/components/creafolio/footer';

export default function CreaFolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
