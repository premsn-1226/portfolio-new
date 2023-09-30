import React from "react";

export default function Title(props : any){
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-10">
      <h1 className="text-4xl text-center  md:text-5xl text-pink-400 font-bold capitalize">
        {props.des}
      </h1>
    </div>
  );
};
