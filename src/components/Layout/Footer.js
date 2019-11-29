import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

// Components
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Assets and Utilities
import Logo from "../../images/logo-studio-barberio.png";
import { footerPages, legalPages } from "../../utils/pages";

const Footer = () => {
  const year = new Date().getFullYear();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              facebook
              linkedin
            }
          }
        }
      }
    `
  );

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
            <p className="mt-3 text-justify text-muted">
              Esperta in diritto dell'immigrazione, protezione internazionale e
              diritto di asilo. Si occupa di diritto internazionale, diritto
              penale, diritto minorile e di famiglia
            </p>
          </div>
          <div className="col-md-3 px-5 footer-widget">
            <h5 className="mt-1 footer-title">Esplora</h5>
            <nav className="nav flex-column pt-2">
              {footerPages.map((page, idx) => (
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
            <h5 className="mt-1 footer-title">Seguici</h5>
            <ul className="social-container pt-2">
              <li className="social-link social-link__facebook">
                <a href={site.siteMetadata.social.facebook}>
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-link social-link__linkedin">
                <a href={site.siteMetadata.social.linkedin}>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-link social-link__twitter">
                <a href={site.siteMetadata.social.twitter}>
                  <FaTwitter />
                </a>
              </li>
            </ul>
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
          <p className="m-0 text-center text-muted">
            Tutti i diritti riservati &copy; Studio Legale Barberio {year}. Web
            Development{" "}
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
    @media screen and (max-width: 765px) {
      margin-top: 2rem;
    }
  }
  .footer-title {
    color: ${props => props.theme.white};
  }
  .social-container {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin-left: 0;
    .social-link {
      margin-right: 0.5rem;
      svg {
        fill: #ffffff;
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
      }
    }
    .social-link__facebook {
      svg {
        background: #3a579a;
      }
    }
    .social-link__linkedin {
      svg {
        background: #127bb6;
      }
    }
    .social-link__twitter {
      svg {
        background: #4ab3f4;
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
