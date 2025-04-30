import styled from "styled-components";

interface StyledProjectImageProps {
  color: string;
}

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 250px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;

  @media screen and (max-width: 1000px) {
    height: 150px;
    width: 150px;
    padding-bottom: 20px;
  }
`;

export const StyledCircle = styled.div<StyledProjectImageProps>`
  position: relative;
  height: 225px;
  width: 225px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  @media screen and (max-width: 1000px) {
    height: 125px;
    width: 125px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 250px;
  width: 260px;
  object-fit: cover;

  @media screen and (max-width: 1000px) {
    height: 150px;
    width: 150px;
  }
`;
