/* 
NOTE:
- z.string() accepts empty string, that is why I'm using the z.min(1) for checking that the field is not empty.
- The reason why I'm leaving the 'required_error' option in z.string() is so that this schema is usable in the server as well.
*/

import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(1, { message: 'Username is required' })
      .min(8, 'Username must have at least 8 characters')
      .max(20, 'Username should not exceed 20 characters')
      .regex(/^[a-z][a-z0-9_]{7,19}$/, 'Invalid username'),
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, { message: 'Email is required' })
      .email({ message: 'Enter a valid email' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, { message: 'Password is required' })
      .min(8, 'Password must be at least 8 characters long')
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).+$/,
        'Password must contain a lower case letter, an upper case letter and a number'
      ),
    confirmPassword: z
      .string({ required_error: 'Confirm Password is required' })
      .min(1, { message: 'Confirm Password is required' })
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Password and Confirm password must match',
    path: ['confirmPassword']
  });

export type RegistrationFormFields = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Enter a valid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, { message: 'Password is required' })
});

export type LoginFormFields = z.infer<typeof loginSchema>;
