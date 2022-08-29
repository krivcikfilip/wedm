import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.color.light}
  }

  
  button, input, body, textarea {
    font-family: ${({ theme }) => theme.fontFamily.manrope};
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.color.dark};
    font-family: ${({ theme }) => theme.fontFamily.manrope};
    letter-spacing: 1px;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.color.dark};
    cursor: pointer;
    display: inline-block;
    text-decoration: underline;
  }
`;
