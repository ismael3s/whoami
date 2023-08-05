import Image from "next/image";

export const Me = () => {
  return (
    <Image
    
      alt="Ismael Souza da Silva Santana Foto"
      src={"/eu.jpg"}
      className="rounded-full"
      fill
      sizes="256px"
      priority
    />
  );
};
