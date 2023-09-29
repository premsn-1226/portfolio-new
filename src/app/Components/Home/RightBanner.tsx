import React from 'react'
import bannerImg from "../../../../assest/prem_pic.png";
import Image from 'next/image';
export default function RightBanner() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative">
      <Image
        className="w-[320px] h-[350px] md:w-[400px] md:h-[450px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[320px] md:w-[450px] md:h-[400px] photo-animation bg-gradient-to-r from-[#3f4042] to-[#0d0e0f] shadow-shadowOne flex justify-center items-center rounded-lg"></div>
    </div>
  );
}
