import React from 'react'

export default function Card(props : any) {
  return (
    <div className="w-full px-12 h-50 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-6 flex flex-col justify-between">
            {props.item.icon ? (
              <span className="text-5xl text-pink-500">{props.item.icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-pink-500 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-pink-500 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-pink-500 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-pink-500 inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {props.item.title}
            </h2>
            <p className="base">{props.item.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
