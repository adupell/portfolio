import styled from "styled-components";
import { HalfImage, Section } from "../shared.styles";

export const Container = styled(Section)`
  align-items: center;
  justify-content: space-evenly;
  margin: 0;
`;

export const StyledProfile = styled(HalfImage)`
  border-radius: 100%;
  width: 25%;
`;
