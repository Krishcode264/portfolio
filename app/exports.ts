//front end 
import html from "@/public/frontend/html.png"
import css from "@/public/frontend/css.png";
import js from "@/public/frontend/js.png";
import ts from "@/public/frontend/ts.png";
import react from "@/public/frontend/react.png";
import nextjs from "@/public/frontend/nextjs.svg";
import tw from "@/public/frontend/twcss.png";
import  redux from "@/public/frontend/redux.png";
import recoil from "@/public/frontend/recoil.png";
import webrtc from "@/public/frontend/webrtc.png"
import rn from "@/public/frontend/rn.png"

//backend

import nodejs from "@/public/backend/node.png"
import express from "@/public/backend/ex.png";
import prisma from "@/public/backend/prisma.png";
import mdb from "@/public/backend/mdb.png";
import graphql from "@/public/backend/graphql.png";
import socket from "@/public/backend/socket.svg";
import pg from "@/public/backend/pg.png"
import bun from "@/public/backend/bun.png";
//devops
import docker from "@/public/devops/docker.png"
import ec2 from "@/public/devops/ec2.png";
import s3 from "@/public/devops/s3.png";
import nginx from "@/public/devops/nginx.png";
import ecs from "@/public/devops/ecs.png";
import type { StaticImageData } from "next/image";



//import for ss
import thumbnail from "@/public/projects/ss/feed.png"
import editprofile from "@/public/projects/ss/editprofile.png";
import googleauth from "@/public/projects/ss/googleauth.png";
import msgss from "@/public/projects/ss/msg.png";
import msg from "@/public/projects/ss/msgfilestore.png";
import ss3 from "@/public/projects/ss/s3.png";
import signin from "@/public/projects/ss/signin.png";
import userprofile from "@/public/projects/ss/userprofile.png";
//imports for pet shop

import front from "@/public/projects/petshop/front.png"
import petAuth from "@/public/projects/petshop/auth.png";


//imports for pizza app
import pizza from "@/public/projects/pizza/pizza.png"

import boldhugFront from "@/public/projects/boldhug/home.png"



//for hfdm
import adminDashboard from "@/public/projects/hdfm/admin.png"

//for swe-agent
import arch from "@/public/projects/swe-agent/architecture.png"
import dash from "@/public/projects/swe-agent/dashboard.png"
import sweAgentNew from "@/public/projects/swe-agent/ChatGPT Image Apr 14, 2026, 08_48_54 PM.png"

//for tourist-safety
import safetyDash from "@/public/projects/tourist-safety/dashboard.png"

//for StudyMap
import studyMapLanding from "@/public/projects/studyMap/landingpage.png";
import studyMapMobile from "@/public/projects/studyMap/mobilescreen.png";

//for AutoFill Pro
import autoFillProImg from "@/public/projects/autofill-pro/image.png";

//for DSA Prep
import dsaPrepImg from "@/public/projects/company-wise-dsa-practise/image.png";

//for llm-client
import llmClientImg from "@/public/projects/llm-client/llm-client v2.0 infographic overview.png";

export  type SkillArray={name:string,logo:string|StaticImageData}[];
// Frontend Skills
export const FrontEndSkills: SkillArray = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "React", logo: react },
  { name: "Next.js", logo: nextjs },
  { name: "React Native", logo: rn },
  { name: "Tailwind CSS", logo: tw },
  { name: "Redux", logo: redux },
  { name: "Recoil", logo: recoil },
  { name: "WebRTC", logo: webrtc },
];

// Backend Skills
export const BackEndSkills: SkillArray = [
  { name: "Node.js", logo: nodejs },
  { name: "Express", logo: express },
  { name: "Prisma", logo: prisma },
  { name: "MongoDB", logo: mdb },
  { name: "GraphQL", logo: graphql },
  { name: "Socket.io", logo: socket },
  { name: "PostgresQL", logo: pg },
  { name: "Bun.js", logo: bun },
];

// DevOps Skills
export const DevOpsSkills: SkillArray = [
    { name: "Docker", logo: docker },
    { name: "AWS EC2", logo: ec2 },
    { name: "AWS S3", logo: s3 },
    { name: "Nginx", logo: nginx },
    { name: "AWS ECS", logo: ecs },
];


