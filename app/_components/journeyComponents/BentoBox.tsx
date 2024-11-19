import React from "react";

interface Props {
  children: React.ReactNode;
  spans: string;
  forSpotlight?: boolean;
  styling?: string;
}
const BentoBox: React.FC<Props> = ({
  children,
  spans,
  styling = "",
  forSpotlight = false,
}) => {
  return (
    <div
      className={`relative ${spans} rounded-2xl border border-tone-3/30 overflow-hidden ${styling} ${
        forSpotlight ? "p-[1px]" : "py-5 px-6"
      }`}
    >
      {children}
    </div>
  );
};

export default BentoBox;
