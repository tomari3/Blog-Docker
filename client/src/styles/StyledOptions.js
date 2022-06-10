import styled from "styled-components";

export const StyledOptions = styled.article`
  position: relative;
  cursor: default;
  z-index: 2;
  .options {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    gap: var(--padding);
    position: absolute;
    right: 100%;
    border: 1px solid var(--primaryDark);
    box-shadow: var(--shadowLighter) 0px 2px 8px 0px;
    padding: var(--paddingBig) var(--padding);
  }

  .options_option {
    display: flex;
    align-items: center;
    gap: var(--padding);
    .svg-wrapper {
      padding: 0;
      width: max-content;
      aspect-ratio: 1;
      cursor: default;
    }
  }

  .options button {
    &:hover {
      text-decoration: underline;
    }
  }
`;
