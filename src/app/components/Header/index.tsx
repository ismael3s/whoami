"use client";
import { useTranslations } from "next-intl";
import { tv } from "tailwind-variants";
import Link from "next/link";
import { HeaderSectionEnum } from "./HeaderSectionEnum";
import { useHeaderStore } from "@/zustand/store";

const headerItem = tv({
  base: "cursor-pointer transition-all duration-300 ease-in-out",
  variants: {
    active: {
      true: "opacity-100",
      false: "opacity-80"
    }
  },
  defaultVariants: {
    active: false
  }
});
const enum LanguageEnum {
  PT_BR = "pt-br",
  EN = "en"
}

type Props = {
  locale: string;
};

export const Header = ({ locale: currentLanguage }: Props) => {
  const t = useTranslations("Header");
  const activeSection = useHeaderStore((state) => state.activeSection);
  const sectionsRefs = useHeaderStore((state) => state.sectionsRefs);
  const blockOptions: {
    [key in HeaderSectionEnum]: ScrollLogicalPosition;
  } = {
    [HeaderSectionEnum.ABOUT]: "center",
    [HeaderSectionEnum.SKILLS]: "center",
    [HeaderSectionEnum.EXPERIENCES]: "start"
  };

  function handleSectionChange(section: HeaderSectionEnum) {
    if (activeSection === section) return;
    sectionsRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: blockOptions[section] || "center"
    });
  }

  return (
    <header className="bg-bsecondary sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl m-auto">
        <ul
          className="flex items-center gap-2 text-tsecondary"
          key={activeSection}
        >
          {/* <li
            className={headerItem({
              active: activeSection === HeaderSectionEnum.ABOUT,
            })}
            onClick={() => handleSectionChange(HeaderSectionEnum.ABOUT)}
          >
            {t("about")}
          </li>
          <li
            className={headerItem({
              active: activeSection === HeaderSectionEnum.SKILLS,
            })}
            onClick={() => handleSectionChange(HeaderSectionEnum.SKILLS)}
          >
            {t("skills")}
          </li>
          <li
            className={headerItem({
              active: activeSection === HeaderSectionEnum.EXPERIENCES,
            })}
            onClick={() => handleSectionChange(HeaderSectionEnum.EXPERIENCES)}
          >
            {t("experiences")}
          </li> */}
        </ul>
        <ul className="flex items-center gap-5 text-tsecondary">
          <li
            className={headerItem({
              active: currentLanguage === LanguageEnum.PT_BR
            })}
          >
            <Link href={`/${LanguageEnum.PT_BR}`} scroll={false}>
              PT
            </Link>
          </li>
          <li
            className={headerItem({
              active: currentLanguage === LanguageEnum.EN
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
