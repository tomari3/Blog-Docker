import styled from "styled-components";

export const StyledToast = styled.article`
  position: absolute;
  left: var(--paddingBigger);
  bottom: var(--paddingBigger);
  height: 50px;
  border-radius: var(-radiusBig);
  background-color: ${({ type }) => handleType(type)};
`;

const handleType = (type) => {
  switch (type) {
    case "error":
      return "var(--error)";
    case "success":
      return "var(--success)";
    default:
      return "var(--primary)";
  }
};
