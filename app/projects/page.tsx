import React from "react";

import Image from "next/image";
import { projects, type Project } from "../exports";

import Link from "next/link";
import yt from "@/public/logos/yt2.png";
import gh from "@/public/logos/gh2.png";
import web from "@/public/logos/earth.png";

export type linksType = "website" | "github" | "youtube";

const linkstypeIconMapper = {
  website: web,
  github: gh,
  youtube: yt,
};

const Links = ({ type, url }: { url: string; type: linksType }) => (
  <Link
    href={url}
    className="project-link  p-[1.3] md:p-2 bg-violet-300   font-serif rounded-lg"
    target="_blank"
  >
    <div className="flex items-center bg-violet-100 rounded-md  p-1 md:p-1">
      <Image
        src={linkstypeIconMapper[type]}
        alt={type}
        unoptimized={true}
        className="w-6 h-6 rounded-xl m-0 p-0 "
      />
    </div>

    {/* <p className='text-white font-mono'>{type}</p> */}
  </Link>
);

const Project = ({ p }: { p: Project }) => {
  const linksArray = Object.entries(p.links).map(([key, value]) => {
    return { key, value };
  });

  return (
    <div className="project  font-mono relative   mx-auto sm:w-[60%] md:w-[90%] my-auto   w-[90%]   hover:cursor-pointer rounded-md p-2 ">
      <h4 className="text-xl text-slate-300 mb-2">{p.name}</h4>

      <Image
        className=" w-full  rounded-md bg-cover"
        alt={p.name}
        src={p.thumbnail}
      ></Image>

      <div>
        <div className="flex flex-col h-full justify-between items-end ">
          <p className="text-slate-300 font-mono p-2 sm:text-lg text-xs ">
            {p.description}
          </p>
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
};

const Projects = () => {
  return (
    <div className="flex h-full md:-flex-col flex-row p-4 mb-4 md:py-12 flex-wrap gap-4  md:gap-8   ">
      {projects.map((p) => {
        return <Project p={p} key={p.name} />;
      })}
    </div>
  );
};

export default Projects;
