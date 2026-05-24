import React from "react";
import { Link } from "react-router-dom";
import { ProjectImage } from "../";
import { TextType } from "../../types/text";
import { Container, StyledText, TextContainer } from "./project.styles";

interface ProjectProps {
  className?: any;
  title: string;
  description: string;
  skills: string;
  src: string;
  alt: string;
  color: string;
  to: string;
  target?: string;
}

const Project = ({
  className,
  title,
  description,
  skills,
  src,
  alt,
  color,
  to,
  target,
}: ProjectProps) => {
  return (
    <Link target={target} style={{ textDecoration: "none" }} to={to}>
      <Container className={className}>
        <ProjectImage alt={alt} src={src} color={color} />
        <TextContainer>
          <StyledText bold type={TextType.TITLE} text={title} />
          <StyledText type={TextType.PARAGRAPH} text={skills} />
          <StyledText type={TextType.PARAGRAPH} text={description} />
        </TextContainer>
      </Container>
    </Link>
  );
};

export default Project;
