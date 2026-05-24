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
    <form onSubmit={handleSubmit} className="w-full relative space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5 text-left">
          <label htmlFor="name" className="text-[10px] md:text-xs font-mono text-slate-400 ml-1 uppercase tracking-wider font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-[#0f111a]/60 border border-white/10 rounded-xl font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500/60 focus:bg-[#0f111a]/80 focus:ring-1 focus:ring-pink-500/60 transition-all duration-300"
          />
        </div>

        <div className="space-y-1.5 text-left">
          <label htmlFor="email" className="text-[10px] md:text-xs font-mono text-slate-400 ml-1 uppercase tracking-wider font-semibold">
            Email (Optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-[#0f111a]/60 border border-white/10 rounded-xl font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500/60 focus:bg-[#0f111a]/80 focus:ring-1 focus:ring-pink-500/60 transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-1.5 text-left">
        <label htmlFor="message" className="text-[10px] md:text-xs font-mono text-slate-400 ml-1 uppercase tracking-wider font-semibold">
          Message & Suggestions
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What's on your mind? Suggestions for improvement are always welcome!"
          className="w-full px-4 py-3 bg-[#0f111a]/60 border border-white/10 rounded-xl font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500/60 focus:bg-[#0f111a]/80 focus:ring-1 focus:ring-pink-500/60 transition-all duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-pink-500 hover:bg-pink-600 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-mono font-bold transition-all duration-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] disabled:shadow-none relative group/btn overflow-hidden"
      >
        {isPending ? (
          <Loader2 className="animate-spin text-white" size={24} />
        ) : (
          <>
            <Send size={18} className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            <span className="text-base">Send Message</span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-xl font-mono text-sm animate-in slide-in-from-bottom-2 duration-500">
          <CheckCircle2 size={20} />
          <span className="font-bold">Message sent! I&apos;ll get back to you soon.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl font-mono text-sm animate-in slide-in-from-bottom-2 duration-500">
          <AlertCircle size={20} />
          <span className="font-bold">{errorMessage}</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
