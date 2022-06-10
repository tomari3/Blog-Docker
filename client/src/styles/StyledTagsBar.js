import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTagsBar = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  .tags-bar {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1rem, 5rem));
    justify-content: space-between;
    text-align: center;
  }
`;
