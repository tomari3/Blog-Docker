import React from "react";
import { StyledSvg } from "../../styles/StyledSvg";

export const Comment = ({ className }) => {
  return (
    <StyledSvg className={`CommentSvg ${className || ""} svg-wrapper`}>
      <svg
        aria-label="Comment"
        className="Comment"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1"
        ></path>
      </svg>
    </StyledSvg>
  );
};
