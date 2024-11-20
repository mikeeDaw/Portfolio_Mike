import gsap from "gsap";

export const makeTimeline = (targId: string, delay: number): void => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: delay });
  tl.to(targId, { opacity: 1, duration: 0.1, ease: "none" });
  tl.to(targId, { x: -250, y: 250, duration: 0.6, ease: "none" }, "<");
  tl.to(targId, { opacity: 0, duration: 0.2 }, ">-0.2");
};
