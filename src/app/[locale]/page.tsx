import { About } from "./components/About";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4  max-w-7xl mx-auto">
      <About locale={locale} />
    </main>
  );
}
