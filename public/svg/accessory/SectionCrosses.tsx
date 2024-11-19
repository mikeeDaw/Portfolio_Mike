import React from "react";
import CrossSVG from "./CrossSVG";

interface Props {
  crossesOffset: string;
}

const SectionCrosses: React.FC<Props> = ({ crossesOffset }) => {
  return (
    <>
      <CrossSVG
        classNames={`hidden absolute -top-[0.3125rem] left-[1.5625rem] pointer-events-none lg:block xl:left-[2.1875rem] ${crossesOffset}`}
      />

      <CrossSVG
        classNames={`hidden absolute -top-[0.3125rem] right-[1.5625rem] pointer-events-none lg:block xl:right-[2.1875rem] ${crossesOffset}`}
      />
    </>
  );
};

export default SectionCrosses;
