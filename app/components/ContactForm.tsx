"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "../actions/contact";

const ContactForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setIsPending(false);
    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 bg-[#1e2235]/30 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group/form hover:border-white/10 transition-all duration-500">
      {/* Subtle interior glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-500/5 rounded-full blur-[80px] pointer-events-none group-hover/form:bg-pink-500/10 transition-all duration-500"></div>
      
      <form onSubmit={handleSubmit} className="relative space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-left">
            <label htmlFor="name" className="text-xs font-mono text-slate-500 ml-1 uppercase tracking-wider">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500/40 focus:bg-white/[0.07] transition-all duration-300"
            />
          </div>

          <div className="space-y-2 text-left">
            <label htmlFor="email" className="text-xs font-mono text-slate-500 ml-1 uppercase tracking-wider">
              Email (Optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500/40 focus:bg-white/[0.07] transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <label htmlFor="message" className="text-xs font-mono text-slate-500 ml-1 uppercase tracking-wider">
            Message & Suggestions
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What's on your mind? Suggestions for improvement are always welcome!"
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500/40 focus:bg-white/[0.07] transition-all duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-pink-500 hover:bg-pink-600 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-2xl font-mono font-bold transition-all duration-500 shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] disabled:shadow-none relative group/btn overflow-hidden"
        >
          {isPending ? (
            <Loader2 className="animate-spin text-white" size={24} />
          ) : (
            <>
              <Send size={20} className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              <span className="text-lg">Send Message</span>
            </>
          )}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 p-5 rounded-2xl font-mono text-sm animate-in slide-in-from-bottom-2 duration-500">
            <CheckCircle2 size={24} />
            <span className="font-bold">Message sent! I&apos;ll get back to you soon.</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 p-5 rounded-2xl font-mono text-sm animate-in slide-in-from-bottom-2 duration-500">
            <AlertCircle size={24} />
            <span className="font-bold">{errorMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
