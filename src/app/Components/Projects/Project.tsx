import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/app/Constants/data";

export default function Project(props: any) {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            des={item.des}
            src={item.src}
            githubLink={item.githubLink}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
    </section>
  );
}
