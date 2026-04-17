import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Nav from "./components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnazade.vercel.app"),
  title: {
    default: "Krishna Zade | Full-Stack Developer",
    template: "%s | Krishna Zade",
  },
  description:
    "Explore the portfolio of Krishna Zade, a full-stack developer from India specializing in React, Next.js, Node.js, and high-impact digital experiences. Expert in building scalable apps and AI-driven solutions.",
  keywords: [
    "Krishna Zade",
    "Krishcode264",
    "Krishcode",
    "Full Stack Developer Portfolio",
    "MERN Stack Expert",
    "React Native Developer India",
    "Next.js Developer Portfolio",
    "AI Agent Developer",
    "Freelance Web Developer India",
    "Portfolio of Krishna Zade",
    "Krishcode264 Github",
  ],
  authors: [{ name: "Krishna Zade", url: "https://krishnazade.vercel.app" }],
  creator: "Krishna Zade",
  publisher: "Krishna Zade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Krishna Zade | Full-Stack Developer & Tech Architect",
    description:
      "Transforming complex problems into elegant, scalable digital solutions. View the latest projects and technical expertise of Krishna Zade.",
    url: "/",
    siteName: "Krishna Zade Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krishna Zade Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Zade | Full-Stack Developer",
    description:
      "Full-stack developer building high-impact web and mobile applications. Specializing in React, Node, and AI integration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="7IcqY4aOAe6NCnOzvEaQPkMajGxhkOC8qBV30Zvzvfc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Krishna Zade",
              "alternateName": "Krishcode264",
              "url": "https://krishnazade.vercel.app",
              "image": "https://krishnazade.vercel.app/profile/pic_new.jpg",
              "sameAs": [
                "https://github.com/Krishcode264",
                "https://www.linkedin.com/in/krishna-zade-644b47243"
              ],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Full-stack developer specializing in React, Next.js, and AI-driven solutions."
            })
          }}
        />
      </head>
      <body className="">
        <div className="main-wrapper h-[100dvh] w-screen flex flex-col-reverse md:flex-col">
          <Nav />
          <div className="flex-1 w-full overflow-y-auto scroll-pt-24">
            <div className="md:w-[80%] lg:w-[70%] w-full mx-auto flex justify-center">
              {children}
            </div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

