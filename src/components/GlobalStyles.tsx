import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { ThemeData } from './ThemeDataComponent';

export default function GlobalStyles() {
  return (
    <GlobalStyle/>
  )
}



const GlobalStyle = createGlobalStyle`
  :root {


font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}


*{
margin: 0;
padding: 0;
box-sizing: border-box;
overflow: auto;
font-family: 'Manrope', sans-serif;
color: ${ThemeData.colors.darkBlack};
}

body {
min-width: 320px;
min-height: 100vh;
}
button{
  cursor: pointer;
}
`;