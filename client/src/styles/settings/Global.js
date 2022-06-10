import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,200&display=swap');

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .3s ease, border-color .3s ease, color .3s ease;

  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: var(--fontSize);
    background-color: var(--primary);
    color: var(--text);
    position: relative;
    
  }

  input, textarea {
    color: var(--text);
    background-color: var(--primaryLighter);
    border: 0;
  }

  a, a:link, a:visited, a:focus, a:hover, a:active{
text-decoration:none; 
  }
  :root {
    --paddingSmaller: ${({ theme }) => theme.paddingSmaller};
    --paddingSmall: ${({ theme }) => theme.paddingSmall};
    --padding: ${({ theme }) => theme.padding};
    --paddingBig: ${({ theme }) => theme.paddingBig};
    --paddingBigger: ${({ theme }) => theme.paddingBigger};

    --radiusSmaller: ${({ theme }) => theme.radiusSmaller};
    --radiusSmall: ${({ theme }) => theme.radiusSmall};
    --radius: ${({ theme }) => theme.radius};
    --radiusBig: ${({ theme }) => theme.radiusBig};
    --radiusBigger: ${({ theme }) => theme.radiusBigger};
    --radiusHuge: ${({ theme }) => theme.radiusHuge};

    --fontSizeTiny: ${({ theme }) => theme.fontSizeTiny};
    --fontSizeSmaller: ${({ theme }) => theme.fontSizeSmaller};
    --fontSizeSmall: ${({ theme }) => theme.fontSizeSmall};
    --fontSize: ${({ theme }) => theme.fontSize};
    --fontSizeMedium: ${({ theme }) => theme.fontSizeMedium};
    --fontSizeMediumBig: ${({ theme }) => theme.fontSizeMediumBig};
    --fontSizeBig: ${({ theme }) => theme.fontSizeBig};
    --fontSizeBigger: ${({ theme }) => theme.fontSizeBigger};
    --fontSizeHuge: ${({ theme }) => theme.fontSizeHuge};
    
    ${lightTheme}

    [data-theme="dark"] {
      ${darkTheme}
    }

    &.no-js {
      @media (prefers-color-scheme: dark) {
        ${darkTheme}
      }
    }
    
    }
`;
