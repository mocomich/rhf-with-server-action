'use server';

import { AuthForm } from '@/app/types/auth';
import { validate } from '@/lib/utils';
import { authFormSchema } from '@/app/schemas/auth';

export async function handleSignup(formData: AuthForm) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(new Date(), 'server side action', formData);
}

export async function handleSignupTest(formData?: FormData) {
  validate(formData, authFormSchema);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(new Date(), 'server side action', formData);
}
