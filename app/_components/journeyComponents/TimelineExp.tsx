import { experience } from "@/app/_constants";
import React, { useState } from "react";

const TimelineExp = () => {
  const [exp, setExp] = useState(experience[0]);
  return (
    <>
      {
        // timeline UI Illustration
      }
      <div className="relative w-full h-5 flex items-center justify-evenly px-3 mb-8">
        <div className="absolute h-0.5 bg-scheme-green top-1/2 -translate-y-1/2 inset-x-0 z-1" />
        <div className="absolute inset-y-0 w-0.5 left-0 bg-scheme-green rounded-full z-1" />
        <div className="absolute inset-y-0 w-0.5 right-0 bg-scheme-green rounded-full z-1" />

        {experience.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id == exp.id
                ? "w-[1.1rem] h-[1.1rem] bg-scheme-green shadow-tlItemSel"
                : "w-[0.8rem] h-[0.8rem] shadow-tlItem bg-white"
            } rounded-full z-2 cursor-pointer transition-all duration-150 relative`}
            onClick={() => setExp(item)}
          >
            {item.id == exp.id && (
              <div className="absolute h-4 flex items-center flex-col top-[180%] gap-1 left-1/2 -translate-x-1/2">
                <p className="text-tone-6 text-xs font-poppins text-nowrap">
                  {exp.date.from + " - " + exp.date.to}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {
        // The Experience text
      }
      <div className="flex flex-col">
        <p className="text-scheme-green text-base font-raleway font-semibold tracking-wider">
          {exp.institute}
        </p>
        <p className="text-[#7bb593]/90 text-sm font-raleway">{exp.title}</p>
        <ul className="flex flex-col gap-2 mt-4 list-disc ps-3 pe-1">
          {exp.feats.map((item, idx) => (
            <li key={idx} className="text-tone-4 text-[0.83rem]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TimelineExp;
