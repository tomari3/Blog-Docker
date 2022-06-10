import React, { useState, useEffect } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";

import { Camera } from "../../assets/svg/Camera";
import { Edit } from "../../assets/svg/Edit";
import { Cancel } from "../../assets/svg/Cancel";
import { Trash } from "../../assets/svg/Trash";

import { ModalBasis } from "../../styles/ModalBasis";
import { StyledButton } from "../../styles/StyledButton";
import { StyledProfilePictureOptions } from "../../styles/StyledProfilePictureOptions";
import { StyledFileInput } from "../../styles/StyledFileInput";

function useInput(init) {
  const [newPictureFile, setFile] = useState(init);
  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
  };
  return { newPictureFile, handleFileInput };
}

export const ProfilePictureOptions = ({
  setProfilePictureOptions,
  picture,
}) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const { newPictureFile, handleFileInput } = useInput(null);

  const sendNewPicture = async () => {
    let formData = new FormData();
    formData.append("avatar", newPictureFile);
    const postUrl = `users/${auth._id}/avatar`;
    try {
      const { data } = await axiosPrivate.put(postUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      formData = new FormData();
    } catch (error) {
      console.log(error);
    }
  };

  const closeOptions = () => {
    setProfilePictureOptions(false);
  };

  useEffect(() => {
    if (newPictureFile === null) return;
    console.log(newPictureFile);
    sendNewPicture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPictureFile]);

  return (
    <ModalBasis onClick={closeOptions}>
      <StyledProfilePictureOptions
        className="profile-picture-options"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="profile-picture-options_exit">
          <StyledButton onClick={closeOptions}>
            <Cancel />
          </StyledButton>
        </div>
        <div className="profile-picture-options_picture">
          <img src={picture} alt="profile" />
        </div>
        <div className="profile-picture-options_options">
          <div className="left">
            <div className="profile-picture-options_options_option">
              <StyledFileInput>
                <label>
                  <Camera />
                  change
                  <input
                    type="file"
                    accept=".png,.jpeg"
                    name="cover"
                    onChange={handleFileInput}
                    onInput={sendNewPicture}
                  />
                </label>
              </StyledFileInput>
            </div>
            <div className="profile-picture-options_options_option">
              <StyledButton>
                <Edit /> <p>delete</p>
              </StyledButton>
            </div>
          </div>
          <div className="profile-picture-options_options_option">
            <StyledButton>
              <Trash /> <p>delete</p>
            </StyledButton>
          </div>
        </div>
      </StyledProfilePictureOptions>
    </ModalBasis>
  );
};