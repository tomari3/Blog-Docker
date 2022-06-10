import styled from "styled-components";

export const StyledBanner = styled.div`
  .banner {
    padding: var(--paddingSmaller);
    display: flex;
    gap: var(--paddingSmall);
    align-items: center;
  }
  .banner_image {
    width: 42px;
    aspect-ratio: 1;
    background-color: var(--accent);
    border-radius: 100%;
    overflow: hidden;
  }

  .banner_info {
    display: flex;
    flex-direction: column;
  }
`;
