import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
  const [educationData, setEducationData]: any = useState(true);
  const [skillData, setSkillData]: any = useState(false);
  const [experienceData, setExperienceData]: any = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="18+ YEARS OF ACADEMIC AND WORK EXPERIENCE"
          des="My Resume"
        />
        <span className="bannerIcon">
          <a
            href="https://cdn.glitch.com/251da07e-ccd2-4ab2-a3fb-601349f3da61%2FSECE%20CBE_B.E.EEE_PREM.S.N_2021.pdf?v=1599413316356"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload />
          </a>
        </span>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
}
