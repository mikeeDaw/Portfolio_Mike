import { Planet, Star } from "@/public/svg/accessory";
import React from "react";
import PingingStar from "./PingingStar";
import StarElem from "./StarElem";

const SpaceBodies = () => {
  return (
    <>
      {
        // Top part stars
      }
      <StarElem classNames="top-[15%] right-[30%] z-7 w-5 opacity-80" />
      <PingingStar classNames="top-16 left-[10%] z-7 w-5" />
      <PingingStar classNames="top-[25%] right-[3%] z-4 w-5 opacity-60" />

      {
        // Middle part stars
      }
      <PingingStar classNames="top-[28%] left-[41%] z-2 w-5 opacity-60" />
      <StarElem classNames="bottom-[40%] left-[7%] z-1 w-4 opacity-30" />
      <StarElem classNames="bottom-[36%] left-[20%] z-1 w-5 opacity-30" />
      <StarElem classNames="top-[46%] left-1/2 z-1 w-4 opacity-20" />
      <StarElem classNames="top-[56%] left-[40%] z-1 w-4 opacity-30" />
      <StarElem classNames="bottom-[40%] right-[7%] z-7 w-4 opacity-30" />
      {
        // Bottom part stars
      }
      <PingingStar classNames="bottom-[20%] right-[40%] w-4 z-4 opacity-45" />
      <PingingStar classNames="bottom-[15%] left-[33%] w-6 z-2 opacity-45" />
      <StarElem classNames="bottom-[20%] left-[37%] w-4 z-2 opacity-60" />
      <PingingStar classNames="bottom-[15%] right-[11%] z-7 w-5 opacity-80" />
      <StarElem classNames="bottom-[5%] left-[7%] z-7 w-4 opacity-60" />
      {
        // Planets Arrangement
      }
      <span className="absolute top-20 left-12 w-[20rem] z-1 opacity-40">
        <Planet variant={1} lightAura />
      </span>
      <span className="absolute bottom-5 z-2 w-[14rem] -left-20 sm:-left-10 sm:bottom-0 sm:w-[16rem]  md:w-[15rem] md:left-0 lg:bottom-0 lg:left-[10%] lg:w-[16rem] xl:left-[17%]  rotate-[15deg] opacity-80">
        <Planet
          variant={2}
          lightAura
          v2DarkStripe="#025b3c"
          v2LightStripe="#219e72"
        />
      </span>
      <span className="absolute hidden z-3 sm:block sm:left-[25%] sm:w-[13rem] sm:-top-10 sm:opacity-60 md:-top-2 md:opacity-75 md:left-[30%] lg:top-3 lg:left-[46%] lg:w-[15rem] xl:top-8 rotate-[-25deg] ">
        <Planet variant={3} lightAura />
      </span>
      <span className="absolute bottom-0 right-0 w-[10rem] sm:w-[12rem] md:right-[10%] md:bottom-5 z-6 lg:bottom-10 xl:right-[15%] lg:w-[12rem] sm:z-5 rotate-[-20deg] opacity-85">
        <Planet variant={4} lightAura />
      </span>
    </>
  );
};

export default SpaceBodies;
