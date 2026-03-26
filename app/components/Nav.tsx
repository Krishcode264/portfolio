"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import clsx from "clsx"

const Nav = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const segments = ["intro", "skills", "projects", "contact"];
    segments.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (id: string) => activeSection === id ? "active-nav-item" : "";

  return (
    <div className="nav sticky z-50 transition-all duration-300
      md:top-6 md:w-[75%] md:mx-auto md:h-16 md:bg-white/10 md:backdrop-blur-2xl md:border md:border-white/20 md:rounded-full
      bottom-0 w-full h-[10%] bg-slate-950/90 backdrop-blur-xl border-t border-white/10
      flex items-center justify-evenly md:justify-center md:gap-24 
      text-slate-200 sm:font-bold font-mono md:text-xl shadow-xl">
      <Link className={clsx("hover:text-pink-500 transition-colors", isActive("intro"))} href={"#intro"}>
        Intro
      </Link>
      <Link className={clsx("hover:text-pink-500 transition-colors", isActive("skills"))} href={"#skills"}>
        Skills
      </Link>
      <Link className={clsx("hover:text-pink-500 transition-colors", isActive("projects"))} href={"#projects"}>
        Projects
      </Link>
      <Link className={clsx("hover:text-pink-500 transition-colors", isActive("contact"))} href={"#contact"}>
        Contact
      </Link>
    </div>
  );
}

export default Nav