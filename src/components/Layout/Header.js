import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Assets and Utilities
import Logo from "../../images/logo-studio-barberio.png";
import { sitePages } from "../../utils/pages";

// Components
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <StyledNavbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="300"
            className="d-inline-block align-top"
            alt="Studio Barberio logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {sitePages.map(page => (
              <Link
                key={page.name}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
export default Header;

const StyledNavbar = styled(Navbar)`
  background-color: #121212 !important;
`;
