import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    italiano: markdownRemark(
      frontmatter: { templateKey: { eq: "chi-siamo" } }
    ) {
      html
    }
    english: markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
      html
    }
  }
`;

const Content = ({ lingua }) => {
  const data = useStaticQuery(query);

  const html = lingua === "IT" ? data.italiano.html : data.english.html;

  return (
    <AboutContent className="col-md-8 mb-5">
      <h4 className="heading-2">
        {lingua === "IT" ? "Le Nostre Attività" : "What We Do"}
      </h4>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </AboutContent>
  );
};

export default Content;

const AboutContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }
`;
