import React from "react";
import Image, { type StaticImageData } from "next/image";
import p1 from "@/public/profile/p.jpg";
import ln from "@/public/logos/ln2.png";
import gh from "@/public/logos/gh.png";
import Link from "next/link";
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
    <div className="h-full overflow-hidden ">
      <div className="flex  h-[70%]  flex-col gap-4 items-center justify-center ">
        <span className="md:w-[70%] w-full ">
          <h1 className="text-slate-300 font-mono sm:text-2xl mb-20 text-center text-wrap">
            Hey there! I’m Krishna Zade, a full-stack web developer from India with a
            passion for building solutions that don’t just work – they make life
            easier and more exciting. I love crafting user-friendly experiences
            and solving real-world challenges, one line of code at a time.
          </h1>
        </span>

        <Image
          width={12}
          height={12}
          className="w-24 h-24 rounded-full"
          alt="photo"
          src={p1}
          unoptimized
        ></Image>

        <div className="flex items-center gap-2">
          <Link href={"https://www.linkedin.com/in/krishna-zade-644b47243"}>
            <Image
              src={ln}
              className="w-6 h-6 rounded-full  bg-blue-500"
              alt="ln logo "
            ></Image>
          </Link>
          <Link href={"https://github.com/Krishcode264"}>
            <Image
              src={gh}
              className="w-6 h-6  bg-slate-300  rounded-full"
              alt="ln logo  "
            ></Image>
          </Link>
        </div>
      </div>

      <div className="    w-[90%] md:w-[70%] mx-auto  mt-4 overflow-hidden  rounded-md ">
        <div className="p-4   w-full gap-4  flex   move ">
          {heroSkills.map((s) => {
            return <HeroSkill key={s.name} logo={s.logo} name={s.name} />
          })}
        </div>
        <div className="p-4   w-full gap-4  flex   rever">
          {heroSkills.map((s) => {
            return <HeroSkill key={s.name} logo={s.logo} name={s.name} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
