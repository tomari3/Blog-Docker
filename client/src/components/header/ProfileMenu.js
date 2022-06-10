import React, { useState, useRef } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { StyledProfileMenu } from "../../styles/StyledProfileMenu";
import { StyledLink } from "../../styles/StyledLink";
import { ProfilePicture } from "../user/ProfilePicture";

export const ProfileMenu = ({ username, toggle }) => {
  const { auth, setAuth } = useAuth();
  const logout = useLogout();

  const [open, setOpen] = useState(false);

  const ignored = useRef();
  const ref = useRef();

  useOnClickOutside(ref, ignored, () => setOpen(false));

  const signOut = async () => {
    await logout();
    setAuth({});
  };
  return (
    <StyledProfileMenu className="ProfileMenu">
      <div
        ref={ignored}
        onClick={() => setOpen(!open)}
        className="profile-menu"
      >
        <div className="profile-menu_img">
          <ProfilePicture noPop userData={auth} />
        </div>
        {open && (
          <section
            ref={ref}
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
              <div className="profile-menu_options_dropdown_settings">
                <h1>general</h1>
                <div>
                  <StyledLink to={`/${auth.username}`}>profile</StyledLink>
                  <StyledLink to="/settings">friends</StyledLink>
                  <StyledLink to="/settings">saved</StyledLink>
                </div>
              </div>
              <div className="profile-menu_options_dropdown_system">
                <h1>system</h1>
                <div>
                  <StyledLink onClick={toggle} as="button">
                    dark
                  </StyledLink>
                  <StyledLink onClick={signOut} as="button">
                    sign out
                  </StyledLink>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </StyledProfileMenu>
  );
};
