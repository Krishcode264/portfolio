import React from 'react'

import Image, { type StaticImageData } from 'next/image'
import { BackEndSkills, DevOpsSkills, FrontEndSkills, type SkillArray } from '../exports'


const Skill=({name,logo}:{name:string,logo:string|StaticImageData})=>{


    return (
      <div className=" skill flex  p-2 items-center  gap-3 rounded-md  ">
        <span className='flex p-1 skill-shadow rounded-sm items-center justify-center bg-slate-900'>
          <Image
            className="sm:w-8 w-4 h-4 sm:h-8 rounded-md "
            width={5}
            height={5}
            src={logo}
            alt="name"
            unoptimized={true}
          ></Image>
        </span>

        <p className="text-l font-mono text-slate-400 ">{name}</p>
      </div>
    );
}



const SkillContainer=({skills,type}:{skills:SkillArray,type:string})=>{
    return(
        <div className='  '>
            <span className='text-orange-500 font-mono p-2 text-xl sm:text-2xl '>
             {type}
            </span>

            <div className='flex  gap-3 flex-wrap mt-4'>
                 {skills.map((s)=>{
                    return (<Skill name={s.name} logo={s.logo} key={s.name}/>)
                 })}
            </div>
        </div>
    )
}
const Skills = () => {
  return (
    <div className=' h-full md:w-[70%] p-2 flex flex-col  justify-center  gap-4 '>
      <SkillContainer skills={FrontEndSkills} type="Front End" />

      <SkillContainer skills={BackEndSkills} type="Backend End" />

      <SkillContainer skills={DevOpsSkills} type="DevOps" />
    </div>
  );
}

export default Skills