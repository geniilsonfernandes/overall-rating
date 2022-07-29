import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Poppins', Helvetica, sans-serif;
    font-size: 1.6rem;
  }
  input, textarea{
    font-size: 1.6rem;
    font-family: 'Poppins', Helvetica, sans-serif;
  }
  button{
    font-family: 'Poppins', Helvetica, sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyle;
