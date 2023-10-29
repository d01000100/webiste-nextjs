import { FaBomb, FaGear, FaGithub, FaBook } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { TbCampfire } from "react-icons/tb";
import { ProjectCardProps } from "../components/ProjectCard/ProjectCard";

export const PROJECTS: Array<ProjectCardProps> = [
  {
    title: "figma-token-engine",
    description: "Transform design tokens in Figma into usable styles",
    icon: <FaGear size={36} />,
    imgSrc: "/projects/fte-diagram-small.svg",
    href: "https://github.com/d01000100/figma-token-engine",
  },
  {
    title: "repo-monitor",
    description:
      "Website to search for github repositories and compare commit activity",
    icon: <FaGithub size={36} />,
    imgSrc: "/projects/repo-monitor.png",
    href: "https://repo-monitor.d1000100.dev/",
  },
  {
    title: "Miracle Knight",
    description: "Turn-grid strategy game made in a custom engine.",
    icon: <LuSwords size={36} />,
    imgSrc: "/projects/miracle-knight.png",
    href: "https://d1000100.itch.io/miracle-knight",
  },
  {
    title: "Cha Cha Chamán",
    description: "Match the dance moves of the demons to seal them away!",
    icon: <TbCampfire size={36} />,
    imgSrc: "/projects/chachachaman.png",
    href: "https://d1000100.itch.io/chachachaman",
  },
  {
    title: "sploosh-kaboom",
    description: "Battleship game made with clojurescript",
    icon: <FaBomb size={36} />,
    imgSrc: "/projects/sploosh-kaboom.png",
    href: "https://d01000100.github.io/sploosh-kaboom-cljs/",
  },
];

export const PUBLICATIONS: Array<ProjectCardProps> = [
  {
    title: "Figma Token Engine: Quick Start",
    description: "Practical guide to configure and use the FTE",
    icon: <FaBook size={36} />,
    imgSrc: "/projects/fte-diagram-small.svg",
    href: "https://medium.com/@jdanielca/figma-token-engine-quick-start-b6e0bc08a388",
  },
];
