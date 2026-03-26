import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center mb-16 px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white tracking-tight text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        {title}
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-6 opacity-60 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.4)]"></div>
    </div>
  );
};

export default SectionHeader;
