'use client';

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '@/components/ui/submit-button';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { handleAction } from './action';
import { FormType } from './type';

export default function AuthForm() {
  const form = useForm<FormType>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  const [state, formAction] = useFormState(handleAction, {
    status: 'idle',
  });

  return (
    <div className="flex w-full flex-col gap-7">
      <h2 className="text-4xl">UseFormState Form</h2>
      <Form {...form}>
        <form className="space-y-4" action={formAction}>
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
          <SubmitButton className="w-full">Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
