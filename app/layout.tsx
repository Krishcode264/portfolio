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
        <div className="main-wrapper     w-[100vw] h-screen flex flex-col  ">
          <div
          className="  h-full w-full overflow-auto  flex items-center justify-center"
          >
            {children}
          </div>

       <Nav/>
        </div>
      </body>
    </html>
  );
}
