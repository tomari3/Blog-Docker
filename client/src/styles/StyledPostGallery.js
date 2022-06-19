import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPostGallery = styled(motion.section)`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem; */

  display: flex;
  flex-wrap: wrap;
  gap: var(--padding);
`;
