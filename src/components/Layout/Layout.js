import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../utils/theme";

// Global Styles
// import GlobalStyle from "../Styles/GlobalStyles";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