interface ProjectLinks {
  website: string;
  github: string;
  youtube?:string
}

// Define a type for the photos
interface ProjectPhoto {
  title: string;
  description: string;
  url: string|StaticImageData;
}

// Define the main Project type
export interface Project {
  name: string;
  thumbnail: string|StaticImageData;
  links: ProjectLinks;
  video?: string;
  description: string;
  photos: ProjectPhoto[];
  tech: string[];
}


export const petShop: Project = {
  name: "Pet Shop",
  thumbnail: front, // Using the front image as the thumbnail
  links: {
    website: "https://fanciful-lily-b388c8.netlify.app/",
    github: "https://github.com/krishcode264/pet-shop",
  },
  description:
    "An online pet store where users can browse and purchase pet products. The app allows users to create profiles, browse pet feeds, and manage their pet-related needs.",
  photos: [
    {
      title: "Feed Page",
      description:
        "This is the main feed page where users can browse pet products, services, and recommendations.",
      url: front, // Image URL for the feed page
    },
    {
      title: "Auth Page",
      description:
        "Authentication page where users can sign up or log in to their accounts.",
      url: petAuth, // Image URL for the auth page
    },
  ],
  tech: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
};
const boldHug: Project = {
  name: "Rallyo an Event Sharing,Companion finding app",
  thumbnail: boldhugFront, // Using the front image as the thumbnail
  links: {
    website: "https://web.rallyo.online/",
    github: "https://github.com/Krishcode264/boldhug-web",
  },
  description:
    "Rallyo is your go-to app for discovering events and finding companions whether it's for travel, sports, food, or just hanging out. Create or join events, share photos, and connect with people near you who love doing the same things. Built for real-life connection. Designed for shared experiences.",
  photos: [

  ],
  tech: [
    "React Native",
    "Expo",
    "Redis",
    "NativeWind",
    "Node",
    "Google FCM",
    "Postgres",
    "Prisma",
    "Socket.io",
  ],
};

export const pizzaShop: Project = {
  name: "Pizza Shop Front-End Application",
  thumbnail: pizza, // Using the front image as the thumbnail
  links: {
    website: "https://pizzbazaar.netlify.app/",
    github: "https://github.com/Krishcode264/pizz-app-project-react-tilwindcss",
   
  },
  description:
    "A beginner-level project built using React to demonstrate foundational skills in front-end development and user interface design",
  photos: [
   
  ],
  tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
};
const socialSphere: Project = {
  name: "Social Sphere",
  thumbnail: thumbnail, // Using the feed image as the thumbnail
  video: "https://youtu.be/JfLvUZNR1N4?si=IbmqbVW0ylu11LKG", // Add a video link if applicable
  links: {
    website: "https://social-sphere-krishcode264s-projects.vercel.app/",
    youtube: "https://youtu.be/JfLvUZNR1N4?si=F63gQsoMFrfjuRvu",
    github: "https://github.com/Krishcode264/Social-Sphere",
  },
  description:
    "Social Sphere is a social networking platform that enables users to share posts, interact with friends, make audio/video calls, and manage their profile. With a sleek and modern design, Social Sphere creates a seamless social experience.",
  photos: [
    {
      title: "Feed Page",
      description:
        "This is the feed page where users can view posts from their friends and interact with likes and comments.",
      url: thumbnail, // Feed page image
    },
    {
      title: "Edit Profile",
      description:
        "This page allows users to edit their profile details such as name, bio, and profile picture.",
      url: editprofile, // Edit profile page image
    },
    {
      title: "Google Auth Page",
      description: "Google authentication page for quick and secure login.",
      url: googleauth, // Google authentication page image
    },
    {
      title: "Messaging",
      description:
        "Real-time messaging interface where users can chat with friends.",
      url: msgss, // Messaging page image
    },
    {
      title: "File Transfer in Messages",
      description:
        "File sharing capability within the chat, allowing users to send images and files.",
      url: msg, // File store message page image
    },
    {
      title: "AWS S3 Integration",
      description:
        "Shows AWS S3 integration where user files and profile pictures are stored securely.",
      url: ss3, // S3 integration image
    },
    {
      title: "Sign-in Page",
      description:
        "Sign-in page with options to log in using credentials or social media accounts.",
      url: signin, // Sign-in page image
    },
    {
      title: "User Profile Page",
      description:
        "This is the profile page where users can view their personal details, posts, and interact with followers.",
      url: userprofile, // User profile page image
    },
  ],
  tech: ["S3", "Node", "Next JS", "Tailwind", "Web RTC", "Redis", "Socket.io"],
};

