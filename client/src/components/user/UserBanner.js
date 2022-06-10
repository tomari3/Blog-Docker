import React from "react";

import { ProfilePicture } from "./ProfilePicture";

import { StyledLink } from "../../styles/StyledLink";
import { StyledBanner } from "../../styles/StyledBanner";

export const UserBanner = ({ userData }) => {
  return (
    <StyledBanner className="UserBanner">
      <div className="banner">
        <div className="banner_image">
          <div className="img">
            <ProfilePicture noPop userData={userData} />
          </div>
        </div>
        <div className="banner_info">
          <StyledLink to={`/${userData.username}`}>
            {userData.username}
          </StyledLink>
        </div>
      </div>
    </StyledBanner>
  );
};
