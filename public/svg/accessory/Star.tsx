import React from "react";

interface Props {
  fillCol?: string;
}

const Star: React.FC<Props> = ({ fillCol = "#fff" }) => {
  return (
    <svg
      data-name="Star"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2.94 2.94"
    >
      <polygon
        points="1.47 0 1.85 1.09 2.94 1.47 1.85 1.85 1.47 2.94 1.09 1.85 0 1.47 1.09 1.09 1.47 0"
        style={{ fill: fillCol }}
      />
    </svg>
  );
};

export default Star;
