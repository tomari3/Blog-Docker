import React from "react";
import { StyledSvg } from "../../styles/StyledSvg";

export const SwipeArrow = ({ className }) => {
  return (
    <StyledSvg className={`SwipeArrowSvg ${className || ""} svg-wrapper`}>
      <svg
        aria-label="SwipeArrow"
        className="SwipeArrow"
        role="img"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        fill="currentColor"
      >
        <path d="M7.8 4.53 13.273 10 7.8 15.47a.75.75 0 0 0 1.061 1.06l6-6a.751.751 0 0 0 0-1.06l-6-6A.75.75 0 0 0 7.8 4.53z"></path>
      </svg>
    </StyledSvg>
  );
};
