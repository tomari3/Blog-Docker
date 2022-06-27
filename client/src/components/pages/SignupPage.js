import { PeopleHero } from "../../assets/svg/PeopleHero";
import { StyledSplit } from "../../styles/StyledSplit";
import { SignupForm } from "../auth/SignupForm";

export const SignupPage = () => {
  return (
    <StyledSplit>
      <div className="hero">
        <PeopleHero />
      </div>
      <SignupForm />
    </StyledSplit>
  );
};
