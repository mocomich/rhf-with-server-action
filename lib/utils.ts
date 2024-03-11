import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ZodSchema, z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validate<T extends ZodSchema>(target: unknown, schema: T): asserts target is z.infer<T> {
  schema.parse(target);
}
