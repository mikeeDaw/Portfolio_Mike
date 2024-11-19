"use client";
import { useGSAP } from "@gsap/react";
import { useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Vector3 } from "three";

interface Props {
  sizes: { manPos: number[]; manScale: number };
}

const Spaceman: React.FC<Props> = ({ sizes }) => {
  const group = useRef<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any
  const { nodes, materials, animations } = useGLTF("./models/spaceman.glb");
  const { actions } = useAnimations(animations, group);

  // Play the animation
  useEffect(() => {
    actions["Idle"]?.play();
  });

  useGSAP(() => {
    gsap.fromTo(
      group.current.rotation,
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: "#heroContainer",
          endTrigger: "#animationSpacer",
          scrub: true,
          pinSpacing: false,
        },
        y: 14,
        duration: 5,
        ease: "power1",
      }
    );
    // gsap.fromTo(
    //   group.current.position,
    //   {
    //     x: 4.5,
    //     y: sizes.manPos[1],
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: "#heroContainer",
    //       endTrigger: "#animationSpacer",
    //       scrub: true,
    //       pinSpacing: false,
    //       markers: true,
    //     },
    //     y: sizes.manPos[1],
    //     x: 15,
    //     duration: 5,
    //     ease: "power1",
    //   }
    // );
    // gsap.to(group.current.rotation, { y: 3.5, duration: 3 });
  }, []);

  return (
    <group
      ref={group}
      dispose={null}
      scale={sizes.manScale}
      position={new Vector3(...sizes.manPos)}
      rotation={[0.3, 3.1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.193}
        >
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube001_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube005_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube005_0.skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube002_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube002_0.skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Plane_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube008_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube008_0.skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube004_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube004_0.skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube003_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube003_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube_0.skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube009_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube009_0.skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                // @ts-expect-error: Property doesnt exist on the 'type'
                geometry={nodes.Cube011_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                // @ts-expect-error: Property doesnt exist on the 'type'
                skeleton={nodes.Cube011_0.skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/spaceman.glb");

export default Spaceman;
