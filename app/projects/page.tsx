import React from 'react'
import ln from "@/public/logos/ln2.png";
import github from "@/public/logos/gh.png";
import earth from "@/public/logos/earth.png";
import Image from 'next/image'
import { projects, type Project  } from '../exports'
const geticon = {
  linkedin: ln,
  github: github,
  website: earth,
};

import Link from 'next/link'
type linksType="linkedin"|"website"|"github"
const Links=({type,url}:{url:string,type:linksType})=>{


return(
    <Link href={url}>
        <Image width={5} height={5} className='w-6 h-6  ' src={geticon[type]} alt="icon" unoptimized/>
    </Link>
)
}

const Project=({p}:{p:Project})=>{

   const linksArray = Object.entries(p.links).map(([key, value]) => {
     return { key, value };
   });

return (
  <div className="project relative  md:h-[70%] mx-auto sm:w-[70%] my-auto      hover:cursor-pointer rounded-md p-2 ">
    <h4 className="text-xl text-slate-300 mb-2">{p.name}</h4>
 
      <Image
        className=" w-full  rounded-md bg-cover"
        alt={p.name}
        src={p.thumbnail}
      ></Image>

      <div>
        <div className="flex flex-col h-full justify-between items-end ">
          <p className="text-slate-300">{p.description}</p>
          <div className="flex gap-2  absolute bottom-2 ">
            {linksArray.map((l) => {
              return (
                <Links type={l.key as linksType} key={l.key} url={l.value as string} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
 
);
}


const Projects = () => {
  return (
    <div className='flex   overflow-y-auto flex-col md:flex-row gap-4 sm:p-4 p-2 md:w-[80%] lg:w-[70%] h-full items-stretch '>
     
{projects.map((p)=>{
return (
    <Project p={p} key={p.name}/>
)
})}
    </div>
  )
}

export default Projects