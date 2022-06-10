import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const blink = keyframes`
from {
  border-color: transparent;
}
to {
  border-color: var(--accentSoft);
}
`;

export const StyledComment = styled(motion.div)`
  --line: 2px;
  --side: 35px;
  display: grid;
  grid-template-columns: var(--side) auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: "comment comment" "line sub" "input input";
  position: relative;
  &.deleted {
    opacity: 0.5;
    * {
      cursor: default;
      user-select: none;
      pointer-events: none;
    }
  }
  .comment,
  .sub-comment {
    grid-area: comment;
    display: grid;
    grid-template-columns: var(--side) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "up comment" "down interaction";
    column-gap: calc(var(--side) / 4);
    row-gap: var(--paddingSmaller);
  }

  .sub-comment {
    & ~ .comment_line {
      span {
        height: calc(100% - 2rem + 5px);
        top: calc(-1.5rem - 10px);
      }
    }
    .comment-side-up {
      .comment-side-up_img {
        position: relative;
        width: calc(var(--side) - 10px);
        &:before {
          bottom: calc(50% - var(--line) / 2);
          left: calc(-50% - (var(--line) / 2) - 10px);
          position: absolute;
          content: "";
          aspect-ratio: 1;
          width: 0.8rem;
          border-width: 0 0 var(--line) var(--line);
          border-style: solid;
          border-color: var(--primaryDark);
          border-bottom-left-radius: 0.5rem;
        }
      }
    }
  }

  .comment_line {
    grid-area: line;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    span {
      top: -1.5rem;
      position: absolute;
      width: 2px;
      height: calc(100% - 2rem - 5px);
      background-color: var(--primaryDark);
    }
  }
  .comment-section_sub-comments {
    grid-area: sub;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comment-side-up {
    grid-area: up;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .comment-side-up_img {
    overflow: hidden;
    width: var(--side);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent);
    aspect-ratio: 1;
    border-radius: 100%;
    grid-area: img;
  }
  .comment-options {
    position: absolute;
    right: var(--paddingSmaller);
    top: 0;
    z-index: 1;
  }
  .comment-content {
    grid-area: comment;
    background-color: var(--primaryDark);
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border-radius: var(--radiusSmall);
    cursor: default;
    position: relative;

    p {
      cursor: text;
    }

    textarea {
      width: 100%;
      height: 100%;
      overflow: hidden;
      resize: none;
      padding-left: var(--paddingSmall);
      background-color: transparent;

      &:focus-visible {
        outline: 0;
        border-left: 3px solid var(--accentSoft);
        animation: ${blink} 1s linear infinite alternate;
      }
    }
  }
  .comment-content_content {
    font-size: var(--fontSize);
  }
  .comment-interaction {
    grid-area: interaction;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--textWeaker);
  }

  .comment-interaction_btn {
    display: flex;
    gap: var(--paddingSmall);
  }

  .comment-interaction_btn_btn {
    &.liked {
      color: var(--accent);
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .comment-interaction_btn_amount {
    &:hover {
      text-decoration: underline;
    }
  }

  .comment-input {
    padding: 5px 0;
    grid-area: input;
    form {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      margin-left: var(--side);
    }
    button {
      margin-left: 0.5rem;
      width: 25px;
      aspect-ratio: 1;
    }
  }
`;
