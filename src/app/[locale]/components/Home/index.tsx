"use client";
import { use, useEffect, useRef } from "react";
import { AboutMe } from "../AboutMe";
import { Experiences } from "../Experiences";
import { Whoami } from "../Whoami";
import { HomeIntersectionHandler } from "../../lib/HomeIntersectionChain";
import { useHeaderStore } from "@/zustand/store";

type Props = {
  params: {
    locale: string;
  };
  works: any[];
};

export default function HomeComponent({ works }: Props) {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experiencesSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen">
      <div ref={aboutSectionRef}>
        <div className="max-w-7xl mx-auto">
          <Whoami />
        </div>
        <div className="w-full bg-bsecondary">
          <AboutMe />
        </div>
      </div>

      <div className="h-[480px] w-full" ref={skillsSectionRef}></div>

      <div className="w-full bg-bsecondary" ref={experiencesSectionRef}>
        <Experiences />
      </div>
    </main>
  );
}
