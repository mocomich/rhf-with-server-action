import { z } from 'zod';
import { formSchema } from './schema';

export type FormState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      fieldErrors: {
        email?: string[] | undefined;
        name?: string[] | undefined;
      };
    }
  | {
      status: 'idle';
    };

export type FormType = z.infer<typeof formSchema>;
