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

// Constant Data
export const experience = [
  {
    id: 1,
    institute: "GlobalTek PH (Trajector)",
    date: { from: "Dec 2023", to: "July 2024" },
    title: "Applications Engineering Intern",
    feats: [
      "Designed and developed user-friendly, visually appealing UI/UX.",
      "Performed R&D analysis on JS frameworks, with a focus on Preact and HTMX.",
      "Developed a ticket submission plugin, deployable via CDN, for the company's web applications",
      "Developed full stack applications utilizing the MERN stack and RESTful APIs.",
      "Participated in bootcamps for web and mobile development technologies, including MERN and AWS",
    ],
  },
  {
    id: 2,
    institute: "FEU Institute of Technology",
    date: { from: "Aug 2019", to: "Oct 2024" },
    title:
      "BS Information Technology with Specialization in Web and Mobile Application",
    feats: [
      "Top Performing Student awardee for SY2019-2020",
      "Top Performing Student awardee for SY2020-2021",
      "Cumulative GPA: 3.6 / 4.0",
      "Magna Cum Laude",
    ],
  },
];

export const about = {
  quote: "Vision without execution is hallucination.",
  quoteBy: "Thomas Edison",
  aboutText: "When insiration strikes, grab a pen and the likes!",
};
