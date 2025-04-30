import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import { StyledBox, StyledImage, StyledLink, StyledNav } from "./header.styles";
import Image from "../../images/global/portfoliologo.png";
import { portfolioLogoImageDesc } from "../../images/global/imagedescriptions";

const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledImage alt={portfolioLogoImageDesc} src={Image} />
      </StyledLink>
      <StyledBox>
        <StyledLink to="/">
          <TextComponent nav text="projects" type={TextType.SUBTITLE} />
        </StyledLink>
        <StyledLink to="/about">
          <TextComponent nav text="about" type={TextType.SUBTITLE} />
        </StyledLink>
        <StyledLink
          target="_blank"
          to="https://www.dropbox.com/s/qht5ne8wdr529lj/RESUME.pdf?dl=0"
        >
          <TextComponent nav text="resume" type={TextType.SUBTITLE} />
        </StyledLink>
      </StyledBox>
    </StyledNav>
  );
};

export default Header;
