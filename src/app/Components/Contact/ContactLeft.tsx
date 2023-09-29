import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import contactImg  from "../../../../assest/contact.png";
import Image from "next/image";
import Media from "../Home/Media";

export default function ContactLeft(){
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">PREM S N</h3>
        <p className="text-lg font-normal text-gray-100">
          Full Stack Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide mb-5">
          I am a passionate Full stack Web developer, interested in
          innovative solutions that bridge technology and user experience.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8056619027</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">premsn120100@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github:{" "}
          <span className="text-lightText">https://github.com/premsn-1226</span>
        </p>
      </div>
      <Media />
    </div>
  );
};
