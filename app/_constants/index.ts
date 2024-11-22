import { Github } from "@/public/svg/icons";
import {
  Angular,
  ExpressLogo,
  Firebase,
  GSAP,
  Htmx,
  JSLogo,
  KotlinLogo,
  Larav,
  Mongo,
  MySQL,
  Next,
  NodeLogo,
  PhpLogo,
  PythonLogo,
  ReactLogo,
  Tailw,
} from "../_assets/logoSvg";

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
  belt: [
    "Enthusiastic!",
    "Creative",
    "Adaptable",
    "Perfectionist",
    "Resilient",
  ],
  aboutText:
    "A fullstack developer with a bias on frontend work (I hope you can notice). I love crafting efficient, functional applications paired with pixel-perfect, user-friendly interfaces that provides an amazing experience for its users. ",
};

export const stackLogoCols = {
  base: "#5ee18b",
  darkGreenFace: "#05742b",
};

export const stackLogo = [
  {
    tech: "React",
    logo: ReactLogo(),
  },
  {
    tech: "Angular",
    logo: Angular(),
  },
  {
    tech: "NextJS",
    logo: Next(),
  },
  {
    tech: "Laravel",
    logo: Larav(),
  },
  {
    tech: "HTMX",
    logo: Htmx(),
  },
  {
    tech: "NodeJS",
    logo: NodeLogo(),
  },
  {
    tech: "ExpressJS",
    logo: ExpressLogo(),
  },
  {
    tech: "Firebase",
    logo: Firebase(),
  },
  {
    tech: "MySQL",
    logo: MySQL(),
  },
  {
    tech: "MongoDB",
    logo: Mongo(),
  },
  {
    tech: "TailwindCSS",
    logo: Tailw(),
  },
  {
    tech: "GSAP",
    logo: GSAP(),
  },
  {
    tech: "JavaScript",
    logo: JSLogo(),
  },
  {
    tech: "PHP",
    logo: PhpLogo(),
  },
  {
    tech: "Python",
    logo: PythonLogo(),
  },
  {
    tech: "Kotlin",
    logo: KotlinLogo(),
  },
  {
    tech: "Github",
    logo: Github(),
  },
];
