"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { tv } from "tailwind-variants";
import Link from "next/link";

const headerItem = tv({
  base: "cursor-pointer transition-all duration-300 ease-in-out",
  variants: {
    active: {
      true: "opacity-100",
      false: "opacity-80",
    },
  },
  defaultVariants: {
    active: false,
  },
});
const enum LanguageEnum {
  PT_BR = "pt-br",
  EN = "en",
}

const enum HomeSectionEnum {
  ABOUT = "about",
  SKILLS = "skills",
  EXPERIENCES = "experiences",
}
type Props = {
  locale: string;
};

export const Header = ({ locale: currentLanguage }: Props) => {
  const t = useTranslations("Header");
  const [currentSection, setCurrentSection] = useState(HomeSectionEnum.ABOUT);

  function handleSectionChange(section: HomeSectionEnum) {
    if (currentSection === section) return;
    setCurrentSection(section);
  }

  return (
    <header className="bg-bsecondary sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl m-auto">
        <ul className="flex items-center gap-2 text-tsecondary">
          <li
            className={headerItem({
              active: currentSection === HomeSectionEnum.ABOUT,
            })}
            onClick={() => handleSectionChange(HomeSectionEnum.ABOUT)}
          >
            {t("about")}
          </li>
          <li
            className={headerItem({
              active: currentSection === HomeSectionEnum.SKILLS,
            })}
            onClick={() => handleSectionChange(HomeSectionEnum.SKILLS)}
          >
            {t("skills")}
          </li>
          <li
            className={headerItem({
              active: currentSection === HomeSectionEnum.EXPERIENCES,
            })}
            onClick={() => handleSectionChange(HomeSectionEnum.EXPERIENCES)}
          >
            {t("experiences")}
          </li>
        </ul>
        <ul className="flex items-center gap-5 text-tsecondary">
          <li
            className={headerItem({
              active: currentLanguage === LanguageEnum.PT_BR,
            })}
          >
            <Link href={`/${LanguageEnum.PT_BR}`}scroll={false}>
              PT
            </Link>
          </li>
          <li
            className={headerItem({
              active: currentLanguage === LanguageEnum.EN,
            })}
          >
            <Link href={`/${LanguageEnum.EN}`} scroll={false}>
              EN
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
