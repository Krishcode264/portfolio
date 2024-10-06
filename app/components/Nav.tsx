"use client"
import React from 'react'
import  Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from "clsx"
const Nav = () => {
    const pathName=usePathname()

      const isActive = (href:string) =>  pathName === href ? "active-nav-item" : "";
  return (
    <div className=" nav rounded-md sticky w-full  bottom-0 flex h-[10%]  md:w-[70%]  md:mx-auto  items-center  justify-evenly md:gap-20  md:text-2xl text-slate-300 sm:font-bold font-mono ">
      <Link className={clsx(isActive("/"))} href={"/"}>
        Intro
      </Link>
      <Link className={clsx(isActive("/skills"))} href={"/skills"}>
        Skills
      </Link>
      <Link className={clsx(isActive("/projects"))} href={"/projects"}>
        Projects
      </Link>
      <Link className={clsx(isActive("/resume"))} href={"/resume"}>
        Resume
      </Link>
    </div>
  );
}

export default Nav