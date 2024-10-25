import React from "react";

interface Props {
  fillCol?: string;
}

const Star: React.FC<Props> = ({ fillCol = "#fff" }) => {
  return (
    <svg viewBox="0 0 2.94 2.94">
      <use href="#starOrig" />
    </svg>
  );
};

export default Star;
