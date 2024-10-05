import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";




export const metadata: Metadata = {
  title: "Portfolio",
  description: "krishna zade portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="main-wrapper     w-[100vw] min-h-[100vh] flex flex-col  ">
          <div
          className=" flex-1 h-70vh  w-full overflow-auto  flex items-center justify-center"
          >
            {children}
          </div>

          <div className="  flex h-[10%]  md:w-[70%]  md:mx-auto  items-center  justify-evenly md:gap-20  md:text-2xl text-slate-400 sm:font-bold font-mono ">
            <Link href={"/"}>Intro</Link>
            <Link href={"/skills"}>Skills</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/resume"}>Resume</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
