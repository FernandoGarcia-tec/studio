import type {Metadata} from 'next';
import { Lora } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portafolio Ing. Informática',
  description: 'Portafolio personal de un estudiante de Ingeniería Informática, mostrando proyectos, habilidades y experiencia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark"> {/* Added dark class here */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${lora.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
