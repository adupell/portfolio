import React, { useEffect } from "react";
import {
  AnimationSection,
  Page,
  Project,
  TextComponent,
} from "../../components";
import { TextType } from "../../types/text";
import {
  Container,
  ProjectContainer,
  StyledTitleBox,
} from "./home.styles";
import { projectData } from "./constants";
import { $orange } from "../../assets/colors";

const HomePage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = $orange;
  }, []);

  return (
    <Page homepage>
      <StyledTitleBox>
        <TextComponent
          type={TextType.HEADER}
          text="I am an experienced developer and designer with a love for accessibility, creativity, reading, and my cat, Frank."
        />
      </StyledTitleBox>
      <Container>
        <AnimationSection>
          <TextComponent type={TextType.SUBTITLE} text="Check out some of my work below:" />
        </AnimationSection>
        <ProjectContainer>
          {projectData.map((item) => (
            <AnimationSection>
              <Project
                title={item.title}
                description={item.description}
                skills={item.skills}
                src={item.src}
                color={item.color}
                to={item.to}
                target={item.target}
                alt={item.alt}
              />
            </AnimationSection>
          ))}
        </ProjectContainer>
      </Container>
    </Page>
  );
};

export default HomePage;
