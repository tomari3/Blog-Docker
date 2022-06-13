import styled from "styled-components";

export const StyledPanel = styled.section`
  background-color: var(--primaryLighter);
  border: 1px solid var(--primaryDark);
  padding: var(--padding);
  width: max-content;

  h1 {
    font-size: var(--fontSizeMedium);
    padding: var(--paddingSmall);
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--paddingBig);
  }

  .user-panel_users {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--paddingBig);
  }
`;
