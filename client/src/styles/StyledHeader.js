import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.header)`
  padding: 0 var(--paddingBigger);
  height: 70px;
  gap: 2rem;
  background-color: var(--primaryLighter);
  border-bottom: 1px solid var(--primaryDark);
  box-shadow: var(--shadowLighter) 0px 4px 50px 0px;
  display: flex;
  justify-content: center;
  .header {
    flex: 1;
    max-width: 1200px;

    display: grid;
    grid-template-columns: auto 1fr 3fr;
    align-items: center;
  }

  .header_search {
    input {
      width: 100%;
    }
  }

  .header_nav {
    display: flex;
    justify-self: end;
    gap: var(--padding);
  }

  .header_nav_profile-menu {
    position: relative;
  }
`;
