"use client";
import React from "react";
import Section from "../_components/global/Section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { shipBody, shipHead } from "../_assets/images";
import AnimSpacing from "../_components/journeyComponents/AnimSpacing";
import BentoBox from "../_components/journeyComponents/BentoBox";
import JourSpaceBods from "../_components/journeyComponents/JourSpaceBods";
import { makeTimeline } from "../_constants/animations";

const Journey = () => {
  useGSAP(() => {
    gsap.to("#spinBorder", {
      rotate: 360,
      ease: "none",
      repeat: -1,
      duration: 3,
    });

    makeTimeline("#shoot1", 4);
    makeTimeline("#shoot2", 3.2);
    makeTimeline("#shoot3", 5);
  }, []);
  return (
    <>
      {
        // Animation Spacing from the Hero Section
      }
      <AnimSpacing />
      {
        // The Journey Sec
      }
      <Section classNames="bg-spaceBg-main" id="Journey" crosses>
        <JourSpaceBods />

        <div className="container">
          <span className="w-[40rem] h-[40rem] bg-spotlight absolute -right-0 top-1/3 rounded-full -translate-y-1/2" />

          {
            // Bento Box
          }
          <div className="relative grid grid-rows-6 grid-cols-1 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-6">
            {
              // The timeline
            }
            <BentoBox spans="row-span-2 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="font-grotesk text-tone-3 tracking-widest">
                {"["}&nbsp; TIMELINE &nbsp;{"]"}
              </div>
            </BentoBox>

            {
              // About me
            }
            <BentoBox
              spans="row-span-1 col-span-1 row-start-1 md:col-span-2 lg:col-start-2"
              styling="h-[15rem]"
              forSpotlight
            >
              {
                // Spinning Light BG
              }
              <span
                className="w-[150%] h-[350%] rounded-full bg-conic-spotlight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 origin-center z-1 opacity-70"
                id="spinBorder"
              />

              <div className="w-full h-full bg-spaceBg-main z-2 relative rounded-2xl text-tone-2 py-5 px-6 flex flex-col">
                <div className="font-grotesk text-tone-3 tracking-widest text-end">
                  {"["}&nbsp; ABOUT ME &nbsp;{"]"}
                </div>
              </div>
            </BentoBox>

            {
              // Two Mini-Boxes on row 2
            }
            <BentoBox spans="row-span-1 col-span-1">
              <Image
                src={shipHead}
                alt="Ship Head"
                className="absolute -bottom-10 left-0 -scale-x-100 brightness-[0.6] hue-rotate-60 opacity-90"
              />
            </BentoBox>

            <BentoBox spans="row-span-1 col-span-1">
              <Image
                src={shipBody}
                alt="Ship Head"
                className="absolute -bottom-10 left-0 -scale-x-100 opacity-90 brightness-[0.6] hue-rotate-60"
              />
            </BentoBox>

            {
              // Whole row 3
            }
            <BentoBox spans="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="font-grotesk text-tone-3 tracking-widest">
                {"["}&nbsp; TECH STACK &nbsp;{"]"}
              </div>
            </BentoBox>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Journey;
