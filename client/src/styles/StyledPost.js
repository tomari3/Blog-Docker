import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

const blink = keyframes`
from {
  border-color: transparent;
}
to {
  border-color: var(--accentSoft);
}
`;

export const StyledPost = styled(motion.article)`
  padding: 1rem;
  background-color: var(--primaryLighter);
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: var(--radiusBig);
  box-shadow: var(--cardShadowLarge);

  position: relative;

  &.deleted {
    display: none;
  }

  .post-options {
    position: absolute;
    right: var(--padding);
    top: var(--paddingSmall);
  }

  &:last-child {
    border: 1px solid var(--primaryDark);
  }

  .post-content {
    flex: 1;
    border-bottom: 1px solid var(--primaryDark);
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }
  .post-content_content {
    font-size: var(--fontSizeMedium);
    display: flex;
    flex-direction: column;
    gap: var(--padding);
    textarea {
      width: 100%;
      height: 100%;
      overflow: hidden;
      resize: none;
      padding-left: var(--paddingSmall);

      &:focus-visible {
        outline: 0;
        border-left: 3px solid var(--accentSoft);
        animation: ${blink} 1s linear infinite alternate;
      }
    }
  }

  .post-content-details {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1.5rem 1fr;
    grid-template-areas: "img username" "img date";

    column-gap: var(--paddingSmall);
  }

  .post-content-details_username {
    width: min-content;
    grid-area: username;
    text-transform: capitalize;
    padding: 4px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  .post-content-details_date {
    grid-area: date;
    font-size: var(--fontSizeSmall);
    color: var(--textWeak);
    padding: 0 0 0 4px;
  }

  .post-content-details_img {
    overflow: hidden;
    grid-area: img;
    height: 48px;
    aspect-ratio: 1;
    background-color: var(--accent);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-content_tags {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .post-interactions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .interaction-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: flex;
    button {
      width: 48px;
      aspect-ratio: 1;
      transition: all 0.3s ease;
      border-radius: 100%;
      padding: 5px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .comment-input {
    form {
      display: flex;
    }
    padding-bottom: 2px;
  }
`;
