"use client";
import React from "react";
import SpaceBg from "../_components/spaceBackground/SpaceBg";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Spaceman from "../_components/models/Spaceman";
import { SocialsList } from "../_components/heroComponents";
import BlackholeBtn from "../_components/heroComponents/BlackholeBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blackHoleStar } from "../_constants/animation";
import { CircleArrow } from "@/public/svg/icons";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#BHS1", blackHoleStar(0, 0.6));
    gsap.to("#BHS2", blackHoleStar(0.2, 0.8));
    gsap.to("#BHS3", blackHoleStar(0.3, 0.6));
    gsap.to("#BHS4", blackHoleStar(0.5, 0.7));
    gsap.to("#BHS5", blackHoleStar(0.1, 0.6));
  }, []);

  return (
    <section
      id="Hero"
      className="min-h-[667px] md:min-h-[738px] h-screen min-w-screen overflow-hidden relative bg-[#001D54]"
    >
      {
        // Hero Section Container
      }
      <div className="h-full relative flex items-center justify-start w-full lg:px-[9.5rem]">
        <SpaceBg />
        {
          // The 3D Spaceman (add <Suspense /> later)
        }
        <div className="absolute inset-0 z-4 w-full h-full saturate-[0.55]">
          <Canvas className="h-full w-full z-10">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Spaceman />
          </Canvas>
        </div>

        {
          // The Text Part
        }
        <div className="relative text-white flex flex-col w-[610px] lg:w-[30rem] xl:w-[610px] ">
          {
            // Socials list
          }
          <SocialsList classNames="w-10 lg:w-9 xl:w-10 fill-[#F1F1F1]/40 cursor-pointer hover:fill-white transition-color duration-300" />

          <h1 className="font-poppins font-semibold text-[5.5rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[6rem] z-2">
            Hello,
          </h1>
          <h1 className="font-poppins font-semibold text-[5.5rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[6rem] z-2">
            I'm Michael!
          </h1>
          <h4 className="font-grotesk uppercase text-2xl lg:text-xl xl:text-2xl tracking-widest z-3">
            {"["} A FULL STACK DEVELOPER {"]"}
          </h4>
          <p className="font-raleway text-3xl lg:text-2xl xl:text-3xl mt-[4.3rem] z-7 mb-14">
            Hit me up and let's make your interesting ideas come to life.
          </p>

          {
            // The button chenes
          }
          <BlackholeBtn />
        </div>

        {
          // Scroll to learn more
        }
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <span className="bg-white/80 h-[1.5px] w-16" />
          <span className="fill-white w-10 h-10">
            <CircleArrow />
          </span>
          <span className="bg-white/80 h-[1.5px] w-16" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
