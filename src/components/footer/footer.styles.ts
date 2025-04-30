import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextComponent } from "..";

export const StyledFooter = styled.footer`
  display: flex;
  border-top: 3px dotted black;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    padding: 50px 0;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 30%;

  @media screen and (max-width: 800px) {
    padding: 25px;
  }
`;

export const ProjectContainer = styled(StyledBox)`
  margin-top: 50px;
`;

export const StyledText = styled(TextComponent)`
  margin-left: 25px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const StyledA = styled.a`
  text-decoration: none;

  @media screen and (max-width: 800px) {
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media screen and (max-width: 800px) {
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Scissors = styled.div`
  position: relative;
  top: 18px;
  height: 32px;
  width: 40px;

  @keyframes animate {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }

  animation: animate 30s linear infinite;
  -webkit-animation: animate 30s linear infinite;
  -moz-animation: animate 30s linear infinite;
  -o-animation: animate 30s linear infinite;
`;

export const PartyIcon = styled.img`
  display: flex;
  height: 5em;
  width: 5em;
  padding-top: 20px;
`;
