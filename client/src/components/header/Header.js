import { useAuth } from "../../hooks/useAuth";

import { ProfileMenu } from "./ProfileMenu";

import { StyledHeader } from "../../styles/StyledHeader";
import { StyledLink } from "../../styles/StyledLink";

export const Header = ({ toggle, dark }) => {
  const { auth } = useAuth();

  return (
    <StyledHeader className="Header">
      <div className="header">
        <div className="header_logo">
          <StyledLink $color to="/">
            BHFC
          </StyledLink>
        </div>
        <div className="header_search">
          <input />
        </div>
        <nav className="header_nav">
          {!auth?.username ? (
            <>
              <StyledLink to="/login">login</StyledLink>
              <StyledLink to="/signup">sing up</StyledLink>
            </>
          ) : (
            <div className="header_nav_profile-menu">
              <ProfileMenu
                username={auth?.username}
                toggle={toggle}
                dark={dark}
              />
            </div>
          )}
        </nav>
      </div>

      {!auth?.username ? <div></div> : <></>}
    </StyledHeader>
  );
};
