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
      <h2 className="text-5xl">{title}</h2>
      <div className="h-8" />
      <Swiper
        direction="horizontal"
        navigation={true}
        scrollbar={true}
        freeMode={true}
        slidesPerView="auto"
        modules={[FreeMode, Scrollbar, Navigation, Mousewheel]}
        mousewheel={true}
        spaceBetween="40px"
        breakpoints={{
          md: {
            slidesOffsetAfter: 60,
            slidesOffsetBefore: 60,
          },
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={`project-${idx}`} className="!w-fit !h-auto">
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSection;
