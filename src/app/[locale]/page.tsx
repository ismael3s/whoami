import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/Experiences";
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

      <div className="h-40 w-full"></div>

      <div className="w-full bg-bsecondary">
        <Experiences />
      </div>
    </main>
  );
}
