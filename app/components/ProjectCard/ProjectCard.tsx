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
      className="
        flex
        flex-col
        gap-6
        items-stretch
        bg-cyan-900
        hover:bg-cyan-800
        focus:bg-cyan-800
        py-6
        px-6
        w-80
        h-full
        md:w-[480px]
        rounded-xl
        border
        border-cyan-600
      "
      href={href}
    >
      <div
        className="
          header
          flex
          flex-row
          items-center
          gap-4
        "
      >
        {Icon}
        <h3 className="text-2xl font-semibold grow">{title}</h3>
        {<BiLinkExternal size={28} className="self-start" />}
      </div>
      {imgSrc && (
        <Image
          src={imgSrc}
          width={450}
          height={450}
          alt={imgAlt ?? ""}
          className="
              rounded-lg
              mx-auto
              w-full
              object-cover
              object-top
              aspect-video
            "
        />
      )}
      <div
        className={classnames({
          "text-lg": imgSrc,
          "text-2xl text-center flex items-center justify-center h-3/4 w-full":
            !imgSrc,
        })}
      >
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
