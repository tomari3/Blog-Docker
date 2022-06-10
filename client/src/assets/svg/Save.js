import React from "react";
import { StyledSvg } from "../../styles/StyledSvg";

export const Save = ({ className }) => {
  return (
    <StyledSvg className={`SaveSvg ${className || ""} svg-wrapper`}>
      <svg
        aria-label="Save"
        className="Save"
        height="24"
        role="button"
        viewBox="0 0 24 24"
        width="24"
      >
        <polygon
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1"
        ></polygon>
      </svg>
    </StyledSvg>
  );
};
