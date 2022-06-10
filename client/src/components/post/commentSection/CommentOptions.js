import React, { useState, useRef } from "react";

import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useAuth } from "../../../hooks/useAuth";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

import { Alert } from "../../../assets/Alert";
import { StyledButton } from "../../../styles/StyledButton";
import { StyledOptions } from "../../../styles/StyledOptions";
import { Dots } from "../../../assets/svg/Dots";
import { Edit } from "../../../assets/svg/Edit";
import { Share } from "../../../assets/svg/Share";
import { Trash } from "../../../assets/svg/Trash";

export const CommentOptions = (props) => {
  const {
    commentId,
    commentAuthor,
    postId,
    setIsCommentEditMode,
    setCommentContent,
    isDeleted,
    setIsDeleted,
  } = props;
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const isAuthor = commentAuthor === auth._id;

  const ref = useRef();
  const ignored = useRef();
  useOnClickOutside(ref, ignored, () => setOpen(false));

  const openEditMode = () => setIsCommentEditMode(true);
  const toggleAlert = () => setAlert(!alert);
  const toggleModal = () => setOpen(!open);

  const deleteComment = async () => {
    const payload = {};
    const postUrl = `posts/${postId}/comments/${commentId}`;

    try {
      await axiosPrivate.delete(postUrl, payload);
      setCommentContent("deleted");
      setIsDeleted(true);
      toggleAlert();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledOptions
      onClick={(e) => e.stopPropagation()}
      className="commentOptions"
    >
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
        <Alert header={"this will permanently delete your comment"}>
          <StyledButton onClick={deleteComment} $color $bold>
            delete
          </StyledButton>
          <StyledButton onClick={toggleAlert}>dont delete</StyledButton>
        </Alert>
      )}
    </StyledOptions>
  );
};
