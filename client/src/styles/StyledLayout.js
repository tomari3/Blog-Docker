import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLayout = styled(motion.main)`
  margin: var(--paddingBigger) auto;
  display: flex;
  gap: var(--paddingBigger);
  max-width: 1200px;

  main {
    gap: var(--paddingBigger);
  }
`;
