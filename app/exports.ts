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

export  type SkillArray={name:string,logo:string|StaticImageData}[];
// Frontend Skills
export const FrontEndSkills: SkillArray = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "React", logo: react },
  { name: "Next.js", logo: nextjs },
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
  { name: "Sockek.io", logo: socket },
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
  linkedin: string;
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
}


const petShop: Project = {
  name: "Pet Shop",
  thumbnail: front, // Using the front image as the thumbnail
  links: {
    website: "https://fanciful-lily-b388c8.netlify.app/",
    github: "https://github.com/krishcode264/pet-shop",
    linkedin:
      "https://www.linkedin.com/posts/krishna-zade-644b47243_webdevelopment-react-firebase-activity-7111898375884582912-iTnM?utm_source=share&utm_medium=member_desktop",
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
};

const socialSphere: Project = {
  name: "Social Sphere",
  thumbnail: thumbnail, // Using the feed image as the thumbnail
  video: "https://youtu.be/JfLvUZNR1N4?si=IbmqbVW0ylu11LKG", // Add a video link if applicable
  links: {
    website: "https://social-sphere-chi.vercel.app/",
    github: "https://github.com/Krishcode264/Social-Sphere",
    linkedin:
      "https://www.linkedin.com/posts/krishna-zade-644b47243_webdevelopment-fullstack-reactjs-activity-7242039103502856192-yJuo?utm_source=share&utm_medium=member_desktop",
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
};

export const heroSkills:SkillArray=[...FrontEndSkills,...BackEndSkills,...DevOpsSkills]
export const projects=[socialSphere,petShop]