import classnames from "classnames";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  description: string;
  href: string;
  icon?: React.ReactElement<IconBaseProps>;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  description,
  href,
  icon: Icon,
}) => {
  return (
    <a
      className="flex h-full min-h-0 w-80 min-w-0 flex-col items-stretch gap-6 rounded-xl border border-cyan-600 bg-cyan-900 px-6 py-6 hover:bg-cyan-800 focus:bg-cyan-800 md:w-[480px]"
      href={href}
    >
      <div className="header flex flex-row items-center gap-4">
        {Icon}
        <h3 className="grow text-xl font-semibold md:text-2xl">{title}</h3>
        {<BiLinkExternal size={28} className="self-start" />}
      </div>
      {imgSrc && (
        <Image
          src={imgSrc}
          width={450}
          height={450}
          alt={imgAlt ?? ""}
          className="mx-auto aspect-video w-full rounded-lg object-cover object-top"
        />
      )}
      <div
        className={classnames({
          "text-lg": imgSrc,
          "flex h-3/4 w-full items-center justify-center text-center text-2xl":
            !imgSrc,
        })}
      >
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
