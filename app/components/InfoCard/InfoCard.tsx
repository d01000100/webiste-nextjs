import React from "react";
import { IconType } from "react-icons";

interface InfoCardProps {
  icon: IconType;
  href?: string;
  fieldName: string;
  value?: string;
}

const InfoCard: React.FunctionComponent<InfoCardProps> = ({
  icon: Icon,
  href,
  fieldName,
  value,
}) => {
  const Component = href ? "a" : "div";

  return (
    <Component
      className="
        flex
        flex-row
        gap-4
        items-center
        rounded-lg
        bg-cyan-900
        hover:bg-cyan-800
        border-cyan-200
        shadow-md
        py-2
        px-4
        flex-auto
        md:flex-initial
        w-60
        h-16
      "
      href={href}
    >
      <Icon size={28} />
      <div className="flex flex-col gap-1">
        <p className="font-medium">{fieldName}</p>
        {value && <p className="text-base font-normal">{value}</p>}
      </div>
    </Component>
  );
};

export default InfoCard;
