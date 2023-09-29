import React from "react";

export default function Title(props : any){
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-10">
      <h3 className="text-sm text-center uppercase font-light text-pink-500 tracking-wide">
        {props.title}
      </h3>
      <h1 className="text-4xl text-center md:text-5xl text-gray-300 font-bold capitalize">
        {props.des}
      </h1>
    </div>
  );
};
