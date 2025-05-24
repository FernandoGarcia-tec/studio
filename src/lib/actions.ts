"use server";

import { z } from 'zod';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { KeywordsSchema, ContactFormSchema } from './schemas';

export interface AiDescriptionState {
  description?: string;
  error?: string;
  fieldErrors?: { keywords?: string[] };
}

export async function handleGenerateDescription(
  prevState: AiDescriptionState,
  formData: FormData
): Promise<AiDescriptionState> {
  const rawFormData = {
    keywords: formData.get('keywords') as string,
  };

  const validatedFields = KeywordsSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Validation failed. Please check your input.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateProjectDescription({ keywords: validatedFields.data.keywords });
    if (result.description) {
      return { description: result.description };
    } else {
      return { error: "Failed to generate description. AI service might be unavailable." };
    }
  } catch (error) {
    console.error("AI Description Generation Error:", error);
    return { error: "An unexpected error occurred while generating the description." };
  }
}

export interface ContactFormState {
  message?: string;
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = ContactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: "Validation failed. Please check your input.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just log it and return a success message.
  console.log("Contact Form Submitted:", validatedFields.data);

  return { message: "Thank you for your message! I'll get back to you soon." };
}
