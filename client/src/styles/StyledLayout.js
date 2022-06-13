import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLayout = styled(motion.main)`
  margin: 0 auto;
  display: flex;
  gap: var(--paddingBigger);
  max-width: 1200px;
  position: relative;

  header {
    position: sticky;
    top: var(--paddingBigger);
  }
`;
