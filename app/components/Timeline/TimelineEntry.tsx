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
    <div
      {...divProps}
      className="
        entry
        group
        flex
        flex-row
        content:bg-red-400
      "
    >
      <div className="sidebar px-4 flex flex-col items-center">
        <div
          className="
            w-1
            bg-slate-400
            group-first:bg-transparent
            h-[11px]
          "
        ></div>
        <div
          className={`
            bg-slate-400
            rounded-full
            w-4
            h-4
          `}
        ></div>
        <div
          className="
            w-1
            bg-slate-400
            group-last:bg-transparent
            flex-grow
          "
        ></div>
      </div>
      <div
        className="
          content
          flex-col
          w-full
          group-[:not(:last-child)]:pb-10
        "
      >
        <h3
          className="
            text-3xl
            font-semibold
            pb-1
          "
        >
          {title}
        </h3>
        <p className="text-base text-slate-300 pb-2">
          {startDate}
          {endDate && <span> {endDate}</span>}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineEntry;
