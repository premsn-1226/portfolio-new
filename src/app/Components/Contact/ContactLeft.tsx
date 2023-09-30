import React from "react";
import contactImg  from "../../../../assest/contact_new.png";
import Image from "next/image";
import Media from "../Home/Media";

export default function ContactLeft(){
  return (
    <div className="w-full mb-5 md:mb-0 lgl:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <Image
        className="w-full h-64 object-none rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <span className="flex flex-row justify-center align-center">
        <Media phone={true} />
      </span>
    </div>
  );
};
