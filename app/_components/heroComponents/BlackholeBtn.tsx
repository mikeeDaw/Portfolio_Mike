import React from "react";
import StarElem from "../spaceBackground/StarElem";

const BlackholeBtn = () => {
  return (
    <div
      className="sm:-translate-x-4 px-8 py-5 w-fit overflow-hidden rounded-full z-7 relative cursor-pointer transition-all duration-200"
      id="blackHole"
    >
      <div
        className="bg-black px-5 py-2 hover:scale-110 md:px-7 md:py-3 rounded-full font-raleway text-base md:text-lg tracking-wide transition-all duration-200"
        style={{ boxShadow: "0 0 11px 10px #000000" }}
      >
        Let's Talk
      </div>
      {
        // Stars hinihigop
      }

      <StarElem classNames="w-4 top-0 left-0" id="BHS1" />
      <StarElem classNames="w-5 top-0 right-0" id="BHS2" />
      <StarElem classNames="w-5 bottom-0 right-[10%]" id="BHS3" />
      <StarElem classNames="w-4 bottom-[5%] left-[10%]" id="BHS4" />
      <StarElem classNames="w-4 top-0 left-[40%]" id="BHS5" />
    </div>
  );
};

export default BlackholeBtn;
