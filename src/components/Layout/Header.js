import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

// Assets and Utilities
import Logo from "../../images/logo-studio-barberio.png";
import { sitePages, englishSitePages } from "../../utils/pages";

// Components
import { Navbar, Nav, Container } from "react-bootstrap";

// Queries
const query = graphql`
  query {
    italy: file(relativePath: { eq: "italy-flag.png" }) {
      childImageSharp {
        fixed(width: 24, height: 12) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    uk: file(relativePath: { eq: "united-kingdom-flag.png" }) {
      childImageSharp {
        fixed(width: 24, height: 12) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header = ({ lingua }) => {
  const { italy, uk } = useStaticQuery(query);

  // Conditional Rendering Navbar Items based on language prop
  const flagImg =
    lingua === "IT" ? uk.childImageSharp.fixed : italy.childImageSharp.fixed;

  const flagLink = lingua === "IT" ? "/en/" : "/";
  const pages = lingua === "IT" ? sitePages : englishSitePages;

  return (
    <StyledNavbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="300"
            className="d-inline-block align-top logo"
            alt="Studio Barberio logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {pages.map(page => (
              <Link
                key={page.name}
                cover
                direction="right"
                bg="#701212"
                hex="#701212"
                duration={1}
                to={page.path}
                className="nav-link"
                activeStyle={{
                  color: "#FAA916",
                }}
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {page.name}
              </Link>
            ))}
            <Link
              to={flagLink}
              className="nav-link"
              cover
              direction="left"
              bg="#701212"
              hex="#701212"
              duration={1}
            >
              <Img fixed={flagImg} alt="language flag" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
export default Header;

const StyledNavbar = styled(Navbar)`
  background-color: #121212 !important;

  .logo {
    @media screen and (max-width: 500px) {
      width: 200px;
    }
  }
`;
