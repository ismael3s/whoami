import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { SocialMedia } from "./SocialMedia";
import { Me } from "./Me";
import { useTranslations } from "next-intl";

export const Divider = () => <div className="w-20 h-[3px] bg-tsecondary" />;

type Props = {};

export const About = ({}: Props) => {
  const t = useTranslations("About");
  return (
    <section className="w-full flex my-8 items-center">
      <div className="flex-grow-[25]">
        <div className="flex gap-5 items-center">
          <Divider />
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

        <Button my="md">
          <Text as="span" fontSize="lg" weight="bold" fontColor="dark">
          {t("contact")}
          </Text>
        </Button>

        <SocialMedia />
      </div>

      <div className="relative w-[158px] h-[158px] md:w-[256px] md:h-[256px]">
        <Me />
      </div>
    </section>
  );
};
