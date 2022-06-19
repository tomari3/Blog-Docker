import { PeopleHero } from "../../assets/svg/PeopleHero";
import { StyledSplit } from "../../styles/StyledSplit";
import { LoginForm } from "../auth/LoginForm";

export const LoginPage = () => {
  return (
    <StyledSplit className="LogInPage">
      <div className="hero">
        <h1>Welcome to THESOCIAL</h1>
        <PeopleHero />
      </div>
      <LoginForm className="main" />
    </StyledSplit>
  );
};
