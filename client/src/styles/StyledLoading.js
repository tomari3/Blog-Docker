import styled from "styled-components";

export const StyledLoading = styled.div`
  .spinner {
    width: clamp(24px, 100%, 48px);
    aspect-ratio: 1;
    margin: 24px auto;
    background-color: var(--accentSoft);

    border-radius: 100%;
    -webkit-animation: scale 1s infinite ease-in-out;
    animation: scale 1s infinite ease-in-out;
  }

  @-webkit-keyframes scale {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes scale {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`;
