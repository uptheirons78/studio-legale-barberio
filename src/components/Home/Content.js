import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Content = ({ data, buttonText, lingua }) => {
  const contactPageLink = lingua === "IT" ? "/contatti" : "/en/contact-us";
  // const covidPageLink = lingua === "IT" ? "/covid" : "/en/covid";
  const flussi2020PageLink =
    lingua === "IT"
      ? "/blog/2020-10-14-decreto-flussi-2020/"
      : "/blog/2020-10-14-decreto-flussi-2020/";

  return (
    <HomeContent className="col-md-8 mb-5">
      <Link
        style={{ marginBottom: "1rem" }}
        to={flussi2020PageLink}
        className="btn btn-primary btn-md"
      >
        {lingua === "IT"
          ? "Decreto Flussi 2020: ingressi consentiti di lavoratori non comunitari"
          : "Decreto Flussi 2020: ingressi consentiti di lavoratori non comunitari"}
      </Link>
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
