import Image from "next/image";
import React from "react";
import hackerrank from "../../../../assest/hackerrank.png";
import react from "../../../../assest/redux.png";
import web from "../../../../assest/freecodecamp.png";
export default function CertificateCard(props: any) {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-10 lgl:px-10 flex flex-col justify-center shadow-shadowOne">
        <div className="w-full overflow-hidden rounded-lg">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Image
              className="w-full object-fill group-hover:scale-110 duration-300 cursor-pointer"
              src={
                props.src === "angular"
                  ? hackerrank
                  : props.src === "web"
                  ? web
                  : react
              }
              alt="src"
            />
          </a>
        </div>
        <div className="flex flex-col mt-3 lgl:flex-row justify-between lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {props.title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {props.subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium md:mt-5">
              {props.result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
