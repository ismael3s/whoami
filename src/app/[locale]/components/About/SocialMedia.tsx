"use client";
import Image from "next/image";
import GithubSvg from "../../.././../../public/Github.svg";
import LinkedinSvg from "../../.././../../public/Linkedin.svg";
import { BiLogoDevTo, BiLogoGmail } from "react-icons/bi";
export const SocialMedia = () => {
  function openURL(url: string, target="_blank") {
    const win = window.open(url, target);
    win?.focus();
  }


  return (
    <div className="flex gap-4">
      <Image
        src={GithubSvg}
        alt="Github Logo"
        onClick={() => openURL("https://github.com/ismael3s")}
        className="cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
      />
      <Image
        src={LinkedinSvg}
        alt="Linkedin Logo"
        onClick={() => openURL("https://linkedin.com/in/ismael3s")}
        className="cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
      />
      <BiLogoGmail
        onClick={() => openURL("mailto:ismael.santana.dev@gmail.com", "_self")}
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
      />

      <BiLogoDevTo
        onClick={() => openURL("https://dev.to/ismael3s")}
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};
