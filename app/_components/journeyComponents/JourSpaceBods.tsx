import React from "react";
import StarElem from "../spaceBackground/StarElem";
import ShootingStar from "../spaceBackground/ShootingStar";
import PingingStar from "../spaceBackground/PingingStar";

const JourSpaceBods = () => {
  return (
    <>
      <StarElem classNames="top-[10%] left-[10%] z-1 w-3 opacity-80" />
      <PingingStar classNames="top-[20%] right-[6%] w-4" />
      <PingingStar classNames="top-[55%] left-[7%] w-3 opacity-90" />

      <ShootingStar positioning="top-[5%] left-[23%] z-5" id="shoot1" />
      <ShootingStar positioning="top-[30%] right-[13%] z-5" id="shoot2" />
      <ShootingStar positioning="top-[55%] left-[50%] z-5" id="shoot3" />
    </>
  );
};

export default JourSpaceBods;
