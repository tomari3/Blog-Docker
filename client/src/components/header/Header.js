import { useAuth } from "../../hooks/useAuth";

import { ProfileMenu } from "./ProfileMenu";

import { StyledHeader } from "../../styles/StyledHeader";
import { StyledLink } from "../../styles/StyledLink";
import { StyledButton } from "../../styles/StyledButton";

export const Header = ({ toggle, dark }) => {
  const { auth } = useAuth();

  return (
    <StyledHeader className="Header">
      <div className="logo">
        <StyledLink $color to="/">
          <h1>BHFC</h1>
        </StyledLink>
      </div>
      <div className="header">
        <nav className="header_nav">
          {!auth?.username ? (
            <>
              <StyledLink to="/login">login</StyledLink>
              <StyledLink to="/signup">sign up</StyledLink>
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
      <div className="post-prompt">
        <StyledButton $color>post</StyledButton>
      </div>
    </StyledHeader>
  );
};
