import { Text } from "@/components/Text";
import { twMerge } from "tailwind-merge";

type Props = {
  jobRole?: string;
  company?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  isOnRightSide?: boolean;
};
export const Experience = ({ isOnRightSide }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-2 w-40 text-end ",
        isOnRightSide ? "ml-4 md:ml-6 mt-16 text-start" : "ml-auto mr-6"
      )}
    >
      <Text weight="bold" fontSize="xs" fontColor="secondary" className="">
        Desenvolvedor FullStack
      </Text>
      <Text weight="bold" fontSize="exs" as={"span"}>
        Portal Solar
      </Text>
      <Text weight="medium" fontSize="exs" as={"span"} className="">
        Novembro de 2019 - Maio de 2022
      </Text>

      <Text fontSize="exs" as={"span"} className="">
        Como Desenvolvedor Full Stack na Empresa XYZ Ltda., tive a oportunidade
        de trabalhar em projetos desafiadores e contribuir para o
        desenvolvimento de soluções web inovadoras. Colaborei em equipes ágeis,
        participando de todo o ciclo de vida do desenvolvimento de software,
        desde a concepção até a implantação.
      </Text>
    </div>
  );
};

export const Experiences = () => {
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

      <div className="grid grid-cols-2 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? `border-r-[1px] opacity-80 border-r-border` : ""
            }
          >
            <Experience isOnRightSide={index % 2 !== 0} />
          </div>
        ))}
      </div>
    </div>
  );
};
