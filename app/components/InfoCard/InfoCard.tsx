import Link from "next/link";
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
  const Component = href ? Link : "div";

  return (
    <Component
      className="flex h-16 w-60 flex-auto flex-row items-center gap-4 rounded-lg border-cyan-200 bg-cyan-900 px-4 py-2 shadow-md hover:bg-cyan-800 focus:bg-cyan-800 md:flex-initial"
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
