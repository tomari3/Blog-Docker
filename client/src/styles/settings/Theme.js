import { css } from "styled-components";

export const theme = {
  colors: {
    light: {
      primaryLighter: "hsla(0,0%,100%, 1)",
      primaryLight: "hsla(0,0%,99%, 1)",
      primary: "hsla(0,0%,98%, 1)",
      primaryDark: "hsla(0,0%,88%, 1)",
      primaryDarker: "hsla(0,0%,78%, 1)",

      accentSofter: "hsla(340, 68%, 63%, .2)",
      accentSoft: "hsla(340, 68%, 63%, .5)",
      accentLighter: "hsla(340, 68%, 73%, 1)",
      accentLight: "hsla(340, 68%, 63%, 1)",
      accent: "hsla(340, 68%, 53%, 1)",
      accentDark: "hsla(340, 68%, 43%, 1)",
      accentDarker: "hsla(340, 68%, 33%, 1)",

      textWeaker: "hsla(0,0%,33%, 1)",
      textWeak: "hsla(0,0%,23%, 1)",
      text: "hsla(0,0%,13%, 1)",
      textStrong: "hsla(0,0%,6%, 1)",
      textStronger: "hsla(0,0%,0%, 1)",

      successLighter: "hsla(122,50%,76%, 1)",
      successLight: "hsla(122,50%,69%, 1)",
      success: "hsla(122,50%,60%, 1)",
      successDark: "hsla(122,50%,52%, 1)",
      successDarker: "hsla(122,50%,45%, 1)",

      errorLighter: "hsla(342, 89%, 62%, 1)",
      errorLight: "hsla(342, 89%, 56%, 1)",
      error: "hsla(342, 89%, 48%, 1)",
      errorDark: "hsla(342, 89%, 43%, 1)",
      errorDarker: "hsla(342, 89%, 38%, 1)",

      shadowLighter: "rgba(17, 12, 46, 0.05)",
      shadowLight: "rgba(17, 12, 46, 0.1)",
      shadow: "rgba(17, 12, 46, 0.2)",
      shadowDark: "rgba(17, 12, 46, 0.3)",
      shadowDarker: "rgba(17, 12, 46, 4)",
    },
    dark: {
      primaryLighter: "hsla(204,15%,20%, 1)",
      primaryLight: "hsla(203,18%,17%, 1)",
      primary: "hsla(203,24%,13%, 1)",
      primaryDark: "hsla(203,18%,9%, 1)",
      primaryDarker: "hsla(204,15%,6%, 1)",

      accentSofter: "hsla(340, 68%, 63%, .2)",
      accentSoft: "hsla(340, 68%, 63%, .5)",
      accentLighter: "hsla(340, 68%, 73%, 1)",
      accentLight: "hsla(340, 68%, 63%, 1)",
      accent: "hsla(340, 68%, 53%, 1)",
      accentDark: "hsla(340, 68%, 43%, 1)",
      accentDarker: "hsla(340, 68%, 33%, 1)",

      textWeaker: "hsla(0,0%,100%, .6)",
      textWeak: "hsla(0,0%,99%, .8)",
      text: "hsla(0,0%,98%, 1)",
      textStrong: "hsla(0,0%,88%, 1)",
      textStronger: "hsla(0,0%,78%, 1)",

      successLighter: "hsla(122,50%,76%, 1)",
      successLight: "hsla(122,50%,69%, 1)",
      success: "hsla(122,50%,60%, 1)",
      successDark: "hsla(122,50%,52%, 1)",
      successDarker: "hsla(122,50%,45%, 1)",

      errorLighter: "hsla(342, 89%, 62%, 1)",
      errorLight: "hsla(342, 89%, 56%, 1)",
      error: "hsla(342, 89%, 48%, 1)",
      errorDark: "hsla(342, 89%, 43%, 1)",
      errorDarker: "hsla(342, 89%, 38%, 1)",

      shadowLighter: "rgba(17, 12, 46, 0.05)",
      shadowLight: "rgba(17, 12, 46, 0.1)",
      shadow: "rgba(17, 12, 46, 0.2)",
      shadowDark: "rgba(17, 12, 46, 0.3)",
      shadowDarker: "rgba(17, 12, 46, 4)",
    },
  },

  paddingSmaller: ".1rem",
  paddingSmall: ".5rem",
  padding: "1rem",
  paddingBig: "1.5rem",
  paddingBigger: "2rem",

  radiusSmaller: ".1rem",
  radiusSmall: ".5rem",
  radius: "1rem",
  radiusBig: "1.5rem",
  radiusBigger: "2rem",
  radiusHuge: "5rem",

  fontSizeTiny: ".42rem",
  fontSizeSmaller: ".56rem",
  fontSizeSmall: ".75rem",
  fontSize: "1rem",
  fontSizeMedium: "1.3rem",
  fontSizeMediumBig: "1.7rem",
  fontSizeBig: "2.3rem",
  fontSizeBigger: "3.1rem",
  fontSizeHuge: "4.2em",
};

