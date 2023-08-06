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
  const handler = new HomeIntersectionHandler();
  const { setActiveSection, setSectionRef, setWorks } = useHeaderStore();

  function handleIntersectionChange(sectionObject: any) {
    const section = handler.handleRequest(sectionObject);
    if (!section) return;
    setActiveSection(section);
  }

  useEffect(() => {
    setWorks(works)
    if (
      !aboutSectionRef.current ||
      !experiencesSectionRef.current ||
      !skillsSectionRef.current
    )
      return;
    setSectionRef({
      about: aboutSectionRef,
      experiences: experiencesSectionRef,
      skills: skillsSectionRef,
    });
    let intersection: {
      about: IntersectionObserverEntry | undefined;
      experiences: IntersectionObserverEntry | undefined;
      skills: IntersectionObserverEntry | undefined;
    } = {
      about: undefined,
      experiences: undefined,
      skills: undefined,
    };
    const aboutSectionObserver = new IntersectionObserver(
      (entries) => {
        intersection.about = entries.at(0);
        handleIntersectionChange(intersection);
      },
      {
        threshold: 0.4,
      }
    );
    const skillsSectionObserver = new IntersectionObserver(
      (entries) => {
        intersection.skills = entries[0];
        handleIntersectionChange(intersection);
      },
      {
        rootMargin: "0px 0px 0px -50px",
        threshold: 0.7,
      }
    );
    const experienceSectionObserver = new IntersectionObserver(
      (entries) => {
        intersection.experiences = entries[0];
        handleIntersectionChange(intersection);
      },
      {
        threshold: 0.3,
      }
    );

    aboutSectionObserver.observe(aboutSectionRef.current!);
    experienceSectionObserver.observe(experiencesSectionRef.current!);
    skillsSectionObserver.observe(skillsSectionRef.current!);

    return () => {
      if (
        !aboutSectionRef.current ||
        !experiencesSectionRef.current ||
        !skillsSectionRef.current
      )
        return;
      skillsSectionObserver.unobserve(skillsSectionRef.current!);
      aboutSectionObserver.unobserve(aboutSectionRef.current!);
      experienceSectionObserver.unobserve(experiencesSectionRef.current!);
    };
  }, []);
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
