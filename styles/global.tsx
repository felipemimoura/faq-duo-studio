import { createGlobalStyle, css } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  :root {
    --blue-200: #0FB3D3;

    --purple-100:#A141EB;
    --purple-300: #7928B7;

    --yellow-200: #E1A607;

    --white: #F1F1F1;
  }
  html {
    font-size: 62.5%;
  }

  body{
    width: 100%;
    background: var(--white);
    
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
}
`;
