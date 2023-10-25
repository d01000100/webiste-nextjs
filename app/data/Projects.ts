import { FaBomb, FaGear, FaGithub } from "react-icons/fa6";
import { LuSwords } from "react-icons/lu";
import { TbCampfire } from "react-icons/tb";
import { ProjectCardProps } from "../components/ProjectCard/ProjectCard";

export const PROJECTS : Array<ProjectCardProps> = [
  {
    title: "figma-token-engine",
    description: "Transform design tokens in Figma into usable styles",
    icon: FaGear,
    imgSrc: "/projects/fte-diagram-small.svg",
    href: "https://github.com/d01000100/figma-token-engine",
  },
  {
    title: "repo-monitor",
    description: "Website to search for github repositories and compare commit activity",
    icon: FaGithub,
    imgSrc: "/projects/repo-monitor.png",
    href: "https://repo-monitor.d1000100.dev/",
  },
  {
    title: "sploosh-kaboom",
    description: "Battleship game made with clojurescript",
    icon: FaBomb,
    imgSrc: "/projects/sploosh-kaboom.png",
    href: "https://d01000100.github.io/sploosh-kaboom-cljs/",
  },
  {
    title: "Miracle Knight",
    description: "Turn-grid strategy game made in a custom engine.",
    icon: LuSwords,
    imgSrc: "/projects/miracle-knight.png",
    href: "https://d1000100.itch.io/miracle-knight",
  },
  {
    title: "Cha Cha Chamán",
    description: "Match the dance moves of the demons to seal them away!",
    icon: TbCampfire,
    imgSrc: "/projects/chachachaman.png",
    href: "https://d1000100.itch.io/chachachaman",
  }
]