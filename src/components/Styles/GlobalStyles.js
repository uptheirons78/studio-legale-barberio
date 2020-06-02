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
    color: ${(props) => props.theme.lightBlack};
    font-size: 1.1rem;
  }
  li {
    color: ${(props) => props.theme.lightBlack};
    font-size: 1.1rem;
  }

  strong, a {
    color: ${(props) => props.theme.primaryColor};
    transition: all .350s ease;
  }

  .heading-2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.black}
  }

  .leggi-tutto {
    transition: all .500s ease;
    &:hover {
      letter-spacing: 2px !important;
    }
  }

  .aside {
    @media screen and (max-width: 767px) {
      padding-left: 0.5rem !important;
    }
  }

  .cookies-link {
    color: #FAA916 !important;
    transition: all .350s ease-in-out;
  }

`;

export default GlobalStyle;
