import styled from "styled-components";

export const StyledToast = styled.article`
  position: absolute;

  display: grid;
  grid-template-columns: 48px 1fr 48px;
  align-items: center;
  justify-content: center;
  padding: 0 var(--paddingSmall);
  gap: var(--padding);

  left: calc(var(--paddingBigger) * 2);
  bottom: calc(var(--paddingBigger) * 2);

  height: calc(50px + var(--padding));
  border-radius: var(--radiusBigger);
  background-color: var(--primary);
  box-shadow: var(--shadow) 0px 2px 5px -1px, var(--shadow) 0px 1px 3px -1px;

  z-index: 2;

  .toast-svg {
    div {
      aspect-ratio: 1;
      background-color: ${({ type }) => handleType(type)};
    }
  }

  .toast-info {
    font-size: var(--fontSizeMedium);
  }
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
