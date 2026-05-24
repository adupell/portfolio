import React from "react";
import Lottie from 'react-lottie';
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import {
  StyledBox,
  StyledLink,
  StyledFooter,
  Scissors,
  StyledA,
  StyledText,
  ProjectContainer,
  PartyIcon,
} from "./footer.styles";
import PartyImage from "../../images/global/animatedParty.svg";
import * as scissorsAnimation from '../../images/global/scissors.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const email = () => (window.location.href = "mailto:anddupell@gmail.com");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scissorsAnimation,
    isClickToPauseDisabled: false,
    style: { margin: 0 }
  };

  const handleAnimation = () => {
    document.body.animate(
      {
        background: [
          "#c6fefe",
          "#c9ffc9",
          "#ffffce",
          "#ffcfcf",
          "#cacafc",
          "#c6fefe",
        ],
        easing: "linear",
      },
      { duration: 3000, iterations: 2 }
    );
  };

  return (
    <>
      <Scissors>
        <Lottie options={defaultOptions} height={32} width={40} />
      </Scissors>
      <StyledFooter>
        <StyledBox>
          <StyledA onClick={scrollToTop}>
            <TextComponent type={TextType.SUBTITLE} text="Back to top" />
          </StyledA>
          <TextComponent type={TextType.SUBHEADER} text="Contact" />
          <StyledLink
            target="_blank"
            to="https://www.linkedin.com/in/amanda-dupell-profile/"
          >
            <StyledText type={TextType.TITLE} text="LinkedIn" />
          </StyledLink>
          <StyledLink target="_blank" to="https://github.com/amandadupell">
            <StyledText type={TextType.TITLE} text="GitHub" />
          </StyledLink>
          <StyledA onClick={email}>
            <StyledText type={TextType.TITLE} text="Email" />
          </StyledA>
          <StyledA onClick={handleAnimation}>
            <PartyIcon src={PartyImage} />
          </StyledA>
        </StyledBox>
        <ProjectContainer>
          <StyledText type={TextType.TITLE} text="Projects" />
          <StyledLink to="/made-to-play">
            <StyledText type={TextType.PARAGRAPH} text="Made to Play" />
          </StyledLink>
          <StyledLink to="/letterboxd">
            <StyledText type={TextType.PARAGRAPH} text="Letterboxd" />
          </StyledLink>
          <StyledLink target="_blank" to="https://amandadupell.surge.sh/">
            <StyledText type={TextType.PARAGRAPH} text="Personal Portfolio" />
          </StyledLink>
        </ProjectContainer>
      </StyledFooter>
    </>
  );
};

export default Footer;
