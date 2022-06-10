import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBasis = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--shadowDark);
`;
