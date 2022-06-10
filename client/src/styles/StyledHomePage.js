import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomePage = styled(motion.main)`
  margin: var(--paddingBigger) auto;
  display: flex;
  gap: var(--paddingBigger);
  min-height: 100vh;
  .m {
    grid-area: feed;
    flex: 2;
  }
  .r,
  .l {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--padding);
  }

  max-width: 1200px;
`;
