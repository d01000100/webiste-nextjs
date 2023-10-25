"use client";

import "swiper/css";
import "swiper/css/navigation";
import "./Projects.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Navigation, Mousewheel } from "swiper/modules";
import classnames from "classnames";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { PROJECTS } from "../../data/Projects";

const Projects = () => {
  return (
    <>
      <h2 className="text-5xl">Projects</h2>
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
        a11y={{
          prevSlideMessage: "Previous project",
          nextSlideMessage: "Next project",
        }}
        slidesOffsetAfter={60}
        slidesOffsetBefore={60}
      >
        {PROJECTS.map((project, idx) => (
          <SwiperSlide key={`project-${idx}`} className="!w-fit !h-auto">
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Projects;
