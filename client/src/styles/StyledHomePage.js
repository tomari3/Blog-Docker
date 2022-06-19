import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomePage = styled(motion.main)`
  display: flex;
  gap: var(--paddingBig);

  .posts {
    min-width: 375px;
  }

  .side-panels {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--paddingBig);

    section {
      position: sticky;
      top: var(--paddingBigger);

      min-width: 300px;
    }
  }

  .SearchPanel {
    padding: var(--paddingBig) 0;
  }
`;
