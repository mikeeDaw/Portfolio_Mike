"use client";
import { CircleArrow } from "@/public/svg/icons";
import { useGSAP } from "@gsap/react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { SocialsList } from "../_components/heroComponents";
import BlackholeBtn from "../_components/heroComponents/BlackholeBtn";
import Spaceman from "../_components/models/Spaceman";
import SpaceBg from "../_components/spaceBackground/SpaceBg";
import { blackHoleStar, calculateSize } from "../_constants";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  useGSAP(() => {
    // Black Hole stars
    gsap.to("#BHS1", blackHoleStar(0, 0.6));
    gsap.to("#BHS2", blackHoleStar(0.2, 0.8));
    gsap.to("#BHS3", blackHoleStar(0.3, 0.6));
    gsap.to("#BHS4", blackHoleStar(0.5, 0.7));
    gsap.to("#BHS5", blackHoleStar(0.1, 0.6));

    // Know more about me scroller
    gsap.fromTo(
      "#knowMe",
      { y: -7 },
      { y: 7, duration: 1.5, repeat: -1, yoyo: true }
    );
  }, []);

  // this is smaller than 'sm' (sm is 640px)
  const isSmall = useMediaQuery({ maxWidth: 520 });
  // this is 'max-md'
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // this is 'md' up until 'max-lg'
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSize(isSmall);
  return (
    <section
      id="Hero"
      className="min-h-[667px] md:min-h-[738px] h-screen min-w-screen overflow-hidden relative bg-[#001D54]"
    >
      {
        // Hero Section Container
      }
      <div className="h-full relative flex items-start pt-[20%] sm:items-center justify-start w-full sm:pt-0 sm:px-[2rem] md:px-[7rem] lg:px-[9.5rem]">
        <SpaceBg />
        {
          // The 3D Spaceman (add <Suspense /> later)
        }
        <div className="absolute inset-0 z-4 w-full h-full saturate-[0.55]">
          <Canvas className="h-full w-full z-10">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Spaceman sizes={sizes} />
          </Canvas>
        </div>

        {
          // The Text Part
        }
        <div className="relative text-white flex flex-col mx-auto w-full px-3 items-center sm:items-start sm:px-0 sm:mx-0 sm:w-[24rem] md:w-[28rem] lg:w-[30rem] xl:w-[610px] pb-5 ">
          {
            // Socials list
          }
          <SocialsList classNames="w-8 md:w-8 lg:w-9 xl:w-10 fill-[#F1F1F1]/50 cursor-pointer hover:fill-white transition-color duration-300" />

          <h1 className="font-poppins font-semibold text-[3.2rem] leading-[3.7rem] sm:text-6xl md:text-[4.2rem] md:leading-[4.5rem] lg:text-[4.5rem] xl:text-[5.5rem] xl:leading-[6rem] z-4 md:z-3 lg:z-2">
            Hello,
          </h1>
          <h1 className="font-poppins font-semibold  text-[3.2rem] leading-[3.7rem] sm:text-6xl  md:text-[4.2rem] md:leading-[4.5rem] lg:text-[4.5rem] xl:text-[5.5rem] xl:leading-[6rem] z-4 md:z-2">
            I'm Michael!
          </h1>
          <h4 className="font-grotesk uppercase  text-lg lg:text-xl xl:text-2xl tracking-widest z-3">
            {"["} A FULL STACK DEVELOPER {"]"}
          </h4>
          <p className="font-raleway md:pe-20 w-3/4 md:w-auto text-center mt-[2.5rem] mb-8 text-xl sm:text-start sm:text-xl md:text-2xl xl:text-3xl sm:mt-[3.5rem] md:mt-[4.3rem] z-7 sm:mb-10 md:mb-14">
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
        <div className="absolute bottom-7 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none gap-3">
          <p className="text-xs font-grotesk uppercase text-white/60 tracking-wider">
            Know more about me
          </p>
          <span className="fill-white/70 w-8 h-8" id="knowMe">
            <CircleArrow />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="inline-flex flex-col w-[5.5rem]">
              <p className="font-grotesk uppercase text-white text-[0.65rem] mb-1.5 tracking-widest text-end">
                Know more
              </p>
              <span className="bg-white/80 h-[1px] w-full mb-4" />
            </div>
            <span className="fill-white w-10 h-10" id="knowMe">
              <CircleArrow />
            </span>
            <div className="inline-flex flex-col w-[5.5rem]">
              <p className="font-grotesk uppercase text-white text-[0.65rem] mb-1.5 tracking-widest text-start">
                About me
              </p>
              <span className="bg-white/80 h-[1px] w-full mb-4" />
            </div>
          </div>
        </div>
*/
