import React from "react";
import SectionHeader from "./SectionHeader";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import lc from "@/public/logos/lc.svg";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <SectionHeader title="Get In Touch" />
      
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#1e2235]/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-16 text-center group hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <h3 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 tracking-tight">
            Let&apos;s build something <span className="text-pink-400">extraordinary.</span>
          </h3>
          
          <p className="text-slate-400 font-mono text-sm md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-wrap">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <Link
              href="mailto:krishnazade99@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-mono font-bold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105 group/btn"
            >
              <Mail size={20} />
              Say Hello
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/krishna-zade-644b47243"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="https://github.com/Krishcode264"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-slate-800 hover:border-slate-800 hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://leetcode.com/u/Krishcode264/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFA116]/20 hover:border-[#FFA116] hover:scale-110 transition-all duration-300"
              >
                <Image src={lc} alt="leetcode" className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h4 className="text-xl md:text-2xl font-mono font-bold text-white mb-2">Send Suggestions</h4>
            <p className="text-slate-500 font-mono text-sm mb-8">Your feedback helps me improve this digital experience.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
