import styled from "styled-components";

export const StyledProfilePictureOptions = styled.section`
  position: relative;
  width: clamp(300px, 50vw, 1200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: var(--radiusBig);
  overflow: hidden;

  .profile-picture-options_exit {
    position: absolute;
    right: var(--paddingSmall);
    top: var(--paddingSmall);
    z-index: 1;
    border-radius: 100%;
    height: 2.5rem;
    aspect-ratio: 1;
    background-color: var(--primaryLighter);
    box-shadow: var(--shadowLight) 0px 4px 50px 0px;
  }

  .profile-picture-options_picture {
    height: 100%;
    overflow: hidden;

    img {
    }
  }
  .profile-picture-options_options {
    width: 100%;
    height: 33%;
    background-color: var(--primaryLighter);
    display: flex;
    align-items: center;
    padding: 0 var(--padding);
    justify-content: space-between;
  }

  .left {
    display: flex;
  }

  .profile-picture-options_options_option {
    input {
      display: hidden;
    }
    button,
    label {
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--padding);

      &:hover {
        text-decoration: underline;
      }
    }

    &:hover {
      background-color: var(--primary);
    }
  }
`;
