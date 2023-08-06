import { Text } from "@/app/components/Text";
import { useHeaderStore } from "@/zustand/store";
import { work } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import { formatWorkingPeriod } from "../../lib/formatWorkData";
import { useLocale } from "next-intl";

type Props = {
  work: work;
  isOnRightSide?: boolean;
  locale: string;
};
export const Experience = ({ isOnRightSide, work, locale }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-2  md:w-72 lg:w-auto md:text-end ",
        isOnRightSide ? " md:ml-6 my-8 md:my-16 md:text-start" : "ml-auto md:mr-6"
      )}
    >
      <Text
        weight="bold"
        fontSize="xs"
        fontColor="secondary"
        className="md:text-xl"
      >
        {work.job_role}
      </Text>
      <Text weight="bold" fontSize="exs" as={"span"}>
        {work.company}
      </Text>
      <Text weight="medium" fontSize="exs" as={"span"} className="">
        {formatWorkingPeriod(work.start_date, work.end_date, locale)}
      </Text>

      <Text fontSize="exs" as={"span"} className="">
        {work.description}
      </Text>
    </div>
  );
};

export const Experiences = () => {
  const works = useHeaderStore((state) => state.works);
  const locale = useLocale();
  return (
    <div className="max-w-7xl mx-auto  px-4 py-8">
      <Text
        fontSize="heading-1"
        as="h2"
        weight="bold"
        className="text-center mb-6"
      >
        Experiences
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {works
          .sort(
            (a, b) =>
              new Date(b.start_date).getTime() -
              new Date(a.start_date).getTime()
          )
          .map((work, index) => (
            <div
              key={work.id}
              className={
                index % 2 === 0 ? `md:border-r-[1px]  md:border-r-border` : ""
              }
            >
              <Experience
                isOnRightSide={index % 2 !== 0}
                work={work}
                locale={locale}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
