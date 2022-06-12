import React, { useState, useReducer, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "../../utils/axios";
import { useAuth } from "../../hooks/useAuth";

import { StyledForm } from "../../styles/StyledForm";
import { StyledButton } from "../../styles/StyledButton";
import { StyledLink } from "../../styles/StyledLink";

import {
  UPDATE_FORM,
  RESET_FORM,
  onInputChange,
  onFocusOut,
  validateInput,
} from "../../utils/formUtils";

const initialState = {
  username: {
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

export const LoginForm = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const referer = (location.state && location.state.referer) || "/";

  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);
  const [serverError, setSeverError] = useState("");

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
      sendLogin();
    }

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const sendLogin = async () => {
    const payload = {
      username: formState.username.value,
      password: formState.password.value,
    };
    const postUrl = `auth/login`;

    try {
      const { data } = await axios.post(postUrl, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(data);
      setAuth(data);
      dispatch({ type: RESET_FORM });
      navigate(referer, { replace: true });
    } catch (error) {
      if (error.response.data === "Unauthorized")
        setSeverError("name or password incorrect");
      else setSeverError("server error");
      console.log(error);
      setTimeout(() => {
        setSeverError("");
      }, 5000);
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <StyledForm>
      <div className="form-header">
        <h1>log in</h1>
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
            type="text"
            autoComplete="off"
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
        <div className="form-field checkbox">
          <div className="form-field-detail"></div>
          <input
            type="checkbox"
            name="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">trust this device</label>
          <div className="form-field-err">
            <p>{}</p>
          </div>
        </div>
        <StyledButton fontSize={"reg"} padding={"small"} $round $color $bold>
          log in
        </StyledButton>
        <div className="suggestions">
          <div className="suggestion">
            Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
          </div>
          <div className="suggestion">
            forgot your password?{" "}
            <StyledLink to="/reset">reset password</StyledLink>
          </div>
        </div>
      </form>
    </StyledForm>
  );
};
