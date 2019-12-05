import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Components
import Social from "../Global/Social";

// Assets and Utilities
import Logo from "../../images/logo-studio-barberio.png";
import { footerPages, legalPages, englishFooterPages } from "../../utils/pages";

const english_description =
  "She is an expert in immigration law, international protection and the right of political asylum. She deals with international law, criminal law, juvenile and family law.";

const it_description =
  "Esperta in diritto dell'immigrazione, protezione internazionale e diritto di asilo. Si occupa di diritto internazionale, diritto penale, diritto minorile e di famiglia.";

const Footer = ({ lingua }) => {
  const year = new Date().getFullYear();

  const description = lingua === "IT" ? it_description : english_description;
  const footer_nav_title = lingua === "IT" ? "Esplora" : "See More";
  const social_title = lingua === "IT" ? "Seguici" : "Follow Us";
  const reserved =
    lingua === "IT" ? "Tutti i Diritti Riservati" : "All Rights Reserved";

  const footer_pages = lingua === "IT" ? footerPages : englishFooterPages;

  return (
    <StyledFooter className="py-3">
      <div className="container">
        <div className="row pt-2 pb-5 text-white">
          <div className="col-md-6 pl-2 pr-5 footer-widget">
            <img
              src={Logo}
              alt="Studio Legale Barberio Logo"
              style={{ width: "230px" }}
            />
            <p className="mt-3 text-justify text-muted">{description}</p>
          </div>
          <div className="col-md-3 px-5 footer-widget">
            <h5 className="mt-1 footer-title">{footer_nav_title}</h5>
            <nav className="nav flex-column pt-2">
              {footer_pages.map((page, idx) => (
                <Link
                  className="nav-link"
                  to={page.path}
                  key={idx + " " + page.name}
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="col-md-3 px-5 footer-widget">
            <h5 className="mt-1 footer-title">{social_title}</h5>
            <Social />
            <nav className="nav flex-column pt-2">
              {legalPages.map((page, idx) => (
                <Link
                  className="nav-link"
                  to={page.path}
                  key={idx + " " + page.name}
                >
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="row justify-content-center align-items-center py-3">
          <p className="mx-1 my-0 text-center text-muted">
            {reserved} &copy; Studio Legale Barberio {year}.{" "}
          </p>
          <p className="mx-1 my-0 text-center text-muted">
            Web Development{" "}
            <a className="mauro" href="https://maurobono.com">
              Mauro Bono
            </a>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;

// Styles
const StyledFooter = styled.footer`
  background-color: #121212;
  p {
    font-size: 0.9rem;
  }
  nav {
    a {
      padding: 0;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.white};
    }
  }
  .footer-widget {
    @media screen and (max-width: 767px) {
      margin-top: 2rem;
      padding: 1rem !important;
    }
  }
  .footer-title {
    color: ${props => props.theme.white};
  }
  .social-container {
    .social-link {
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      svg {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
      }
    }
  }
  .mauro {
    color: ${props => props.theme.secondaryColor};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
