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
        <Title des="My Resume" />
        <span
          className="bannerIcon ml-5 w-10 h-10"
          style={{ marginTop: "-35px" }}
        >
          <a
            href="https://drive.google.com/file/d/1W3CVAx8K-kh4cpAwhd3CWhp5ZZ0t3gf2/view?usp=drive_link"
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
