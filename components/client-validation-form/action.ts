import { FormState } from './type';

export async function handleAction(formData: FormData): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('server action', formData);
  return {
    status: 'success',
    message: 'Success',
  };
}
