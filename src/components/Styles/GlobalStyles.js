import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Fira Sans', sans-serif;
    padding-top: 56px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    color: ${props => props.theme.lightBlack};
    font-size: 1.1rem;
  }

  .heading-2 {
    text-transform: uppercase;
    color: ${props => props.theme.black}
  }

  .leggi-tutto {
    transition: all .500s ease;
    &:hover {
      letter-spacing: 2px !important;
    }
  }

`;

export default GlobalStyle;
