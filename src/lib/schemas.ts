import { z } from 'zod';

export const KeywordsSchema = z.object({
  keywords: z.string().min(3, { message: "Keywords must be at least 3 characters long." })
    .max(200, { message: "Keywords must be at most 200 characters long." }),
});

export type KeywordsFormData = z.infer<typeof KeywordsSchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must be at most 100 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." })
    .max(1000, { message: "Message must be at most 1000 characters long." }),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
