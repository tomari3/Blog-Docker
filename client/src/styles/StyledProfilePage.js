import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledProfilePage = styled(motion.main)`
  display: flex;
  position: relative;
  gap: var(--paddingBig);

  .profile-page_content {
    min-width: 375px;
  }

  .user {
    flex: 1 1 auto;
    border-bottom: 1px solid var(--primaryDarker);
  }

  .user_details {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "image" "info";
    overflow: hidden;
  }

  .user_details_image-wrapper {
    grid-area: image;
    height: 300px;
    position: relative;
    background-color: var(--accentSofter);
  }

  .user_details_image-wrapper_cover {
    height: 100%;
    overflow: hidden;
  }

  .user_details_image-wrapper_profile {
    --width: 150px;
    position: absolute;
    bottom: calc(var(--width) * -1 / 3);
    left: calc(15% - (var(--width) / 2));
    background-color: var(--accent);
    aspect-ratio: 1;
    width: var(--width);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid var(--primaryLighter);
    overflow: hidden;
  }

  .user_details_image-wrapper_actions {
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
  }

  .user_details_info {
    grid-area: info;
    padding: 3rem 7.5% 2rem; // TODO refactor for responsiveness
  }
  .user_details_info_username {
    text-transform: capitalize;
  }
  .user_details_info_date {
    text-transform: capitalize;
  }

  .profile-page_suggestions {
    margin-top: var(--paddingBig);
  }

  .profile-page_suggestions_user-panel {
    position: sticky;
    top: var(--paddingBig);
  }
`;
