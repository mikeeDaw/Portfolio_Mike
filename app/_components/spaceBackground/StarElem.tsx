import { Star } from "@/public/svg/accessory";
import React from "react";

interface Props {
  classNames: string;
}

const StarElem: React.FC<Props> = ({ classNames }) => {
  return (
    <>
      <div className={`absolute ${classNames} pointer-events-none`}>
        <Star />
      </div>
    </>
  );
};

export default StarElem;
