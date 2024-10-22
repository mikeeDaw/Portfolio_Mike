import { Star } from "@/public/svg/accessory";
import React from "react";

interface Props {
  classNames: string;
}

const PingingStar: React.FC<Props> = ({ classNames }) => {
  return (
    <>
      <span
        className={`absolute ${classNames} animate-ping pointer-events-none`}
      >
        <Star />
      </span>
      <span className={`absolute ${classNames}`}>
        <Star />
      </span>
    </>
  );
};

export default PingingStar;
