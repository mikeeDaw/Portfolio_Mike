"use client";
import React from "react";
import Section from "../_components/global/Section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { fullF, shipBody, shipHead } from "../_assets/images";
import AnimSpacing from "../_components/journeyComponents/AnimSpacing";
import BentoBox from "../_components/journeyComponents/BentoBox";
import JourSpaceBods from "../_components/journeyComponents/JourSpaceBods";
import { makeTimeline } from "../_constants/animations";
import TimelineExp from "../_components/journeyComponents/TimelineExp";
import TraitsBelt from "../_components/journeyComponents/TraitsBelt";
import TechStackBelt from "../_components/journeyComponents/TechStackBelt";

const Journey = () => {
  useGSAP(() => {
    gsap.to("#spinBorder", {
      rotate: 360,
      ease: "none",
      repeat: -1,
      duration: 3,
    });

    makeTimeline("#shoot1", 3.7);
    makeTimeline("#shoot2", 3);
    makeTimeline("#shoot3", 4.7);
    makeTimeline("#shoot4", 2.8);
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
            <BentoBox
              spans="row-span-2 col-span-1 md:col-span-2 lg:col-span-1"
              styling="flex flex-col gap-3"
            >
              <div className="font-grotesk text-tone-3 tracking-widest mb-3">
                {"["}&nbsp; TIMELINE &nbsp;{"]"}
              </div>

              <TimelineExp />
            </BentoBox>

            {
              // About me
            }
            <BentoBox
              spans="row-span-1 col-span-1 row-start-1 md:col-span-2 lg:col-start-2"
              styling=""
              forSpotlight
            >
              {
                // Spinning Light BG
              }
              <span
                className="w-[150%] h-[350%] rounded-full bg-conic-spotlight absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 origin-center z-1 opacity-70"
                id="spinBorder"
              />

              <div className="w-full h-full bg-spaceBg-main z-2 relative rounded-2xl text-tone-2 py-5 px-6 flex flex-col overflow-hidden">
                {
                  // My Pic
                }
                <Image
                  src={fullF}
                  alt="Picture"
                  className="h-[10rem] w-[12.5rem] absolute -bottom-8 left-0 brightness-[0.8] mx-auto origin-bottom [mask-image:_linear-gradient(to_bottom,_black_calc(100%-90px),transparent_100%)]"
                  id="me"
                />

                <div className="font-grotesk text-tone-3 tracking-widest text-end">
                  {"["}&nbsp; ABOUT ME &nbsp;{"]"}
                </div>

                <div className="flex flex-col items-end w-full min-w-0 h-full">
                  <TraitsBelt />

                  <div className="w-9/12 h-full ps-10 text-justify text-base text-tone-4">
                    A{" "}
                    <span className="font-semibold text-tone-3">
                      fullstack developer
                    </span>{" "}
                    with an affinity on{" "}
                    <span className="font-semibold text-tone-3">
                      frontend work
                    </span>
                    {" ("}I hope you can notice{")"}. I love crafting efficient,
                    functional applications paired with pixel-perfect,
                    user-friendly interfaces that provides an amazing experience
                    for its users.
                  </div>
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
            <BentoBox
              spans="col-span-1 md:col-span-2 lg:col-span-3"
              styling="flex flex-col gap-3 h-fit"
            >
              <div className="font-grotesk text-tone-3 tracking-widest">
                {"["}&nbsp; TECH STACK &nbsp;{"]"}
              </div>

              <TechStackBelt />
            </BentoBox>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Journey;
