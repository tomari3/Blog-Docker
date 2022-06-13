import styled from "styled-components";

export const StyledSortOptions = styled.section`
  display: flex;
  padding: var(--paddingSmall);
  .line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-right: var(--padding);
  }

  .line-wrapper_line {
    height: 1px;
    width: 100%;
    background-color: var(--primaryDarker);
  }

  .posts_sort {
    select {
      background-color: transparent;
      border: 0;
    }

    option {
      font-weight: bold;
    }
  }
`;
