import React from "react";

type CircleProps = {
  type: 1 | 2;
  children: React.ReactNode;
};

const Circle = ({ type, children }: CircleProps) => {
  let svg;

  switch (type) {
    case 1: {
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 100 200 200"
          style={{ transform: "rotate(-90deg)", overflow: "visible" }}
        >
          <linearGradient
            id="grd_fz6lihg3wq7q"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientTransform="rotate(90, .5, .5)"
          >
            <stop offset="0" stopColor="rgba(0, 117, 255, 0)"></stop>
            <stop offset="100" stopColor="#0075ff"></stop>
          </linearGradient>
          <circle
            cx="200"
            cy="200"
            r="92.5"
            stroke="#22234B"
            strokeWidth="15"
            fill="none"
          ></circle>
          <circle
            cx="200"
            cy="200"
            r="92.5"
            fill="none"
            strokeWidth="15"
            strokeDasharray="581.1946409141117"
            strokeDashoffset="116.23892818282229"
            strokeLinecap="round"
            stroke="url(#grd_fz6lihg3wq7q)"
            style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
          ></circle>
        </svg>
      );
      break;
    }
    case 2: {
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 100 200 200"
          style={{ transform: "rotate(-90deg)", overflow: "visible" }}
        >
          <linearGradient
            id="grd_9ktjmz4qhqfa"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientTransform="rotate(90, .5, .5)"
          >
            <stop offset="0" stopColor="rgba(5, 205, 153, 0)"></stop>
            <stop offset="100" stopColor="#05CD99"></stop>
          </linearGradient>
          <circle
            cx="200"
            cy="200"
            r="92.5"
            stroke="transparent"
            strokeWidth="15"
            fill="none"
          ></circle>
          <circle
            cx="200"
            cy="200"
            r="92.5"
            fill="none"
            strokeWidth="15"
            strokeDasharray="581.1946409141117"
            strokeDashoffset="174.3583922742335"
            strokeLinecap="round"
            stroke="url(#grd_9ktjmz4qhqfa)"
            style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
          ></circle>
        </svg>
      );
      break;
    }

    default: {
      throw new Error("Inavlid type number");
    }
  }

  return (
    <div className="size-52 relative my-3 mx-auto">
      {svg}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        {children}
      </div>
    </div>
  );
};

export default Circle;
