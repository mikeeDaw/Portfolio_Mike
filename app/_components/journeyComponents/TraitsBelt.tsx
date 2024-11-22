import { about } from "@/app/_constants";
import React from "react";

const TraitsBelt = () => {
  return (
    <div className="h-fit py-1.5 w-full flex text-end overflow-hidden border-y-2 border-scheme-green [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] mt-4 mb-3">
      <ul className="flex h-full flex-nowrap items-center [&_li]:uppercase justify-evenly [&_li]:text-xl animate-infScroll">
        {about.belt.map((item, idx) => (
          <li
            key={idx}
            className="text-scheme-green font-bold font-poppins flex items-center"
          >
            {item}
            <div className="mx-4 h-2 w-2 rounded-full bg-scheme-green" />
          </li>
        ))}
      </ul>
      {
        // Duplicated <ul> for the looping illusion.
        // Needed alpineJS if wanting to remove duplicate element.
      }
      <ul
        aria-hidden="true"
        className="flex h-full flex-nowrap items-center [&_li]:uppercase justify-evenly [&_li]:text-xl animate-infScroll"
      >
        {about.belt.map((item, idx) => (
          <li
            key={idx}
            className="text-scheme-green font-bold font-poppins flex items-center"
          >
            {item}
            <div className="h-2 w-2 rounded-full mx-4 bg-scheme-green" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TraitsBelt;
