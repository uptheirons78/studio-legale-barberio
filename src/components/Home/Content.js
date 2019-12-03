import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Content = ({ data }) => {
  return (
    <HomeContent className="col-md-8 mb-5">
      <h4 className="heading-2">{data.markdownRemark.frontmatter.heading}</h4>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></div>
      <Link className="btn btn-primary btn-lg leggi-tutto" to="/contatti">
        Richiedi un appuntamento &raquo;
      </Link>
    </HomeContent>
  );
};

export default Content;

const HomeContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }

  a:hover {
    color: ${props => props.theme.secondaryColor};
  }

  .btn {
    color: #fff !important;
    background-color: ${props => props.theme.primaryColor};
    border: ${props => props.theme.primaryColor};
  }
`;