export const lightTheme = css`
  --primaryLighter: ${({ theme }) => theme.colors.light.primaryLighter};
  --primaryLight: ${({ theme }) => theme.colors.light.primaryLight};
  --primary: ${({ theme }) => theme.colors.light.primary};
  --primaryDark: ${({ theme }) => theme.colors.light.primaryDark};
  --primaryDarker: ${({ theme }) => theme.colors.light.primaryDarker};

  --accentSofter: ${({ theme }) => theme.colors.light.accentSofter};
  --accentSoft: ${({ theme }) => theme.colors.light.accentSoft};
  --accentLighter: ${({ theme }) => theme.colors.light.accentLighter};
  --accentLight: ${({ theme }) => theme.colors.light.accentLight};
  --accent: ${({ theme }) => theme.colors.light.accent};
  --accentDark: ${({ theme }) => theme.colors.light.accentDark};
  --accentDarker: ${({ theme }) => theme.colors.light.accentDarker};

  --textWeaker: ${({ theme }) => theme.colors.light.textWeaker};
  --textWeak: ${({ theme }) => theme.colors.light.textWeak};
  --text: ${({ theme }) => theme.colors.light.text};
  --textStrong: ${({ theme }) => theme.colors.light.textStrong};
  --textStronger: ${({ theme }) => theme.colors.light.textStronger};

  --successLighter: ${({ theme }) => theme.colors.light.successLighter};
  --successLight: ${({ theme }) => theme.colors.light.successLight};
  --success: ${({ theme }) => theme.colors.light.success};
  --successDark: ${({ theme }) => theme.colors.light.successDark};
  --successDarker: ${({ theme }) => theme.colors.light.successDarker};

  --errorLighter: ${({ theme }) => theme.colors.light.errorLighter};
  --errorLight: ${({ theme }) => theme.colors.light.errorLight};
  --error: ${({ theme }) => theme.colors.light.error};
  --errorDark: ${({ theme }) => theme.colors.light.errorDark};
  --errorDarker: ${({ theme }) => theme.colors.light.errorDarker};

  --shadowLighter: ${({ theme }) => theme.colors.light.shadowLighter};
  --shadowLight: ${({ theme }) => theme.colors.light.shadowLight};
  --shadow: ${({ theme }) => theme.colors.light.shadow};
  --shadowDark: ${({ theme }) => theme.colors.light.shadowDark};
  --shadowDarker: ${({ theme }) => theme.colors.light.shadowDarker};

  --paddingSmaller: ${({ theme }) => theme.colors.light.paddingSmaller};
  --paddingSmall: ${({ theme }) => theme.colors.light.paddingSmall};
  --padding: ${({ theme }) => theme.colors.light.padding};
  --paddingBig: ${({ theme }) => theme.colors.light.paddingBig};
  --paddingBigger: ${({ theme }) => theme.colors.light.paddingBigger};

  --radiusSmaller: ${({ theme }) => theme.colors.light.radiusSmaller};
  --radiusSmall: ${({ theme }) => theme.colors.light.radiusSmall};
  --radius: ${({ theme }) => theme.colors.light.radius};
  --radiusBig: ${({ theme }) => theme.colors.light.radiusBig};
  --radiusBigger: ${({ theme }) => theme.colors.light.radiusBigger};
  --radiusHuge: ${({ theme }) => theme.colors.light.radiusHuge};

  --fontSizeTiny: ${({ theme }) => theme.colors.light.fontSizeTiny};
  --fontSizeSmaller: ${({ theme }) => theme.colors.light.fontSizeSmaller};
  --fontSizeSmall: ${({ theme }) => theme.colors.light.fontSizeSmall};
  --fontSize: ${({ theme }) => theme.colors.light.fontSize};
  --fontSizeMedium: ${({ theme }) => theme.colors.light.fontSizeMedium};
  --fontSizeMediumBig: ${({ theme }) => theme.colors.light.fontSizeMediumBig};
  --fontSizeBig: ${({ theme }) => theme.colors.light.fontSizeBig};
  --fontSizeBigger: ${({ theme }) => theme.colors.light.fontSizeBigger};
  --fontSizeHuge: ${({ theme }) => theme.colors.light.fontSizeHuge};
`;

