import React from 'react'
import Title from '../layouts/Title';

export default function About() {
  return (
    <section
      id="about"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="flex flex-col gap-5">
        <Title title="ABOUT" des="Who I'm" />
        <p className="text-green-500 text-center font-bodyFont leading-relaxed tracking-wide">
          Hi there, I&apos;m glad to have you here!
        </p>
        <p className="text-base text-center font-bodyFont leading-relaxed tracking-wide">
          I am a Full stack developer with versatility and 2.8 years of
          experience who has a solid grasp of the whole software development
          lifecycle. Expert at designing reliable Rest APIs with core Java and
          Java frameworks like maven, spring boot, and microservices, as well as
          building responsive web applications using HTML, CSS, and JavaScript
          frameworks like (React, Angular, and Next).
        </p>
        <p className="text-base text-center font-bodyFont leading-relaxed tracking-wide">
          Strong analytical skills and an ability to offer user-centric
          solutions. committed to continuous development and staying current
          with trends. I&apos;m looking for challenging projects where I can put
          my abilities to use and help create amazing user experiences.
        </p>
        <p className="text-pink-500 text-center font-bodyFont leading-relaxed tracking-wide">
          Thank you for taking the time to visit my portfolio!
        </p>
      </div>
    </section>
  );
}
