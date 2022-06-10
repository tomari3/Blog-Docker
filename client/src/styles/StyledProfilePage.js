import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledProfilePage = styled(motion.main)`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "details suggestions" "activity suggestions";
  gap: 2rem;
  & > section:first-child {
    border: 1px solid var(--primaryDark);
    background-color: var(--primaryLighter);
  }

  .user {
    grid-area: details;
  }

  .user_details {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "image" "info";
  }

  .user_details_image-wrapper {
    grid-area: image;
    height: 400px;
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
    gap: 0.5rem;
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
  .suggestions {
    grid-area: suggestions;
  }

  max-width: 1200px;
`;
