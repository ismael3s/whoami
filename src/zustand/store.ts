import { HeaderSectionEnum } from "@/app/components/Header/HeaderSectionEnum";
import { RefObject } from "react";
import { create } from "zustand";

type SectionRef = null | RefObject<HTMLDivElement>;

type SectionsRef = {
    about: SectionRef;
    skills: SectionRef;
    experiences: SectionRef;
}



type HeaderStore = {
  setActiveSection: (section: HeaderSectionEnum) => void;
  activeSection: HeaderSectionEnum;
  sectionsRefs: SectionsRef,
  setSectionRef: (sections: SectionsRef) => void;
  setWorks: (works: any) => void;
  works: any[];
};

export const useHeaderStore = create<HeaderStore>((set) => ({
  setActiveSection(section) {
    set(() => ({ activeSection: section }));
  },
  activeSection: HeaderSectionEnum.ABOUT,
  setSectionRef(sections) {
    set(() => ({
      sectionsRefs: sections,
    }));
  },
  sectionsRefs: {
    about: null,
    experiences: null,
    skills: null,
  },
  works: [],
  setWorks(works) {
    set(() => ({
      works,
    }));
  }
}));
