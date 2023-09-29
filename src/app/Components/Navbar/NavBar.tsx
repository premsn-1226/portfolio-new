import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../../../../assest/pic.png";
import { navLinksdata } from "../../Constants/data";
import Image from "next/image";
import Media from "../Home/Media";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <Image alt="profile pic" src={logo} width={50} height={50} />
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-pink-500 duration-700 ease-in-out"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-pink-500 cursor-pointer focus:text-red-500"
        >
          {!showMenu ? (
            <FiMenu />
          ) : (
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="z-10 text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-red-500 cursor-pointer focus:text-red-500"
            >
              <MdClose />
            </span>
          )}
        </span>
        {showMenu && (
          <div className="w-[101%] md:hidden h-screen overflow-scroll absolute top-2 left-0 bg-gray-900 p-4 scrollbar-hide transition delay-900 duration-900 ease-in-out transform -translate-y-1 scale-100">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <Image width={50} height={50} src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I am a passionate Full stack Web developer, interested in innovative solutions that bridge technology and
                  user experience.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-pink-500 duration-700 ease-in-out hover:-translate-y-0.1 hover:scale-30"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Media stack={false} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
