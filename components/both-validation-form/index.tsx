'use client';

import { AuthFormType } from '@/app/types/auth';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { handleAction } from './action';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './schema';
import { Button } from '../ui/button';
import { useTransition } from 'react';

export default function AuthForm() {
  const form = useForm<AuthFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(handleAction, {
    status: 'idle',
  });

  const onSubmit = async (formData: AuthFormType) => {
    const data = new FormData();
    data.append('email', formData.email);
    data.append('name', formData.name);
    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <div className="flex w-full flex-col gap-7">
      <h2 className="text-4xl">Both Validation Form</h2>
      <Form {...form}>
        <form className="space-y-4" action={formAction} onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
                {state.status === 'error' && state.fieldErrors.email && (
                  <ul className="p-2 bg-red-500 text-white">
                    {state.fieldErrors.email.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
                {state.status === 'error' && state.fieldErrors.name && (
                  <ul className="p-2 bg-red-500 text-white">
                    {state.fieldErrors.name.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                )}
              </FormItem>
            )}
          />
          <Button className="w-full">{isPending ? 'Loading...' : 'Submit'}</Button>
        </form>
      </Form>
    </div>
  );
}
