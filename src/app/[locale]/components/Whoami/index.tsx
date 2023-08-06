import { Text } from "@/components/Text";
import { SocialMedia } from "./SocialMedia";
import { ImageMe } from "./ImageMe";
import { useTranslations } from "next-intl";
import { TextDivider } from "@/components/TextDivider";


type Props = {};

export const Whoami = ({}: Props) => {
  const t = useTranslations("Whoami");
  return (
    <section className="w-full px-4 flex my-8 items-center">
      <div className="flex-grow-[25]">
        <div className="flex gap-5 items-center">
          <TextDivider />
          <Text weight="medium" as="span">
            {t("hello")}
          </Text>
        </div>

        <Text my="md" weight="bold" fontSize="heading-1">
          {t("i'm")}
        </Text>

        <Text fontSize="sm" weight="medium">
        {t("engineer")}
        </Text>

  

        <SocialMedia />
      </div>

      <div className="relative w-[148px] h-[148px] md:w-[256px] md:h-[256px]">
        <ImageMe />
      </div>
    </section>
  );
};
