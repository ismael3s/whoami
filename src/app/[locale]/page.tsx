import { AboutMe } from "./components/AboutMe";
import { Whoami } from "./components/Whoami";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home(_props: Props) {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto">
      <Whoami />

      </div>
      <div className="w-full bg-bsecondary">
      <AboutMe />

      </div>
    </main>
  );
}
