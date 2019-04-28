import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
  
  input, select, textarea, button{font-family:inherit;}
  
  * {
   transform-style: preserve-3d;
  }
`

export default GlobalStyles
