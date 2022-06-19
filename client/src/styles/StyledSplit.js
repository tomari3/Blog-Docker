import styled from "styled-components";

export const StyledSplit = styled.main`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  gap: var(--paddingBigger);
  margin: auto 0;
  justify-content: center;
  align-items: center;
  .LoginForm {
    flex: 1 1 300px;
  }

  .hero {
    flex: 1 0 400px;
  }
`;
