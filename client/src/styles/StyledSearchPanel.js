import styled from "styled-components";

export const StyledSearchPanel = styled.section`
  .search-panel {
    position: relative;
  }

  .search-panel_icon {
    position: absolute;
    left: 5px;
    top: calc(50% - 19px);
  }

  input {
    background-color: var(--primaryDark);
    height: 48px;
    width: 100%;
    border-radius: var(--radiusBigger);
    font-size: var(--fontSizeMedium);
    padding: var(--padding);
    padding-left: 50px;
  }
`;
