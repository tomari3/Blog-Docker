import React from "react";

import { ModalBasis } from "../styles/ModalBasis";
import { StyledAlert } from "../styles/StyledAlert";

export const Alert = ({ children, header }) => {
  return (
    <StyledAlert className="Alert">
      <ModalBasis onClick={(e) => e.stopPropagation()}>
        <section className="alert">
          <div className="alert_header">
            <h1>{header}</h1>
          </div>
          {children}
        </section>
      </ModalBasis>
    </StyledAlert>
  );
};
