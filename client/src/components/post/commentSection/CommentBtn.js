import { Comment } from "../../../assets/svg/Comment";
import { StyledButton } from "../../../styles/StyledButton";

export const CommentBtn = ({ toggleComment, toggleComments, amount }) => {
  return (
    <div className="interaction-btn">
      <StyledButton
        fontSize={"small"}
        className={`amount `}
        onClick={toggleComments}
      >
        <div>
          <p>{!amount ? "" : amount}</p>
        </div>
      </StyledButton>
      <StyledButton className="CommentBtn" onClick={toggleComment}>
        <div>
          <Comment />
        </div>
      </StyledButton>
    </div>
  );
};
