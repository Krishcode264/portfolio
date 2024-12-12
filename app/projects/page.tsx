import React from 'react'

import Image from 'next/image'
import { projects, type Project  } from '../exports'


import Link from 'next/link'
type linksType="linkedin"|"website"|"github"
const Links=({type,url}:{url:string,type:linksType})=>{


return (
  <Link href={url} className="project-link font-serif text-sm" target="_blank">
    {type}
  </Link>
);
}

const Project=({p}:{p:Project})=>{

   const linksArray = Object.entries(p.links).map(([key, value]) => {
     return { key, value };
   });

return (
  <div className="project  font-mono relative   mx-auto sm:w-[60%] w-[90%] my-auto      hover:cursor-pointer rounded-md p-2 ">
    <h4 className="text-xl text-slate-300 mb-2">{p.name}</h4>

    <Image
      className=" w-full  rounded-md bg-cover"
      alt={p.name}
      src={p.thumbnail}
    ></Image>

    <div>
      <div className="flex flex-col h-full justify-between items-end ">
        <p className="text-slate-300 font-mono p-2 ">{p.description}</p>
        <div className="flex gap-2   bottom-2 ">
          {linksArray.map((l) => {
            return (
              <Links
                type={l.key as linksType}
                key={l.key}
                url={l.value as string}
              />
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
    <div className='flex h-full p-4 mb-4 md:py-12 flex-col gap-4  md:gap-8  '>
     
{projects.map((p)=>{
return (
    <Project p={p} key={p.name}/>
)
})}
    </div>
  )
}

export default Projects