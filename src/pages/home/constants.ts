import { $madeToPlay, $letterboxd, $oldPortfolio } from "../../assets/colors";
import {
  coverMockupImageDesc,
  homeMockupImageDesc,
  portfolioMockupImageDesc,
} from "../../images/home/imagedescriptions";
import MadeToPlayImage from "../../images/home/covermockup.png";
import LetterboxdImage from "../../images/home/home1mock.png";
import PorfolioImage from "../../images/home/portfoliomockup.png";

export const projectData = [
  {
    title: "Made To Play",
    description:
      "This project was designed to service the East Boston community, specifically for parents and young children. In efforts to close the gap for accessible developmental screening, this book contains easy, DIY toys that parents can make and engage with their child for monitoring.",
    skills: "BRANDING | BOOK DESIGN",
    src: MadeToPlayImage,
    color: $madeToPlay,
    to: "/made-to-play",
    alt: coverMockupImageDesc,
  },
  {
    title: "Letterboxd",
    description:
      "As a user of this application, I noticed pitfalls in Letterboxd's current user experience and interface. This personal project focuses on redesigning screens and processes to improve engagement across the product.",
    skills: "USER RESEARCH | USER EXPERIENCE | MOBILE DESIGN",
    src: LetterboxdImage,
    color: $letterboxd,
    to: "/letterboxd",
    alt: homeMockupImageDesc,
  },
  {
    title: "Personal Portfolio",
    description:
      "When I graduated from university, I knew I wanted my first design to development project to be my personal portfolio. The projects showcased on this portfolio are from my college design career and are not included on this portfolio. Give it a look!",
    skills: "WEB DESIGN | DEVELOPMENT",
    src: PorfolioImage,
    color: $oldPortfolio,
    to: "https://amandadupell.surge.sh/",
    target: "_blank",
    alt: portfolioMockupImageDesc,
  },
];
