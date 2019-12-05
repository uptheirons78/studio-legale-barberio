import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../utils/theme";

// Global Styles
import GlobalStyle from "../Styles/GlobalStyles";

// Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header lingua={props.lingua} />
      <main>{props.children}</main>
      <Footer lingua={props.lingua} />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  lingua: `IT`,
};

export default Layout;
