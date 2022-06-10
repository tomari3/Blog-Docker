import { StyledLink } from "../../styles/StyledLink";

export const Tag = ({ tagData }) => {
  return <StyledLink to={`tags/${tagData._id}`}>{tagData.name}</StyledLink>;
};
