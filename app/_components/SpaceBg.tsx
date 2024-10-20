import {
  L2Low,
  L2Up,
  L1Up,
  L1Low,
  L3Up,
  L3Low,
  L4Up,
  L5Base,
} from "@/public/svg/space-bg";

const SpaceBg = () => {
  return (
    <>
      <div className="absolute w-1/6 right-8 top-0 z-5 drop-shadow-CutUp">
        <L1Up />
      </div>

      <div className="absolute w-5/6 right-0 top-0 z-4 drop-shadow-CutUp">
        <L2Up />
      </div>

      <div className="absolute w-full right-0 top-0 z-3 drop-shadow-CutUp">
        <L3Up />
      </div>

      <div className="absolute w-full right-0 top-0 z-2 drop-shadow-CutUp">
        <L4Up />
      </div>

      {/* <div className="absolute w-full right-0 top-0 z-1 drop-shadow-CutUp">
        <L5Base />
      </div> */}

      <div className="absolute w-1/2 right-0 bottom-0 z-5 drop-shadow-CutDown">
        <L1Low />
      </div>

      <div className="absolute w-5/6 right-0 bottom-0 z-4 drop-shadow-CutDown">
        <L2Low />
      </div>

      <div className="absolute w-full right-0 bottom-0 z-3 drop-shadow-CutDown">
        <L3Low />
      </div>

      {/* <h1 className="text-[3.7rem] font-poppins font-medium">Hi, I'm Mike!</h1>
      <h5 className="text-lg font-medium font-raleway">
        A Fullstack Developer on your asswand cheecks
      </h5> */}
    </>
  );
};

export default SpaceBg;
