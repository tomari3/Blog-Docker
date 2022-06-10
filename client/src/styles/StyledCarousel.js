import styled from "styled-components";

export const StyledCarousel = styled.section`
  .images-wrapper {
    --index: ${(props) => props.imageIndex};
    display: flex;
    position: relative;
    overflow: hidden;
    height: min-content;
    max-height: 90vh;

    img {
      /* transform: translateX(calc((-100% - 1rem) * var(--index))); */
      border-radius: var(--radius);
      width: 0;
      &:nth-child(${(props) => props.imageIndex + 1}) {
        width: 100%;
        opacity: 1;
      }
    }
  }

  .images-counter {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    font-weight: bold;
    font-size: var(--fontSizeSmall);
    padding: var(--paddingSmall) var(--padding);
    margin: var(--paddingSmall);
    border-radius: var(--radiusBig);
    background-color: var(--shadowDark);
  }

  &:is(:hover, :focus) > button {
    opacity: 1;
  }
  button {
    transition: opacity 0.4s ease;
    opacity: 0;
    position: absolute;
    z-index: 1;
    border-radius: 100%;
    top: 50%;
    height: 2.5rem;
    aspect-ratio: 1;
    background-color: var(--primaryLighter);
    box-shadow: var(--shadowLight) 0px 4px 50px 0px;

    &.swipe-left {
      left: var(--paddingBig);

      & svg {
        transform: rotate(180deg);
        fill: var(--text);
      }
    }
    &.swipe-right {
      right: var(--paddingBig);
    }
  }
`;
