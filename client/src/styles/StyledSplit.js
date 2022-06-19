import styled from "styled-components";

export const StyledSplit = styled.main`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: var(--paddingBigger);
  margin: 10rem 0;
  .hero {
    padding: var(--paddingBigger);
    width: clamp(300px, 40vw, 1000px);
    height: 50vh;
    background-color: var(--accent);
  }
`;
