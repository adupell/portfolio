import styled from "styled-components";
import { TextComponent } from "..";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;

  
  transition: transform 0.2s ease-in-out;
  &: hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
    margin: 25px 0;
    align-items: center;
  }
`;

export const StyledText = styled(TextComponent)`
  padding-bottom: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    margin: 0 25px;
    text-align: center;
  }
`;
