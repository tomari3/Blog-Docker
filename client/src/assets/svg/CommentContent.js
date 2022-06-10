import React, { useState, useRef } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { EditableBlock } from "../EditableBlock";
import { ModalBasis } from "../../styles/ModalBasis";

import { StyledEditableBlock } from "../../styles/StyledEditableBlock";
import { StyledButton } from "../../styles/StyledButton";

export const CommentContent = ({
  postId,
  commentId,
  isEditMode,
  setIsEditMode,
  commentContent,
  setCommentContent,
}) => {
  const axiosPrivate = useAxiosPrivate();

  const [alert, setAlert] = useState(false);
  const [editedContent, setEditedContent] = useState(commentContent);

  const ref = useRef();

  const closeAlert = () => setAlert(false);

  const exitEditMode = () => setIsEditMode(false);

  const sendEditToServer = async (value) => {
    const payload = {
      content: value,
    };
    const postUrl = `posts/${postId}/comments/${commentId}`;

    try {
      const { data } = await axiosPrivate.put(postUrl, payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveEdit = async () => {
    try {
      await sendEditToServer(editedContent);
    } catch (e) {
      console.log(e);
    } finally {
      setCommentContent(editedContent);
    }
  };

  const onClickOutside = () => isEditMode && setAlert(true);

  useOnClickOutside(ref, { current: "" }, onClickOutside);

  return (
    <StyledEditableBlock ref={ref}>
      <EditableBlock
        content={commentContent}
        editedContent={editedContent}
        setEditedContent={setEditedContent}
        isEditMode={isEditMode}
      />
      {isEditMode && (
        <div>
          <StyledButton
            onClick={() => {
              saveEdit();
              exitEditMode();
            }}
            $bold
            $color
            $round
          >
            save
          </StyledButton>
          <StyledButton onClick={exitEditMode}>cancel edit</StyledButton>
        </div>
      )}
      {alert && (
        <ModalBasis>
          <div className="alert">
            <StyledButton
              onClick={() => {
                closeAlert();
                saveEdit();
                exitEditMode();
              }}
              $bold
              $color
            >
              save & exit
            </StyledButton>
            <StyledButton onClick={closeAlert}>continue </StyledButton>
            <StyledButton
              onClick={() => {
                closeAlert();
                exitEditMode();
              }}
            >
              exit edit
            </StyledButton>
          </div>
        </ModalBasis>
      )}
    </StyledEditableBlock>
  );
};
