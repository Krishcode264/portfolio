'use client';

import React from "react";

import Image from "next/image";
import { projects, type Project } from "../exports";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, ExternalLink, Youtube, X } from "lucide-react";
import { motion } from "framer-motion";

export type linksType = "website" | "github" | "youtube";

const Links = ({ type, url }: { url: string; type: linksType }) => {
  const Icon = type === "github" ? Github : type === "youtube" ? Youtube : ExternalLink;
  const label = type === "github" ? "Source" : type === "youtube" ? "Demo" : "Live";

  return (
    <Link
      href={url}
      className="group/link relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
      target="_blank"
    >
      <Icon size={18} className="group-hover/link:text-pink-400 transition-colors" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-900/90 text-[10px] text-white opacity-0 group-hover/link:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
        {label}
      </span>
    </Link>
  );
};

const ProjectItem = ({ p }: { p: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const linksArray = Object.entries(p.links).map(([key, value]) => {
    return { key, value };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 0.99 }}
      className="snap-start relative bg-[#1e2235]/40 backdrop-blur-md border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-6 md:p-10 mb-8 hover:border-white/10 transition-colors duration-500 group flex flex-col lg:flex-row gap-6 lg:gap-10 items-center min-h-[75vh] md:min-h-[60vh] max-h-[90vh] md:max-h-none justify-center scroll-mt-24"
    >
      {/* Thumbnail Container */}
      <div className="w-full lg:w-[45%] relative overflow-hidden rounded-[1.5rem] shadow-2xl group-hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-white/10 self-start lg:self-center aspect-video shrink-0 max-h-[35vh] md:max-h-[50vh]">
        {typeof p.thumbnail === 'string' && p.thumbnail.endsWith('.mp4') ? (
          <video
            className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-105"
            src={p.thumbnail}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-105"
            alt={p.name}
            src={p.thumbnail}
            unoptimized={true}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center max-h-[45vh] lg:max-h-none overflow-y-auto pr-2 no-scrollbar">
        <motion.h4 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-mono font-bold text-white mb-3 md:mb-4 tracking-tight whitespace-pre-wrap"
        >
          {p.name.includes(" - ") ? (
            <>
              <span className="block">{p.name.split(" - ")[0]}</span>
              <span className="block text-lg md:text-2xl text-slate-400 mt-1">{p.name.split(" - ")[1]}</span>
            </>
          ) : (
            p.name
          )}
        </motion.h4>
        
        <div className="relative mb-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-slate-300 font-mono text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ${expanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}
          >
            {p.description}
          </motion.p>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="md:hidden text-pink-400 text-xs mt-2 font-mono hover:underline focus:outline-none"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>

        {/* Tech Stack Tags */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
          }}
          className="flex flex-wrap gap-2 mb-6 md:mb-8"
        >
          {p.tech.map((t) => (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              key={t}
              className="px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] md:text-xs font-mono text-pink-400 opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 items-center"
        >
          {linksArray.map((l) => (
            <Links
              type={l.key as linksType}
              key={l.key}
              url={l.value as string}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
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
    <div className="flex flex-col p-4 md:py-8 gap-8 relative max-w-6xl mx-auto">
      {/* Animated Cat and Message */}
      <div
        className={`fixed left-4 bottom-24 z-[70] transition-all duration-700 ease-out flex items-center gap-4 bg-slate-900/95 backdrop-blur-xl p-4 pr-12 rounded-2xl shadow-2xl border border-white/10 max-w-md ` +
          (showCat && !closed ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0")
        }
      >
        <button onClick={handleClose} className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
          <X size={18} />
        </button>
        <div className="flex-shrink-0 bg-white/5 p-2 rounded-xl">
          <Image
            src="/general/cat.svg"
            alt="Cat"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="text-slate-200 text-sm font-mono leading-snug">
          <strong className="text-pink-400 block mb-1">Heads up!</strong>
          Project links might take a while to load since they are hosted on free services.
        </div>
      </div>

      {/* Global Style for scroll snapping on the document body */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body {
          scroll-snap-type: y proximity;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Projects List */}
      <div className="flex flex-col gap-12 snap-y snap-proximity">
        {projects.map((p) => (
          <ProjectItem p={p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
