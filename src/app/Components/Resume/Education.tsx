import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { certificateData, educationData } from "@/app/Constants/data";
import CertificateCard from "./CertificateCard";
export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full mb-10 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            EDUCATIONAL QUALIFICATION
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {educationData.map((item) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          ))}
        </div>
      </div>
      <div className="lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">CERTIFICATES</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[2500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {certificateData.map((item) => (
            <CertificateCard
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              src={item.src}
              result={item.result}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
