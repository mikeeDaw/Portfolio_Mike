import {
  L2Low,
  L2Up,
  L1Up,
  L1Low,
  L3Up,
  L3Low,
  L4Up,
  Clipper,
} from "@/public/svg/space-bg";
import SpaceBodies from "./SpaceBodies";

const SpaceBg = () => {
  return (
    <>
      {
        // Upper Paper cut layers
      }
      <div className="absolute w-[38%] sm:w-3/12 md:w-3/12 lg:w-1/6 right-8 top-0 z-6 drop-shadow-CutUp pointer-events-none">
        <L1Up />
      </div>

      <div className="absolute w-[180%] sm:w-full md:w-full lg:w-5/6 right-0 top-0 z-5 drop-shadow-CutUp pointer-events-none">
        <L2Up />
      </div>

      <div className="absolute w-[220%] sm:w-[125%] lg:w-full right-0 top-0 z-4 drop-shadow-CutUp pointer-events-none">
        <L3Up />
      </div>

      <div className="absolute w-[220%] sm:w-[130%] lg:w-full right-0 top-0 z-3 drop-shadow-CutUp pointer-events-none">
        <L4Up />
      </div>

      {
        // The middle part of the Bg
      }

      <div className="absolute w-full h-full top-0 left-0 z-2 drop-shadow-CutMid pointer-events-none">
        <div
          className=" w-full h-full bg-[#002A78] z-1"
          style={{ clipPath: "url(#BgBaseClipper)" }}
        >
          {
            // sa 'md' lang to magpapakita
          }
          <Clipper />
        </div>
      </div>

      {
        // Stars and other UI
      }

      <SpaceBodies />

      {
        // Lower papercut layers
      }
      <div className="absolute w-[90%] sm:w-[55%] lg:w-1/2 right-0 bottom-0 z-6 drop-shadow-CutDown pointer-events-none">
        <L1Low />
      </div>

      <div className="absolute w-[200%] sm:w-full lg:w-5/6 right-0 bottom-0 z-5 drop-shadow-CutDown pointer-events-none">
        <L2Low />
      </div>

      <div className="absolute w-[260%] sm:w-[125%] lg:w-full right-0 bottom-0 z-4 drop-shadow-CutDown pointer-events-none">
        <L3Low />
      </div>
    </>
  );
};

export default SpaceBg;
