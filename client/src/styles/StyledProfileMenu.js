import styled from "styled-components";

export const StyledProfileMenu = styled.article`
  .profile-menu_img {
    border-radius: 100%;
    aspect-ratio: 1;
    overflow: hidden;
  }
  .profile-menu_dropdown_info {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
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
