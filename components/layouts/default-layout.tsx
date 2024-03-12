import Link from 'next/link';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-full h-16 border-b-2 flex items-center justify-end px-4">
        <ul className="font-semibold">
          <li>
            <Link href={'/use-form'}>useForm</Link>
          </li>
        </ul>
      </header>
      <main className="container p-6">{children}</main>
    </div>
  );
}
