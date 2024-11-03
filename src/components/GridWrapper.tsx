import React from "react";

type GridWrapperProps = {
  children: React.ReactNode;
  gap: string;
  responsive: string;
  otherClasses?: string;
};

const GridWrapper = ({
  children,
  gap,
  otherClasses,
  responsive,
}: GridWrapperProps) => {
  return (
    <div
      className={`grid ${responsive} ${gap} ${
        otherClasses ? otherClasses : ""
      }`}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
