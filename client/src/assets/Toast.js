import React from "react";
import { StyledButton } from "../styles/StyledButton";
import { StyledToast } from "../styles/StyledToast";

import { Cancel } from "./svg/Cancel";
import { Save } from "./svg/Save";

export const Toast = ({ type }) => {
  return (
    <StyledToast className="Toast" type={type}>
      <div className="toast-svg">
        <Save />
      </div>
      <div className="toast-info">this action was successfull</div>
      <div className="toast-exit">
        <StyledButton>
          <Cancel />
        </StyledButton>
      </div>
    </StyledToast>
  );
};
