import React, { useState, useRef } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { EditableBlock } from "../../assets/EditableBlock";
import { StyledButton } from "../../styles/StyledButton";
import { StyledEditableBlock } from "../../styles/StyledEditableBlock";
import { ModalBasis } from "../../styles/ModalBasis";

export const PostContent = ({
  postId,
  isEditMode,
  setIsEditMode,
  postContent,
  setPostContent,
}) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [alert, setAlert] = useState(false);
  const [editedContent, setEditedContent] = useState(postContent);

  const ref = useRef();

  const closeAlert = () => setAlert(false);

  const exitEditMode = () => setIsEditMode(false);

  const sendEditToServer = async (value) => {
    const payload = {
      id: auth?._id,
      content: value,
    };
    const postUrl = `posts/${postId}`;

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
      setPostContent(editedContent);
    }
  };

  const onClickOutside = () => isEditMode && setAlert(true);

  useOnClickOutside(ref, { current: "" }, onClickOutside);

  return (
    <StyledEditableBlock ref={ref}>
      <EditableBlock
        content={postContent}
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
