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
      
      <div className="max-w-6xl mx-auto mt-12 md:mt-16">
        <div className="bg-[#1e2235]/40 backdrop-blur-md border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 group hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start text-center lg:text-left">
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative z-10 pt-4 lg:pt-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-5 tracking-tight">
              Let&apos;s build something <br className="hidden lg:block"/>
              <span className="text-pink-400">extraordinary.</span>
            </h3>
            
            <p className="text-slate-400 font-mono text-sm md:text-base mb-10 max-w-lg leading-relaxed text-wrap">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link
                href="mailto:krishnazade99@gmail.com"
                className="flex items-center gap-3 px-6 py-3.5 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-mono font-bold transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 group/btn"
              >
                <Mail size={18} />
                Say Hello
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/krishna-zade-644b47243"
                  target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://github.com/Krishcode264"
                  target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-slate-800 hover:border-slate-800 hover:scale-110 transition-all duration-300"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://leetcode.com/u/Krishcode264/"
                  target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFA116]/20 hover:border-[#FFA116] hover:scale-110 transition-all duration-300"
                >
                  <Image src={lc} alt="leetcode" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 relative z-10 w-full pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10">
            <h4 className="text-xl md:text-2xl font-mono font-bold text-white mb-2">Send a Message</h4>
            <p className="text-slate-500 font-mono text-sm mb-6 max-w-sm mx-auto lg:mx-0">Got a project in mind or a way to improve this site? I&apos;d love to hear from you.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
