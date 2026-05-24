import React, { useEffect } from "react";
import { Page, Paragraph } from "../../components";
import { Container, StyledProfile } from "./about.styles";
import ProfileImage from "../../images/about/profile.png";
import { info } from "./constants";
import { profileImageDesc } from "../../images/about/imagedescriptions";
import { $white } from "../../assets/colors";

const AboutPage = () => {
    useEffect(() => {
      document.body.style.backgroundColor = $white;
    }, []);
    
  return (
    <Page>
      <Container>
        <StyledProfile alt={profileImageDesc} src={ProfileImage} />
        <Paragraph
          size="large"
          header="A little bit about me"
          text={info.text}
        />
      </Container>
    </Page>
  );
};

export default AboutPage;
