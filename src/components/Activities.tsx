import React from "react";

// component
import ProgressBar from "./ProgressBar";

// util function
import { formatNumber } from "../utils/funcs";

type ActivitiesProps = {
  title: string;
  count: number;
  progress: number;
  icon: React.ReactNode;
};

const Activities = ({ title, count, progress, icon }: ActivitiesProps) => {
  return (
    <div className="space-y-3">
      <div className="flex-align-center space-x-4 lg:space-x-2.5">
        <div className="grid-center size-10 lg:size-8 rounded-lg bg-primary">
          {icon}
        </div>
        <span className="text-secondary ">{title}</span>
      </div>
      <h5 className="text-lg">{formatNumber(count)}</h5>
      <ProgressBar width={progress} />
    </div>
  );
};

export default Activities;
