import React from "react";
import { Facebook, Github, LinkedIn } from "@/public/svg/icons";

interface Props {
  classNames: string;
}

const SocialsList: React.FC<Props> = ({ classNames }) => {
  return (
    <div className="z-5 flex lg:mb-0.5 xl:mb-2 items-center gap-3 heroText">
      <a
        href="https://www.linkedin.com/in/neil-michael-dao-b423a9301"
        target="_blank"
        className={classNames}
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/mikeeDaw"
        target="_blank"
        className={classNames}
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/neil-michael-dao-b423a9301"
        target="_blank"
        className={classNames}
      >
        <Facebook />
      </a>
    </div>
  );
};

export default SocialsList;
