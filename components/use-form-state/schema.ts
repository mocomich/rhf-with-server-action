import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(1, 'Name is required'),
});
