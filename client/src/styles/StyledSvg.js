import styled from "styled-components";
import { keyframes } from "styled-components";

import { motion } from "framer-motion";

const pop = keyframes`
0% {
  transform: scale(1) rotate(0);
}
50% {
  transform: scale(1.5) rotate(15deg);
}
100% {
  transform: scale(1) rotate(0);
}
`;

const fill = keyframes`
from {
  fill: var(--accent);
      stroke: var(--accent);
}
to {
  fill: var(--accent);
      stroke: var(--accent);
}

`;

export const StyledSvg = styled(motion.div)`
  padding: var(--paddingSmall);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.5s;
  svg {
    transition: transform 0.3s, background-color 0.5s;
  }

  &:hover {
    background-color: ${({ $noHover }) =>
      $noHover ? "" : "var(--accentSofter)"};
  }

  &.pop {
    svg {
      animation: ${pop} 0.6s ease;
    }
    polygon,
    path {
      animation: ${fill} 0.3s ease forwards;
    }
  }

  &:is(.liked, saved) {
    svg,
    polygon,
    path {
      fill: var(--accent);
      stroke: var(--accent);
    }
  }
`;
