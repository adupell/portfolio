import styled from "styled-components";
import { $orange, $white } from "../../assets/colors";

interface StyledPageProps {
  homepage?: boolean;
}

export const StyledPage = styled.div<StyledPageProps>`
  ${({ homepage }) => homepage ? `background-color: ${$orange};` : `background-color: ${$white};`};
  display: flex;
  flex-direction: column;
  padding: 100px;

  animation: fadeInAnimation ease-in-out 2s;
  -webkit-animation: fadeInAnimation ease-in-out 2s;
  -moz-animation: fadeInAnimation ease-in-out 2s;
  -o-animation: fadeInAnimation ease-in-out 2s;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 15px;
  }
`;
