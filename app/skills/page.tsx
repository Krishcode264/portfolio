import React from "react";
import Image, { type StaticImageData } from "next/image";
import { type SkillArray, FrontEndSkills, BackEndSkills, DevOpsSkills } from "../exports";
import { Code2, Server, Cloud } from "lucide-react";

const Skill = ({
  name,
  logo,
}: {
  name: string;
  logo: string | StaticImageData;
}) => {
  return (
    <div className="group flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl transition-all duration-300 border border-white/5 hover:border-white/10 shadow-sm">
      <div className="flex p-1 sm:p-1.5 bg-slate-800/50 rounded-md sm:rounded-lg group-hover:scale-110 transition-transform">
        <Image
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm sm:rounded-md object-contain"
          width={24}
          height={24}
          src={logo}
          alt={name}
          unoptimized={true}
        />
      </div>
      <p className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white transition-colors">{name}</p>
    </div>
  );
};

const SkillContainer = ({
  skills,
  type,
}: {
  skills: SkillArray;
  type: string;
}) => {
  const Icon = type.includes("Front") ? Code2 : type.includes("Back") ? Server : Cloud;

  return (
    <div className="bg-[#1e2235]/40 backdrop-blur-md border border-white/5 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 shadow-2xl hover:border-white/10 transition-all duration-500 group">
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="p-2 sm:p-3 bg-pink-500/10 rounded-xl sm:rounded-2xl text-pink-400 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-mono text-white font-bold tracking-tight">
          {type}
        </h3>
      </div>

      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {skills.map((s) => {
          return <Skill name={s.name} logo={s.logo} key={s.name} />;
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <SkillContainer skills={FrontEndSkills} type="Front End Development" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <SkillContainer skills={BackEndSkills} type="Backend Development" />
        <SkillContainer skills={DevOpsSkills} type="DevOps & Infrastructure" />
      </div>
    </div>
  );
};

export default Skills;