export const darkTheme = css`
  --primaryLighter: ${({ theme }) => theme.colors.dark.primaryLighter};
  --primaryLight: ${({ theme }) => theme.colors.dark.primaryLight};
  --primary: ${({ theme }) => theme.colors.dark.primary};
  --primaryDark: ${({ theme }) => theme.colors.dark.primaryDark};
  --primaryDarker: ${({ theme }) => theme.colors.dark.primaryDarker};

  --accentSofter: ${({ theme }) => theme.colors.dark.accentSofter};
  --accentSoft: ${({ theme }) => theme.colors.dark.accentSoft};
  --accentLighter: ${({ theme }) => theme.colors.dark.accentLighter};
  --accentLight: ${({ theme }) => theme.colors.dark.accentLight};
  --accent: ${({ theme }) => theme.colors.dark.accent};
  --accentDark: ${({ theme }) => theme.colors.dark.accentDark};
  --accentDarker: ${({ theme }) => theme.colors.dark.accentDarker};

  --textWeaker: ${({ theme }) => theme.colors.dark.textWeaker};
  --textWeak: ${({ theme }) => theme.colors.dark.textWeak};
  --text: ${({ theme }) => theme.colors.dark.text};
  --textStrong: ${({ theme }) => theme.colors.dark.textStrong};
  --textStronger: ${({ theme }) => theme.colors.dark.textStronger};

  --successLighter: ${({ theme }) => theme.colors.dark.successLighter};
  --successLight: ${({ theme }) => theme.colors.dark.successLight};
  --success: ${({ theme }) => theme.colors.dark.success};
  --successDark: ${({ theme }) => theme.colors.dark.successDark};
  --successDarker: ${({ theme }) => theme.colors.dark.successDarker};

  --errorLighter: ${({ theme }) => theme.colors.dark.errorLighter};
  --errorLight: ${({ theme }) => theme.colors.dark.errorLight};
  --error: ${({ theme }) => theme.colors.dark.error};
  --errorDark: ${({ theme }) => theme.colors.dark.errorDark};
  --errorDarker: ${({ theme }) => theme.colors.dark.errorDarker};

  --shadowLighter: ${({ theme }) => theme.colors.dark.shadowLighter};
  --shadowLight: ${({ theme }) => theme.colors.dark.shadowLight};
  --shadow: ${({ theme }) => theme.colors.dark.shadow};
  --shadowDark: ${({ theme }) => theme.colors.dark.shadowDark};
  --shadowDarker: ${({ theme }) => theme.colors.dark.shadowDarker};

  --paddingSmaller: ${({ theme }) => theme.colors.dark.paddingSmaller};
  --paddingSmall: ${({ theme }) => theme.colors.dark.paddingSmall};
  --padding: ${({ theme }) => theme.colors.dark.padding};
  --paddingBig: ${({ theme }) => theme.colors.dark.paddingBig};
  --paddingBigger: ${({ theme }) => theme.colors.dark.paddingBigger};

  --radiusSmaller: ${({ theme }) => theme.colors.dark.radiusSmaller};
  --radiusSmall: ${({ theme }) => theme.colors.dark.radiusSmall};
  --radius: ${({ theme }) => theme.colors.dark.radius};
  --radiusBig: ${({ theme }) => theme.colors.dark.radiusBig};
  --radiusBigger: ${({ theme }) => theme.colors.dark.radiusBigger};
  --radiusHuge: ${({ theme }) => theme.colors.dark.radiusHuge};

  --fontSizeTiny: ${({ theme }) => theme.colors.dark.fontSizeTiny};
  --fontSizeSmaller: ${({ theme }) => theme.colors.dark.fontSizeSmaller};
  --fontSizeSmall: ${({ theme }) => theme.colors.dark.fontSizeSmall};
  --fontSize: ${({ theme }) => theme.colors.dark.fontSize};
  --fontSizeMedium: ${({ theme }) => theme.colors.dark.fontSizeMedium};
  --fontSizeMediumBig: ${({ theme }) => theme.colors.dark.fontSizeMediumBig};
  --fontSizeBig: ${({ theme }) => theme.colors.dark.fontSizeBig};
  --fontSizeBigger: ${({ theme }) => theme.colors.dark.fontSizeBigger};
  --fontSizeHuge: ${({ theme }) => theme.colors.dark.fontSizeHuge};
`;
