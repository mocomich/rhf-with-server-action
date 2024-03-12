import { z } from 'zod';
import { authFormSchema } from '@/app/schemas/auth';

export type AuthForm = z.infer<typeof authFormSchema>;
