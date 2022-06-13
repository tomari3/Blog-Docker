import React, { useState, useReducer, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "../../utils/axios";

import { StyledLink } from "../../styles/StyledLink";
import { Loading } from "../../assets/Loading";

import { StyledForm } from "../../styles/StyledForm";
import { StyledButton } from "../../styles/StyledButton";

import {
  UPDATE_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../utils/formUtils";
import { handleResponseMessage } from "../../utils/handleResponseMessage";

const initialState = {
  username: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  email: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  password: {
    value: "",
    touched: false,
    hasError: false,
    error: "",
  },
  passwordConfirm: {
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
    default:
      return state;
  }
};

export const SignupForm = () => {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [loadingResponse, setLoadingResponse] = useState(false);
  const [showError, setShowError] = useState(false);
  const [serverError, setSeverError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const referer = (location.state && location.state.referer) || "/";

  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(
        name,
        value,
        formState.password.value
      );

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
      sendSignup();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendSignup = async () => {
    const payload = {
      username: formState.username.value,
      email: formState.email.value,
      password: formState.password.value,
    };
    const postUrl = `auth/signup`;

    try {
      setLoadingResponse(true);
      await axios.post(postUrl, payload);
      setLoadingResponse(false);
      navigate(referer, { replace: true });
    } catch (error) {
      setLoadingResponse(false);
      setSeverError(handleResponseMessage(error));

      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  return (
    <StyledForm className="SignUpForm">
      <div className="form-header">
        {loadingResponse ? <Loading /> : <h1>sign up</h1>}
        <div className="form-err">
          {showError &&
            !formState.isFormValid &&
            "Please fill all the fields correctly"}
          {serverError}
        </div>
      </div>

      <form onSubmit={(e) => formSubmitHandler(e)}>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            className={
              formState.username.touched && !formState.username.error
                ? "success"
                : undefined
            }
            ref={userRef}
            autoComplete="off"
            type="text"
            name="username"
            value={formState.username.value}
            onChange={(e) =>
              onInputChange("username", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("username", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.username.value ? "active" : ""}
            htmlFor="username"
          >
            username
          </label>
          <div className="form-field-err">
            <p>{formState.username.error}</p>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            className={
              formState.email.touched && !formState.email.error
                ? "success"
                : undefined
            }
            type="text"
            name="email"
            value={formState.email.value}
            onChange={(e) =>
              onInputChange("email", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("email", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.email.value ? "active" : ""}
            htmlFor="email"
          >
            email
          </label>
          <div className="form-field-err">
            <p>{formState.email.error}</p>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            className={
              formState.password.touched &&
              !formState.password.error &&
              "success"
            }
            type="password"
            name="password"
            value={formState.password.value}
            onChange={(e) =>
              onInputChange("password", e.target.value, dispatch, formState)
            }
            onBlur={(e) =>
              onFocusOut("password", e.target.value, dispatch, formState)
            }
          />
          <label
            className={formState.password.value ? "active" : ""}
            htmlFor="password"
          >
            password
          </label>
          <div className="form-field-err">
            <p>{formState.password.error}</p>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-detail"></div>
          <input
            // className={!formState.passwordConfirm.error && "success"}
            type="password"
            name="passwordConfirm"
            value={formState.passwordConfirm.value}
            onChange={(e) =>
              onInputChange(
                "passwordConfirm",
                e.target.value,
                dispatch,
                formState
              )
            }
            onBlur={(e) =>
              onFocusOut("passwordConfirm", e.target.value, dispatch, formState)
            }
          />
          <label
            className={
              formState.passwordConfirm.value ||
              formState.passwordConfirm.active
                ? "active"
                : ""
            }
            htmlFor="password"
          >
            confirm password
          </label>
          <div className="form-field-err">
            <p>{formState.passwordConfirm.error}</p>
          </div>
        </div>
        <StyledButton fontSize={"reg"} padding={"small"} $round $color $bold>
          sign up
        </StyledButton>
        <div className="suggestions">
          <div className="suggestion">
            already have an account? <StyledLink to="/login">log in</StyledLink>
          </div>
          <div className="suggestion">
            forgot your password?
            <StyledLink to="/reset">reset password</StyledLink>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};
