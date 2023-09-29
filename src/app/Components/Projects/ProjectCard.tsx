import React from "react";
import { FaGlobe, FaCloud } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import medibot from "../../../../assest/medibot.png";
import weather from "../../../../assest/weather.png";
import ecommerce from "../../../../assest/book easy.png";
import todolist from "../../../../assest/to_do_list.png";
import student from "../../../../assest/student.png";
import game from "../../../../assest/gmae.png";
export default function ProjectCard(props: any) {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Image
          className="w-full h-40 object-fill group-hover:scale-110 duration-300 cursor-pointer"
          src={
            props.src === "weather"
              ? weather
              : props.src === "medibot"
              ? medibot
              : props.src === "todolist"
              ? todolist
              : props.src === "student"
              ? student
              : props.src === "game"
              ? game
              : props.src === "ecommerce"
              ? ecommerce
              : ""
          }
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {props.title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a
                  href={props.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </span>
              {props.websiteLink !== "" ? (
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a
                    href={props.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.src === "todolist" || props.src === "student" ? (
                      <FaCloud />
                    ) : (
                      <FaGlobe />
                    )}
                  </a>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {props.des}
          </p>
        </div>
      </div>
    </div>
  );
}
