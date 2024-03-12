import { z } from 'zod';

export const authFormSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(1, 'Name is required'),
});
