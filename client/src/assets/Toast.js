import React from "react";
import { StyledButton } from "../styles/StyledButton";
import { StyledToast } from "../styles/StyledToast";

import { Cancel } from "./svg/Cancel";
import { Success } from "./svg/Success";

export const Toast = ({ type, msg }) => {
  return (
    <StyledToast
      onClick={(e) => e.stopPropagation()}
      className="Toast"
      type={type}
    >
      <div className="toast-svg">
        <Success />
      </div>
      <div className="toast-info">{msg}</div>
      <div className="toast-exit">
        <StyledButton>
          <Cancel />
        </StyledButton>
      </div>
    </StyledToast>
  );
};
