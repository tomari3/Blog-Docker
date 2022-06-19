import styled from "styled-components";

export const StyledPanel = styled.section`
  background-color: var(--primaryLighter);
  border-radius: var(--radius);
  padding: var(--padding);
  width: 300px;
  box-shadow: var(--cardShadowXSmall);
  h1 {
    font-size: var(--fontSizeMedium);
    padding: var(--paddingSmall);
  }

  .user-panel_users {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--paddingBig);
  }
`;
