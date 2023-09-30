import React from "react";
import {
  FaLinkedinIn,
  FaReact,
  FaJava,
  FaAngular,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGithub, SiGmail, SiMysql } from "react-icons/si";

export default function Media(props: any) {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lg:gap-5 justify-between">
      <div>
        {!props.phone ? <h2 className="text-base uppercase font-titleFont mb-4">Social Profile</h2> : ""}
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/premsn-1226"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:premsn120100@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/prem-s-n-28452b168/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          {props.phone ? (
            <span className="bannerIcon">
              <a
                href="tel:+91 8056619027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhoneAlt />
              </a>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.stack ? (
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            TECH STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