export const hdfm: Project = {
  name: "Hospital food delivery management system",
  thumbnail: adminDashboard,
  video: "https://youtu.be/LezfBtjga5k?si=k7frBPAwbrsDK1iA", // Add a video link if applicable
  links: {
    youtube: "https://youtu.be/LezfBtjga5k?si=k7frBPAwbrsDK1iA",
    github: "https://github.com/Krishcode264/hfdm",
    website: "https://hfdm-ten.vercel.app/",
  },
  description:
    "Developed a comprehensive delivery management system for a hospital, designed to streamline the coordination of deliveries, optimize routing, and improve overall operational efficiency. The system allowed for real-time tracking, automated scheduling, and enhanced communication between the hospital, delivery personnel, and patients",
  photos: [
    {
      title: "Hospital Manager Dashboard",
      description:
        "its an Hospital Manager admin dashboard with list of Patients , Plantry Staff and Orders ",
      url: adminDashboard,
    },
  ],
  tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
};

const sweAgent: Project = {
  name: "SWE-Agent - AI Incident Resolver",
  thumbnail: sweAgentNew,
  video: "https://youtu.be/W84wCfQ0auQ",
  links: {
    website: "https://swe-agent-pkhe.vercel.app/",
    github: "https://github.com/Krishcode264/swe-agent",
    youtube: "https://youtu.be/W84wCfQ0auQ",
  },
  description:
    "An end-to-end platform designed to automatically detect, analyze, and resolve software incidents. By combining GitHub webhooks, AI-driven reasoning, and Docker-based sandboxed execution, the system completes the full loop from issue creation to Pull Request submission.",
  photos: [
    {
      title: "AI Reasoning Interface",
      description: "High-fidelity visualization of the SWE-Agent intelligence and incident resolution flow.",
      url: sweAgentNew,
    },
    {
      title: "System Architecture",
      description: "Distributed architecture featuring a Node.js orchestrator and Python-based AI workers.",
      url: arch,
    },
    {
      title: "Agent Dashboard",
      description: "Real-time incident tracking and agent timeline visualization.",
      url: dash,
    },
  ],
  tech: ["Node.js", "TypeScript", "Python", "Redis", "MongoDB", "Docker", "React", "LangGraph", "GitHub API"],
};

const touristSafety: Project = {
  name: "Smart Tourist Safety & Incident Response",
  thumbnail: safetyDash,
  links: {
    website: "https://tourist-safety-monitoring-system.vercel.app/",
    github: "https://github.com/Krishcode264/Tourist-Safety-Monitoring-system",
  },
  description:
    "A technology-driven platform designed to ensure real-time safety, monitoring, and rapid incident response for tourists. Features include Digital ID issuance, geo-fencing logic, SOS panic buttons, and real-time police coordination.",
  photos: [
    {
      title: "Geospatial Monitoring Dashboard",
      description: "Real-time tracking of tourists and active incidents with interactive geo-fences.",
      url: safetyDash,
    },
  ],
  tech: [
    "React Native",
    "Expo",
    "Node.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Socket.IO",
    "NativeWind",
  ],
};

