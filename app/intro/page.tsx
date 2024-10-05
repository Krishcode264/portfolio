import React from 'react'
import Image from 'next/image';
 import p1 from "@/public/profile/p.png"
import ln from "@/public/logos/ln2.png"
import gh from "@/public/logos/gh.png";
import Link from "next/link";
const Intro = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center '>
      <span className="md:w-[70%] w-full ">
        <h1 className="text-slate-300 font-mono sm:text-2xl mb-20 text-center text-wrap">
          Welcome to my portfolio! I am krishna zade, a passionate full-stack
          web developer dedicated to creating innovative solutions that enhance
          user experiences and solve real-world problems
        </h1>
      </span>

      <Image
        width={12}
        height={12}
        className="w-24 h-24 rounded-full"
        alt="photo"
        src={p1}
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
  );
}

export default Intro