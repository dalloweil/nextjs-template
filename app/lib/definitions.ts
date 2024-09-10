import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .trim(),
  password: z.string()
    .min(8, { message: "Password should be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { message: 'Include at least one letter.' })
    .regex(/[0-9]/, { message: 'Add at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Include at least one special character (e.g., !, @, #, $).',
    })
    .trim()
})

export type FormState =
  | {
    errors?: {
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined;

