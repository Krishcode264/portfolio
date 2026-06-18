"use client";
import React, { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import p1 from "@/public/profile/pic_new.jpg";
import ln from "@/public/logos/ln2.png";
import gh from "@/public/logos/gh.png";
import Link from "next/link";
import lc from "@/public/logos/lc.svg";

import { heroSkills } from "../exports";

interface TextSegment {
  text: string;
  className?: string;
}

const SegmentedTypewriter = ({ segments, speed = 25 }: { segments: TextSegment[]; speed?: number }) => {
  const [visibleSegments, setVisibleSegments] = useState<TextSegment[]>([]);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (activeSegmentIndex >= segments.length) return;

    const currentSegment = segments[activeSegmentIndex];
    
    const timer = setTimeout(() => {
      if (charIndex < currentSegment.text.length) {
        setVisibleSegments((prev) => {
          const updated = [...prev];
          if (updated[activeSegmentIndex]) {
            updated[activeSegmentIndex] = {
              ...updated[activeSegmentIndex],
              text: currentSegment.text.substring(0, charIndex + 1),
            };
          } else {
            updated.push({
              ...currentSegment,
              text: currentSegment.text.charAt(0),
            });
          }
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        setActiveSegmentIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [activeSegmentIndex, charIndex, segments, speed]);

  const isFinished = activeSegmentIndex >= segments.length;

  return (
    <>
      {visibleSegments.map((seg, idx) => {
        const parts = seg.text.split("\n");
        return (
          <span key={idx} className={seg.className}>
            {parts.map((part, pIdx) => (
              <React.Fragment key={pIdx}>
                {part}
                {pIdx < parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
        );
      })}
      {!isFinished && (
        <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-pink-500 animate-pulse align-middle" />
      )}
    </>
  );
};

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
          <h1 className="text-slate-300 font-mono sm:text-2xl mb-20 text-center text-wrap leading-relaxed min-h-[9rem] sm:min-h-[6rem] md:min-h-[5rem]">
            <SegmentedTypewriter
              segments={[
                { text: "Hey, I'm " },
                { text: "Krishna Zade", className: "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 font-bold" },
                { text: " ,  " },
                { text: "developer", className: "text-fuchsia-400 font-semibold" },
                { text: ", " },
                { text: "occasional over-engineer", className: "text-violet-400 italic font-semibold" },
                { text: ", and someone who " },
                { text: "can't stop building", className: "text-pink-400 font-bold" },
                { text: ".\n I care about " },
                { text: "real problems", className: "text-cyan-400 font-semibold" },
                { text: ", " },
                { text: "real users", className: "text-emerald-400 font-semibold" },
                { text: ", and " },
                { text: "software that holds up", className: "text-amber-400 font-bold" },
                { text: ".." }
              ]}
            />
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
