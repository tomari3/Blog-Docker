import React, { useState, useReducer } from "react";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

import { StyledButton } from "../../styles/StyledButton";
import { StyledFileInput } from "../../styles/StyledFileInput";
import { StyledForm } from "../../styles/StyledForm";

import { Cancel } from "../../assets/svg/Cancel";
import { GIF } from "../../assets/svg/GIF";
import { Image } from "../../assets/svg/Image";

import {
  UPDATE_FORM,
  RESET_FORM,
  addImage,
  deleteImage,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../utils/formUtils";

const initialState = {
  content: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  tags: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  images: {
    value: [],
  },
  status: {
    value: false,
    touched: false,
    hasError: false,
    error: "",
  },
  pinned: {
    value: false,
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
    default:
      return state;
  }
};

export const PostForm = ({ className, setPostsData, setPostModal }) => {
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
      sendPost();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendPost = async () => {
    const formData = new FormData();
    for (const key of Object.keys(formState)) {
      if (key === "images") {
        for (let img of formState[key].value) {
          formData.append("images", img);
        }
      } else formData.append(key, formState[key].value);
    }
    for (const key of Object.keys(formState)) {
      console.log(key, formState[key].value);
    }

    const postUrl = `posts`;

    try {
      const { data } = await axiosPrivate.post(postUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPostsData((prevData) => [data, ...prevData]);
      dispatch({ type: RESET_FORM });
      setPostModal();
      // console.log(data);
    } catch (error) {
      console.log(error);
      setSeverError(error.response.data);

      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  const imagesPreview = formState.images.value.map((image, index) => {
    return (
      <div key={index} className="image-preview-img">
        <img id="preview" src={URL.createObjectURL(image)} alt="uploaded" />
        <StyledButton
          onClick={(e) => deleteImage("images", index, dispatch, formState)}
          type="button"
        >
          <Cancel />
        </StyledButton>
      </div>
    );
  });

  return (
    <StyledForm
      className={className}
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => formSubmitHandler(e)}
    >
      <div className="form-header">
        <h1>What's new?</h1>
        <div className="form-err">
          {showError &&
            !formState.isFormValid &&
            "Please fill all the fields correctly"}
          {serverError}
        </div>
      </div>

      <form>
        <div className="form-field">
          <textarea
            type="text"
            name="content"
            value={formState.content.value}
            rows={10}
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
            content
          </label>
          <div className="form-field-err">
            <p>{formState.content.error}</p>
          </div>
        </div>
        <div className="form-field">
          <input
            className={formState.tags.value ? "active" : ""}
            type="text"
            name="tags"
            value={formState.tags.value}
            onChange={(e) =>
              onInputChange("tags", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("tags", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.tags.value ? "active" : ""}
            htmlFor="tags"
          >
            tags
          </label>
          <div className="form-field-err">
            <p>{formState.tags.error}</p>
          </div>
        </div>

        <div className="row">
          <StyledFileInput className="ImageInput">
            <label tabIndex={0}>
              <Image />
              <input
                className={formState.images.value ? "active" : ""}
                accept=".png,.jpeg"
                type="file"
                name="images"
                multiple="multiple"
                onInput={(e) =>
                  addImage("images", e.target.files, dispatch, formState)
                }
              />
            </label>
          </StyledFileInput>
          <StyledFileInput className="GifInput">
            <label tabIndex={0}>
              <GIF />
              <input
                className={formState.images.value ? "active" : ""}
                accept=".png,.jpeg"
                type="file"
                name="images"
                multiple="multiple"
                onInput={(e) =>
                  addImage("images", e.target.files, dispatch, formState)
                }
              />
            </label>
          </StyledFileInput>
        </div>

        {formState.images.value.length > 0 && (
          <div className="image-preview">{imagesPreview}</div>
        )}
        <StyledButton type="submit" $round $color $bold padding={"reg"}>
          post
        </StyledButton>
      </form>
    </StyledForm>
  );
};
