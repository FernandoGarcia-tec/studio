"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleContactForm, type ContactFormState } from '@/lib/actions';
import { ContactFormSchema, type ContactFormData } from '@/lib/schemas';
import { Loader2, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 rounded-md shadow-md transition-transform hover:scale-105">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
      Send Message
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<ContactFormState, FormData>(handleContactForm, {
    message: undefined,
    error: undefined,
    fieldErrors: {},
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset(); // Reset form on successful submission
    }
    if (state?.error && !state.fieldErrors) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
                <p className="text-lg text-foreground/80 font-serif leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                    Feel free to reach out using the form, or connect with me through the contact details below.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Mail className="w-6 h-6 text-accent"/>
                        <a href="mailto:your.email@example.com" className="text-lg text-foreground hover:text-primary transition-colors">your.email@example.com</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-accent"/>
                        <span className="text-lg text-foreground">+1 (234) 567-8900</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-accent"/>
                        <span className="text-lg text-foreground">Your City, Your Country</span>
                    </div>
                </div>
            </div>
            <Card className="w-full shadow-xl bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send me a message</CardTitle>
              </CardHeader>
              <Form {...form}>
                <form action={formAction}>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="name" className="text-foreground/80">Full Name</FormLabel>
                          <FormControl>
                            <Input id="name" placeholder="Your Name" {...field} className="text-base py-3"/>
                          </FormControl>
                          {state?.fieldErrors?.name && <FormMessage>{state.fieldErrors.name.join(', ')}</FormMessage>}
                           {!state?.fieldErrors?.name && form.formState.errors.name && (
                            <FormMessage>{form.formState.errors.name.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email" className="text-foreground/80">Email Address</FormLabel>
                          <FormControl>
                            <Input id="email" type="email" placeholder="your.email@example.com" {...field} className="text-base py-3"/>
                          </FormControl>
                          {state?.fieldErrors?.email && <FormMessage>{state.fieldErrors.email.join(', ')}</FormMessage>}
                          {!state?.fieldErrors?.email && form.formState.errors.email && (
                            <FormMessage>{form.formState.errors.email.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message" className="text-foreground/80">Your Message</FormLabel>
                          <FormControl>
                            <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={6} {...field} className="text-base py-3"/>
                          </FormControl>
                          {state?.fieldErrors?.message && <FormMessage>{state.fieldErrors.message.join(', ')}</FormMessage>}
                           {!state?.fieldErrors?.message && form.formState.errors.message && (
                            <FormMessage>{form.formState.errors.message.message}</FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <SubmitButton />
                  </CardFooter>
                </form>
              </Form>
            </Card>
        </div>
      </div>
    </section>
  );
}
