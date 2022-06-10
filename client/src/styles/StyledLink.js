import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${(props) =>
    props.$color ? "var(--accentLight)" : "var(--textWeaker)"};
  background-color: transparent;
  border: 0;
  text-transform: capitalize;
  font-size: var(--fontSize);
  &:hover {
    text-decoration: underline;
  }
`;
