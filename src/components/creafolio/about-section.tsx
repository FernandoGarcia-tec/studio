
"use client";
import React, { type HTMLAttributes } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react'; // Removed unused Cpu import
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Image from 'next/image'; // Import Next.js Image component
import Tecnm from '@/app/TECNM.png'; // Import your profile image (adjust path and extension as needed)
import cbt from '@/app/cb.png'; // Import your profile image (adjust path and extension as needed)
import reco from '@/app/7ff83c3b508052c1086f105ca76db475_tn.jpg'; // Import your profile image (adjust path and extension as needed)

interface AboutAnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
}

// Helper component to forward ref to Card, now handling its own animation classes
const AnimatedCard = React.forwardRef<HTMLDivElement, AboutAnimatedCardProps>(
  ({ isVisible, className, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'shadow-lg hover:shadow-xl transition-all duration-700 ease-out', // Base static classes
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', // Animation classes
          className // Allow additional classes from consumer
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
AnimatedCard.displayName = 'AnimatedCard';

export function AboutSection() {
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const [card1Ref, isCard1Visible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 200 });
  const [card2Ref, isCard2Visible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 300 });
  const [paragraphRef, isParagraphVisible] = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2, delay: 400 });

  return (
    <section id="about" className="bg-background overflow-hidden">
      <div className="container mx-auto">
        <h2  ref={titleRef} className={cn(
            `text-3xl md:text-4xl font-bold text-primary mb-12 text-center transition-all duration-700 ease-out`,
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
        >
          Sobre Mí
        </h2>
        <div ref={card1Ref} className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  transition-all duration-700 ease-out`,
            isCard1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' )}>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-[22rem]  ">
            <CardHeader>
              <div className="flex flex-col items-center justify-center w-full h-72 rounded-lg overflow-hidden">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={Tecnm}
                    alt="Estudiante de Ingeniería Informática"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    data-ai-hint="student technology"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="flex items-center text-1xl text-primary text-center justify-center">
                  TecNM | Instituto Tecnológico de Colimas
                </CardTitle>
                <p className="text-center text-lg">Ingenieria Informatica</p>
                <p className="text-center text-base">2020 - En curso</p>
              </div>
            </CardHeader>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[22rem]">
            <CardHeader>
              <div className="flex flex-col items-center justify-center w-full h-72 rounded-lg overflow-hidden">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={cbt}
                    alt="Estudiante de Ingeniería Informática"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    data-ai-hint="student technology"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="flex items-center text-1xl text-primary  justify-center">
                  Centro De Bachillerato Tecnologico Industrial Y De Servicios 157
                </CardTitle>
                <p className="text-center text-lg">Tecnico en Programación</p>
                <p className="text-center text-base">2018</p>
              </div>
            </CardHeader>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[22rem]">
            <CardHeader>
              <div className="flex flex-col items-center justify-center w-full h-72 rounded-lg overflow-hidden">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={Tecnm}
                    alt="Estudiante de Ingeniería Informática"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    data-ai-hint="student technology"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="flex items-center text-1xl text-center text-primary justify-center">
                  TecNM | Instituto Tecnológico de Mérida
                </CardTitle>
                <p className="text-center text-lg">Diplomado en Física Cuántica</p>
                <p className="text-center text-base">2025 - 2025</p>
              </div>
            </CardHeader>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[22rem]">
            <CardHeader>
              <div className="flex flex-col items-center justify-center w-full h-72 rounded-lg overflow-hidden">
                 <div className="relative w-full h-48 mb-4">
                  <Image
                    src={Tecnm}
                    alt="Estudiante de Ingeniería Informática"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    data-ai-hint="student technology"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="flex items-center text-1xl text-primary text-center justify-center">
                  TecNM campus Aguascalientes
                </CardTitle>
                <p className="text-center text-lg">Diplomado en Ciencia de Datos</p>
                <p className="text-center text-base">2023 - 2024</p>
              </div>
            </CardHeader>
          </Card>

           <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[22rem]">
            <CardHeader>
              <div className="flex flex-col items-center justify-center w-full h-72 rounded-lg overflow-hidden">
                 <div className="relative w-full h-48 mb-4">
                  <Image
                    src={reco}
                    alt="Estudiante de Ingeniería Informática"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    data-ai-hint="student technology"
                    className="rounded-lg"
                  />
                </div>
                <CardTitle className="flex items-center text-1xl text-primary text-center justify-center">
                  Ciudad de México, organizado por SACMEX
                </CardTitle>
                <p className="text-center text-lg">Reconocimiento: Participación destacada en el concurso “Tu Videojuego SACMEX”</p>
                <p className="text-center text-base">2018</p>
              </div>
            </CardHeader>
          </Card>
        </div>
        <p className="mt-12 text-center text-lg text-foreground/80 font-serif max-w-3xl mx-auto leading-relaxed">
          Soy un estudiante de ingeniería informática proactivo y orientado a resultados, con una gran pasión por la tecnología.
          Mi formación académica me ha proporcionado una sólida base en desarrollo de software, hardware y sistemas inteligentes.
          Busco aplicar mis conocimientos en proyectos innovadores y seguir aprendiendo en el dinámico mundo de la tecnología.
        </p>
      </div>
    </section>
  );
}
