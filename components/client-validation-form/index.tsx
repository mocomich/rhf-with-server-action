'use client';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { formSchema } from './schema';
import { handleAction } from './action';
import { FormType } from './type';

export default function AuthForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (formData: FormType) => {
    const data = new FormData();
    data.append('email', formData.email);
    data.append('name', formData.name);

    startTransition(async () => {
      await handleAction(data);
    });
  };
  return (
    <div className="flex w-full flex-col gap-7">
      <h2 className="text-4xl">ClientValidationForm</h2>
      <Form {...form}>
        <form className="space-y-4" onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
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
              </FormItem>
            )}
          />
          <Button className="w-full">{isPending ? 'Loading...' : 'Submit'}</Button>
        </form>
      </Form>
    </div>
  );
}
