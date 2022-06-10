import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$color ? "var(--accent)" : "transparent"};
  border: 0;
  border-radius: ${(props) =>
    props.$round ? "var(--radius)" : "var(--radiusSmaller)"};
  padding: ${({ padding }) => handlePadding(padding)};
  font-size: ${({ fontSize }) => handleFontSize(fontSize)};
  color: var(--text);
  font-weight: ${(props) => (props.$bold ? "bold" : "400")};
  color: ${(props) => (props.$color ? "hsla(0,0%,98%, 1)" : "")};
  color: ${(props) => (props.$muted ? "var(--textLight)" : "")};

  &:hover {
    > a {
      color: inherit;
    }
  }
`;

const handlePadding = (padding) => {
  switch (padding) {
    case "smaller":
      return "var(--paddingSmaller)";
    case "small":
      return "var(--paddingSmall)";
    case "reg":
      return "var(--padding)";
    case "big":
      return "var(--paddingBig)";
    case "bigger":
      return "var(--paddingBigger)";
    default:
      return "0";
  }
};
const handleFontSize = (fontSize) => {
  switch (fontSize) {
    case "tiny":
      return "var(--fontSizeTiny)";
    case "smaller":
      return "var(--fontSizeSmaller)";
    case "small":
      return "var(--fontSizeSmall)";
    case "reg":
      return "var(--fontSize)";
    case "medium":
      return "var(--fontSizeMedium)";
    case "medium-big":
      return "var(--fontSizeMediumBig)";
    case "big":
      return "var(--fontSizeBig)";
    case "bigger":
      return "var(--fontSizeBigger)";
    case "huge":
      return "var(--fontSizeHuge)";
    default:
      return "var(--fontSize)";
  }
};
