import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { ProfileMenu } from "./ProfileMenu";
import { PostForm } from "../post/PostForm";
import { ModalBasis } from "../../styles/ModalBasis";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { StyledHeader } from "../../styles/StyledHeader";
import { StyledLink } from "../../styles/StyledLink";
import { StyledButton } from "../../styles/StyledButton";

export const Header = ({ toggle, dark }) => {
  const [postModal, setPostModal] = useState(false);

  const { width: w } = useWindowDimensions();

  const { auth } = useAuth();

  return auth._id && w > 700 ? (
    <>
      <StyledHeader className="Header">
        <div className="logo">
          <StyledLink $color to="/">
            <h1 className="special-font">THE SOCIAL</h1>
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
          <StyledButton onClick={() => setPostModal(!postModal)} $color>
            post
          </StyledButton>
        </div>
      </StyledHeader>
      {postModal && (
        <ModalBasis onClick={() => setPostModal(!postModal)}>
          <PostForm className="wide" />
        </ModalBasis>
      )}
    </>
  ) : null;
};
