import React from "react";
import { StyledButton } from "../styles/StyledButton";
import { StyledToast } from "../styles/StyledToast";

import { Cancel } from "./svg/Cancel";
import { Success } from "./svg/Success";
import { Warning } from "./svg/Warning";

const handleType = (type) => {
  switch (type) {
    case "error":
      return <Warning />;
    case "success":
      return <Success />;
    default:
      return "var(--primary)";
  }
};

export const Toast = ({ type, msg }) => {
  const icon = handleType(type);
  const isOn = type ? "is-on" : "";
  return (
    <StyledToast
      onClick={(e) => e.stopPropagation()}
      className={`Toast ${isOn}`}
      type={type}
    >
      <div className="toast-svg">{icon}</div>
      <div className="toast-info">{msg}</div>
      <div className="toast-exit">
        <StyledButton>
          <Cancel />
        </StyledButton>
      </div>
    </StyledToast>
  );
};
