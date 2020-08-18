import { createGlobalStyle, css } from "styled-components";
import media from "styled-media-query";

export default createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body,
    input {
      font-family: "Roboto", Helvetica, Arial, sans-serif;
    }

    body {
      font-size: ${theme.main.typography.text.sizes[2]};
      font-weight: ${theme.main.typography.weight.regular};

      color: ${theme.main.typography.text.colors.primary};
      background-color: ${theme.main.colors.bgColor};

      -webkit-font-smoothing: antialiased;

      ${media.greaterThan("medium")`    
        font-size: ${theme.main.typography.text.sizes[4]};        
      `}
    }
  `}
`;
