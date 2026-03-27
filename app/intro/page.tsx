import React from "react";
import Image, { type StaticImageData } from "next/image";
import p1 from "@/public/profile/pic_new.jpg";
import ln from "@/public/logos/ln2.png";
import gh from "@/public/logos/gh.png";
import Link from "next/link";
import lc from "@/public/logos/lc.svg";

import { heroSkills } from "../exports";
const HeroSkill = ({
  logo,
  name,
}: {
  logo: string | StaticImageData;
  name: string;
}) => {
  return (
    <span className="bg-slate-950 skill flex-shrink-0  flex justify-center    items-center gap-2 p-2 rounded-md">
      <Image
        src={logo}
        unoptimized
        alt={""}
        className="sm:w-8 w-4 h-4sm:h-8 rounded-md"
      ></Image>
      <span className="text-slate-300 text-l sm:text-lg">{name}</span>
    </span>
  );
};
const Intro = () => {
  return (
    <div className="lg:w-[80%] mx-auto  h-full flex  flex-col  justify-evenly overflow-hidden   ">
      <div className="flex    flex-col gap-4 items-center justify-center ">
        <span className=" p-4  ">
          <h1 className="text-slate-300 font-mono sm:text-2xl mb-20 text-center text-wrap leading-relaxed">
            Hey, I’m Krishna Zade — a full-stack developer from India. <br />
            I build fast, scalable web applications and enjoy turning complex problems into clean, intuitive user experiences. <br />
            With a strong focus on real-world impact, I’m always exploring better ways to design, develop, and optimize solutions.
          </h1>
        </span>

        <Image
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover"
          alt="photo"
          src={p1}
          unoptimized
        />

        <div className="flex items-center gap-2">
          <Link
            href={"https://www.linkedin.com/in/krishna-zade-644b47243"}
            target="_blank"
          >
            <Image
              src={ln}
              className="w-6 h-6 rounded-full  bg-blue-500"
              alt="ln logo "
            ></Image>
          </Link>
          <Link href={"https://github.com/Krishcode264"} target="_blank">
            <Image
              src={gh}
              className="w-6 h-6  bg-slate-300  rounded-full"
              alt="gh logo  "
            ></Image>
          </Link>
          <Link href={"https://leetcode.com/u/Krishcode264/"} target="_blank">
            <Image
              src={lc}
              className="w-6 h-6 p-1 bg-slate-900 rounded-full border border-white/10"
              alt="lc logo"
            ></Image>
          </Link>
        </div>
      </div>

      <div className="    w-[90%] md:w-full mx-auto  mt-4 overflow-hidden  rounded-md ">
        <div className="p-4   w-full gap-4  flex   move ">
          {heroSkills.map((s) => {
            return <HeroSkill key={s.name} logo={s.logo} name={s.name} />;
          })}
        </div>
        <div className="p-4   w-full gap-4  flex   rever">
          {heroSkills.map((s) => {
            return <HeroSkill key={s.name} logo={s.logo} name={s.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
