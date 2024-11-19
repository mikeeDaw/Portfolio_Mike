import { SectionCrosses } from "@/public/svg/accessory";
import React from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  classNames?: string;
  crosses?: boolean;
  crossesOffset?: string;
}

const Section: React.FC<Props> = ({
  id,
  children,
  classNames = "",
  crosses = false,
  crossesOffset = "",
}) => {
  return (
    <section
      id={id}
      className={`relative ${
        crosses ? "py-14 lg:py-20 xl:py-24" : "py-10 lg:py-16 xl:py-20"
      } ${classNames}`}
    >
      {children}

      {
        // The Vertical lines on the sides of the content
        // Only seen on medium screen sizes and above.
      }
      <div className="absolute top-0 left-5 w-[1px] h-full bg-[#26242C] pointer-events-none hidden md:block lg:left-[1.875rem] xl:left-10" />
      <div className="absolute top-0 w-[1px] h-full bg-[#26242C] pointer-events-none hidden md:block right-5 lg:right-[1.875rem] xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 inset-x-[1.875rem] h-[1px] bg-[#26242C] ${
              crossesOffset ?? ""
            } pointer-events-auto md:block xl:inset-x-10`}
          />
          {
            // The 2 crosses svg
          }
          <SectionCrosses crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
