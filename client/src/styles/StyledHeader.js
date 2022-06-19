import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: var(--padding);
  .logo {
    padding: var(--padding);
  }

  .header {
    background-color: var(--primaryLighter);
    border-radius: var(--radius);
    box-shadow: var(--cardShadowXSmall);
    padding: var(--padding);
    width: clamp(50px, 300px, 30vw);
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
  }

  .post-prompt {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 80%;
      height: 48px;
      border-radius: var(--radiusBig);
      font-size: var(--fontSizeMedium);
      font-weight: bold;
    }
  }
`;
