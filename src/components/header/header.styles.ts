import styled from "styled-components";
import { Link } from "react-router-dom";
import { $pink } from "../../assets/colors";

export const StyledNav = styled.nav`
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  align-items: center;  
  margin-top: 50px;

  @media screen and (max-width: 1000px) {
    padding: 0 15px;
  }
  `;

export const StyledBox = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  padding: 12px;

  &:hover {
    cursor: pointer;
    border-radius: 6px;
    background-color: ${$pink};
  }
`;

export const StyledImage = styled.img`
  width: 25%;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;
