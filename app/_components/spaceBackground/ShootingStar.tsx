import React from "react";

interface Props {
  positioning: string;
  id: string;
}

const ShootingStar: React.FC<Props> = ({ positioning, id }) => {
  return (
    <span
      id={id}
      className={`shadow-shootStar bg-tone-2 w-1 h-1 block rounded-full ${positioning} absolute opacity-0 shootingStar`}
    ></span>
  );
};

export default ShootingStar;
