import { StyledFooter } from "../../styles/StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter className="Footer">
      <div className="footer-info"></div>
      <div className="footer-credit">
        <div className="footer-credit_date">created</div>
        <div className="footer-credit_name"></div>
      </div>
    </StyledFooter>
  );
};
