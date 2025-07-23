'use client';

import React from "react";

import Image from "next/image";
import { projects, type Project } from "../exports";

import Link from "next/link";
import yt from "@/public/logos/yt2.png";
import gh from "@/public/logos/gh2.png";
import web from "@/public/logos/earth.png";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
    <div className="project  relative   mx-auto sm:w-[90%] md:w-[90%] my-auto   w-full   hover:cursor-pointer rounded-md p-2 ">
      <h4 className="text-base md:text-xl  text-slate-300 mb-2">{p.name}</h4>

      <Image
        className=" w-[95%]  rounded-md bg-cover"
        alt={p.name}
        src={p.thumbnail}
      ></Image>

      <div>
        <div className="flex flex-col h-full justify-between items-end ">
          <p className="text-slate-300 p-2 sm:text-lg text-xs ">
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
  const [showCat, setShowCat] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (!closed) {
      const timer = setTimeout(() => setShowCat(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [closed]);

  const handleClose = () => {
    setShowCat(false);
    setClosed(true);
  };

  return (
    <div className="flex  overflow-y-auto  md:-flex-col flex-row p-4 mb-4 md:py-12 flex-wrap gap-4  md:gap-8   relative">
      {/* Animated Cat and Message */}
      <div
        className={`fixed left-0 z-50 transition-all duration-700 ease-out flex items-center gap-2 sm:gap-4 bg-slate-900/90 p-2 sm:pl-4 sm:pr-10 pt-2 sm:pt-4 pb-2 sm:pb-4 rounded-r-2xl shadow-lg max-w-[98vw] sm:max-w-[90vw] md:max-w-md ` +
          (showCat && !closed ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0")
        }
        style={{ top: '10%', minWidth: 0 }}
      >
        <button onClick={handleClose} className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-full hover:bg-slate-800 transition-colors">
          <X size={20} className="text-slate-300" />
        </button>
        <img
          src="/general/cat.svg"
          alt="Cat"
          className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-lg"
        />
        <div className="text-slate-100 text-xs sm:text-sm md:text-base font-mono max-w-[60vw] sm:max-w-xs">
          <b>Heads up!</b> Project links might take a while to load since they are hosted on free services.<br />
          For more info, check out the <a href="https://github.com/Krishcode264" target="_blank" className="underline text-blue-300">GitHub repo</a>.
        </div>
      </div>
      {/* Projects List */}
      {projects.map((p) => {
        return <Project p={p} key={p.name} />;
      })}
    </div>
  );
};

export default Projects;
