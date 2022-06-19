import styled from "styled-components";

export const StyledProfileMenu = styled.article`
  .profile-menu_img {
    width: 48px;
    border-radius: 100%;
    aspect-ratio: 1;
    overflow: hidden;
  }
  .profile-menu_dropdown_info {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: var(--padding) 0;
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
    button {
      text-align: left;
    }
  }
`;
