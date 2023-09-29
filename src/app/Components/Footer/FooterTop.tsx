import React from 'react'
import Media from '../Home/Media'
import { Link } from 'react-scroll'
import { navLinksdata } from '@/app/Constants/data'

export default function FooterTop() {
  return (
    <div className="w-full py-10 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <Media />
      <div className="w-full h-full">
        <h3 className="hidden md:inline-flex text-xl uppercase text-designColor tracking-wider mt-4">
          Quick Link
        </h3>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10 mt-4">
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
      </div>
    </div>
  );
}
