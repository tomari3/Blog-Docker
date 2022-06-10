import React, { useState, useRef } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useAuth } from "../../hooks/useAuth";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { StyledButton } from "../../styles/StyledButton";
import { StyledOptions } from "../../styles/StyledOptions";
import { Alert } from "../../assets/Alert";
import { Dots } from "../../assets/svg/Dots";
import { Edit } from "../../assets/svg/Edit";
import { Share } from "../../assets/svg/Share";
import { Trash } from "../../assets/svg/Trash";

export const PostOptions = (props) => {
  const {
    postId,
    postAuthor,
    setIsPostEditMode,
    setPostContent,
    isDeleted,
    setIsDeleted,
  } = props;

  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const isAuthor = postAuthor === auth._id;

  const ref = useRef();
  const ignored = useRef();
  useOnClickOutside(ref, ignored, () => setOpen(false));

  const openEditMode = () => setIsPostEditMode(true);
  const toggleModal = () => setOpen(!open);
  const toggleAlert = () => setAlert(!alert);
  const deletePost = async () => {
    const payload = {};
    const postUrl = `posts/${postId}`;

    try {
      await axiosPrivate.delete(postUrl, payload);
      setPostContent("deleted");
      setIsDeleted(true);
      toggleAlert();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledOptions onClick={(e) => e.stopPropagation()} className="postOptions">
      <StyledButton ref={ignored} onClick={() => setOpen(!open)}>
        <Dots />
      </StyledButton>
      {open && !isDeleted && (
        <div ref={ref} className="options">
          <div className="options_option">
            <Share />
            <StyledButton>share</StyledButton>
          </div>
          {isAuthor && (
            <>
              {" "}
              <div className="options_option">
                <Edit />
                <StyledButton
                  onClick={() => {
                    toggleModal();
                    openEditMode();
                  }}
                >
                  edit
                </StyledButton>
              </div>
              <div className="options_option">
                <Trash />
                <StyledButton onClick={toggleAlert}>delete</StyledButton>
              </div>
            </>
          )}
        </div>
      )}
      {alert && (
        <Alert header={"this will permanently delete your post"}>
          <StyledButton onClick={deletePost} $color $bold>
            delete
          </StyledButton>
          <StyledButton onClick={toggleAlert}>dont delete</StyledButton>
        </Alert>
      )}
    </StyledOptions>
  );
};
