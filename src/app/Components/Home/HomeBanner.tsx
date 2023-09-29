import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

export default function HomeBanner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}
