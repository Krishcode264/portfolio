"use client"
import React, { useEffect, useState } from 'react'
import clsx from "clsx"

const Nav = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      // This creates a 20% detection zone in the middle of the screen.
      // Any section passing through this zone will be marked as active,
      // perfectly handling sections of ANY height (like the tall projects section).
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the section
      element.scrollIntoView({ behavior: 'smooth' });
      // Optionally update the URL hash
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const isActive = (id: string) => activeSection === id ? "active-nav-item" : "";

  return (
    <div className="nav sticky z-50 transition-all duration-300
      md:top-6 md:w-fit md:px-12 md:mx-auto md:h-16 md:bg-white/10 md:backdrop-blur-2xl md:border md:border-white/20 md:rounded-full
      bottom-0 w-full h-[10%] bg-slate-950/90 backdrop-blur-xl border-t border-white/10
      flex items-center justify-evenly md:justify-center md:gap-12 
      text-slate-200 sm:font-bold font-mono md:text-xl shadow-xl">
      <a 
        onClick={(e) => handleClick(e, 'intro')}
        className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("intro"))} 
        href="#intro"
      >
        Intro
      </a>
      <a 
        onClick={(e) => handleClick(e, 'skills')}
        className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("skills"))} 
        href="#skills"
      >
        Skills
      </a>
      <a 
        onClick={(e) => handleClick(e, 'projects')}
        className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("projects"))} 
        href="#projects"
      >
        Projects
      </a>
      <a 
        onClick={(e) => handleClick(e, 'contact')}
        className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("contact"))} 
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
}

export default Nav