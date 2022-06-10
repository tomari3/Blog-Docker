import React from "react";
import { StyledBanner } from "../../styles/StyledBanner";
import { Tag } from "./Tag";

export const TagBanner = ({ tagData }) => {
  return (
    <StyledBanner className="TagBanner">
      <div className="banner">
        <div className="banner_image">
          <div className="img"></div>
        </div>
        <div className="banner_info">
          <Tag tagData={tagData} />
        </div>
      </div>
    </StyledBanner>
  );
};
