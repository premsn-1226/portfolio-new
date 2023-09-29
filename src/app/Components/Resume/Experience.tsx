import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from "framer-motion";
import { experienceData } from '@/app/Constants/data';
export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - PRESENT</p>
          <h2 className="text-4xl font-bold">JOB EXPERIENCE</h2>
        </div>
        <div className="mt-14 w-full md:h-[1400px] lg:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {experienceData.map((item)=>(
                <ResumeCard
                    key={item.title}
                  title={item.title}
                  subTitle={item.subTitle}
                  result={item.result}
                  des={item.des}
                  />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
