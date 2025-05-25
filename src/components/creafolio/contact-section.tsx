'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const serviceID = 'service_gajrhtn';
    const templateID = 'template_9dkpabt';
    const userID = 'tIMf8gsItCyr39sCM';

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      message,
      to_email: 'garciaquintero00@gmail.com',
    }, userID)
      .then(() => {
        alert('¡Mensaje enviado correctamente!');
        form.reset();
      })
      .catch((error) => {
        alert('Error al enviar el mensaje. Intenta de nuevo.');
        console.error(error);
      });
  }

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Contacta Conmigo
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-lg text-foreground/80 font-serif leading-relaxed">
              Siempre estoy abierto a discutir nuevos proyectos, ideas innovadoras u oportunidades para colaborar.
              No dudes en contactarme a través del formulario o mis datos de contacto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-accent" />
                <a href="mailto:tu.email@example.com" className="text-lg text-foreground hover:text-primary transition-colors">
                  tu.email@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent" />
                <span className="text-lg text-foreground">+34 (123) 456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-lg text-foreground">[Tu Ciudad], [Tu País]</span>
              </div>
            </div>
          </div>

          <Card className="w-full shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envíame un mensaje</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground/80 mb-1">Nombre Completo</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu Nombre"
                    required
                    className="text-base py-3"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground/80 mb-1">Correo Electrónico</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu.email@example.com"
                    required
                    className="text-base py-3"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground/80 mb-1">Tu Mensaje</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    rows={6}
                    required
                    className="text-base py-3"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 rounded-md shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
