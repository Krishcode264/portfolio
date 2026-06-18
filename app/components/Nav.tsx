"use client"
import React, { useEffect, useState } from 'react'
import clsx from "clsx"

const Nav = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isOpen, setIsOpen] = useState(false);

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
    const segments = ["intro", "skills", "projects", "open-source", "contact"];
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
    setIsOpen(false);
  };

  const isActive = (id: string) => activeSection === id ? "active-nav-item" : "";

  return (
    <>
      {/* ── Desktop Navigation ── */}
      <div className="nav hidden md:flex sticky z-50 transition-all duration-300
        top-6 w-fit px-12 mx-auto h-16 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full
        items-center justify-center gap-12 
        text-slate-200 font-bold font-mono text-xl shadow-xl">
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
          onClick={(e) => handleClick(e, 'open-source')}
          className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("open-source"))} 
          href="#open-source"
        >
          Open Source
        </a>
        <a 
          onClick={(e) => handleClick(e, 'contact')}
          className={clsx("hover:text-pink-500 transition-colors cursor-pointer", isActive("contact"))} 
          href="#contact"
        >
          Contact
        </a>
      </div>

      {/* ── Mobile Hamburger Button ── */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 flex flex-col justify-center items-center gap-1.5
          bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:border-pink-500/50"
        aria-label="Toggle Menu"
      >
        <span className={clsx(
          "w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 origin-center",
          isOpen && "transform rotate-45 translate-y-2"
        )}/>
        <span className={clsx(
          "w-6 h-0.5 bg-slate-200 rounded transition-all duration-300",
          isOpen && "opacity-0 scale-x-0"
        )}/>
        <span className={clsx(
          "w-6 h-0.5 bg-slate-200 rounded transition-all duration-300 origin-center",
          isOpen && "transform -rotate-45 -translate-y-2"
        )}/>
      </button>

      {/* ── Mobile Menu Overlay ── */}
      <div className={clsx(
        "md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
      )}>
        <a 
          onClick={(e) => handleClick(e, 'intro')}
          className={clsx("text-2xl font-bold font-mono tracking-widest text-slate-200 hover:text-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-105", isActive("intro"))} 
          href="#intro"
        >
          Intro
        </a>
        <a 
          onClick={(e) => handleClick(e, 'skills')}
          className={clsx("text-2xl font-bold font-mono tracking-widest text-slate-200 hover:text-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-105", isActive("skills"))} 
          href="#skills"
        >
          Skills
        </a>
        <a 
          onClick={(e) => handleClick(e, 'projects')}
          className={clsx("text-2xl font-bold font-mono tracking-widest text-slate-200 hover:text-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-105", isActive("projects"))} 
          href="#projects"
        >
          Projects
        </a>
        <a 
          onClick={(e) => handleClick(e, 'open-source')}
          className={clsx("text-2xl font-bold font-mono tracking-widest text-slate-200 hover:text-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-105", isActive("open-source"))} 
          href="#open-source"
        >
          Open Source
        </a>
        <a 
          onClick={(e) => handleClick(e, 'contact')}
          className={clsx("text-2xl font-bold font-mono tracking-widest text-slate-200 hover:text-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-105", isActive("contact"))} 
          href="#contact"
        >
          Contact
        </a>
      </div>
    </>
  );
}

export default Nav