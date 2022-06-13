import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForm = styled(motion.section)`
  --small: 0.8rem;
  --rem: 1rem;

  padding: var(--paddingBigger) var(--paddingBig) var(--padding);
  background-color: var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadowLight) 0px 4px 50px 0px;
  width: max-content;
  &.wide {
    width: 500px;
  }

  &.inline {
    width: auto;
    --small: var(--fontSizeSmaller);
    --rem: var(--fontSizeSmaller);
    border-radius: 0;
    border-top: 1px solid var(--primaryDark);
    background-color: inherit;
    box-shadow: none;
    padding: 1rem 0 0 0;
    margin: 1rem 0 0 0;
    .form-field {
      textarea,
      input {
        border-radius: calc(var(--radiusBigger));
      }
    }
    .form-field-err {
      height: auto;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 0.8rem;
      width: min-content;
    }
  }

  &.sub {
    width: 100%;
    padding: 0;
    --small: 0.6rem;
    --rem: 0.5rem;
    background-color: inherit;
    box-shadow: none;
    font-size: var(--fontSizeSmall);
    .form-field {
      label {
        opacity: 0;
      }
      textarea,
      input {
        border-radius: calc(var(--radiusHuge));
        padding: var(--paddingSmall);
      }
    }
    .form-field-err {
      height: auto;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: start;
    gap: var(--rem);
    padding-bottom: var(--padding);

    svg {
      fill: var(--accent);
    }
  }

  .form-header {
    text-transform: capitalize;
    font-weight: bold;
    font-size: var(--fontSizeMediumBig);
  }

  .form-err {
    font-size: var(--fontSizeSmall);
    color: var(--error);
    height: 3ch;
  }

  .form-field {
    display: grid;

    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr auto;

    align-items: center;

    grid-template-areas: "label detail" "input input" "err err";
    width: 100%;
    position: relative;

    &.checkbox {
      padding: var(--padding) 0;
      display: flex;
    }
    &.fake {
      cursor: pointer;

      * {
        pointer-events: none;
      }

      &:hover {
        input {
          background-color: var(--primaryLight);
        }
      }
    }

    label {
      grid-area: label;
      padding-left: 1rem;
      pointer-events: none;
      color: var(--textWeaker);

      transition: 0.3s all ease;
    }

    input,
    textarea {
      &:not([type="checkbox"]) {
        + label {
          grid-row: 2;
          position: absolute;
          top: calc(var(--rem) * 1.2 + 1px);

          &.active {
            top: calc(var(--rem) / 2);
            left: 0;
            font-size: var(--fontSizeSmall);
          }
        }
        &:focus + label {
          top: calc(var(--rem) / 2);
          left: 0;
          font-size: var(--fontSizeSmall);
        }
      }
      &.success {
        border-color: var(--success);
      }
      grid-area: input;
      padding: calc(var(--rem) * 1.5) calc(var(--rem)) calc(var(--rem) / 2);
      border: 1px solid var(--primaryDark);
      border-radius: var(--radius);
      resize: none;
      overflow: hidden;
      word-wrap: break-word;

      &:focus-visible {
        outline: 1px solid var(--primaryDark);
      }

      // get rid or user agent stylesheet
      &:-webkit-autofill,
      &:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
      }
    }

    .form-field-detail {
      grid-area: detail;
      position: relative;
      padding: 2px 4px;
      z-index: 10;
      &:hover > article {
        opacity: 1;
        pointer-events: all;
      }

      span {
        color: var(--textLighter);
        cursor: pointer;
      }
      article {
        top: 0;
        position: absolute;
        left: 1rem;
        font-size: var(--fontSizeSmall);
        border: 1px solid black;
        border-radius: var(--radius);
        border-top-left-radius: 0;
        height: inherit;
        width: max-content;
        max-width: 10rem;
        padding: 5px;
        background-color: var(--primary);
        opacity: 0;
        pointer-events: none;
      }
    }

    .form-field-err {
      grid-area: err;
      font-size: var(--fontSizeSmall);
      color: var(--error);
      height: 3ch;
      padding-left: 0.5rem;
    }
  }

  .suggestions {
    display: flex;
    flex-direction: column;
    gap: var(--paddingSmall);
    padding: var(--padding);
  }
  .suggestion {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1ch;
    font-size: var(--fontSizeSmall);
    text-transform: capitalize;
  }
  .image-preview {
    padding-bottom: var(--paddingSmaller);
    margin-bottom: var(--paddingSmall);
    gap: var(--padding);
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-color: var(--text) transparent;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 20px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: var(--radius);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: var(--radius);
      border: 5px solid transparent;
      background-clip: content-box;
      background-color: var(--text);

      &:hover {
        background-color: var(--textWeaker);
      }
    }
  }

  .image-preview-img {
    display: inline-block;
    position: relative;
    &:is(:hover, :focus) > button {
      display: block;
    }
    button {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      background-color: var(--primary);
      border-radius: 100%;
      transform: scale(0.7);
    }
    svg {
      fill: var(--text);
    }
    img {
      max-height: 150px;
      margin: 2px;
      border-radius: var(--radius);
    }
  }
`;
