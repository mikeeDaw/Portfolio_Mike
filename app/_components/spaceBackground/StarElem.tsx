import { Star } from "@/public/svg/accessory";
import React from "react";

interface Props {
  classNames: string;
  id?: string;
  blackStar?: boolean;
}

const StarElem: React.FC<Props> = ({ classNames, id, blackStar = false }) => {
  return (
    <>
      <div
        className={`absolute ${classNames} pointer-events-none ${
          blackStar ? "blackStar" : ""
        }`}
        id={id ?? ""}
      >
        <Star />
      </div>
    </>
  );
};

export default StarElem;
