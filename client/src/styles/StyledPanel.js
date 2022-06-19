import styled from "styled-components";

export const StyledPanel = styled.section`
  background-color: var(--primaryLighter);
  border-radius: var(--radius);
  box-shadow: var(--cardShadowXSmall);

  padding: var(--padding);
  width: 300px;
  h1 {
    font-size: var(--fontSizeMedium);
    padding: var(--paddingSmall);
  }
  div {
    display: grid;
    grid-template-rows: repeat(auto-fit, 60px);
  }
`;
