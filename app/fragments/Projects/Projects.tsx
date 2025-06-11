"use client";

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
      <h2 className="mb-8 text-3xl md:text-5xl">{title}</h2>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit flex-row items-stretch gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={`${project.title}-${idx}`} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
