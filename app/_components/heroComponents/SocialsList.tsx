import React from "react";
import { Facebook, Github, LinkedIn } from "@/public/svg/icons";

interface Props {
  classNames: string;
}

const SocialsList: React.FC<Props> = ({ classNames }) => {
  return (
    <div className="z-5 flex lg:mb-0.5 xl:mb-2 items-center gap-3">
      <LinkedIn classNames={classNames} />
      <Github classNames={classNames} />
      <Facebook classNames={classNames} />
    </div>
  );
};

export default SocialsList;
