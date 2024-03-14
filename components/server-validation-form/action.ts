'use server';

import { formSchema } from './schema';
import { FormState } from './type';

export async function handleAction(formData: FormData): Promise<FormState> {
  const data = {
    email: formData.get('email'),
    name: formData.get('name'),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log({ status: 'error', fieldErrors: result.error.flatten().fieldErrors });
    return {
      status: 'error',
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('server action success', data);

  return {
    status: 'success',
    message: 'Success',
  };
}
