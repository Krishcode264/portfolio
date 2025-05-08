import type { Metadata } from "next";
import "./globals.css";

import Nav from "./components/Nav";




export const metadata: Metadata = {
  title: "Krishna Zade | Full-Stack Developer & Portfolio",
  description:
    "Explore the portfolio of Krishna Zade, a passionate full-stack developer skilled in React, Node.js, MongoDB, and modern web technologies. View projects, skills, and contact information.",
  keywords: [
    "Krishna Zade",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "React Native Developer",
    "App Developer"
  ],
  authors: [{ name: "Krishna Zade", url: "https://krishnazade.vercel.app" }],
  creator: "Krishna Zade",
  openGraph: {
    title: "Krishna Zade | Full-Stack Developer Portfolio",
    description:
      "Personal portfolio of Krishna Zade, showcasing full-stack projects, technical skills, and contact details.",
    url: "https://krishnazade.vercel.app",
    siteName: "Krishna Zade Portfolio",
    images: [
      {
        url: "https://krishnazade.vercel.app/profile/p.jpg", 
        width: 630,
        height: 630,
        alt: "Krishna Zade Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Zade | Full-Stack Developer",
    description:
      "Visit Krishna Zade’s portfolio and discover his full-stack web development projects and technical skillset.",
    creator: "@yourTwitterHandle", 
    images: ["https://krishnazade.vercel.app/profile/p.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className=" main-wrapper h-[100dvh] w-screen  flex flex-col  ">
          <div className="md:w-[80%] lg:w-[70%] flex-1 w-full mx-auto overflow-y-auto flex justify-center">
            {children}
          </div>

          <Nav />
        </div>
      </body>
    </html>
  );
}
