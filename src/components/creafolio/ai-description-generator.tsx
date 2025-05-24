"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleGenerateDescription, type AiDescriptionState } from '@/lib/actions';
import { KeywordsSchema, type KeywordsFormData } from '@/lib/schemas';
import { Loader2, Sparkles, ClipboardCopy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Generate Description
    </Button>
  );
}

export function AiDescriptionGenerator() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<AiDescriptionState, FormData>(handleGenerateDescription, {
    description: '',
    error: undefined,
    fieldErrors: {},
  });

  const form = useForm<KeywordsFormData>({
    resolver: zodResolver(KeywordsSchema),
    defaultValues: {
      keywords: '',
    },
  });
  
  useEffect(() => {
    if (state?.error && !state.fieldErrors) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const handleCopyToClipboard = () => {
    if (state.description) {
      navigator.clipboard.writeText(state.description)
        .then(() => {
          toast({ title: "Copied!", description: "Description copied to clipboard." });
        })
        .catch(err => {
          toast({ title: "Error", description: "Failed to copy description.", variant: "destructive" });
          console.error('Failed to copy: ', err);
        });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">AI Project Description Generator</CardTitle>
        <CardDescription className="font-serif">
          Enter a few keywords about your project, and let AI craft a compelling description for you.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form action={formAction}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="keywords" className="text-foreground/80">Keywords</FormLabel>
                  <FormControl>
                    <Input
                      id="keywords"
                      placeholder="e.g., react, e-commerce, machine learning"
                      {...field}
                      className="text-base"
                    />
                  </FormControl>
                  {state?.fieldErrors?.keywords && <FormMessage>{state.fieldErrors.keywords.join(', ')}</FormMessage>}
                  {!state?.fieldErrors?.keywords && form.formState.errors.keywords && (
                    <FormMessage>{form.formState.errors.keywords.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            
            {state.description && (
              <div className="space-y-2">
                <FormLabel className="text-foreground/80">Generated Description:</FormLabel>
                <Textarea
                  value={state.description}
                  readOnly
                  rows={6}
                  className="bg-muted/50 border-muted font-serif text-base"
                />
                <Button type="button" variant="outline" size="sm" onClick={handleCopyToClipboard} className="mt-2">
                  <ClipboardCopy className="mr-2 h-4 w-4" /> Copy
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
