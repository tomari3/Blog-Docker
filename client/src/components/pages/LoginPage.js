import { StyledSplit } from "../../styles/StyledSplit";
import { LoginForm } from "../auth/LoginForm";

export const LoginPage = () => {
  return (
    <StyledSplit className="LogInPage">
      <div className="hero"></div>
      <LoginForm className="main" />
    </StyledSplit>
  );
};
