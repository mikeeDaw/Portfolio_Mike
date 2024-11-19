// Calculation of Size based on screen size
export const calculateSize = (isSmall: boolean) => ({
  manPos: isSmall ? [0, -3.1, 0] : [4.5, -1.3, 0],
  manScale: isSmall ? 1.3 : 2.8,
});

// Animations
export const blackHoleStar = (delay: number, duration: number) => ({
  top: "47%",
  left: "47%",
  scale: 0.5,
  opacity: 0,
  duration,
  repeat: -1,
  delay,
});
