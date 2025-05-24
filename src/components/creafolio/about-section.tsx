import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Cpu } from 'lucide-react'; // Added Cpu icon

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <GraduationCap className="w-7 h-7 mr-3 text-accent" />
                Educación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 font-serif text-lg leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Grado en Ingeniería Informática</h3>
                <p>[Tu Universidad], [Ciudad], [País] (Año Inicio - Año Fin/Actualidad)</p>
                <p className="mt-1 text-sm">Asignaturas relevantes: Estructuras de Datos, Algoritmos, Sistemas Operativos, Redes de Computadoras, Arquitectura de Computadores, Inteligencia Artificial.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Certificación en Desarrollo Full-Stack</h3>
                <p>Plataforma de Cursos Online (Año)</p>
                <p className="mt-1 text-sm">Enfocado en el stack MERN, desarrollo y despliegue de múltiples proyectos.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <Briefcase className="w-7 h-7 mr-3 text-accent" />
                Experiencia y Proyectos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 font-serif text-lg leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Desarrollador de Firmware (Prácticas/Proyecto)</h3>
                <p>Tech Solutions Innovadoras (Año - Año/Actualidad)</p>
                <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                  <li>Desarrollo y mantenimiento de firmware para dispositivos IoT.</li>
                  <li>Colaboración en el diseño de sistemas embebidos y pruebas de hardware.</li>
                  <li>Participación en revisiones de código y metodologías ágiles.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Proyecto: Sistema de Domótica con IA</h3>
                <p>Proyecto Académico/Personal (Año)</p>
                <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                  <li>Diseño e implementación de un sistema de control para el hogar usando Raspberry Pi y sensores.</li>
                  <li>Integración de algoritmos de IA para reconocimiento de voz y automatización.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
         <p className="mt-12 text-center text-lg text-foreground/80 font-serif max-w-3xl mx-auto leading-relaxed">
          Soy un estudiante de ingeniería informática proactivo y orientado a resultados, con una gran pasión por la tecnología y la resolución de problemas complejos. 
          Mi formación académica me ha proporcionado una sólida base en desarrollo de software, hardware y sistemas inteligentes. 
          Busco aplicar mis conocimientos en proyectos innovadores y seguir aprendiendo en el dinámico mundo de la tecnología.
        </p>
      </div>
    </section>
  );
}
