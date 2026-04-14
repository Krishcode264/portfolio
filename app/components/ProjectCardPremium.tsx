import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { type Project } from "../exports";
import clsx from "clsx";

const ProjectCardPremium = ({ p }: { p: Project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={clsx(
        "group relative w-full overflow-hidden rounded-[2rem] border border-white/5 bg-[#0a0c10] shadow-2xl transition-all duration-700 hover:border-white/20",
        isInView && "is-in-view"
      )}
    >
      {/* Main Poster Image (Dynamic Height) */}
      <Image
        src={p.thumbnail}
        alt={p.name}
        className={clsx(
          "w-full h-auto block transition-all duration-1000 ease-out group-hover:scale-105",
          isInView && "scale-[1.02]"
        )}
        unoptimized={true}
      />

      {/* Dark Overlay - Darkened on hover/view for better text contrast */}
      <div className={clsx(
        "absolute inset-0 bg-slate-950/10 transition-colors duration-500",
        "group-hover:bg-slate-950/75 group-[.is-in-view]:bg-slate-950/70"
      )} />

      {/* Glassmorphism Details Overlay */}
      <div className={clsx(
        "absolute inset-x-2 bottom-2 md:inset-x-6 md:bottom-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 opacity-0 backdrop-blur-0 transition-all duration-500",
        "group-hover:opacity-100 group-hover:backdrop-blur-xl group-hover:bg-white/15",
        "group-[.is-in-view]:opacity-100 group-[.is-in-view]:backdrop-blur-xl group-[.is-in-view]:bg-white/15"
      )}>
        <div className={clsx(
          "p-4 md:p-8 translate-y-12 transition-transform duration-700 ease-out text-left",
          "group-hover:translate-y-0 group-[.is-in-view]:translate-y-0"
        )}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:items-center mb-3 md:mb-4">
            <h4 className="text-lg md:text-2xl font-mono font-bold text-white tracking-tight">
              {p.name}
            </h4>
            
            <div className="flex gap-2.5 md:gap-3 flex-shrink-0">
              {Object.entries(p.links).map(([key, value]) => {
                const Icon = key === "github" ? Github : key === "youtube" ? Youtube : ExternalLink;
                return (
                  <Link
                    key={key}
                    href={value as string}
                    target="_blank"
                    className="p-2 md:p-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  </Link>
                );
              })}
            </div>
          </div>
          
          <p className="text-slate-200 font-mono text-[11px] md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-3 opacity-90">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {p.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="px-2 md:px-3 py-0.5 md:py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] md:text-xs font-mono text-pink-300 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
            {p.tech.length > 6 && (
              <span className="px-1.5 py-0.5 text-[9px] text-slate-400 font-mono self-center">
                +{p.tech.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPremium;
