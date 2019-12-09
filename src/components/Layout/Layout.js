import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";
import Theme from "../../utils/theme";

// Global Styles
import GlobalStyle from "../Styles/GlobalStyles";

// Components
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "react-cookie-consent";

// Styles
const btnStyle = {
  background: "#FAA916",
};

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header lingua={props.lingua} />
      <main>{props.children}</main>
      <Footer lingua={props.lingua} />
      <CookieConsent
        location="bottom"
        buttonText="Accetto"
        buttonStyle={btnStyle}
        enableDeclineButton
        declineButtonText="Non Accetto"
        style={{ background: "#2B373B" }}
        expires={150}
      >
        Utilizziamo cookies proprietari per i nostri servizi e cookies di terze
        parti per abilitare importanti funzionalità del sito. Visualizza la{" "}
        <Link to="/privacy-policy" className="cookies-link">
          Privacy Policy
        </Link>{" "}
        o la{" "}
        <Link to="/cookies-policy" className="cookies-link">
          Cookies Policy
        </Link>{" "}
        per saperne di più.
      </CookieConsent>
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  lingua: `IT`,
};

export default Layout;
