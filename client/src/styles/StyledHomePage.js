import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomePage = styled(motion.main)`
  display: flex;

  .side-panels {
    display: flex;
    flex-direction: column;
    gap: var(--paddingBig);

    section {
      min-width: 300px;
    }
  }
`;
