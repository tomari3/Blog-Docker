import styled from "styled-components";

export const StyledPanel = styled.section`
  background-color: var(--primaryLighter);
  border: 1px solid var(--primaryDark);
  padding: var(--padding);

  h1 {
    font-size: var(--fontSize);
    padding: var(--paddingSmall);
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: var(--paddingSmall);
  }
`;
