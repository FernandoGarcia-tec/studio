import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <GraduationCap className="w-7 h-7 mr-3 text-accent" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 font-serif text-lg leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Degree in Computer Science</h3>
                <p>Your University, City, Country (Year - Year)</p>
                <p className="mt-1 text-sm">Relevant coursework: Data Structures, Algorithms, Web Development, Database Management.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Online Certification in Full-Stack Development</h3>
                <p>Tech Bootcamp Platform (Year)</p>
                <p className="mt-1 text-sm">Focused on MERN stack, deployed several projects.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <Briefcase className="w-7 h-7 mr-3 text-accent" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80 font-serif text-lg leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Software Developer</h3>
                <p>Tech Solutions Inc. (Year - Present)</p>
                <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                  <li>Developed and maintained key features for client-facing web applications.</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
                  <li>Participated in code reviews and agile development processes.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xl text-foreground mb-1">Junior Web Developer</h3>
                <p>Creative Agency Co. (Year - Year)</p>
                <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                  <li>Assisted in building responsive websites for various clients.</li>
                  <li>Gained experience with HTML, CSS, JavaScript, and CMS platforms.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
         <p className="mt-12 text-center text-lg text-foreground/80 font-serif max-w-3xl mx-auto leading-relaxed">
          I am a dedicated and results-oriented software developer with a passion for building intuitive and efficient applications. 
          My journey in tech began with a fascination for how software can solve real-world problems, leading me to pursue a comprehensive education and gain hands-on experience in various development roles. 
          I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skills and contribute effectively to innovative projects.
        </p>
      </div>
    </section>
  );
}
