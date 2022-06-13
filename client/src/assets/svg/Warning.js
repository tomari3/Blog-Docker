import React from "react";
import { StyledSvg } from "../../styles/StyledSvg";

export const Warning = ({ className }) => {
  return (
    <StyledSvg className={`WarningSvg ${className || ""} svg-wrapper`}>
      <svg
        aria-label="Warning"
        className="Warning"
        height="24"
        role="img"
        viewBox="0 0 16 16"
        width="24"
        fill="currentColor"
      >
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
    </StyledSvg>
  );
};
