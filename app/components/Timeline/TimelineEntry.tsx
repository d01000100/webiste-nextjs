import { HTMLAttributes } from "react";
import css from "./TimelineEntry.module.scss";

export interface TimelineEntryProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
}

const TimelineEntry: React.FunctionComponent<TimelineEntryProps> = ({
  title,
  startDate,
  endDate,
  description,
  className,
  ...divProps
}) => {
  return (
    <div {...divProps} className="entry content:bg-red-400 group flex flex-row">
      <div className="sidebar flex flex-col items-center px-4">
        <div className="h-[11px] w-1 bg-slate-400 group-first:bg-transparent"></div>
        <div className={`h-4 w-4 rounded-full bg-slate-400`}></div>
        <div className="w-1 flex-grow bg-slate-400 group-last:bg-transparent"></div>
      </div>
      <div className="content w-full flex-col group-[:not(:last-child)]:pb-10">
        <h3 className="pb-1 text-2xl font-semibold md:text-3xl">{title}</h3>
        <p className="pb-2 text-base text-slate-300">
          {startDate}
          {endDate && <span> {endDate}</span>}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineEntry;
