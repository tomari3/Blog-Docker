import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  height: 400px;

  .logo {
    padding: var(--padding);
  }

  .header {
    background-color: var(--primaryLighter);
    border: 1px solid var(--primaryDark);
    padding: var(--padding);
    width: clamp(50px, 300px, 25vw);
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  .header_nav {
    display: flex;
    flex-direction: column;
    justify-self: end;
    gap: var(--padding);
  }

  .header_nav_profile-menu {
    position: relative;
  }
`;
