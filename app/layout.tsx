import type { Metadata } from "next";
import "./globals.css";

import Nav from "./components/Nav";




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
        <div className=" main-wrapper h-[100dvh] w-screen  flex flex-col  ">
          <div className="md:w-[80%]  lg:w-[70%]  w-full  mx-auto   h-full overflow-auto  flex items-center justify-center">
            {children}
          </div>

          <Nav />
        </div>
      </body>
    </html>
  );
}
