"use client";
import Image from "next/image";
import GithubSvg from "../../.././../../public/Github.svg";
import LinkedinSvg from "../../.././../../public/Linkedin.svg";
export const SocialMedia = () => {
  function openInNewTab(url: string) {
    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div className="flex gap-2">
      <Image
        src={GithubSvg}
        alt="Github Logo"
        onClick={() => openInNewTab("https://github.com/ismael3s")}
      />
      <Image
        src={LinkedinSvg}
        alt="Linkedin Logo"
        onClick={() => openInNewTab("https://linkedin.com/in/ismael3s")}
      />
    </div>
  );
};
