import React, { useState, useReducer } from "react";

import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

import { StyledForm } from "../../../styles/StyledForm";
import { StyledButton } from "../../../styles/StyledButton";

import {
  UPDATE_FORM,
  RESET_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../../utils/formUtils";

const initialState = {
  content: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export const SubCommentInput = ({
  commentId,
  setSubCommentsData,
  closeInput,
  openComments,
}) => {
  const axiosPrivate = useAxiosPrivate();

  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);
  const [serverError, setSeverError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);

      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        });
      }
    }

    if (!isFormValid) {
      setShowError(true);
    } else {
      sendComment();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };
  const sendComment = async () => {
    const payload = {
      content: formState.content.value,
    };
    const postUrl = `posts/comments/${commentId}/comments`;

    try {
      const { data } = await axiosPrivate.post(postUrl, payload);

      setSubCommentsData(data);
      closeInput();
      openComments();
      dispatch({ type: RESET_FORM });
    } catch (error) {
      console.log(error);
      // setSeverError(error.response.data.msg);

      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  const textAreaAdjust = (el) => {
    el = el.target;
    el.style.height =
      el.scrollHeight > el.clientHeight ? el.scrollHeight + "px" : "";
  };

  return (
    <div className={`comment-input`}>
      <StyledForm className="sub">
        <form onSubmit={formSubmitHandler}>
          <div className="form-field">
            <textarea
              placeholder="reply..."
              onInputCapture={(e) => textAreaAdjust(e)}
              rows={1}
              wrap="hard"
              autoFocus
              spellCheck="true"
              type="text"
              name="content"
              value={formState.content.value}
              onChange={(e) =>
                onInputChange("content", e.target.value, dispatch, formState)
              }
              onBlur={(e) =>
                onFocusOut("content", e.target.value, dispatch, formState)
              }
            />
            <label
              className={formState.content.value ? "active" : ""}
              htmlFor="content"
            >
              Write a reply...
            </label>
            {showError && !formState.isFormValid ? (
              <div className="form-field-err">
                <p>{serverError || formState.content.error}</p>
              </div>
            ) : null}
          </div>
          {formState.content.value ? (
            <StyledButton $small $round $color $bold $padding>
              {">"}
            </StyledButton>
          ) : null}
        </form>
      </StyledForm>
    </div>
  );
};
