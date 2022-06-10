import styled from "styled-components";

export const StyledEditableBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--padding);
  div {
    display: flex;
  }
  button {
    padding: var(--paddingSmall) var(--padding);
  }
`;