export const studyMap: Project = {
  name: "StudyMap — Master Your Path, Execute Your Journey",
  thumbnail: studyMapLanding,
  links: {
    website: "https://study-map-sigma.vercel.app/",
    github: "https://github.com/Krishcode264/focus-task",
  },
  description:
    "StudyMap is an AI-powered personal roadmap and productivity manager for Android. It bridges the gap between ambitious long-term goals and daily execution by turning high-level roadmaps into actionable daily tasks.",
  photos: [
    {
      title: "Mobile Interface",
      description: "Clean and intuitive mobile interface for managing your daily roadmap tasks.",
      url: studyMapMobile,
    },
    {
      title: "Landing Page",
      description: "The official landing page for StudyMap, showcasing its features and value proposition.",
      url: studyMapLanding,
    },
  ],
  tech: ["Expo", "React Native", "NativeWind", "Supabase", "Lucide React Native", "AsyncStorage"],
};

export const autoFillPro: Project = {
  name: "AutoFill Pro - AI Job Application Autofiller",
  thumbnail: autoFillProImg,
  links: {
    website: "https://autofill-pro.vercel.app/",
    github: "https://github.com/Krishcode264/autofill-pro",
  },
  description:
    "AutoFill Pro is a powerful, local-first Chrome extension that magically autofills lengthy job applications and integrates with the Gemini API to custom-tailor cover letters and open-ended questions.",
  photos: [
    {
      title: "Extension Interface",
      description: "Sleek Tailwind-powered UI for managing your profile and initiating auto-fills.",
      url: autoFillProImg,
    },
  ],
  tech: ["Vite React", "Chrome Extension MV3", "TailwindCSS", "LLM"],
};

export const dsaPrep: Project = {
  name: "DSA Prep - Company-wise DSA Interview Preparation",
  thumbnail: dsaPrepImg,
  links: {
    website: "https://company-wise-dsa-prep.vercel.app/",
    github: "https://github.com/Krishcode264/dsa-prep",
  },
  description:
    "DSA Prep is a specialized analytics platform for software engineers. It covers 1,700+ problems from 450+ companies, meticulously sorted by question frequency. Features weekly updated FAANG intel, precision progress metrics, and advanced surgical filtering to optimize your preparation.",
  photos: [
    {
      title: "Problem Dashboard",
      description: "Comprehensive list of problems sorted by frequency and company requirements.",
      url: dsaPrepImg,
    },
  ],
  tech: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
};

export const llmClient: Project = {
  name: "llm-client - Free LLM Browser API",
  thumbnail: llmClientImg,
  links: {
    github: "https://github.com/Krishcode264/llm-client",
    website: "https://github.com/Krishcode264/llm-client",
  },
  description:
    "A high-performance Node.js service that transforms browser sessions (ChatGPT, Claude, Gemini) into a structured JSON API. It features smart load balancing, stealth automation to bypass detection, and a self-correction pipeline for reliable AI outputs—all without the cost of API keys.",
  photos: [
    {
      title: "Infographic Overview",
      description: "Complete architectural breakdown of the llm-client v2.0 pipeline and feature set.",
      url: llmClientImg,
    },
  ],
  tech: ["Node.js", "Playwright", "Zod", "Automation", "LLM Orchestration"],
};

export const blenderMcpAgent: Project = {
  name: "Blender MCP Agent",
  thumbnail: "/projects/blender-mcp/final.mp4",
  links: {
    website: "https://github.com/Krishcode264/blender_mcp_agent",
    github: "https://github.com/Krishcode264/blender_mcp_agent",
  },
  description:
    "An AI-powered agent system that lets you control Blender through natural language. Send a prompt like \"Create a bouncing cube\" and watch Blender execute it — with real-time streaming feedback and live previews.",
  photos: [
    {
      title: "Agent Demo",
      description: "Real-time AI controlling Blender scene generation.",
      url: "/projects/blender-mcp/final.mp4",
    },
  ],
  tech: ["FastAPI", "Python", "Next.js", "Blender Python (bpy)", "MCP", "LLM Intent Routing", "Semantic Scene Graph (SSG)", "Spatial Resolution", "NVIDIA NIM"],
};

export const heroSkills:SkillArray=[...FrontEndSkills,...BackEndSkills,...DevOpsSkills]
export const projects = [
  boldHug, 
  blenderMcpAgent,
  studyMap,
  socialSphere, 
  autoFillPro,
  sweAgent,
  dsaPrep,
  llmClient,


  touristSafety,
  // hdfm, 
  // petShop, 
  // pizzaShop
];
