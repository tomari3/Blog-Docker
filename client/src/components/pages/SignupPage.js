import { PeopleHero } from "../../assets/svg/PeopleHero";
import { StyledSplit } from "../../styles/StyledSplit";
import { SignupForm } from "../auth/SignupForm";

export const SignupPage = () => {
  return (
    <StyledSplit>
      <div className="hero">
        <h1>Welcome to THESOCIAL</h1>
        <PeopleHero />
      </div>
      <SignupForm />
    </StyledSplit>
  );
};
