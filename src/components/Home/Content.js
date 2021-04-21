import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Content = ({ data, buttonText, lingua }) => {
  const contactPageLink = lingua === "IT" ? "/contatti" : "/en/contact-us";
  const corsoPageLink =
    lingua === "IT"
      ? "/blog/2020-12-21-corso-diritto-immigrazione-2021/"
      : "/blog/2020-12-21-corso-diritto-immigrazione-2021/";

  const Banner = () => {
    if (lingua === "IT") {
      return (
        <div style={{ marginBottom: "1rem" }}>
          <Link to={corsoPageLink}>
            Corso di formazione tecnico-pratica in diritto dell'immigrazione
            2021 - C.O.A. NAPOLI
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <HomeContent className="col-md-8 mb-5">
      <Banner />
      <h4 className="heading-2">{data.markdownRemark.frontmatter.heading}</h4>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></div>
      <Link className="btn btn-primary btn-lg leggi-tutto" to={contactPageLink}>
        {buttonText} &raquo;
      </Link>
    </HomeContent>
  );
};

export default Content;

const HomeContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
  }

  a:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  .btn {
    color: #fff !important;
    background-color: ${(props) => props.theme.primaryColor};
    border: ${(props) => props.theme.primaryColor};
  }
`;
