"use client";

import "swiper/css";
import "swiper/css/navigation";
import "./Projects.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation, Mousewheel } from "swiper/modules";

import ProjectCard, {
  ProjectCardProps,
} from "../../components/ProjectCard/ProjectCard";

export interface ProjectSectionProps {
  projects: Array<ProjectCardProps>;
  title: string;
}

const ProjectSection = ({ projects, title }: ProjectSectionProps) => {
  return (
    <>
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      <div className="h-8" />
      <div className="flex flex-row gap-10 overflow-x-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={`${project.title}-${idx}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
