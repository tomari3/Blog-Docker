import React from "react";

import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

import { StyledProfileMenu } from "../../styles/StyledProfileMenu";
import { StyledLink } from "../../styles/StyledLink";
import { ProfilePicture } from "../user/ProfilePicture";

export const ProfileMenu = ({ username, toggle }) => {
  const { auth, setAuth } = useAuth();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    setAuth({});
  };
  return (
    <StyledProfileMenu className="ProfileMenu">
      <div className="profile-menu">
        <div className="profile-menu_img">
          <ProfilePicture noPop userData={auth} />
        </div>

        <section
          onClick={(e) => e.stopPropagation()}
          className="profile-menu_dropdown"
        >
          <div className="profile-menu_dropdown_info">
            <div className="profile-menu_dropdown_info_name">
              <StyledLink $color to={`/${auth.username}`} $bold>
                {username}
              </StyledLink>
            </div>
          </div>
          <div className="profile-menu_dropdown_options">
            <StyledLink to={`/${auth.username}`}>profile</StyledLink>
            <StyledLink onClick={toggle} as="button">
              Dark
            </StyledLink>
            <StyledLink onClick={signOut} as="button">
              sign out
            </StyledLink>
          </div>
        </section>
      </div>
    </StyledProfileMenu>
  );
};
