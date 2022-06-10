import React, { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { StyledProfilePicture } from "../../styles/StyledProfilePicture";

import { ProfilePictureOptions } from "./ProfilePictureOptions";

export const ProfilePicture = ({ userData, noPop }) => {
  const { auth } = useAuth();

  const isAuthor = userData?._id === auth?._id;

  const [profilePictureOptions, setProfilePictureOptions] = useState(false);

  const DEFAULT_AVATAR =
    "https://res.cloudinary.com/dv32amiu2/image/upload/v1654707049/cbwzhcmw2v6xvhq5nytk.jpg";
  const src = userData?.avatar?.src || DEFAULT_AVATAR;

  const openOptions = () => {
    setProfilePictureOptions(true);
  };
  return (
    <>
      <StyledProfilePicture onClick={openOptions} className="profile-picture">
        <img src={src} alt="profile" />
      </StyledProfilePicture>
      {profilePictureOptions && isAuthor && !noPop && (
        <ProfilePictureOptions
          picture={src}
          setProfilePictureOptions={setProfilePictureOptions}
        />
      )}
    </>
  );
};
