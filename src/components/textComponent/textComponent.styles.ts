import styled from "styled-components";
import { $black, $darkOrange } from "../../assets/colors";
import { TextType } from "../../types/text";

interface StyledTextProps {
  className?: any;
  type?: TextType;
  bold?: boolean;
  nav?: boolean;
}

export const StyledText = styled.div<StyledTextProps>`
  font: ${({ bold }) => (bold ? "700 " : "")}
    ${({ type }) => {
      switch (type) {
        case TextType.HEADER:
        case TextType.SUBHEADER:
          return "700 1.75em 'Source Serif Pro', serif";
        case TextType.TITLE:
          return "700 1.25em Inter, sans serif";
        case TextType.SUBTITLE:
          return "1em Inter, sans serif";
        case TextType.PARAGRAPH:
          return "0.8em Inter, sans serif";
        default:
          return;
      }
    }};
  color: ${$black};
  ${({ type }) =>
    type === TextType.HEADER || type === TextType.SUBHEADER
      ? `width: 80%;`
      : ""}
  ${({ nav }) => (nav ? `&:hover { color: ${$darkOrange} }` : "")}
  white-space: pre-line;

  @media screen and (max-width: 800px) {
    ${({ type }) =>
      type === TextType.HEADER || type === TextType.SUBHEADER
        ? "font: 700 1.25em 'Source Serif Pro', serif"
        : ""};
  }
`;
