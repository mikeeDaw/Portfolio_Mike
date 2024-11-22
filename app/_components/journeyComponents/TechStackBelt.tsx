import { stackLogo } from "@/app/_constants";
import React from "react";

const TechStackBelt = () => {
  return (
    <div className="w-full border-scheme-green py-3 flex [mask-image:_linear-gradient(to_right,transparent_0,_black_150px,_black_calc(100%-150px),transparent_100%)] justify-end">
      <ul className="flex flex-nowrap [&_li]:w-12 fill-scheme-green [&_li]:h-12 [&_li]:content-center items-center h-full animate-infScrollRev">
        {stackLogo.map((item, idx) => (
          <li key={idx} className="cursor-pointer mx-2">
            {item.logo}
          </li>
        ))}
      </ul>
      {
        // Duplicated <ul> again for the looping illusion.
      }
      <ul
        aria-hidden="true"
        className="flex flex-nowrap [&_li]:w-12 fill-scheme-green [&_li]:h-12 [&_li]:content-center items-center h-full animate-infScrollRev"
      >
        {stackLogo.map((item, idx) => (
          <li key={idx} className="cursor-pointer mx-2">
            {item.logo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackBelt;
