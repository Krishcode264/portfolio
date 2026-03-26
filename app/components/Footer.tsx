import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pb-12 px-4">
      <div className="max-w-6xl mx-auto py-8 px-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-white/20 transition-all duration-500 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-pink-500/5 rounded-full blur-[50px] pointer-events-none"></div>
        
        <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
          <span>© {currentYear}</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
          <span className="text-white font-bold group-hover:text-pink-400 transition-colors">Krishna Zade</span>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
          <span>Made with</span>
          <Heart size={16} className="text-pink-500 fill-pink-500 animate-pulse" />
          <span>in India</span>
        </div>
        
        <div className="text-slate-500 font-mono text-[10px] italic tracking-wide max-w-[250px] text-center md:text-right leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
          "First, solve the problem. Then, write the code."
          <span className="block not-italic text-[8px] mt-1 text-slate-600">— John Johnson</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
