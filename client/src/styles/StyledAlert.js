import styled from "styled-components";

export const StyledAlert = styled.section`
  .alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: var(--paddingBig);
    border-radius: var(--radiusBigger);
    background-color: var(--primary);
    gap: var(--padding);

    .alert_header {
      font-size: var(--fontSizeMediumBig);
      color: var(--error);
    }

    button {
      width: 100%;
      border-radius: var(--radius);
      padding: var(--padding);
    }
  }
`;
