import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCommentSection = styled(motion.section)`
  font-size: var(--fontSizeSmall);
  padding-top: var(--padding);
  border-top: 1px solid var(--primaryDark);
  margin-top: var(--padding);
  .comment-section_comments {
    display: flex;
    flex-direction: column;
    gap: var(--paddingSmall);
  }
`;
