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
    <div className="group flex items-center gap-3 p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/5 hover:border-white/10 shadow-sm">
      <div className="flex p-1.5 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform">
        <Image
          className="w-6 h-6 rounded-md object-contain"
          width={24}
          height={24}
          src={logo}
          alt={name}
          unoptimized={true}
        />
      </div>
      <p className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">{name}</p>
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
    <div className="bg-[#1e2235]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl hover:border-white/10 transition-all duration-500 group">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-pink-500/10 rounded-2xl text-pink-400 group-hover:scale-110 transition-transform duration-500">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl md:text-3xl font-mono text-white font-bold tracking-tight">
          {type}
        </h3>
      </div>

      <div className="flex gap-4 flex-wrap">
        {skills.map((s) => {
          return <Skill name={s.name} logo={s.logo} key={s.name} />;
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full max-w-6xl mx-auto px-4 py-12">
      <SkillContainer skills={FrontEndSkills} type="Front End Development" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <SkillContainer skills={BackEndSkills} type="Backend Development" />
        <SkillContainer skills={DevOpsSkills} type="DevOps & Infrastructure" />
      </div>
    </div>
  );
};

export default Skills;
