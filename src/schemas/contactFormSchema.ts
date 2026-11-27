import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Please enter your full name.')
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be 100 characters or fewer.'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Enter a valid email address.'),
  subject: z
    .string()
    .trim()
    .min(1, 'Please enter a subject.')
    .min(3, 'Subject must be at least 3 characters.')
    .max(120, 'Subject must be 120 characters or fewer.'),
  message: z
    .string()
    .trim()
    .min(1, 'Please enter your message.')
    .min(10, 'Message must be at least 10 characters.')
    .max(2000, 'Message must be 2,000 characters or fewer.'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
