import { Text } from "@/components/Text";
import { TextDivider } from "@/components/TextDivider";
import { useTranslations } from "next-intl";

export const AboutMe = () => {
  const t = useTranslations("About");
  return (
    <section className="max-w-7xl mx-auto  px-4 py-8 bg-bsecondary">
      <div className="flex gap-x-5 items-center mb-4">
        <TextDivider />
        <Text fontSize="heading-1" as="span" weight="bold">
          {t("about")}
        </Text>
      </div>

      <Text as="p" fontSize="sm">{t("first-paragraph")}</Text>
      <br />
      <Text as="p" fontSize="sm">{t("second-paragraph")}</Text>
      {/* <br />
      <Text as="p" fontSize="sm">{t("third-paragraph")}</Text> */}
    </section>
  );
};
