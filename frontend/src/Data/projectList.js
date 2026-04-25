import React from "react";
import Chess from "../assets/projectImg/Chess.png";
import ShopSphere from "../assets/projectImg/ShopSphere.png";
import VaultIQ from "../assets/projectImg/VaultIQ.png";


const projectList = [
  {
    id: 1,
    title: "VaultIQ",
    description:
      "Full-stack content organization platform that allows users to save, categorize, and manage external web metadata with dynamic previews and embedded content support.",
    imageSrc: VaultIQ,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "TailwindCSS",
    ],
    extraSkillsCount: 2,
    liveDemoLink: "https://vault-iq-55ct.vercel.app/",
  },

  {
    id: 2,
    title: "Multiplayer Chess Game",
    description:
      "Real-time two-player chess game with instant move synchronization using WebSockets and move validation powered by Chess.js.",
    imageSrc: Chess,
    skills: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "WebSockets",
      "Chess.js",
      "CSS",
    ],
    extraSkillsCount: 1,
    liveDemoLink: "https://shop-sphere-brown.vercel.app/",
  },

  {
    id: 3,
    title: "ShopSphere",
    description:
      "Modern e-commerce platform with buyer and seller dashboards, product browsing, cart management, and responsive UI using ShadCN + TailwindCSS.",
    imageSrc: ShopSphere,
    skills: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ShadCN",
      "TailwindCSS",
    ],
    extraSkillsCount: 2,
   
    liveDemoLink: "https://shop-sphere-brown.vercel.app/",
  },

]

export default projectList;