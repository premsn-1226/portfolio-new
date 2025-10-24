import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { FaDownload } from "react-icons/fa";

export default function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Java Developer.",
      "Full Stack Web Developer.",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 2500,
  });
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hello Everyone 👀🙋‍♂️ </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="capitalize text-animation">Prem S N</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking cursorStyle="|" cursorColor="rgb(2, 160, 2)" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate Full stack Web developer. With a strong foundation
          in web development and devloping REST API, also interested in
          innovative solutions that bridge technology and user experience.
        </p>
      </div>
      <Media stack={true} />
    </div>
  );
}
