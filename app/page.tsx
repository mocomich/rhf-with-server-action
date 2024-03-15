import ClientValidationForm from '@/components/client-validation-form';
import ServerValidationForm from '@/components/server-validation-form';
import UseFormStateForm from '@/components/use-form-state';
import BothValidationStateForm from '@/components/both-validation-form';

export default function Home() {
  return (
    <main className="flex container min-h-screen p-24">
      {/* <ClientValidationForm /> */}
      {/* <ServerValidationForm /> */}
      {/* <UseFormStateForm /> */}
      <BothValidationStateForm />
    </main>
  );
}
