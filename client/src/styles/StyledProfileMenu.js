import styled from "styled-components";

export const StyledProfileMenu = styled.article`
  --width: 200px;
  background-color: var(--primaryLighter);
  position: absolute;
  right: 100%;
  z-index: 1;
  width: var(--width);
  .profile-menu {
    position: relative;
  }
  .profile-menu_img {
    z-index: 2;
    user-select: none;
    cursor: pointer;
    --width: 48px;
    position: absolute;
    width: var(--width);
    left: calc(100% - var(--width) * 1.5);
    top: calc(var(--width) / 2 * -1);
    border-radius: 100%;
    border: 4px solid var(--primaryLighter);
    aspect-ratio: 1;
    background-color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .profile-menu_dropdown {
    border: 1px solid var(--primaryDark);
    padding: var(--padding);
    gap: var(--paddingSmall);
    display: flex;
    flex-direction: column;
  }

  .profile-menu_dropdown_info {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .profile-menu_dropdown_info_name {
  }

  .profile-menu_dropdown_options {
    display: flex;
    flex-direction: column;
    gap: var(--paddingSmall);

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: var(--text);
    }
  }

  .profile-menu_options_dropdown_settings {
    div {
      display: flex;
      flex-direction: column;
      gap: var(--paddingSmall);
      padding: var(--paddingSmall);
    }
  }

  .profile-menu_options_dropdown_system {
    div {
      display: flex;
      justify-content: space-between;
      padding: var(--paddingSmall);
    }
  }
`;
