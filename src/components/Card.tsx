import React from "react";

type CardProps = {
  children: React.ReactNode;
  height?: number;
  bgImage?: string;
  otherClasses?: string;
};

const Card = ({ children, bgImage, height, otherClasses }: CardProps) => {
  return (
    <div
      style={{ height: height + "px" }}
      className={`p-6 rounded-xl ${otherClasses ? otherClasses : ""} ${
        bgImage ? bgImage : "bg-primaryGradient"
      } `}
    >
      {children}
    </div>
  );
};

export default Card;
