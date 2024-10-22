"use client";
import React from "react";
import SpaceBg from "../_components/spaceBackground/SpaceBg";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Spaceman from "../_components/models/Spaceman";

const Hero = () => {
  return (
    <div className="min-h-[667px] md:min-h-[738px] h-screen min-w-screen overflow-hidden relative bg-[#001D54]">
      {
        // Hero Section Container
      }
      <div className="h-full relative w-full">
        <SpaceBg />
        {
          // The 3D Spaceman (add <Suspense /> later)
        }
        <div className="absolute inset-0 z-4 w-full h-full saturate-[0.6]">
          <Canvas className="h-full w-full z-10">
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Spaceman />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
